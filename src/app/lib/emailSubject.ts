// Subject handling for the Email channel, shared by the thread view and the
// conversation header so both agree on what counts as one thread.

interface SubjectCarrier {
  subject?: string;
  type?: string;
}

// Strip a leading "Re:"/"Fwd:" so replies group with their original subject.
export function normalizeSubject(subject?: string): string {
  if (!subject) return 'No subject';
  return subject.replace(/^\s*(re|fwd|fw)\s*:\s*/i, '').trim() || 'No subject';
}

// The distinct threads in a conversation, in first-seen order. Activity events
// carry no subject of their own, so they never open a thread.
export function threadSubjects(messages: SubjectCarrier[]): string[] {
  const seen: string[] = [];
  messages.forEach((msg) => {
    if (msg.type === 'event' && !msg.subject) return;
    const key = normalizeSubject(msg.subject);
    if (!seen.includes(key)) seen.push(key);
  });
  return seen;
}
