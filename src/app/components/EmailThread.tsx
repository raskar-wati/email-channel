import React, { useEffect, useMemo, useRef, useState } from 'react';
import { ChevronDown, ChevronRight, Forward, Reply } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { AVATAR_PHOTOS } from './avatarPhotos';
import { EmailComposer } from './EmailComposer';
import { ComposeMode, draftKey, hasDraft } from '../lib/emailDrafts';
import { normalizeSubject } from '../lib/emailSubject';

interface EmailMessage {
  id: string;
  text: string;
  sender: 'customer' | 'agent';
  timestamp: string;
  type?: 'event';
  unread?: boolean;
  subject?: string;
  fromAddress?: string;
  toAddresses?: string[];
  cc?: string[];
  bcc?: string[];
}

interface EmailThreadProps {
  // Identifies the conversation these threads belong to. Collapse state and
  // drafts are scoped to it so nothing leaks between customers.
  conversationId: string;
  messages: EmailMessage[];
  customerName: string;
  // Which thread composer is open, owned by the parent: the conversation may
  // only ever have one input area, whether it's a reply or a new message.
  openComposer: { key: string; mode: ComposeMode } | null;
  onOpenComposer: (key: string, mode: ComposeMode) => void;
  onCloseComposer: () => void;
  onSend: (
    text: string,
    meta: { subject: string; toAddresses: string[]; cc: string[]; bcc: string[] }
  ) => void;
}

