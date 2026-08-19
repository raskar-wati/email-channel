import React, { useState } from 'react';
import { Mail, Paperclip, ChevronDown, ChevronUp } from 'lucide-react';

interface EmailComposerProps {
  // Subject prefilled from the thread (e.g. "Re: Order #1043 refund request")
  defaultSubject: string;
  // Primary recipient(s) for a normal reply
  replyTo: string[];
  // All participants (used when "Reply all" is active)
  allRecipients: string[];
  onSend: (
    text: string,
    meta: { subject: string; toAddresses: string[]; cc: string[]; bcc: string[] }
  ) => void;
}

export function EmailComposer({ defaultSubject, replyTo, allRecipients, onSend }: EmailComposerProps) {
  const [mode, setMode] = useState<'reply' | 'replyAll'>('reply');
  const [subject, setSubject] = useState(defaultSubject);
  const [body, setBody] = useState('');
  const [showCc, setShowCc] = useState(false);
  const [ccValue, setCcValue] = useState('');
  const [bccValue, setBccValue] = useState('');

  // Recipients shown in the To field depend on reply vs reply-all
  const toAddresses = mode === 'replyAll' ? allRecipients : replyTo;

  const parseAddresses = (value: string) =>
    value
      .split(',')
      .map((a) => a.trim())
      .filter(Boolean);

  const handleSend = () => {
    if (!body.trim()) return;
    onSend(body.trim(), {
      subject: subject.trim() || defaultSubject,
      toAddresses,
      cc: parseAddresses(ccValue),
      bcc: parseAddresses(bccValue),
    });
    setBody('');
    setCcValue('');
    setBccValue('');
    setShowCc(false);
  };

  return (
    <div className="flex flex-col">
      {/* Reply / Reply all toggle */}
      <div className="flex items-center gap-1 px-4 pt-3">
        <div className="flex items-center rounded-md bg-gray-100 p-0.5">
          <button
            onClick={() => setMode('reply')}
            className={`px-3 py-1 rounded text-[13px] transition-colors ${
              mode === 'reply' ? 'bg-white text-[#333333] shadow-sm' : 'text-gray-500'
            }`}
          >
            Reply
          </button>
          <button
            onClick={() => setMode('replyAll')}
            className={`px-3 py-1 rounded text-[13px] transition-colors ${
              mode === 'replyAll' ? 'bg-white text-[#333333] shadow-sm' : 'text-gray-500'
            }`}
          >
            Reply all
          </button>
        </div>
      </div>

      {/* Recipient + subject fields */}
      <div className="px-4 pt-2 space-y-1.5">
        {/* To (read-only, derived from thread) */}
        <div className="flex items-center gap-2 border-b border-gray-100 pb-1.5">
          <span className="text-[12px] text-gray-400 w-12 shrink-0">To</span>
          <span className="text-[13px] text-[#333333] truncate flex-1">{toAddresses.join(', ')}</span>
          <button
            onClick={() => setShowCc((v) => !v)}
            className="text-[12px] text-indigo-500 flex items-center gap-0.5 shrink-0"
          >
            Cc/Bcc {showCc ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
          </button>
        </div>

        {showCc && (
          <>
            <div className="flex items-center gap-2 border-b border-gray-100 pb-1.5">
              <span className="text-[12px] text-gray-400 w-12 shrink-0">Cc</span>
              <input
                value={ccValue}
                onChange={(e) => setCcValue(e.target.value)}
                placeholder="Add Cc recipients (comma separated)"
                className="text-[13px] text-[#333333] flex-1 focus:outline-none bg-transparent"
              />
            </div>
            <div className="flex items-center gap-2 border-b border-gray-100 pb-1.5">
              <span className="text-[12px] text-gray-400 w-12 shrink-0">Bcc</span>
              <input
                value={bccValue}
                onChange={(e) => setBccValue(e.target.value)}
                placeholder="Add Bcc recipients (comma separated)"
                className="text-[13px] text-[#333333] flex-1 focus:outline-none bg-transparent"
              />
            </div>
          </>
        )}

        <div className="flex items-center gap-2 border-b border-gray-100 pb-1.5">
          <span className="text-[12px] text-gray-400 w-12 shrink-0">Subject</span>
          <input
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Subject"
            className="text-[13px] text-[#333333] flex-1 focus:outline-none bg-transparent"
          />
        </div>
      </div>

      {/* Body */}
      <div className="p-4">
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Write your email…"
          className="w-full px-3 py-2 rounded-lg resize-none focus:outline-none bg-gray-50"
          rows={3}
          style={{ minHeight: '80px', maxHeight: '200px' }}
        />

        {/* Actions */}
        <div className="flex flex-row items-center justify-between w-full mt-2">
          <button className="text-gray-500 hover:text-gray-700 transition-colors" title="Attach file">
            <Paperclip className="w-5 h-5" />
          </button>
          <button onClick={handleSend} disabled={!body.trim()} className="disabled:opacity-50">
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
