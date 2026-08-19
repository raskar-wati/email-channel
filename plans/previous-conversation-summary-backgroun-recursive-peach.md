# Add Email as a channel (Team Inbox view)

## Context
The team inbox already supports WhatsApp, Instagram, Messenger, SMS, RCS, and Broadcast. Per the Notion "Email as a channel" doc, Email is the next channel to add so customers spread across multiple channels can manage everything under one platform. This scope is **team inbox view only** — receiving/sending email conversations inside the inbox. Explicitly **out of scope for now**: email account setup, templates/template library, campaign editor, address import/export, attribution export, opt-out, bot assignment config (those are later phases).

Email differs from the existing chat channels: conversations have a **subject line**, **From/To + CC/BCC participants**, and support **Reply / Reply-all**, with a threaded/quoted history rather than pure chat bubbles. We'll use a **hybrid** treatment: keep the existing inbox chrome (sidebar, chat list, contact info) and message list, but add an email header (subject + participants) above the thread and email-specific composer controls (Subject, CC/BCC, Reply/Reply-all). There is no central channel config — channel logic is duplicated across ~7 files, so Email must be threaded through each, mirroring the SMS/RCS pattern for the "simple" parts and adding new email-only UI.

## Email brand styling (new)
- Bubble color (agent messages): `#E7E0FF`-style is taken by IG; use a distinct email tone — **`#E3E8FF`** (soft indigo) for agent bubbles.
- Send/primary color + icon: **`#5B6CFF`** (indigo) with lucide `Mail` icon.
- Avatar/badge accent: indigo (`bg-indigo-500` / `text-indigo-600`).
(Exact hexes can be tweaked; keeping them distinct from the other five channels.)

## Data model changes — `src/app/App.tsx`
1. `interface Chat` (line ~20): add `'Email'` to the `channel` union.
2. `interface Message` (lines ~26-31): add optional email fields so the thread can render as email without affecting other channels:
   - `subject?: string`, `fromAddress?: string`, `toAddresses?: string[]`, `cc?: string[]`, `bcc?: string[]`.
3. `interface ContactInfo` (lines ~33-43): add optional `emailAddress?: string`.
4. `interface ChatCounts` (lines ~45-52): add `email: number`.
5. `chatCounts` memo (lines ~1741-1748): add `email: chats.filter(c => c.channel === 'Email').length`.
6. `applyFilterToChat` (lines ~1613-1631): add `case 'Email'` mirroring the existing per-channel branches.
7. Fallback contact builder (lines ~1755-1767): populate `emailAddress` when channel is Email.
8. Mock data: add ~3 Email conversations to `MOCK_CHATS`, matching threads in `INITIAL_MOCK_MESSAGES` (with `subject`, `fromAddress`, `toAddresses`, and a couple of `cc` examples), and `MOCK_CONTACT_INFO` entries with `emailAddress` + `source: ..._email`. Use realistic support-style subjects (e.g. "Re: Order #1043 refund request").

## Sidebar channel entry — `src/app/components/Sidebar.tsx`
Mirror the existing per-channel wiring for Email:
- Add an `EmailIcon` (lucide `Mail`, matching the WhatsAppIcon/MessengerIcon inline pattern).
- Add `{ name: 'Email', count: chatCounts.email, icon: EmailIcon }` to the `channels` array (lines ~76-82).
- Extend `chatCounts` prop shape (lines ~35-42) to include `email`.
- Add Email cases/returns to: `getChannelDisplayCount`, `getTotalAccountsForChannel`, `getSelectedAccountsCount`, `getChannelIconColor` (indigo), `getChannelBackgroundColor` (indigo tint).
- Email will render as a **plain channel button** (not account-selection), i.e. NOT added to `hasAccountSelection` (line ~288) and no popover state — account setup is out of scope. (If we later want multi-address, revisit ChannelPopover.)