// A single email rendered as a full card: sender, recipients, body, signature footer.
function EmailCard({ msg, customerName }: { msg: EmailMessage; customerName: string }) {
  // Signatures repeat on every message and carry nothing an agent needs, so they
  // start folded away behind a "Show signature" button. Revealing is one-way —
  // once it's out, the button is gone and the signature stays for this session.
  const [signatureShown, setSignatureShown] = useState(false);
  const isAgent = msg.sender === 'agent';
  const senderName = isAgent ? 'Wati Support' : customerName;
  const fromAddress = msg.fromAddress || (isAgent ? 'support@wati.io' : 'customer@email.com');
  const initials = senderName
    .split(' ')
    .map((p) => p[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

  // Customers get an Unsplash portrait; the support agent keeps the indigo initials badge.
  const photo = !isAgent ? AVATAR_PHOTOS[senderName] : undefined;

  const to = msg.toAddresses || [];
  const cc = msg.cc || [];
  const bcc = msg.bcc || [];

  return (
    <div
      className={`rounded-lg border bg-white overflow-hidden ${
        msg.unread ? 'border-[#5B6CFF] ring-1 ring-[#5B6CFF]/30' : 'border-gray-200'
      }`}
    >
      {/* Header: sender identity + timestamp */}
      <div className="flex items-start gap-3 px-4 pt-3 pb-2">
        {msg.unread && (
          <span className="mt-1.5 size-2 shrink-0 rounded-full bg-[#5B6CFF]" title="Unread" />
        )}
        {photo ? (
          <ImageWithFallback
            src={photo}
            alt={senderName}
            className="size-8 shrink-0 rounded-full object-cover"
          />
        ) : (
          <div
            className={`size-8 shrink-0 rounded-full flex items-center justify-center text-[12px] font-semibold ${
              isAgent ? 'bg-indigo-100 text-indigo-700' : 'bg-gray-100 text-gray-600'
            }`}
          >
            {initials}
          </div>
        )}
        <div className="min-w-0 flex-1">
          <div className="flex items-baseline justify-between gap-2">
            <p className="text-[14px] text-[#333333] font-semibold truncate">
              {senderName} <span className="text-[12px] text-gray-400 font-normal">&lt;{fromAddress}&gt;</span>
            </p>
            <span className="text-[12px] text-gray-400 shrink-0">{msg.timestamp}</span>
          </div>
          <div className="text-[12px] text-gray-500 leading-5">
            {to.length > 0 && <div className="truncate">to {to.join(', ')}</div>}
            {cc.length > 0 && <div className="truncate">cc {cc.join(', ')}</div>}
            {bcc.length > 0 && <div className="truncate">bcc {bcc.join(', ')}</div>}
          </div>
        </div>
      </div>

      {/* Body — the signature is the tail of what the sender wrote, not card chrome,
          so it sits inside the body block, only dimmed. */}
      <div className="px-4 py-3 border-t border-gray-100">
        <p className="text-[14px] text-[#333333] whitespace-pre-line leading-6">{msg.text}</p>
        {signatureShown ? (
          <p className="mt-3 text-[12px] text-gray-400 leading-5">
            {isAgent ? (
              <>
                Wati Support Team
                <br />
                support@wati.io · wati.io
              </>
            ) : (
              <>Sent from {customerName}'s inbox</>
            )}
          </p>
        ) : (
          <button
            onClick={() => setSignatureShown(true)}
            className="mt-3 block text-[12px] text-gray-400 hover:text-gray-600 transition-colors"
          >
            Show signature
          </button>
        )}
      </div>
    </div>
  );
}

// Inline activity event (opened, clicked, etc.)
function EventRow({ msg }: { msg: EmailMessage }) {
  return (
    <div className="flex items-center justify-center gap-2 py-1">
      <div className="h-px flex-1 bg-gray-100" />
      <span className="text-xs text-gray-400 whitespace-nowrap px-1">
        {msg.text}
        {msg.timestamp && <span className="text-gray-300"> · {msg.timestamp}</span>}
      </span>
      <div className="h-px flex-1 bg-gray-100" />
    </div>
  );
}

export function EmailThread({
  conversationId,
  messages,
  customerName,
  openComposer,
  onOpenComposer,
  onCloseComposer,
  onSend,
}: EmailThreadProps) {
  // Group messages into threads keyed by normalized subject, preserving first-seen order.
  // Activity events carry no subject, so attach them to the thread that precedes them
  // rather than letting them form a stray "No subject" group.
  const groups = useMemo(() => {
    const out: { key: string; subject: string; items: EmailMessage[] }[] = [];
    const index = new Map<string, number>();
    let lastGroupIdx = -1;

    messages.forEach((msg) => {
      if (msg.type === 'event' && !msg.subject) {
        if (lastGroupIdx >= 0) out[lastGroupIdx].items.push(msg);
        return; // skip creating a group for a subject-less event
      }
      const key = normalizeSubject(msg.subject);
      if (!index.has(key)) {
        index.set(key, out.length);
        out.push({ key, subject: normalizeSubject(msg.subject), items: [] });
      }
      lastGroupIdx = index.get(key)!;
      out[lastGroupIdx].items.push(msg);
    });
    return out;
  }, [messages]);

  // Most recent thread expanded, older ones collapsed — recomputed per conversation
  // so a thread the agent has never seen never inherits another customer's state.
  const defaultCollapsed = useMemo(() => {
    const initial: Record<string, boolean> = {};
    groups.forEach((g, i) => {
      initial[g.key] = i < groups.length - 1;
    });
    return initial;
  }, [groups]);

  // Overrides are stored per conversation, so toggling "Invoice question" for one
  // customer doesn't collapse the same-named thread for another.
  const [overrides, setOverrides] = useState<Record<string, Record<string, boolean>>>({});
  const collapsedFor = (key: string) => {
    const convo = overrides[conversationId];
    if (convo && key in convo) return convo[key];
    return defaultCollapsed[key] ?? false;
  };

  const composerRef = useRef<HTMLDivElement>(null);

  // The composer is no use if it opens below the fold. Depend on a stable string
  // rather than the object identity so the scroll isn't cancelled every render.
  const composerSignature = openComposer
    ? `${conversationId}|${openComposer.key}|${openComposer.mode}`
    : '';

  useEffect(() => {
    if (!composerSignature) return;
    // Note: `behavior: 'smooth'` is a no-op in some engines, so scroll instantly.
    // The composer also changes height as it mounts (Cc/Bcc rows, attachment
    // chips, the textarea's min-height), so nudge it again once layout settles.
    const bring = () => composerRef.current?.scrollIntoView({ behavior: 'auto', block: 'end' });
    const raf = requestAnimationFrame(bring);
    const settle = window.setTimeout(bring, 250);
    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(settle);
    };
  }, [composerSignature]);

  if (messages.length === 0) {
    return (
      <div className="flex items-center justify-center h-full text-gray-500">
        <div className="text-center">
          <p className="text-lg mb-2">No emails yet</p>
          <p className="text-sm">Start a conversation with {customerName}</p>
        </div>
      </div>
    );
  }

  const toggle = (key: string) =>
    setOverrides((prev) => ({
      ...prev,
      [conversationId]: {
        ...(prev[conversationId] ?? defaultCollapsed),
        [key]: !collapsedFor(key),
      },
    }));

  // With a single thread there is nothing to tell apart or scan past: the sticky
  // header above already names the subject, and collapsing the only thread just
  // empties the pane. So drop the group header entirely and always show the body.
  const showGroupHeaders = groups.length > 1;

  return (
    <div className="space-y-6">
      {groups.map((group) => {
        const isCollapsed = showGroupHeaders && collapsedFor(group.key);
        const realItems = group.items.filter((m) => m.type !== 'event');
        const emailCount = realItems.length;
        const unreadCount = realItems.filter((m) => m.unread).length;
        const threadDraftId = draftKey(conversationId, group.key);
        const threadHasDraft = hasDraft(threadDraftId);

        // Reply target: the most recent inbound (customer) address in this thread.
        const lastInbound = [...realItems].reverse().find((m) => m.sender === 'customer' && m.fromAddress);
        const lastOutbound = [...realItems]
          .reverse()
          .find((m) => m.toAddresses && m.toAddresses.length > 0);
        // Same rule as the header: reply to who we actually wrote to, not a guess.
        const customerAddress =
          lastInbound?.fromAddress ||
          lastOutbound?.toAddresses?.[0] ||
          `${customerName.toLowerCase().replace(/\s+/g, '.')}@gmail.com`;

        // All participants of this thread (for Reply all).
        const participantSet = new Set<string>();
        realItems.forEach((m) => {
          if (m.sender === 'customer' && m.fromAddress) participantSet.add(m.fromAddress);
          (m.cc || []).forEach((c) => participantSet.add(c));
        });
        if (participantSet.size === 0) participantSet.add(customerAddress);
        const allRecipients = Array.from(participantSet);

        const isComposerOpen = openComposer?.key === group.key;

        return (
          <div key={group.key}>
            {/* Thread header — only earns its place when threads need telling apart */}
            {showGroupHeaders && (
              <button
                onClick={() => toggle(group.key)}
                className="flex items-center gap-2 w-full text-left mb-2 group"
              >
                {isCollapsed ? (
                  <ChevronRight className="w-4 h-4 text-gray-400 shrink-0" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-gray-400 shrink-0" />
                )}
                <span className="text-[15px] font-semibold text-[#333333] truncate">{group.subject}</span>
                <span className="text-[12px] text-gray-400 shrink-0">
                  {emailCount} {emailCount === 1 ? 'message' : 'messages'}
                </span>
                {unreadCount > 0 && (
                  <span className="shrink-0 flex items-center justify-center min-w-5 h-5 px-1.5 rounded-full bg-[#5B6CFF] text-white text-[11px] font-semibold leading-none">
                    {unreadCount} new
                  </span>
                )}
                {threadHasDraft && (
                  <span className="shrink-0 flex items-center h-5 px-1.5 rounded-full border border-[#5B6CFF]/40 text-[#5B6CFF] text-[11px] font-semibold leading-none">
                    Draft
                  </span>
                )}
              </button>
            )}

            {!isCollapsed && (
              <div className={`space-y-3 ${showGroupHeaders ? 'pl-6' : ''}`}>
                {group.items.map((msg) =>
                  msg.type === 'event' ? (
                    <EventRow key={msg.id} msg={msg} />
                  ) : (
                    <EmailCard key={msg.id} msg={msg} customerName={customerName} />
                  )
                )}

                {/* Per-thread composer */}
                {isComposerOpen ? (
                  <div ref={composerRef} className="rounded-lg border border-gray-200 bg-white">
                    <EmailComposer
                      draftId={threadDraftId}
                      defaultSubject={group.subject}
                      replyTo={[customerAddress]}
                      allRecipients={allRecipients}
                      initialMode={openComposer?.mode ?? 'reply'}
                      onSend={(text, meta) => {
                        onSend(text, meta);
                        onCloseComposer();
                      }}
                      onCancel={onCloseComposer}
                    />
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onOpenComposer(group.key, 'reply')}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-gray-200 text-[13px] text-[#5B6CFF] hover:bg-indigo-50 transition-colors"
                    >
                      <Reply className="w-4 h-4" />
                      {threadHasDraft ? 'Continue draft' : 'Reply to this thread'}
                    </button>
                    <button
                      onClick={() => onOpenComposer(group.key, 'forward')}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-gray-200 text-[13px] text-gray-500 hover:bg-gray-50 transition-colors"
                    >
                      <Forward className="w-4 h-4" />
                      Forward
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
