import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Mail, Paperclip, ChevronDown, ChevronUp, X, Pencil } from 'lucide-react';
import {
  ComposeMode,
  EmailDraft,
  clearDraft,
  getDraft,
  saveDraft,
} from '../lib/emailDrafts';

interface EmailComposerProps {
  // Stable id for the draft this composer owns: conversation + thread.
  draftId: string;
  // Subject prefilled from the thread (e.g. "Re: Order #1043 refund request")
  defaultSubject: string;
  // Primary recipient(s) for a normal reply
  replyTo: string[];
  // All participants (used when "Reply all" is active)
  allRecipients: string[];
  // Which mode the composer opens in (Reply vs Forward vs a new email)
  initialMode?: ComposeMode;
  // Prefilled recipients, used when starting a new thread with a known contact.
  initialTo?: string;
  // How the subject is presented. 'field' is the full labelled row used by the
  // net-new composer; 'tag' is the compact chip used when writing a new message
  // inside a conversation — prefilled from the thread, click to change it.
  subjectDisplay?: 'field' | 'tag';
  onSend: (
    text: string,
    meta: { subject: string; toAddresses: string[]; cc: string[]; bcc: string[] }
  ) => void;
  onCancel: () => void;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const parseAddresses = (value: string) =>
  value
    .split(',')
    .map((a) => a.trim())
    .filter(Boolean);

const invalidAddresses = (value: string) => parseAddresses(value).filter((a) => !EMAIL_RE.test(a));

// Forward keeps the original subject under "Fwd:"; replies use "Re:". A new
// email has no thread behind it, so its subject starts however the caller says.
function subjectForMode(mode: ComposeMode, defaultSubject: string): string {
  if (mode === 'new') return defaultSubject;
  const bare = defaultSubject.replace(/^\s*(re|fwd|fw)\s*:\s*/i, '').trim();
  return mode === 'forward' ? `Fwd: ${bare}` : `Re: ${bare}`;
}

export function EmailComposer({
  draftId,
  defaultSubject,
  replyTo,
  allRecipients,
  initialMode = 'reply',
  initialTo,
  subjectDisplay = 'field',
  onSend,
  onCancel,
}: EmailComposerProps) {
  // Recipients implied by the chosen mode. Forward starts empty — the agent
  // decides who it goes to.
  const recipientsForMode = (m: ComposeMode) =>
    m === 'forward' || m === 'new' ? '' : (m === 'replyAll' ? allRecipients : replyTo).join(', ');

  // Restore any draft the agent left behind, otherwise start from the thread.
  const initial: EmailDraft = useMemo(() => {
    const saved = getDraft(draftId);
    if (saved) return saved;
    return {
      mode: initialMode,
      subject: subjectForMode(initialMode, defaultSubject),
      to: initialTo ?? recipientsForMode(initialMode),
      cc: '',
      bcc: '',
      body: '',
      showCc: false,
      attachments: [],
    };
    // Intentionally keyed only on draftId: re-running this on every prop change
    // would clobber what the agent has typed.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [draftId]);

  const [mode, setMode] = useState<ComposeMode>(initial.mode);
  const [subject, setSubject] = useState(initial.subject);
  const [to, setTo] = useState(initial.to);
  const [ccValue, setCcValue] = useState(initial.cc);
  const [bccValue, setBccValue] = useState(initial.bcc);
  const [body, setBody] = useState(initial.body);
  const [showCc, setShowCc] = useState(initial.showCc);
  const [attachments, setAttachments] = useState<string[]>(initial.attachments);
  const [showErrors, setShowErrors] = useState(false);
  const [isEditingSubject, setIsEditingSubject] = useState(false);

  const bodyRef = useRef<HTMLTextAreaElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  // Re-hydrate when the composer is pointed at a different thread.
  useEffect(() => {
    setMode(initial.mode);
    setSubject(initial.subject);
    setTo(initial.to);
    setCcValue(initial.cc);
    setBccValue(initial.bcc);
    setBody(initial.body);
    setShowCc(initial.showCc);
    setAttachments(initial.attachments);
    setShowErrors(false);
    setIsEditingSubject(false);
  }, [initial]);

  // Mirror every keystroke into the store so the draft survives unmount.
  useEffect(() => {
    saveDraft(draftId, { mode, subject, to, cc: ccValue, bcc: bccValue, body, showCc, attachments });
  }, [draftId, mode, subject, to, ccValue, bccValue, body, showCc, attachments]);

  // Put the cursor where the agent is about to type.
  useEffect(() => {
    bodyRef.current?.focus({ preventScroll: true });
  }, [draftId]);

  const switchMode = (next: ComposeMode) => {
    setMode(next);
    setSubject(subjectForMode(next, defaultSubject));
    // Only overwrite recipients the agent hasn't hand-edited.
    const untouched = to === recipientsForMode(mode);
    if (untouched) setTo(recipientsForMode(next));
  };

  const badTo = invalidAddresses(to);
  const badCc = invalidAddresses(ccValue);
  const badBcc = invalidAddresses(bccValue);
  const missingTo = parseAddresses(to).length === 0;
  const canSend = body.trim().length > 0 && !missingTo && !badTo.length && !badCc.length && !badBcc.length;

  const handleSend = () => {
    if (!body.trim()) return;
    if (!canSend) {
      setShowErrors(true);
      return;
    }
    onSend(body.trim(), {
      subject: subject.trim() || defaultSubject,
      toAddresses: parseAddresses(to),
      cc: parseAddresses(ccValue),
      bcc: parseAddresses(bccValue),
    });
    clearDraft(draftId);
  };

  // The Discard button is gone; Escape still gets the agent out of a composer
  // they opened by mistake, and keeps the draft rather than binning it.
  const handleEscape = (e: React.KeyboardEvent) => {
    if (e.key !== 'Escape' || e.defaultPrevented) return;
    onCancel();
  };

  const onFilesPicked = (e: React.ChangeEvent<HTMLInputElement>) => {
    const names = Array.from(e.target.files || []).map((f) => f.name);
    if (names.length) setAttachments((prev) => [...prev, ...names]);
    e.target.value = '';
  };

  const fieldError = (bad: string[], show: boolean) =>
    show && bad.length > 0 ? 'border-red-300' : 'border-gray-100';

  return (
    <div className="flex flex-col" onKeyDown={handleEscape}>
      {/* Reply / Reply all / Forward toggle */}
      {mode !== 'new' && (
      <div className="flex items-center gap-1 px-4 pt-3">
        <div className="flex items-center rounded-md bg-gray-100 p-0.5">
          {(['reply', 'replyAll', 'forward'] as ComposeMode[]).map((m) => (
            <button
              key={m}
              onClick={() => switchMode(m)}
              className={`px-3 py-1 rounded text-[13px] transition-colors ${
                mode === m ? 'bg-white text-[#333333] shadow-sm' : 'text-gray-500'
              }`}
            >
              {m === 'reply' ? 'Reply' : m === 'replyAll' ? 'Reply all' : 'Forward'}
            </button>
          ))}
        </div>
      </div>
      )}

      {/* Recipient + subject fields */}
      <div className={`px-4 space-y-1.5 ${mode === 'new' ? 'pt-3' : 'pt-2'}`}>
        <div className={`flex items-center gap-2 border-b pb-1.5 ${fieldError(badTo, showErrors)}`}>
          <span className="text-[12px] text-gray-400 w-12 shrink-0">To</span>
          <input
            value={to}
            onChange={(e) => setTo(e.target.value)}
            placeholder={mode === 'forward' ? 'Who should receive this?' : 'Add recipients'}
            className="text-[13px] text-[#333333] flex-1 focus:outline-none bg-transparent min-w-0"
          />
          <button
            onClick={() => setShowCc((v) => !v)}
            className="text-[12px] text-indigo-500 flex items-center gap-0.5 shrink-0"
          >
            Cc/Bcc {showCc ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
          </button>
        </div>

        {showCc && (
          <>
            <div className={`flex items-center gap-2 border-b pb-1.5 ${fieldError(badCc, showErrors)}`}>
              <span className="text-[12px] text-gray-400 w-12 shrink-0">Cc</span>
              <input
                value={ccValue}
                onChange={(e) => setCcValue(e.target.value)}
                placeholder="Add Cc recipients (comma separated)"
                className="text-[13px] text-[#333333] flex-1 focus:outline-none bg-transparent min-w-0"
              />
            </div>
            <div className={`flex items-center gap-2 border-b pb-1.5 ${fieldError(badBcc, showErrors)}`}>
              <span className="text-[12px] text-gray-400 w-12 shrink-0">Bcc</span>
              <input
                value={bccValue}
                onChange={(e) => setBccValue(e.target.value)}
                placeholder="Add Bcc recipients (comma separated)"
                className="text-[13px] text-[#333333] flex-1 focus:outline-none bg-transparent min-w-0"
              />
            </div>
          </>
        )}

        {subjectDisplay === 'field' || isEditingSubject ? (
          <div className="flex items-center gap-2 border-b border-gray-100 pb-1.5">
            <span className="text-[12px] text-gray-400 w-12 shrink-0">Subject</span>
            <input
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              onBlur={() => setIsEditingSubject(false)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === 'Escape') {
                  e.preventDefault(); // commit the subject; don't close the composer
                  setIsEditingSubject(false);
                }
              }}
              autoFocus={isEditingSubject}
              placeholder="Subject"
              className="text-[13px] text-[#333333] flex-1 focus:outline-none bg-transparent min-w-0"
            />
          </div>
        ) : (
          <div className="flex">
            <button
              onClick={() => setIsEditingSubject(true)}
              className="flex items-center gap-1.5 max-w-full rounded-md border border-gray-200 bg-gray-50 px-2 py-1 text-[12px] hover:bg-gray-100 transition-colors"
              title="Change the subject"
            >
              <span className="text-gray-400 shrink-0">Subject</span>
              <span className="text-[#333333] truncate">{subject || 'No subject'}</span>
              <Pencil className="w-3 h-3 text-gray-400 shrink-0" />
            </button>
          </div>
        )}

        {showErrors && (missingTo || badTo.length > 0 || badCc.length > 0 || badBcc.length > 0) && (
          <p className="text-[12px] text-red-500 leading-5">
            {missingTo
              ? 'Add at least one recipient before sending.'
              : `Check this address: ${[...badTo, ...badCc, ...badBcc].join(', ')}`}
          </p>
        )}
      </div>

      {/* Body */}
      <div className="p-4">
        <textarea
          ref={bodyRef}
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Write your email…"
          className="w-full px-3 py-2 rounded-lg resize-none focus:outline-none bg-gray-50"
          rows={3}
          style={{ minHeight: '80px', maxHeight: '200px' }}
        />

        {attachments.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-2">
            {attachments.map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="inline-flex items-center gap-1 rounded border border-gray-200 bg-gray-50 pl-2 pr-1 py-0.5 text-[12px] text-gray-600 max-w-[220px]"
              >
                <Paperclip className="w-3 h-3 shrink-0 text-gray-400" />
                <span className="truncate">{name}</span>
                <button
                  onClick={() => setAttachments((prev) => prev.filter((_, idx) => idx !== i))}
                  className="text-gray-400 hover:text-gray-600 shrink-0"
                  title={`Remove ${name}`}
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-row items-center justify-between w-full mt-2">
          <button
            onClick={() => fileRef.current?.click()}
            className="text-gray-500 hover:text-gray-700 transition-colors"
            title="Attach file"
          >
            <Paperclip className="w-5 h-5" />
          </button>
          <input ref={fileRef} type="file" multiple hidden onChange={onFilesPicked} />
          <button
            onClick={handleSend}
            disabled={!body.trim()}
            className="disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <div className="bg-[#5B6CFF] relative rounded-[5px] shrink-0">
              <div className="flex flex-row gap-1.5 items-center px-2.5 py-1.5">
                <Mail className="w-4 h-4 text-white" />
                <span className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-white text-[14px] leading-[20px]">
                  Send
                </span>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