## Conversation row avatar/badge — `src/app/imports/ConversationListUnselected.tsx`
- `ConversationAvatar` (lines ~58-156): add an Email branch. Reuse the SMS/RCS `Container-4050-541.tsx` approach but with an indigo circle + `Mail` glyph (inline SVG or a small new avatar, matching the existing generated pattern). Note existing quirk: avatar keys off `selectedChannel`, not `chat.channel` — follow the same convention.
- `ChannelFooter` (lines ~358-372): keep `null` for Email (consistent with IG/Messenger/SMS/RCS).

## Conversation view — `src/app/components/ChatInterface.tsx` + new `EmailThread` component
Add Email to the shared channel helpers so it slots into existing code paths:
- `getChatBubbleColor` (lines ~509-522): `case 'Email': return '#E3E8FF'`.
- `getChannelColor` (lines ~477-493): indigo badge classes.
- `SendButtonIcon` (lines ~213-298): add Email branch — indigo `#5B6CFF` bg + `Mail` icon + "Send".
- `ChannelIndicator` (lines ~324-416): add Email label + icon.
- Composer header exclusion (line ~594): add `&& selectedChat.channel !== 'Email'` so the phone-number row is hidden for email.

Email-specific UI (the hybrid layer), gated by `selectedChat.channel === 'Email'`:
1. **Email header** above the message thread: subject line (from the latest message's `subject`) + participant summary (From / To, expandable to show CC). Keep it lightweight — a header strip, not a full redesign.
2. **Composer additions** for email only:
   - A Subject field (prefilled with `Re: <subject>`).
   - **CC / BCC** toggle rows (collapsed by default, click to reveal inputs).
   - **Reply / Reply-all** control (segmented toggle or the send-button label switches) — reply-all pre-fills recipients from the thread's participants.
   - Reuse the existing `<textarea>` body + `SendButtonIcon`.
   - To keep `ChatInterface.tsx` readable, extract this into a new `src/app/components/EmailComposer.tsx` and render it in place of the default composer when the channel is Email. Consider a small `src/app/components/EmailThreadHeader.tsx` for the subject/participants strip.
3. `onSendMessage` continues to append an agent `Message`; for email include the `subject`/`cc`/`bcc`/`toAddresses` on the new message object.

## Contact Info panel — `src/app/components/ContactInfo.tsx`
- Make the panel lightly channel-aware: when the selected chat is Email, show an **Email Address** row (from `ContactInfo.emailAddress`) instead of / in addition to the phone number row (lines ~484-539). Keep it minimal — relabel/swap the top identity row; leave Attributes/Tags/Notes unchanged.

## Files touched (summary)
- `src/app/App.tsx` — types, counts, filter, mock data.
- `src/app/components/Sidebar.tsx` — Email channel entry + helper cases.
- `src/app/components/ChatInterface.tsx` — channel helpers + email branch that renders new email components.
- `src/app/components/EmailComposer.tsx` — **new** (Subject, CC/BCC, Reply/Reply-all composer).
- `src/app/components/EmailThreadHeader.tsx` — **new** (subject + participants strip).
- `src/app/imports/ConversationListUnselected.tsx` — Email avatar branch.
- `src/app/components/ContactInfo.tsx` — email-address identity row.

## Verification
1. App auto-reloads via the running dev server (do not start it manually).
2. In the Team Inbox sidebar, confirm an **Email** channel appears with a count and indigo styling; selecting it filters the chat list to the email conversations.
3. Open an email conversation: confirm the subject + participants header renders, agent bubbles use the indigo email color, and the send button is indigo with a Mail icon.
4. In the composer: toggle CC/BCC (inputs appear), edit the Subject, switch Reply ↔ Reply-all (recipients update), type a body and send — the new message appends to the thread with its email fields.
5. Confirm Contact Info shows the customer's email address for email chats, and that WhatsApp/IG/Messenger/SMS/RCS conversations are visually unchanged.
6. Confirm All-Channels filtering and counts still add up with the new email chats included.
