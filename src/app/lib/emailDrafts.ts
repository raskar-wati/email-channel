// Draft store for the Email channel.
//
// Drafts outlive the components that render them: an agent can start a reply,
// jump to another conversation to check something, and come back to find the
// text still there. Component state can't do that (EmailComposer unmounts when
// the thread collapses or the conversation changes), so drafts live here and
// are keyed by conversation + thread.

import { useSyncExternalStore } from 'react';

export type ComposeMode = 'reply' | 'replyAll' | 'forward' | 'new';

export interface EmailDraft {
  mode: ComposeMode;
  subject: string;
  to: string;
  cc: string;
  bcc: string;
  body: string;
  showCc: boolean;
  attachments: string[];
}

const drafts = new Map<string, EmailDraft>();
const listeners = new Set<() => void>();

export function draftKey(conversationId: string, threadKey: string): string {
  return `${conversationId}::${threadKey}`;
}

function emit() {
  listeners.forEach((fn) => fn());
}

export function subscribeDrafts(fn: () => void): () => void {
  listeners.add(fn);
  return () => {
    listeners.delete(fn);
  };
}

export function getDraft(key: string): EmailDraft | undefined {
  return drafts.get(key);
}

export function saveDraft(key: string, draft: EmailDraft): void {
  drafts.set(key, draft);
  emit();
}

export function clearDraft(key: string): void {
  if (drafts.delete(key)) emit();
}

// A draft only "counts" once it has body text — an empty composer the agent
// opened and abandoned shouldn't light up the conversation list.
function isSubstantive(draft: EmailDraft | undefined): boolean {
  return !!draft && (draft.body.trim().length > 0 || draft.attachments.length > 0);
}

export function hasDraft(key: string): boolean {
  return isSubstantive(drafts.get(key));
}

// Does any thread in this conversation have unsent text? Drives the list badge.
export function conversationHasDraft(conversationId: string): boolean {
  const prefix = `${conversationId}::`;
  for (const [key, draft] of drafts) {
    if (key.startsWith(prefix) && isSubstantive(draft)) return true;
  }
  return false;
}

// Subscribe a component to one conversation's draft state. Returns a boolean so
// the snapshot stays referentially stable between renders.
export function useHasDraft(conversationId: string): boolean {
  return useSyncExternalStore(
    subscribeDrafts,
    () => conversationHasDraft(conversationId),
    () => false
  );
}
