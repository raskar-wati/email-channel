import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Reply } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { AVATAR_PHOTOS } from './avatarPhotos';
import { EmailComposer } from './EmailComposer';

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
  messages: EmailMessage[];
  customerName: string;
  onSend: (
    text: string,
    meta: { subject: string; toAddresses: string[]; cc: string[]; bcc: string[] }
  ) => void;
}

// Strip a leading "Re:"/"Fwd:" so replies group with their original subject
function normalizeSubject(subject?: string): string {
  if (!subject) return 'No subject';
  return subject.replace(/^\s*(re|fwd|fw)\s*:\s*/i, '').trim() || 'No subject';
}

// A single email rendered as a full card: sender, recipients, body, signature footer.
function EmailCard({ msg, customerName }: { msg: EmailMessage; customerName: string }) {
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

      {/* Body */}
      <div className="px-4 py-3 border-t border-gray-100">
        <p className="text-[14px] text-[#333333] whitespace-pre-line leading-6">{msg.text}</p>
      </div>

      {/* Signature footer */}
      <div className="px-4 py-2.5 border-t border-gray-100 bg-gray-50/60">
        <p className="text-[12px] text-gray-400 leading-5">
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

export function EmailThread({ messages, customerName, onSend }: EmailThreadProps) {
  // Group messages into threads keyed by normalized subject, preserving first-seen order.
  // Activity events carry no subject, so attach them to the thread that precedes them
  // rather than letting them form a stray "No subject" group.
  const groups: { key: string; subject: string; items: EmailMessage[] }[] = [];
  const index = new Map<string, number>();
  let lastGroupIdx = -1;

  messages.forEach((msg) => {
    if (msg.type === 'event' && !msg.subject) {
      if (lastGroupIdx >= 0) groups[lastGroupIdx].items.push(msg);
      return; // skip creating a group for a subject-less event
    }
    const key = normalizeSubject(msg.subject);
    if (!index.has(key)) {
      index.set(key, groups.length);
      groups.push({ key, subject: normalizeSubject(msg.subject), items: [] });
    }
    lastGroupIdx = index.get(key)!;
    groups[lastGroupIdx].items.push(msg);
  });

  // Most recent thread expanded by default; older ones collapsed.
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    groups.forEach((g, i) => {
      initial[g.key] = i < groups.length - 1; // collapse all but the last
    });
    return initial;
  });

  // Which thread currently has its reply composer open.
  const [replyOpen, setReplyOpen] = useState<string | null>(null);

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

  const toggle = (key: string) => setCollapsed((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <div className="space-y-6">
      {groups.map((group) => {
        const isCollapsed = collapsed[group.key];
        const realItems = group.items.filter((m) => m.type !== 'event');
        const emailCount = realItems.length;
        const unreadCount = realItems.filter((m) => m.unread).length;

        // Reply target: the most recent inbound (customer) address in this thread.
        const lastInbound = [...realItems].reverse().find((m) => m.sender === 'customer' && m.fromAddress);
        const customerAddress =
          lastInbound?.fromAddress || `${customerName.toLowerCase().replace(/\s+/g, '.')}@gmail.com`;

        // All participants of this thread (for Reply all).
        const participantSet = new Set<string>();
        realItems.forEach((m) => {
          if (m.sender === 'customer' && m.fromAddress) participantSet.add(m.fromAddress);
          (m.cc || []).forEach((c) => participantSet.add(c));
        });
        if (participantSet.size === 0) participantSet.add(customerAddress);
        const allRecipients = Array.from(participantSet);

        const isReplyOpen = replyOpen === group.key;

        return (
          <div key={group.key}>
            {/* Thread subject header */}
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
            </button>

            {!isCollapsed && (
              <div className="space-y-3 pl-6">
                {group.items.map((msg) =>
                  msg.type === 'event' ? (
                    <EventRow key={msg.id} msg={msg} />
                  ) : (
                    <EmailCard key={msg.id} msg={msg} customerName={customerName} />
                  )
                )}

                {/* Per-thread reply */}
                {isReplyOpen ? (
                  <div className="rounded-lg border border-gray-200 bg-white">
                    <EmailComposer
                      defaultSubject={group.subject.startsWith('Re:') ? group.subject : `Re: ${group.subject}`}
                      replyTo={[customerAddress]}
                      allRecipients={allRecipients}
                      onSend={(text, meta) => {
                        onSend(text, meta);
                        setReplyOpen(null);
                      }}
                    />
                  </div>
                ) : (
                  <button
                    onClick={() => setReplyOpen(group.key)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-gray-200 text-[13px] text-[#5B6CFF] hover:bg-indigo-50 transition-colors"
                  >
                    <Reply className="w-4 h-4" />
                    Reply to this thread
                  </button>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
