import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { EmailComposer } from './EmailComposer';

export interface ComposeSend {
  text: string;
  subject: string;
  toAddresses: string[];
  cc: string[];
  bcc: string[];
}

interface ComposeEmailDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  // Prefilled recipient(s). Empty when starting from scratch; set when starting
  // a new thread with the contact already on screen.
  to?: string[];
  // Distinguishes the two entry points in the title, and keeps their drafts apart.
  draftId: string;
  title: string;
  description: string;
  onSend: (payload: ComposeSend) => void;
}

export function ComposeEmailDialog({
  open,
  onOpenChange,
  to = [],
  draftId,
  title,
  description,
  onSend,
}: ComposeEmailDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[560px] p-0 gap-0 overflow-hidden">
        <DialogHeader className="px-4 pt-4 pb-0">
          <DialogTitle className="text-[15px] text-[#333333]">{title}</DialogTitle>
          <DialogDescription className="text-[12px] text-gray-500">{description}</DialogDescription>
        </DialogHeader>
        {open && (
          <EmailComposer
            draftId={draftId}
            defaultSubject=""
            replyTo={to}
            allRecipients={to}
            initialMode="new"
            initialTo={to.join(', ')}
            onSend={(text, meta) =>
              onSend({
                text,
                subject: meta.subject,
                toAddresses: meta.toAddresses,
                cc: meta.cc,
                bcc: meta.bcc,
              })
            }
            onCancel={() => onOpenChange(false)}
          />
        )}
      </DialogContent>
    </Dialog>
  );
}
