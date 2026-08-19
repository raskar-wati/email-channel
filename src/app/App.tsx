import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { MainNavigation } from './components/MainNavigation';
import { GlobalHeader } from './components/GlobalHeader';
import { Sidebar } from './components/Sidebar';
import { ChatList } from './components/ChatList';
import { ContactInfo } from './components/ContactInfo';
import { ChatInterface } from './components/ChatInterface';
import { ComposeEmailDialog, ComposeSend } from './components/ComposeEmailDialog';
import { normalizeSubject } from './lib/emailSubject';
import { DateFilter, DateRange } from './components/DateFilter';
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from './components/ui/resizable';

// Types
interface Chat {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  // Email rows show subject and snippet separately; chat rows use lastMessage
  subject?: string;
  preview?: string;
  timestamp: string;
  date: Date; // New field for proper date filtering
  status: 'Open' | 'Solved' | 'Broadcast';
  channel: 'WhatsApp' | 'Instagram' | 'Messenger' | 'SMS' | 'RCS' | 'Email' | 'Broadcast';
  isOnline: boolean;
  unread: boolean;
  category: string;
}

interface Message {
  id: string;
  text: string;
  sender: 'customer' | 'agent';
  timestamp: string;
  // When set, this entry is a system/activity event rendered inline (not a chat bubble)
  type?: 'event';
  // Marks an unread incoming message (drives the "new" counter on the thread)
  unread?: boolean;
  // Optional email-specific fields (only populated for Email channel)
  subject?: string;
  fromAddress?: string;
  toAddresses?: string[];
  cc?: string[];
  bcc?: string[];
}

interface ContactInfo {
  name: string;
  phoneNumber: string;
  displayName: string;
  username: string;
  source: string;
  emailAddress?: string;
  attributes: {
    tracking_url: string;
    discount_code: string;
  };
}

interface ChatCounts {
  all: number;
  whatsapp: number;
  instagram: number;
  messenger: number;
  sms: number;
  rcs: number;
  email: number;
}

interface ScreenSizes {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

interface FilterSegment {
  attribute: string;
  operation: string;
  value: string;
}

interface CustomFilter {
  id: string;
  name: string;
  segments: FilterSegment[];
  showOldChatsFirst: boolean;
  createdAt: Date;
}

// Helper function to create dates relative to today
const createDate = (daysAgo: number, hours: number = 12, minutes: number = 0): Date => {
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);
  date.setHours(hours, minutes, 0, 0);
  return date;
};

// Mock data with proper dates - Reordered to show better channel diversity at the top
const MOCK_CHATS: Chat[] = [
  // Today's conversations - Mixed channels for better representation
  {
    id: '1',
    name: 'Addison Smith',
    avatar: 'AS',
    lastMessage: "Hi, I'm looking to book a consultation for next week. Is there a slot available?",
    timestamp: '5:50 PM',
    date: createDate(0, 17, 50),
    status: 'Open',
    channel: 'WhatsApp',
    isOnline: true,
    unread: true,
    category: 'Sales'
  },
  {
    id: '7',
    name: 'Emma Rodriguez',
    avatar: 'ER',
    lastMessage: 'Love your latest post! Where can I buy this dress?',
    timestamp: '4:32 PM',
    date: createDate(0, 16, 32),
    status: 'Open',
    channel: 'Instagram',
    isOnline: true,
    unread: true,
    category: 'Sales'
  },
  {
    id: '19',
    name: 'Isabella Garcia',
    avatar: 'IG',
    lastMessage: 'Hi! I saw your Facebook ad and I\'m interested in learning more',
    timestamp: '4:20 PM',
    date: createDate(0, 16, 20),
    status: 'Open',
    channel: 'Messenger',
    isOnline: true,
    unread: true,
    category: 'Sales'
  },
  {
    id: '25',
    name: 'Rachel Martinez',
    avatar: 'RM',
    lastMessage: 'Hi! I got your number from your website. Can you help me with pricing?',
    timestamp: '4:15 PM',
    date: createDate(0, 16, 15),
    status: 'Open',
    channel: 'SMS',
    isOnline: true,
    unread: true,
    category: 'Sales'
  },
  {
    id: '31',
    name: 'Patricia Lopez',
    avatar: 'PL',
    lastMessage: 'Hi! I got your number from your website. Can you help me with pricing?',
    timestamp: '4:10 PM',
    date: createDate(0, 16, 10),
    status: 'Open',
    channel: 'RCS',
    isOnline: true,
    unread: true,
    category: 'Sales'
  },
  {
    id: '8',
    name: 'Tyler Johnson',
    avatar: 'TJ',
    lastMessage: 'Is this product still available in size M?',
    timestamp: '3:15 PM',
    date: createDate(0, 15, 15),
    status: 'Open',
    channel: 'Instagram',
    isOnline: false,
    unread: true,
    category: 'Sales'
  },
  {
    id: '4',
    name: 'April Boyer',
    avatar: 'AB',
    lastMessage: 'Thanks for assisting me with the...',
    timestamp: '3:05 PM',
    date: createDate(0, 15, 5),
    status: 'Open',
    channel: 'WhatsApp',
    isOnline: true,
    unread: false,
    category: 'Support'
  },
  {
    id: '26',
    name: 'James Wilson',
    avatar: 'JW',
    lastMessage: 'Thanks for the quick delivery! Everything looks perfect 👍',
    timestamp: '2:58 PM',
    date: createDate(0, 14, 58),
    status: 'Solved',
    channel: 'SMS',
    isOnline: false,
    unread: false,
    category: 'Support'
  },
  {
    id: '32',
    name: 'Robert Anderson',
    avatar: 'RA',
    lastMessage: 'Thanks for the quick delivery! Everything looks perfect 👍',
    timestamp: '2:55 PM',
    date: createDate(0, 14, 55),
    status: 'Solved',
    channel: 'RCS',
    isOnline: false,
    unread: false,
    category: 'Support'
  },
  {
    id: '20',
    name: 'Ethan Brown',
    avatar: 'EB',
    lastMessage: 'Can you provide more details about your pricing plans?',
    timestamp: '2:20 PM',
    date: createDate(0, 14, 20),
    status: 'Open',
    channel: 'Messenger',
    isOnline: false,
    unread: true,
    category: 'Sales'
  },
  {
    id: '9',
    name: 'Sofia Chen',
    avatar: 'SC',
    lastMessage: 'Thanks for the quick response! Just placed my order 🛍️',
    timestamp: '2:28 PM',
    date: createDate(0, 14, 28),
    status: 'Solved',
    channel: 'Instagram',
    isOnline: true,
    unread: false,
    category: 'Sales'
  },
  {
    id: '27',
    name: 'Sarah Thompson',
    avatar: 'ST',
    lastMessage: 'Can I change my appointment to tomorrow instead?',
    timestamp: '11:45 AM',
    date: createDate(0, 11, 45),
    status: 'Open',
    channel: 'SMS',
    isOnline: true,
    unread: true,
    category: 'Support'
  },
  {
    id: '33',
    name: 'Jennifer Taylor',
    avatar: 'JT',
    lastMessage: 'Can I change my appointment to tomorrow instead?',
    timestamp: '11:40 AM',
    date: createDate(0, 11, 40),
    status: 'Open',
    channel: 'RCS',
    isOnline: true,
    unread: true,
    category: 'Support'
  },
  {
    id: '2', 
    name: 'Marcus Allen',
    avatar: 'MA',
    lastMessage: 'Can you resend the invoice from last week?',
    timestamp: '10:11 AM',
    date: createDate(0, 10, 11),
    status: 'Broadcast',
    channel: 'Broadcast',
    isOnline: false,
    unread: false,
    category: 'Support'
  },

  // Yesterday's conversations
  {
    id: '28',
    name: 'Michael Davis',
    avatar: 'MD',
    lastMessage: 'Is your store open today? I\'d like to visit in person.',
    timestamp: 'Yesterday',
    date: createDate(1, 17, 30),
    status: 'Open',
    channel: 'SMS',
    isOnline: false,
    unread: true,
    category: 'Information'
  },
  {
    id: '34',
    name: 'David Miller',
    avatar: 'DM',
    lastMessage: 'Is your store open today? I\'d like to visit in person.',
    timestamp: 'Yesterday',
    date: createDate(1, 17, 25),
    status: 'Open',
    channel: 'RCS',
    isOnline: false,
    unread: true,
    category: 'Information'
  },
  {
    id: '16',
    name: 'Ryan Foster',
    avatar: 'RF',
    lastMessage: 'When will you restock this item?',
    timestamp: 'Yesterday',
    date: createDate(1, 16, 30),
    status: 'Open',
    channel: 'Instagram',
    isOnline: false,
    unread: false,
    category: 'Sales'
  },
  {
    id: '17',
    name: 'Ava Taylor',
    avatar: 'AV',
    lastMessage: 'Your content is so inspiring! Keep it up ✨',
    timestamp: 'Yesterday',
    date: createDate(1, 15, 20),
    status: 'Solved',
    channel: 'Instagram',
    isOnline: false,
    unread: false,
    category: 'Engagement'
  },
  {
    id: '18',
    name: 'Noah Williams',
    avatar: 'NW',
    lastMessage: 'I have an issue with my recent purchase',
    timestamp: 'Yesterday',
    date: createDate(1, 14, 45),
    status: 'Open',
    channel: 'Instagram',
    isOnline: false,
    unread: true,
    category: 'Support'
  },
  {
    id: '3',
    name: 'April Boyer',
    avatar: 'AB',
    lastMessage: "I'm unsure which membership plan would be best for me",
    timestamp: '11:12 PM',
    date: createDate(1, 23, 12),
    status: 'Broadcast',
    channel: 'Broadcast',
    isOnline: false,
    unread: false,
    category: 'Support'
  },

  // 2 days ago
  {
    id: '5',
    name: 'Karan Sharma',
    avatar: 'KS',
    lastMessage: "I'd like to change my appointment time",
    timestamp: '9:19 PM',
    date: createDate(2, 21, 19),
    status: 'Solved',
    channel: 'WhatsApp',
    isOnline: false,
    unread: false,
    category: 'Sales'
  },
  {
    id: '29',
    name: 'Lisa Garcia',
    avatar: 'LG',
    lastMessage: 'Do you offer payment plans for your services?',
    timestamp: '3:20 PM',
    date: createDate(2, 15, 20),
    status: 'Open',
    channel: 'SMS',
    isOnline: false,
    unread: false,
    category: 'Sales'
  },
  {
    id: '35',
    name: 'Karen White',
    avatar: 'KW',
    lastMessage: 'Do you offer payment plans for your services?',
    timestamp: '3:15 PM',
    date: createDate(2, 15, 15),
    status: 'Open',
    channel: 'RCS',
    isOnline: false,
    unread: false,
    category: 'Sales'
  },
  {
    id: '10',
    name: 'Alex Thompson',
    avatar: 'AT',
    lastMessage: 'Can you help me track my order from last week?',
    timestamp: '1:45 PM',
    date: createDate(2, 13, 45),
    status: 'Open',
    channel: 'Instagram',
    isOnline: false,
    unread: false,
    category: 'Support'
  },

  // 3 days ago
  {
    id: '6',
    name: 'Prateek Singh',
    avatar: 'PS',
    lastMessage: "I'd like to know more about the service",
    timestamp: '2:41 PM',
    date: createDate(3, 14, 41),
    status: 'Open',
    channel: 'WhatsApp',
    isOnline: false,
    unread: false,
    category: 'Sales'
  },
  {
    id: '11',
    name: 'Maya Patel',
    avatar: 'MP',
    lastMessage: 'Hey! Interested in collaborating on a campaign',
    timestamp: '12:30 PM',
    date: createDate(3, 12, 30),
    status: 'Open',
    channel: 'Instagram',
    isOnline: true,
    unread: true,
    category: 'Partnership'
  },
  {
    id: '21',
    name: 'Mia Davis',
    avatar: 'MD',
    lastMessage: 'Thank you for the excellent customer service!',
    timestamp: '1:15 PM',
    date: createDate(3, 13, 15),
    status: 'Solved',
    channel: 'Messenger',
    isOnline: false,
    unread: false,
    category: 'Support'
  },
  {
    id: '30',
    name: 'Chris Johnson',
    avatar: 'CJ',
    lastMessage: 'Hi, I need help setting up my account. Can you guide me?',
    timestamp: '11:30 AM',
    date: createDate(3, 11, 30),
    status: 'Open',
    channel: 'SMS',
    isOnline: true,
    unread: true,
    category: 'Support'
  },
  {
    id: '36',
    name: 'Mark Brown',
    avatar: 'MB',
    lastMessage: 'Hi, I need help setting up my account. Can you guide me?',
    timestamp: '11:25 AM',
    date: createDate(3, 11, 25),
    status: 'Open',
    channel: 'RCS',
    isOnline: true,
    unread: true,
    category: 'Support'
  },

  // 5 days ago
  {
    id: '12',
    name: 'Jake Wilson',
    avatar: 'JW',
    lastMessage: 'Do you ship internationally?',
    timestamp: '11:22 AM',
    date: createDate(5, 11, 22),
    status: 'Open',
    channel: 'Instagram',
    isOnline: false,
    unread: false,
    category: 'Sales'
  },
  {
    id: '22',
    name: 'Lucas Miller',
    avatar: 'LM',
    lastMessage: 'Is there a demo available for your product?',
    timestamp: '12:05 PM',
    date: createDate(5, 12, 5),
    status: 'Open',
    channel: 'Messenger',
    isOnline: true,
    unread: false,
    category: 'Sales'
  },

  // 1 week ago
  {
    id: '13',
    name: 'Luna Martinez',
    avatar: 'LM',
    lastMessage: 'The quality is amazing! Will definitely recommend 💕',
    timestamp: '10:15 AM',
    date: createDate(7, 10, 15),
    status: 'Solved',
    channel: 'Instagram',
    isOnline: false,
    unread: false,
    category: 'Support'
  },
  {
    id: '23',
    name: 'Chloe Wilson',
    avatar: 'CW',
    lastMessage: 'I need help setting up my account',
    timestamp: '11:30 AM',
    date: createDate(7, 11, 30),
    status: 'Open',
    channel: 'Messenger',
    isOnline: false,
    unread: true,
    category: 'Support'
  },

  // 2 weeks ago
  {
    id: '14',
    name: 'David Kim',
    avatar: 'DK',
    lastMessage: 'What are your return policies?',
    timestamp: '9:45 AM',
    date: createDate(14, 9, 45),
    status: 'Open',
    channel: 'Instagram',
    isOnline: false,
    unread: false,
    category: 'Support'
  },
  {
    id: '24',
    name: 'Oliver Moore',
    avatar: 'OM',
    lastMessage: 'When is your next webinar scheduled?',
    timestamp: '10:45 AM',
    date: createDate(14, 10, 45),
    status: 'Open',
    channel: 'Messenger',
    isOnline: false,
    unread: false,
    category: 'Information'
  },

  // 1 month ago
  {
    id: '15',
    name: 'Zoe Anderson',
    avatar: 'ZA',
    lastMessage: 'Can I get this in a different color?',
    timestamp: '8:30 AM',
    date: createDate(30, 8, 30),
    status: 'Open',
    channel: 'Instagram',
    isOnline: true,
    unread: true,
    category: 'Sales'
  },

  // Email conversations
  {
    id: 'e1',
    name: 'Nathan Cooper',
    avatar: 'NC',
    subject: "Order #1043 refund request",
    preview: "Thanks, I’ve attached the receipt as requested.",
    lastMessage: "Re: Order #1043 refund request — Thanks, I've attached the receipt as requested.",
    timestamp: '4:20 PM',
    date: createDate(0, 16, 20),
    status: 'Open',
    channel: 'Email',
    isOnline: false,
    unread: true,
    category: 'Support'
  },
  {
    id: 'e2',
    name: 'Priya Nair',
    avatar: 'PN',
    subject: "Invoice for March subscription",
    preview: "Could you send a copy for our records?",
    lastMessage: 'Re: Invoice for March subscription — Could you send a copy for our records?',
    timestamp: '1:05 PM',
    date: createDate(1, 13, 5),
    status: 'Open',
    channel: 'Email',
    isOnline: false,
    unread: false,
    category: 'Sales'
  },
  {
    id: 'e3',
    name: 'Daniel Brooks',
    avatar: 'DB',
    subject: "Bulk order enquiry",
    preview: "Appreciate the quick turnaround, all sorted now.",
    lastMessage: 'Re: Bulk order enquiry — Appreciate the quick turnaround, all sorted now.',
    timestamp: '9:40 AM',
    date: createDate(4, 9, 40),
    status: 'Solved',
    channel: 'Email',
    isOnline: false,
    unread: false,
    category: 'Sales'
  },
  {
    id: 'e4',
    name: 'Maria Gonzalez',
    avatar: 'MG',
    subject: "Login issue on the mobile app",
    preview: "Still unable to sign in after resetting my password.",
    lastMessage: 'Re: Login issue on the mobile app — Still unable to sign in after resetting my password.',
    timestamp: '10:12 AM',
    date: createDate(0, 10, 12),
    status: 'Open',
    channel: 'Email',
    isOnline: false,
    unread: true,
    category: 'Support'
  },
  {
    id: 'e5',
    name: 'James Whitfield',
    avatar: 'JW',
    subject: "Partnership proposal",
    preview: "Great, I have looped in our partnerships lead. Speak soon!",
    lastMessage: 'Re: Partnership proposal — Great, I have looped in our partnerships lead. Speak soon!',
    timestamp: '5:47 PM',
    date: createDate(2, 17, 47),
    status: 'Open',
    channel: 'Email',
    isOnline: false,
    unread: false,
    category: 'Sales'
  },
  {
    id: 'e6',
    name: 'Aisha Rahman',
    avatar: 'AR',
    subject: "Feature request — CSV export",
    preview: "Thanks so much, delighted to hear it is on the roadmap!",
    lastMessage: 'Re: Feature request — CSV export — Thanks so much, delighted to hear it is on the roadmap!',
    timestamp: '3:28 PM',
    date: createDate(6, 15, 28),
    status: 'Solved',
    channel: 'Email',
    isOnline: false,
    unread: false,
    category: 'Support'
  }
];

// Initial mock messages for each chat
const INITIAL_MOCK_MESSAGES: Record<string, Message[]> = {
  'e1': [
    {
      id: 'e1-1',
      text: "Hi, I placed order #1043 last week but received the wrong item. I'd like to request a refund. Please let me know what you need from me.",
      sender: 'customer',
      timestamp: '2:15 PM',
      subject: 'Order #1043 refund request',
      fromAddress: 'nathan.cooper@gmail.com',
      toAddresses: ['support@wati.io']
    },
    {
      id: 'e1-2',
      text: "Hi Nathan, so sorry about the mix-up! I've started your refund. Could you reply with a photo of the item received and your receipt so we can process it faster?",
      sender: 'agent',
      timestamp: '3:02 PM',
      subject: 'Re: Order #1043 refund request',
      fromAddress: 'support@wati.io',
      toAddresses: ['nathan.cooper@gmail.com'],
      cc: ['returns@wati.io']
    },
    {
      id: 'e1-ev1',
      type: 'event',
      text: 'Nathan opened this email',
      sender: 'customer',
      timestamp: '3:18 PM'
    },
    {
      id: 'e1-ev2',
      type: 'event',
      text: 'Nathan clicked the tracking link',
      sender: 'customer',
      timestamp: '3:19 PM'
    },
    {
      id: 'e1-3',
      text: "Thanks, I've attached the receipt as requested. Let me know if you need anything else.",
      sender: 'customer',
      timestamp: '4:20 PM',
      subject: 'Re: Order #1043 refund request',
      fromAddress: 'nathan.cooper@gmail.com',
      toAddresses: ['support@wati.io']
    }
  ],
  'e2': [
    {
      id: 'e2-1',
      text: 'Hello, could you send a copy of the invoice for our March subscription for our records? Thank you.',
      sender: 'customer',
      timestamp: '11:48 AM',
      subject: 'Invoice for March subscription',
      fromAddress: 'priya.nair@gmail.com',
      toAddresses: ['billing@wati.io']
    },
    {
      id: 'e2-2',
      text: "Hi Priya, absolutely — I've attached the March invoice (PDF). Let me know if you'd like it addressed to a specific billing entity.",
      sender: 'agent',
      timestamp: '12:30 PM',
      subject: 'Re: Invoice for March subscription',
      fromAddress: 'billing@wati.io',
      toAddresses: ['priya.nair@gmail.com']
    }
  ],
  'e3': [
    {
      id: 'e3-1',
      text: "Hi, we're interested in a bulk order of 250 units. Do you offer volume pricing and what are the lead times?",
      sender: 'customer',
      timestamp: '8:05 AM',
      subject: 'Bulk order enquiry',
      fromAddress: 'daniel.brooks@gmail.com',
      toAddresses: ['sales@wati.io']
    },
    {
      id: 'e3-2',
      text: 'Hi Daniel, thanks for reaching out! For 250 units we can offer 15% off and a 5–7 business day lead time. I can send a formal quote today.',
      sender: 'agent',
      timestamp: '8:52 AM',
      subject: 'Re: Bulk order enquiry',
      fromAddress: 'sales@wati.io',
      toAddresses: ['daniel.brooks@gmail.com'],
      cc: ['accounts@wati.io']
    },
    {
      id: 'e3-3',
      text: 'Appreciate the quick turnaround, all sorted now. Looking forward to the quote.',
      sender: 'customer',
      timestamp: '9:40 AM',
      subject: 'Re: Bulk order enquiry',
      fromAddress: 'daniel.brooks@gmail.com',
      toAddresses: ['sales@wati.io']
    }
  ],
  'e4': [
    {
      id: 'e4-1',
      text: "Hi team, I've been trying to log in to the mobile app all morning and keep getting an 'invalid credentials' error, even though my password is correct. Can you help?",
      sender: 'customer',
      timestamp: '9:14 AM',
      subject: 'Login issue on the mobile app',
      fromAddress: 'maria.gonzalez@gmail.com',
      toAddresses: ['support@wati.io']
    },
    {
      id: 'e4-2',
      text: "Hi Maria, thanks for flagging this. I've triggered a password reset link to this email — could you set a new password and try again? Also, which app version are you on?",
      sender: 'agent',
      timestamp: '9:36 AM',
      subject: 'Re: Login issue on the mobile app',
      fromAddress: 'support@wati.io',
      toAddresses: ['maria.gonzalez@gmail.com'],
      cc: ['tech@wati.io']
    },
    {
      id: 'e4-ev1',
      type: 'event',
      text: 'Maria opened this email',
      sender: 'customer',
      timestamp: '9:41 AM'
    },
    {
      id: 'e4-ev2',
      type: 'event',
      text: 'Maria clicked the password reset link',
      sender: 'customer',
      timestamp: '9:52 AM'
    },
    {
      id: 'e4-3',
      text: "I reset the password and I'm on version 4.2.1, but I still can't sign in. It just spins and then returns to the login screen.",
      sender: 'customer',
      timestamp: '10:12 AM',
      subject: 'Re: Login issue on the mobile app',
      fromAddress: 'maria.gonzalez@gmail.com',
      toAddresses: ['support@wati.io']
    }
  ],
  'e5': [
    {
      id: 'e5-1',
      text: "Hello, I'm reaching out on behalf of Whitfield Media. We'd love to explore a co-marketing partnership for Q3. Is there someone on your team I could connect with?",
      sender: 'customer',
      timestamp: '4:20 PM',
      subject: 'Partnership proposal',
      fromAddress: 'james@whitfieldmedia.com',
      toAddresses: ['hello@wati.io']
    },
    {
      id: 'e5-2',
      text: "Hi James, thanks for reaching out — a Q3 co-marketing partnership sounds exciting. I'd be happy to set up an intro call. Are you free early next week?",
      sender: 'agent',
      timestamp: '5:05 PM',
      subject: 'Re: Partnership proposal',
      fromAddress: 'hello@wati.io',
      toAddresses: ['james@whitfieldmedia.com'],
      cc: ['partnerships@wati.io']
    },
    {
      id: 'e5-3',
      text: 'Great, I have looped in our partnerships lead. Speak soon!',
      sender: 'customer',
      timestamp: '5:47 PM',
      subject: 'Re: Partnership proposal',
      fromAddress: 'james@whitfieldmedia.com',
      toAddresses: ['hello@wati.io'],
      cc: ['partnerships@wati.io']
    }
  ],
  'e6': [
    {
      id: 'e6-old-1',
      text: "Hi there, we just signed up for the Growth plan and I'm setting up our team. Is there a guide for inviting teammates and assigning roles?",
      sender: 'customer',
      timestamp: 'Mar 3, 10:02 AM',
      subject: 'Onboarding — inviting my team',
      fromAddress: 'aisha.rahman@gmail.com',
      toAddresses: ['support@wati.io']
    },
    {
      id: 'e6-old-2',
      text: "Welcome aboard, Aisha! You can invite teammates under Settings → Team → Invite. Each invite lets you pick a role (Admin, Agent, or Viewer). I've attached our quick-start onboarding guide too.",
      sender: 'agent',
      timestamp: 'Mar 3, 11:15 AM',
      subject: 'Re: Onboarding — inviting my team',
      fromAddress: 'support@wati.io',
      toAddresses: ['aisha.rahman@gmail.com'],
      cc: ['onboarding@wati.io']
    },
    {
      id: 'e6-old-3',
      text: "Perfect, that worked and the whole team is in now. Thanks for the quick help!",
      sender: 'customer',
      timestamp: 'Mar 3, 1:40 PM',
      subject: 'Re: Onboarding — inviting my team',
      fromAddress: 'aisha.rahman@gmail.com',
      toAddresses: ['support@wati.io']
    },
    {
      id: 'e6-1',
      text: "Hi, we love the product! One thing that would really help our workflow is the ability to export reports as CSV. Is that something you're planning to add?",
      sender: 'customer',
      timestamp: '2:40 PM',
      subject: 'Feature request — CSV export',
      fromAddress: 'aisha.rahman@gmail.com',
      toAddresses: ['support@wati.io']
    },
    {
      id: 'e6-2',
      text: "Hi Aisha, so glad you're enjoying it! Good news — CSV export is on our roadmap for the next release. I've added your vote to the feature request so you'll be notified when it ships.",
      sender: 'agent',
      timestamp: '3:10 PM',
      subject: 'Re: Feature request — CSV export',
      fromAddress: 'support@wati.io',
      toAddresses: ['aisha.rahman@gmail.com'],
      cc: ['product@wati.io']
    },
    {
      id: 'e6-ev1',
      type: 'event',
      text: 'Aisha opened this email',
      sender: 'customer',
      timestamp: '3:15 PM'
    },
    {
      id: 'e6-3',
      text: 'Thanks so much, delighted to hear it is on the roadmap!',
      sender: 'customer',
      timestamp: '3:28 PM',
      subject: 'Re: Feature request — CSV export',
      fromAddress: 'aisha.rahman@gmail.com',
      toAddresses: ['support@wati.io']
    },
    {
      id: 'e6-4',
      text: "Quick follow-up — is there an ETA for the CSV export release? We'd love to plan our month-end reporting around it.",
      sender: 'customer',
      timestamp: '9:12 AM',
      subject: 'Re: Feature request — CSV export',
      fromAddress: 'aisha.rahman@gmail.com',
      toAddresses: ['support@wati.io'],
      unread: true
    }
  ],
  '1': [
    {
      id: '1',
      text: "Hi, I'm looking to book a consultation for next week. Is there a slot available?",
      sender: 'customer',
      timestamp: '5:45 PM'
    },
    {
      id: '2',
      text: "Hello! Thank you for reaching out. I'd be happy to help you schedule a consultation. Let me check our availability for next week.",
      sender: 'agent',
      timestamp: '5:46 PM'
    },
    {
      id: '3',
      text: "I have openings on Tuesday at 2 PM, Wednesday at 10 AM, or Friday at 3 PM. Which works best for you?",
      sender: 'agent',
      timestamp: '5:47 PM'
    },
    {
      id: '4',
      text: "Tuesday at 2 PM would be perfect! What information do you need from me?",
      sender: 'customer',
      timestamp: '5:48 PM'
    },
    {
      id: '5',
      text: "Great! I'll book you for Tuesday at 2 PM. I'll need your full name, phone number, and a brief description of what you'd like to discuss during the consultation.",
      sender: 'agent',
      timestamp: '5:49 PM'
    }
  ],
  '25': [
    {
      id: '1',
      text: "Hi! I got your number from your website. Can you help me with pricing?",
      sender: 'customer',
      timestamp: '4:12 PM'
    },
    {
      id: '2',
      text: "Hello Rachel! Thank you for reaching out via SMS. I'd be happy to help you with pricing information. What specific service are you interested in?",
      sender: 'agent',
      timestamp: '4:13 PM'
    },
    {
      id: '3',
      text: "I'm looking at your premium package. Is there a discount for first-time customers?",
      sender: 'customer',
      timestamp: '4:14 PM'
    },
    {
      id: '4',
      text: "Yes! We have a 15% discount for new customers. The premium package would be $425 instead of $500. Would you like me to send you more details?",
      sender: 'agent',
      timestamp: '4:15 PM'
    }
  ],
  '31': [
    {
      id: '1',
      text: "Hi! I got your number from your website. Can you help me with pricing?",
      sender: 'customer',
      timestamp: '4:07 PM'
    },
    {
      id: '2',
      text: "Hello Patricia! Thank you for reaching out via RCS. I'd be happy to help you with pricing information. What specific service are you interested in?",
      sender: 'agent',
      timestamp: '4:08 PM'
    },
    {
      id: '3',
      text: "I'm looking at your premium package. Is there a discount for first-time customers?",
      sender: 'customer',
      timestamp: '4:09 PM'
    },
    {
      id: '4',
      text: "Yes! We have a 15% discount for new customers. The premium package would be $425 instead of $500. Would you like me to send you more details?",
      sender: 'agent',
      timestamp: '4:10 PM'
    }
  ],
  '26': [
    {
      id: '1',
      text: "I just received my order! Opening it now...",
      sender: 'customer',
      timestamp: '2:55 PM'
    },
    {
      id: '2',
      text: "Wonderful! I hope everything arrived in perfect condition. Let me know if you have any questions.",
      sender: 'agent',
      timestamp: '2:56 PM'
    },
    {
      id: '3',
      text: "Thanks for the quick delivery! Everything looks perfect 👍",
      sender: 'customer',
      timestamp: '2:58 PM'
    }
  ],
  '32': [
    {
      id: '1',
      text: "I just received my order! Opening it now...",
      sender: 'customer',
      timestamp: '2:52 PM'
    },
    {
      id: '2',
      text: "Wonderful! I hope everything arrived in perfect condition. Let me know if you have any questions.",
      sender: 'agent',
      timestamp: '2:53 PM'
    },
    {
      id: '3',
      text: "Thanks for the quick delivery! Everything looks perfect 👍",
      sender: 'customer',
      timestamp: '2:55 PM'
    }
  ],
  '27': [
    {
      id: '1',
      text: "Hi, I have an appointment scheduled for today at 3 PM.",
      sender: 'customer',
      timestamp: '11:42 AM'
    },
    {
      id: '2',
      text: "Hello Sarah! Yes, I see your appointment. How can I help you?",
      sender: 'agent',
      timestamp: '11:43 AM'
    },
    {
      id: '3',
      text: "Can I change my appointment to tomorrow instead? Something urgent came up.",
      sender: 'customer',
      timestamp: '11:45 AM'
    }
  ],
  '33': [
    {
      id: '1',
      text: "Hi, I have an appointment scheduled for today at 3 PM.",
      sender: 'customer',
      timestamp: '11:37 AM'
    },
    {
      id: '2',
      text: "Hello Jennifer! Yes, I see your appointment. How can I help you?",
      sender: 'agent',
      timestamp: '11:38 AM'
    },
    {
      id: '3',
      text: "Can I change my appointment to tomorrow instead? Something urgent came up.",
      sender: 'customer',
      timestamp: '11:40 AM'
    }
  ],
  '28': [
    {
      id: '1',
      text: "Is your store open today? I'd like to visit in person.",
      sender: 'customer',
      timestamp: 'Yesterday 5:28 PM'
    },
    {
      id: '2',
      text: "Hi Michael! Yes, we're open today until 7 PM. Our address is 123 Main Street. Looking forward to seeing you!",
      sender: 'agent',
      timestamp: 'Yesterday 5:30 PM'
    }
  ],
  '34': [
    {
      id: '1',
      text: "Is your store open today? I'd like to visit in person.",
      sender: 'customer',
      timestamp: 'Yesterday 5:23 PM'
    },
    {
      id: '2',
      text: "Hi David! Yes, we're open today until 7 PM. Our address is 123 Main Street. Looking forward to seeing you!",
      sender: 'agent',
      timestamp: 'Yesterday 5:25 PM'
    }
  ],
  '29': [
    {
      id: '1',
      text: "Hi, I'm interested in your services but wondering about payment options.",
      sender: 'customer',
      timestamp: '3:18 PM'
    },
    {
      id: '2',
      text: "Hello Lisa! We offer several payment options including installment plans. What specific service are you interested in?",
      sender: 'agent',
      timestamp: '3:19 PM'
    },
    {
      id: '3',
      text: "Do you offer payment plans for your services? I'd prefer to pay in installments.",
      sender: 'customer',
      timestamp: '3:20 PM'
    }
  ],
  '35': [
    {
      id: '1',
      text: "Hi, I'm interested in your services but wondering about payment options.",
      sender: 'customer',
      timestamp: '3:13 PM'
    },
    {
      id: '2',
      text: "Hello Karen! We offer several payment options including installment plans. What specific service are you interested in?",
      sender: 'agent',
      timestamp: '3:14 PM'
    },
    {
      id: '3',
      text: "Do you offer payment plans for your services? I'd prefer to pay in installments.",
      sender: 'customer',
      timestamp: '3:15 PM'
    }
  ],
  '30': [
    {
      id: '1',
      text: "Hi, I just signed up for your service but I'm having trouble getting started.",
      sender: 'customer',
      timestamp: '11:28 AM'
    },
    {
      id: '2',
      text: "Hello Chris! Welcome! I'd be happy to help you get set up. What specific area are you having trouble with?",
      sender: 'agent',
      timestamp: '11:29 AM'
    },
    {
      id: '3',
      text: "Hi, I need help setting up my account. Can you guide me through the process?",
      sender: 'customer',
      timestamp: '11:30 AM'
    }
  ],
  '36': [
    {
      id: '1',
      text: "Hi, I just signed up for your service but I'm having trouble getting started.",
      sender: 'customer',
      timestamp: '11:23 AM'
    },
    {
      id: '2',
      text: "Hello Mark! Welcome! I'd be happy to help you get set up. What specific area are you having trouble with?",
      sender: 'agent',
      timestamp: '11:24 AM'
    },
    {
      id: '3',
      text: "Hi, I need help setting up my account. Can you guide me through the process?",
      sender: 'customer',
      timestamp: '11:25 AM'
    }
  ],
  '2': [
    {
      id: '1',
      text: "Hi, I need to get the invoice from last week's service.",
      sender: 'customer',
      timestamp: '10:08 AM'
    },
    {
      id: '2',
      text: "Hello Marcus! I'd be happy to help you with that. Let me locate your invoice from our records.",
      sender: 'agent',
      timestamp: '10:09 AM'
    },
    {
      id: '3',
      text: "Can you resend the invoice from last week?",
      sender: 'customer',
      timestamp: '10:11 AM'
    }
  ],
  '3': [
    {
      id: '1',
      text: "Hi there! I'm looking at your membership options.",
      sender: 'customer',
      timestamp: '11:08 PM'
    },
    {
      id: '2',
      text: "Hello April! I'd be happy to help you choose the right membership plan. What are your main goals?",
      sender: 'agent',
      timestamp: '11:10 PM'
    },
    {
      id: '3',
      text: "I'm unsure which membership plan would be best for me. Can you explain the differences?",
      sender: 'customer',
      timestamp: '11:12 PM'
    }
  ],
  '4': [
    {
      id: '1',
      text: "Hi, I'm having trouble with my account login. Can you help?",
      sender: 'customer',
      timestamp: '12:10 PM'
    },
    {
      id: '2',
      text: "Of course! I'd be happy to help you with your login issue. Can you tell me what specific problem you're experiencing?",
      sender: 'agent',
      timestamp: '12:11 PM'
    },
    {
      id: '3',
      text: "I keep getting an error message saying my password is incorrect, but I'm sure it's right.",
      sender: 'customer',
      timestamp: '12:12 PM'
    },
    {
      id: '4',
      text: "Thanks for assisting me with the password reset. It's working now!",
      sender: 'customer',
      timestamp: '12:13 PM'
    }
  ],
  '5': [
    {
      id: '1',
      text: "Hello, I need to reschedule my appointment tomorrow.",
      sender: 'customer',
      timestamp: '9:15 PM'
    },
    {
      id: '2',
      text: "Hi Karan! No problem at all. What time would work better for you?",
      sender: 'agent',
      timestamp: '9:16 PM'
    },
    {
      id: '3',
      text: "I'd like to change my appointment time to Thursday afternoon if possible.",
      sender: 'customer',
      timestamp: '9:17 PM'
    },
    {
      id: '4',
      text: "Perfect! I've rescheduled your appointment to Thursday at 2 PM. You'll receive a confirmation email shortly.",
      sender: 'agent',
      timestamp: '9:18 PM'
    }
  ],
  '6': [
    {
      id: '1',
      text: "Hi there! I'm interested in your services.",
      sender: 'customer',
      timestamp: '2:35 PM'
    },
    {
      id: '2',
      text: "Hello! Thank you for your interest. I'd be happy to tell you more about our services. What specific area are you interested in?",
      sender: 'agent',
      timestamp: '2:36 PM'
    },
    {
      id: '3',
      text: "I'd like to know more about the service packages and pricing.",
      sender: 'customer',
      timestamp: '2:38 PM'
    },
    {
      id: '4',
      text: "Absolutely! We have three main packages: Basic, Professional, and Enterprise. Each one is designed for different business needs. Would you like me to send you detailed information about each?",
      sender: 'agent',
      timestamp: '2:40 PM'
    }
  ],
  '7': [
    {
      id: '1',
      text: "Love your latest post! Where can I buy this dress?",
      sender: 'customer',
      timestamp: '4:30 PM'
    },
    {
      id: '2',
      text: "Thank you so much! 😊 The dress is from our new summer collection. I'll send you the direct link!",
      sender: 'agent',
      timestamp: '4:31 PM'
    },
    {
      id: '3',
      text: "It's available in sizes XS-XL and comes in three colors: navy, burgundy, and emerald green. Which size and color would you prefer?",
      sender: 'agent',
      timestamp: '4:32 PM'
    }
  ],
  '8': [
    {
      id: '1',
      text: "Is this product still available in size M?",
      sender: 'customer',
      timestamp: '3:14 PM'
    },
    {
      id: '2',
      text: "Hi Tyler! Let me check our inventory for you. Which specific product are you interested in?",
      sender: 'agent',
      timestamp: '3:15 PM'
    }
  ],
  '9': [
    {
      id: '1',
      text: "Hi! I'm interested in the blue sweater from your latest post.",
      sender: 'customer',
      timestamp: '2:25 PM'
    },
    {
      id: '2',
      text: "Great choice! That's one of our bestsellers. It's currently 20% off this week. Would you like me to reserve one for you?",
      sender: 'agent',
      timestamp: '2:26 PM'
    },
    {
      id: '3',
      text: "Yes please! Size small.",
      sender: 'customer',
      timestamp: '2:27 PM'
    },
    {
      id: '4',
      text: "Thanks for the quick response! Just placed my order 🛍️",
      sender: 'customer',
      timestamp: '2:28 PM'
    }
  ],
  '10': [
    {
      id: '1',
      text: "Can you help me track my order from last week?",
      sender: 'customer',
      timestamp: '1:43 PM'
    },
    {
      id: '2',
      text: "Of course! I'd be happy to help you track your order. Can you please provide your order number?",
      sender: 'agent',
      timestamp: '1:44 PM'
    }
  ],
  '11': [
    {
      id: '1',
      text: "Hey! Interested in collaborating on a campaign",
      sender: 'customer',
      timestamp: '12:28 PM'
    },
    {
      id: '2',
      text: "Hi Maya! That sounds exciting! I'd love to hear more about your collaboration ideas. What did you have in mind?",
      sender: 'agent',
      timestamp: '12:29 PM'
    }
  ],
  '12': [
    {
      id: '1',
      text: "Hi! I love your products and I'm interested in ordering.",
      sender: 'customer',
      timestamp: '11:18 AM'
    },
    {
      id: '2',
      text: "Thank you so much! I'm excited to help you find the perfect items. What caught your eye?",
      sender: 'agent',
      timestamp: '11:19 AM'
    },
    {
      id: '3',
      text: "Do you ship internationally? I'm based in Canada.",
      sender: 'customer',
      timestamp: '11:20 AM'
    },
    {
      id: '4',
      text: "Yes, we do ship to Canada! Shipping typically takes 7-10 business days and costs $15 for orders under $100.",
      sender: 'agent',
      timestamp: '11:21 AM'
    }
  ],
  '13': [
    {
      id: '1',
      text: "Hi! I received my order yesterday and I'm so happy with it!",
      sender: 'customer',
      timestamp: '10:12 AM'
    },
    {
      id: '2',
      text: "That's wonderful to hear! Thank you so much for taking the time to let us know. What did you think of the packaging?",
      sender: 'agent',
      timestamp: '10:13 AM'
    },
    {
      id: '3',
      text: "The quality is amazing! Will definitely recommend 💕",
      sender: 'customer',
      timestamp: '10:15 AM'
    }
  ],
  '14': [
    {
      id: '1',
      text: "Hi, I'm thinking about making a purchase but I want to understand your policies first.",
      sender: 'customer',
      timestamp: '9:42 AM'
    },
    {
      id: '2',
      text: "Absolutely! I'm happy to explain our policies. What specifically would you like to know about?",
      sender: 'agent',
      timestamp: '9:43 PM'
    },
    {
      id: '3',
      text: "What are your return policies? How long do I have to return something?",
      sender: 'customer',
      timestamp: '9:45 AM'
    }
  ],
  '15': [
    {
      id: '1',
      text: "Hey! I saw this amazing jacket in your story.",
      sender: 'customer',
      timestamp: '8:28 AM'
    },
    {
      id: '2',
      text: "Hi Zoe! Thank you for reaching out. Which jacket caught your eye? We have a few featured in our recent stories.",
      sender: 'agent',
      timestamp: '8:29 AM'
    },
    {
      id: '3',
      text: "Can I get this in a different color? I love the style but would prefer it in black.",
      sender: 'customer',
      timestamp: '8:30 AM'
    }
  ],
  '16': [
    {
      id: '1',
      text: "Hi! I've been waiting for this item to come back in stock.",
      sender: 'customer',
      timestamp: 'Yesterday 4:20 PM'
    },
    {
      id: '2',
      text: "Hi Ryan! Thank you for your patience. Which item are you waiting for? I can check our restock schedule for you.",
      sender: 'agent',
      timestamp: 'Yesterday 4:22 PM'
    },
    {
      id: '3',
      text: "When will you restock this item? It's been out of stock for weeks.",
      sender: 'customer',
      timestamp: 'Yesterday'
    }
  ],
  '17': [
    {
      id: '1',
      text: "Just wanted to say I absolutely love following your journey! 🌟",
      sender: 'customer',
      timestamp: 'Yesterday 3:15 PM'
    },
    {
      id: '2',
      text: "Aw, thank you so much Ava! That really means the world to me. Comments like yours keep me motivated! 💕",
      sender: 'agent',
      timestamp: 'Yesterday 3:16 PM'
    },
    {
      id: '3',
      text: "Your content is so inspiring! Keep it up ✨",
      sender: 'customer',
      timestamp: 'Yesterday'
    }
  ],
  '18': [
    {
      id: '1',
      text: "Hello, I received my order but there seems to be a problem.",
      sender: 'customer',
      timestamp: 'Yesterday 2:30 PM'
    },
    {
      id: '2',
      text: "Oh no! I'm sorry to hear that. What seems to be the issue with your order? I want to make this right for you.",
      sender: 'agent',
      timestamp: 'Yesterday 2:32 PM'
    },
    {
      id: '3',
      text: "I have an issue with my recent purchase. The item doesn't match what was shown online.",
      sender: 'customer',
      timestamp: 'Yesterday'
    }
  ],
  '19': [
    {
      id: '1',
      text: "Hi! I saw your Facebook ad and I'm interested in learning more",
      sender: 'customer',
      timestamp: '3:40 PM'
    },
    {
      id: '2',
      text: "Hello Isabella! Thank you for reaching out. I'm excited to tell you more about our services. What specifically caught your attention in the ad?",
      sender: 'agent',
      timestamp: '3:41 PM'
    }
  ],
  '20': [
    {
      id: '1',
      text: "Can you provide more details about your pricing plans?",
      sender: 'customer',
      timestamp: '2:18 PM'
    },
    {
      id: '2',
      text: "Absolutely! We have flexible pricing options to suit different needs. Let me share our current packages with you.",
      sender: 'agent',
      timestamp: '2:19 PM'
    }
  ],
  '21': [
    {
      id: '1',
      text: "Hi! I just wanted to reach out about the service I received last week.",
      sender: 'customer',
      timestamp: '1:12 PM'
    },
    {
      id: '2',
      text: "Hello Mia! I hope everything went well. How was your experience with us?",
      sender: 'agent',
      timestamp: '1:13 PM'
    },
    {
      id: '3',
      text: "Thank you for the excellent customer service! Your team was amazing.",
      sender: 'customer',
      timestamp: '1:15 PM'
    }
  ],
  '22': [
    {
      id: '1',
      text: "Hello! I'm interested in your services and would like to see what you offer.",
      sender: 'customer',
      timestamp: '12:02 PM'
    },
    {
      id: '2',
      text: "Hi Lucas! Thank you for your interest. I'd love to show you what we can do. Are you looking for a specific solution?",
      sender: 'agent',
      timestamp: '12:03 PM'
    },
    {
      id: '3',
      text: "Is there a demo available for your product? I'd like to see it in action before making a decision.",
      sender: 'customer',
      timestamp: '12:05 PM'
    }
  ],
  '23': [
    {
      id: '1',
      text: "Hi there! I just signed up for your service but I'm having trouble getting started.",
      sender: 'customer',
      timestamp: '11:28 AM'
    },
    {
      id: '2',
      text: "Hello Chloe! Welcome to our platform! I'd be happy to help you get set up. What specific area are you having trouble with?",
      sender: 'agent',
      timestamp: '11:29 AM'
    },
    {
      id: '3',
      text: "I need help setting up my account. The dashboard is a bit confusing.",
      sender: 'customer',
      timestamp: '11:30 AM'
    }
  ],
  '24': [
    {
      id: '1',
      text: "Hi! I'm interested in attending one of your upcoming events.",
      sender: 'customer',
      timestamp: '10:42 AM'
    },
    {
      id: '2',
      text: "Hello Oliver! That's great to hear. We have several events coming up. Are you interested in a particular topic?",
      sender: 'agent',
      timestamp: '10:43 AM'
    },
    {
      id: '3',
      text: "When is your next webinar scheduled? I'd like to register.",
      sender: 'customer',
      timestamp: '10:45 AM'
    }
  ]
};

// Mock contact information for each chat
const MOCK_CONTACT_INFO: Record<string, ContactInfo> = {
  'e1': {
    name: 'Nathan Cooper',
    phoneNumber: '+14155550142',
    displayName: 'Nathan Cooper',
    username: 'nathan_cooper',
    source: 'customer_initiated_chat_email',
    emailAddress: 'nathan.cooper@gmail.com',
    attributes: {
      tracking_url: 'www.orders.com/1043...',
      discount_code: 'SORRY10'
    }
  },
  'e2': {
    name: 'Priya Nair',
    phoneNumber: '+919845012345',
    displayName: 'Priya N.',
    username: 'priya_nair',
    source: 'customer_initiated_chat_email',
    emailAddress: 'priya.nair@gmail.com',
    attributes: {
      tracking_url: 'www.billing.com/priya...',
      discount_code: 'RENEW15'
    }
  },
  'e3': {
    name: 'Daniel Brooks',
    phoneNumber: '+442079460123',
    displayName: 'Daniel B.',
    username: 'daniel_brooks',
    source: 'customer_initiated_chat_email',
    emailAddress: 'daniel.brooks@gmail.com',
    attributes: {
      tracking_url: 'www.sales.com/bulk-daniel...',
      discount_code: 'BULK15'
    }
  },
  'e4': {
    name: 'Maria Gonzalez',
    phoneNumber: '+13105550188',
    displayName: 'Maria G.',
    username: 'maria_gonzalez',
    source: 'customer_initiated_chat_email',
    emailAddress: 'maria.gonzalez@gmail.com',
    attributes: {
      tracking_url: 'www.support.com/ticket-4471...',
      discount_code: 'CARE10'
    }
  },
  'e5': {
    name: 'James Whitfield',
    phoneNumber: '+12125550170',
    displayName: 'James W.',
    username: 'james_whitfield',
    source: 'customer_initiated_chat_email',
    emailAddress: 'james@whitfieldmedia.com',
    attributes: {
      tracking_url: 'www.partners.com/whitfield...',
      discount_code: 'PARTNER20'
    }
  },
  'e6': {
    name: 'Aisha Rahman',
    phoneNumber: '+60123456789',
    displayName: 'Aisha R.',
    username: 'aisha_rahman',
    source: 'customer_initiated_chat_email',
    emailAddress: 'aisha.rahman@gmail.com',
    attributes: {
      tracking_url: 'www.support.com/feature-2201...',
      discount_code: 'THANKS10'
    }
  },
  '1': {
    name: 'Addison Smith',
    phoneNumber: '+18765432210',
    displayName: 'Addison Smith',
    username: 'addison_smith',
    source: 'customer_initiated_chat_wa',
    attributes: {
      tracking_url: 'www.consultation.com/addi...',
      discount_code: 'CONSULT20'
    }
  },
  '25': {
    name: 'Rachel Martinez',
    phoneNumber: '+15559876543',
    displayName: 'Rachel M.',
    username: 'rachel_martinez',
    source: 'customer_initiated_chat_sms',
    attributes: {
      tracking_url: 'www.pricing.com/rachel...',
      discount_code: 'FIRST15'
    }
  },
  '31': {
    name: 'Patricia Lopez',
    phoneNumber: '+15559876544',
    displayName: 'Patricia L.',
    username: 'patricia_lopez',
    source: 'customer_initiated_chat_rcs',
    attributes: {
      tracking_url: 'www.pricing.com/patricia...',
      discount_code: 'FIRST15'
    }
  },
  '26': {
    name: 'James Wilson',
    phoneNumber: '+15551234567',
    displayName: 'James W.',
    username: 'james_wilson',
    source: 'order_confirmation_sms',
    attributes: {
      tracking_url: 'www.orders.com/james...',
      discount_code: 'LOYAL10'
    }
  },
  '32': {
    name: 'Robert Anderson',
    phoneNumber: '+15551234568',
    displayName: 'Robert A.',
    username: 'robert_anderson',
    source: 'order_confirmation_rcs',
    attributes: {
      tracking_url: 'www.orders.com/robert...',
      discount_code: 'LOYAL10'
    }
  },
  '27': {
    name: 'Sarah Thompson',
    phoneNumber: '+15552468135',
    displayName: 'Sarah T.',
    username: 'sarah_thompson',
    source: 'appointment_change_sms',
    attributes: {
      tracking_url: 'www.appointments.com/sarah...',
      discount_code: 'RESCHEDULE'
    }
  },
  '33': {
    name: 'Jennifer Taylor',
    phoneNumber: '+15552468136',
    displayName: 'Jennifer T.',
    username: 'jennifer_taylor',
    source: 'appointment_change_rcs',
    attributes: {
      tracking_url: 'www.appointments.com/jennifer...',
      discount_code: 'RESCHEDULE'
    }
  },
  '28': {
    name: 'Michael Davis',
    phoneNumber: '+15551357924',
    displayName: 'Michael D.',
    username: 'michael_davis',
    source: 'store_inquiry_sms',
    attributes: {
      tracking_url: 'www.store.com/michael...',
      discount_code: 'VISIT10'
    }
  },
  '34': {
    name: 'David Miller',
    phoneNumber: '+15551357925',
    displayName: 'David M.',
    username: 'david_miller',
    source: 'store_inquiry_rcs',
    attributes: {
      tracking_url: 'www.store.com/david...',
      discount_code: 'VISIT10'
    }
  },
  '29': {
    name: 'Lisa Garcia',
    phoneNumber: '+15558642097',
    displayName: 'Lisa G.',
    username: 'lisa_garcia',
    source: 'payment_inquiry_sms',
    attributes: {
      tracking_url: 'www.payments.com/lisa...',
      discount_code: 'PAYMENT15'
    }
  },
  '35': {
    name: 'Karen White',
    phoneNumber: '+15558642098',
    displayName: 'Karen W.',
    username: 'karen_white',
    source: 'payment_inquiry_rcs',
    attributes: {
      tracking_url: 'www.payments.com/karen...',
      discount_code: 'PAYMENT15'
    }
  },
  '30': {
    name: 'Chris Johnson',
    phoneNumber: '+15559753108',
    displayName: 'Chris J.',
    username: 'chris_johnson',
    source: 'account_setup_sms',
    attributes: {
      tracking_url: 'www.setup.com/chris...',
      discount_code: 'SETUP20'
    }
  },
  '36': {
    name: 'Mark Brown',
    phoneNumber: '+15559753109',
    displayName: 'Mark B.',
    username: 'mark_brown',
    source: 'account_setup_rcs',
    attributes: {
      tracking_url: 'www.setup.com/mark...',
      discount_code: 'SETUP20'
    }
  },
  '4': {
    name: 'April Boyer',
    phoneNumber: '+15551234567',
    displayName: 'April B.',
    username: 'april_boyer',
    source: 'customer_support_wa',
    attributes: {
      tracking_url: 'www.support.com/april...',
      discount_code: 'SUPPORT10'
    }
  },
  '5': {
    name: 'Karan Sharma',
    phoneNumber: '+919876543210',
    displayName: 'Karan Sharma',
    username: 'karan_s',
    source: 'appointment_reschedule_wa',
    attributes: {
      tracking_url: 'www.bookings.com/karan...',
      discount_code: 'RESCHEDULE'
    }
  },
  '6': {
    name: 'Prateek Singh',
    phoneNumber: '+919123456789',
    displayName: 'Prateek Singh',
    username: 'prateek_singh',
    source: 'service_inquiry_wa',
    attributes: {
      tracking_url: 'www.services.com/prateek...',
      discount_code: 'NEWCUSTOMER'
    }
  },
  '7': {
    name: 'Emma Rodriguez',
    phoneNumber: '+15559876543',
    displayName: 'Emma Rodriguez',
    username: 'emma_style',
    source: 'customer_initiated_chat_ig',
    attributes: {
      tracking_url: 'www.fashion.com/emma...',
      discount_code: 'SUMMER25'
    }
  },
  '8': {
    name: 'Tyler Johnson',
    phoneNumber: '+15557654321',
    displayName: 'Tyler J.',
    username: 'tyler_j',
    source: 'product_inquiry_ig',
    attributes: {
      tracking_url: 'www.store.com/tyler...',
      discount_code: 'SIZEM10'
    }
  }
};

// Constants
const BREAKPOINTS = {
  mobile: 768,
  tablet: 1024,
  desktop: 1280
} as const;

// Helper function to check if a date falls within a range
const isDateInRange = (date: Date, range: DateRange): boolean => {
  if (!range.from || !range.to) return true;
  
  const dateTime = date.getTime();
  const fromTime = range.from.getTime();
  const toTime = range.to.getTime();
  
  return dateTime >= fromTime && dateTime <= toTime;
};

// Helper function to check if a chat is expiring soon (for mock purposes)
const isExpiringSoon = (chat: Chat): boolean => {
  // Mock logic: chats older than 2 weeks with status 'Open' are considered expiring soon
  const twoWeeksAgo = new Date();
  twoWeeksAgo.setDate(twoWeeksAgo.getDate() - 14);
  return chat.status === 'Open' && chat.date < twoWeeksAgo;
};

// Filter application logic
const applyFilterToChat = (chat: Chat, selectedFilter: string, customFilters: CustomFilter[]): boolean => {
  console.log(`🔍 Applying filter "${selectedFilter}" to chat:`, {
    chatId: chat.id,
    chatName: chat.name,
    status: chat.status,
    unread: chat.unread,
    category: chat.category,
    channel: chat.channel,
    isOnline: chat.isOnline
  });

  // Check if it's a custom filter
  const customFilter = customFilters.find(filter => filter.name === selectedFilter);
  if (customFilter) {
    console.log(`🎛️ Applying custom filter:`, customFilter);
    // Apply custom filter logic (simplified implementation)
    return customFilter.segments.every(segment => {
      switch (segment.attribute.toLowerCase()) {
        case 'status':
          return chat.status.toLowerCase() === segment.value.toLowerCase();
        case 'assignee':
          // Mock: assume all chats are assigned to current user for demo
          return segment.value.toLowerCase() === 'me';
        case 'team':
          // Mock: match based on category
          return chat.category.toLowerCase() === segment.value.toLowerCase();
        case 'tag':
          // Mock: match based on channel for demo
          return chat.channel.toLowerCase() === segment.value.toLowerCase();
        default:
          return true;
      }
    });
  }

  // Apply predefined filters
  let result = false;
  switch (selectedFilter) {
    case 'All Chats':
      result = true;
      break;
    
    case 'Active Chats':
      result = chat.status === 'Open';
      break;
    
    case 'Assigned to me':
      // Mock: assume all chats are assigned to current user
      result = true;
      break;
    
    case 'Unassigned':
      // Mock: for demo purposes, let's say some chats are unassigned
      // We'll use a simple logic: chats with id ending in odd numbers are unassigned
      result = parseInt(chat.id) % 2 === 1;
      break;
    
    case 'Favourites':
      // Mock: for demo purposes, let's say some chats are favourites
      // We'll use chat.category === 'Partnership' as favourites
      result = chat.category === 'Partnership';
      break;
    
    case 'Expiring Soon':
      result = isExpiringSoon(chat);
      break;
    
    case 'Solved':
      result = chat.status === 'Solved';
      break;
    
    case 'Sales':
      result = chat.category === 'Sales';
      break;
    
    case 'Support':
      result = chat.category === 'Support';
      break;
    
    case 'WhatsApp':
      result = chat.channel === 'WhatsApp';
      break;
    
    case 'Instagram':
      result = chat.channel === 'Instagram';
      break;
    
    case 'Messenger':
      result = chat.channel === 'Messenger';
      break;
    
    case 'SMS':
      result = chat.channel === 'SMS';
      break;
    
    case 'RCS':
      result = chat.channel === 'RCS';
      break;

    case 'Email':
      result = chat.channel === 'Email';
      break;

    case 'Online customers':
      result = chat.isOnline;
      break;
    
    default:
      result = true;
      break;
  }

  console.log(`✅ Filter result for ${chat.name}: ${result}`);
  return result;
};

// Custom hooks
function useScreenSize(): ScreenSizes {
  const [screenSizes, setScreenSizes] = useState<ScreenSizes>({
    isMobile: false,
    isTablet: false,
    isDesktop: true
  });

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setScreenSizes({
        isMobile: width < BREAKPOINTS.mobile,
        isTablet: width >= BREAKPOINTS.mobile && width < BREAKPOINTS.desktop,
        isDesktop: width >= BREAKPOINTS.desktop
      });
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return screenSizes;
}

function useResponsiveLayout(screenSizes: ScreenSizes) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isContactInfoVisible, setIsContactInfoVisible] = useState(true);

  useEffect(() => {
    const { isMobile, isTablet, isDesktop } = screenSizes;
    
    // Auto-collapse sidebar on mobile and tablet
    if (isMobile || isTablet) {
      setIsSidebarCollapsed(true);
    } else {
      setIsSidebarCollapsed(false);
    }
    
    // Auto-hide contact info on mobile, keep open on desktop by default
    if (isMobile) {
      setIsContactInfoVisible(false);
    } else if (isDesktop) {
      // Keep contact info visible by default on desktop
      setIsContactInfoVisible(prev => prev === false ? prev : true);
    }
  }, [screenSizes]);

  return {
    isSidebarCollapsed,
    setIsSidebarCollapsed,
    isContactInfoVisible,
    setIsContactInfoVisible
  };
}

export default function App() {
  // State management
  const [selectedChat, setSelectedChat] = useState<Chat>(MOCK_CHATS[0]);
  const [selectedFilter, setSelectedFilter] = useState<string>('All Chats');
  const [selectedChannel, setSelectedChannel] = useState<string>('All Channels');
  const [dateRange, setDateRange] = useState<DateRange>({ from: undefined, to: undefined });
  const [messages, setMessages] = useState<Record<string, Message[]>>(INITIAL_MOCK_MESSAGES);
  const [customFilters, setCustomFilters] = useState<CustomFilter[]>([]);
  // Chat status/assignment overrides for bulk actions
  const [chatOverrides, setChatOverrides] = useState<Record<string, Partial<Chat>>>({});
  // Conversations started from the composer (new recipient, no existing thread)
  const [composedChats, setComposedChats] = useState<Chat[]>([]);
  // The net-new-recipient composer is a modal; composing to a contact already on
  // screen happens inline in the chat area instead.
  const [isComposeOpen, setIsComposeOpen] = useState(false);
  // Custom hooks
  const screenSizes = useScreenSize();
  const {
    isSidebarCollapsed,
    setIsSidebarCollapsed,
    isContactInfoVisible,
    setIsContactInfoVisible
  } = useResponsiveLayout(screenSizes);

  // Enhanced filtering logic with comprehensive filter support
  // Merge static mock chats with any runtime overrides (from bulk actions)
  const allChats = useMemo(() => {
    return [...composedChats, ...MOCK_CHATS].map(chat => {
      const merged = { ...chat, ...(chatOverrides[chat.id] || {}) };
      if (merged.channel !== 'Email') return merged;
      // Derive the list's subject/snippet from the thread itself so a newly sent
      // email updates the row instead of leaving the seeded text behind.
      const thread = (messages[chat.id] || []).filter(m => m.type !== 'event');
      const last = thread[thread.length - 1];
      if (!last) return merged;
      // Use the newest message's own subject so the row names the same thread the
      // latest activity sits in — including "No subject" when it has none.
      return {
        ...merged,
        subject: normalizeSubject(last.subject),
        preview: last.text,
      };
    });
  }, [chatOverrides, composedChats, messages]);

  const filteredChats = useMemo(() => {
    const filtered = allChats.filter(chat => {
      if (selectedChannel !== 'All Channels' && chat.channel !== selectedChannel) return false;
      if (!isDateInRange(chat.date, dateRange)) return false;
      if (!applyFilterToChat(chat, selectedFilter, customFilters)) return false;
      return true;
    }).sort((a, b) => b.date.getTime() - a.date.getTime());
    return filtered;
  }, [allChats, selectedChannel, selectedFilter, dateRange, customFilters]);

  const chatCounts = useMemo((): ChatCounts => ({
    all: allChats.length,
    whatsapp: allChats.filter(chat => chat.channel === 'WhatsApp').length,
    instagram: allChats.filter(chat => chat.channel === 'Instagram').length,
    messenger: allChats.filter(chat => chat.channel === 'Messenger').length,
    sms: allChats.filter(chat => chat.channel === 'SMS').length,
    rcs: allChats.filter(chat => chat.channel === 'RCS').length,
    email: allChats.filter(chat => chat.channel === 'Email').length
  }), [allChats]);

  // Get current chat messages and contact info
  const currentMessages = useMemo(() => {
    // Fall back to the seed thread if the live state has no entry for this chat yet
    // (e.g. conversations added after the initial mount during dev hot-reload).
    return messages[selectedChat.id] || INITIAL_MOCK_MESSAGES[selectedChat.id] || [];
  }, [messages, selectedChat.id]);

  const currentContactInfo = useMemo(() => {
    const existing = MOCK_CONTACT_INFO[selectedChat.id];
    if (existing) return existing;

    // For a conversation we started, the real address is the one we sent to.
    const thread = messages[selectedChat.id] || [];
    const known =
      [...thread].reverse().find(m => m.fromAddress && m.sender === 'customer')?.fromAddress ||
      [...thread].reverse().find(m => m.toAddresses && m.toAddresses.length > 0)?.toAddresses?.[0];

    const isComposed = selectedChat.id.startsWith('compose-');
    return {
      name: selectedChat.name,
      phoneNumber: '+1234567890',
      displayName: selectedChat.name,
      username: selectedChat.name.toLowerCase().replace(' ', '_'),
      source: isComposed
        ? 'agent_initiated_email'
        : `customer_initiated_chat_${selectedChat.channel.toLowerCase()}`,
      emailAddress: selectedChat.channel === 'Email'
        ? known || `${selectedChat.name.toLowerCase().replace(/\s+/g, '.')}@gmail.com`
        : undefined,
      attributes: {
        tracking_url: 'www.example.com/track...',
        discount_code: 'WELCOME10'
      }
    };
  }, [selectedChat, messages]);

  // Event handlers
  const handleToggleContactInfo = useCallback(() => {
    setIsContactInfoVisible(prev => !prev);
  }, [setIsContactInfoVisible]);

  const handleToggleSidebar = useCallback(() => {
    setIsSidebarCollapsed(prev => !prev);
  }, [setIsSidebarCollapsed]);

  const handleSelectChat = useCallback((chat: Chat) => {
    setSelectedChat(chat);
  }, []);

  const handleSendMessage = useCallback((messageText: string, emailMeta?: {
    subject?: string;
    toAddresses?: string[];
    cc?: string[];
    bcc?: string[];
  }) => {
    const now = new Date();
    const timestamp = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const newMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      sender: 'agent',
      timestamp: timestamp,
      ...(emailMeta || {})
    };

    setMessages(prev => ({
      ...prev,
      [selectedChat.id]: [...(prev[selectedChat.id] || []), newMessage]
    }));
  }, [selectedChat.id]);

  // A composed email either continues an existing email conversation (matched by
  // recipient address) or opens a new one. Either way we land the agent in it.
  const handleComposeSend = useCallback((payload: ComposeSend) => {
    const now = new Date();
    const timestamp = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const primary = (payload.toAddresses[0] || '').toLowerCase();

    const newMessage: Message = {
      id: `c${Date.now()}`,
      text: payload.text,
      sender: 'agent',
      timestamp,
      subject: payload.subject || 'No subject',
      fromAddress: 'support@wati.io',
      toAddresses: payload.toAddresses,
      cc: payload.cc,
      bcc: payload.bcc,
    };

    const existing = [...composedChats, ...MOCK_CHATS].find(
      chat =>
        chat.channel === 'Email' &&
        (messages[chat.id] || []).some(m => (m.fromAddress || '').toLowerCase() === primary)
    );

    if (existing) {
      setMessages(prev => ({ ...prev, [existing.id]: [...(prev[existing.id] || []), newMessage] }));
      setSelectedChat(existing);
      setIsComposeOpen(false);
      return;
    }

    // Name the new contact from the address until they reply with something better.
    const localPart = primary.split('@')[0] || 'New contact';
    const name = localPart
      .split(/[._-]+/)
      .filter(Boolean)
      .map(part => part.charAt(0).toUpperCase() + part.slice(1))
      .join(' ') || 'New contact';

    const chat: Chat = {
      id: `compose-${Date.now()}`,
      name,
      avatar: name.split(' ').map(p => p[0]).slice(0, 2).join('').toUpperCase(),
      subject: payload.subject || 'No subject',
      preview: payload.text,
      lastMessage: payload.text,
      timestamp,
      date: now,
      status: 'Open',
      channel: 'Email',
      isOnline: false,
      unread: false,
      category: 'Support',
    };

    setComposedChats(prev => [chat, ...prev]);
    setMessages(prev => ({ ...prev, [chat.id]: [newMessage] }));
    setSelectedChat(chat);
    setIsComposeOpen(false);
  }, [composedChats, messages]);

  const handleDateRangeChange = useCallback((range: DateRange) => {
    setDateRange(range);
  }, []);

  const handleDateFilterClear = useCallback(() => {
    setDateRange({ from: undefined, to: undefined });
  }, []);

  const handleCustomFilterApply = useCallback((filters: FilterSegment[], showOldChatsFirst: boolean, saveAsCustom?: boolean, customFilterName?: string) => {
    // If user wants to save as custom filter and provided a name
    if (saveAsCustom && customFilterName && customFilterName.trim()) {
      const newCustomFilter: CustomFilter = {
        id: Date.now().toString(),
        name: customFilterName.trim(),
        segments: filters,
        showOldChatsFirst: showOldChatsFirst,
        createdAt: new Date()
      };
      
      setCustomFilters(prev => [...prev, newCustomFilter]);
    }
    
    // Apply the filters (existing functionality)
    console.log('Applied custom filters:', filters, 'Show old chats first:', showOldChatsFirst);
  }, []);

  const handleBulkAction = useCallback((chatIds: string[], action: { type: string; [key: string]: any }) => {
    setChatOverrides(prev => {
      const next = { ...prev };
      chatIds.forEach(id => {
        const existing = next[id] || {};
        if (action.type === 'solve') {
          next[id] = { ...existing, status: 'Solved' };
        } else if (action.type === 'reopen') {
          next[id] = { ...existing, status: 'Open' };
        } else if (action.type === 'pending') {
          next[id] = { ...existing, status: 'Open' }; // pending maps to open for display
        } else if (action.type === 'assign') {
          next[id] = { ...existing };
        } else if (action.type === 'unassign') {
          next[id] = { ...existing };
        }
      });
      return next;
    });
  }, []);

  const handleCustomFilterDelete = useCallback((filterId: string) => {
    setCustomFilters(prev => prev.filter(filter => filter.id !== filterId));
    
    // If the deleted filter was currently selected, reset to default filter
    const deletedFilter = customFilters.find(filter => filter.id === filterId);
    if (deletedFilter && selectedFilter === deletedFilter.name) {
      setSelectedFilter('All Chats');
    }
  }, [customFilters, selectedFilter]);

  // Debug: Log filter changes
  useEffect(() => {
    console.log(`🔄 selectedFilter changed to: "${selectedFilter}"`);
  }, [selectedFilter]);

  // Responsive classes
  const chatListClasses = useMemo(() => {
    const { isMobile, isTablet } = screenSizes;
    
    if (isMobile) return 'w-full';
    if (isTablet) return 'w-80 min-w-80';
    return 'w-96 min-w-96';
  }, [screenSizes]);

  const mainContentClasses = useMemo(() => {
    const { isMobile } = screenSizes;
    return `flex flex-1 min-w-0 ${
      isMobile && isContactInfoVisible ? 'hidden' : 'flex'
    }`;
  }, [screenSizes.isMobile, isContactInfoVisible]);

  // Render resize handle
  const renderResizeHandle = () => (
    <ResizableHandle className="group w-1 bg-transparent hover:bg-gray-100/50 transition-all duration-200 relative">
      {/* Invisible wider hit area for easier grabbing */}
      <div className="absolute inset-y-0 left-1/2 w-3 -translate-x-1/2" />
      
      {/* Visible divider that appears on hover */}
      <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
      
      {/* Three vertical lines handle - visible only on hover */}
      <div className="absolute inset-y-0 left-1/2 w-3 -translate-x-1/2 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <div className="flex space-x-0.5">
          <div className="w-px h-4 bg-gray-500 rounded-full"></div>
          <div className="w-px h-4 bg-gray-500 rounded-full"></div>
          <div className="w-px h-4 bg-gray-500 rounded-full"></div>
        </div>
      </div>
    </ResizableHandle>
  );

  return (
    <div className="h-screen flex flex-col bg-gray-50 overflow-hidden">
      <GlobalHeader />
      <div className="flex flex-1 overflow-hidden">
        {/* Main Navigation - Left sidebar with app navigation */}
        {!screenSizes.isMobile && (
          <MainNavigation />
        )}

        {/* Team Inbox Sidebar - Filters and channels */}
        {!screenSizes.isMobile && (
          <Sidebar 
            selectedFilter={selectedFilter}
            setSelectedFilter={setSelectedFilter}
            selectedChannel={selectedChannel}
            setSelectedChannel={setSelectedChannel}
            isCollapsed={isSidebarCollapsed}
            chatCounts={chatCounts}
            customFilters={customFilters}
            onCustomFilterDelete={handleCustomFilterDelete}
          />
        )}

        {/* Main Content Area */}
        <div className="flex flex-1 min-w-0">
          {/* Chat List - Always visible but responsive width */}
          <div className={`${chatListClasses} border-r border-gray-200 bg-white flex flex-col`}>
            <ChatList
              chats={filteredChats}
              selectedChat={selectedChat}
              onSelectChat={handleSelectChat}
              onBulkAction={handleBulkAction}
              isSidebarCollapsed={isSidebarCollapsed}
              onToggleSidebar={handleToggleSidebar}
              dateRange={dateRange}
              onDateRangeChange={handleDateRangeChange}
              onDateFilterClear={handleDateFilterClear}
              onCustomFilterApply={handleCustomFilterApply}
              selectedFilter={selectedFilter}
              selectedChannel={selectedChannel}
              onComposeEmail={() => setIsComposeOpen(true)}
            />
          </div>

          {/* Chat Interface and Contact Info - Resizable on desktop with smooth transitions */}
          <div className={mainContentClasses}>
            <div className="flex flex-1 relative overflow-hidden">
              {/* Chat Messages Panel */}
              <div 
                className={`flex-1 min-w-0 transition-all duration-300 ease-in-out ${
                  !screenSizes.isMobile && isContactInfoVisible 
                    ? 'mr-0' 
                    : 'mr-0'
                }`}
              >
                <ChatInterface 
                  selectedChat={selectedChat}
                  messages={currentMessages}
                  onSendMessage={handleSendMessage}
                  onToggleContactInfo={handleToggleContactInfo}
                  isContactInfoVisible={isContactInfoVisible}
                  isMobile={screenSizes.isMobile}
                />
              </div>

              {/* Contact Info Panel with sliding animation */}
              {!screenSizes.isMobile && (
                <div 
                  className={`transition-all duration-300 ease-in-out bg-white border-l border-gray-200 ${
                    isContactInfoVisible 
                      ? 'w-[330px] min-w-[330px] opacity-100 translate-x-0' 
                      : 'w-0 min-w-0 opacity-0 translate-x-full overflow-hidden'
                  }`}
                  style={{
                    transitionProperty: 'width, min-width, opacity, transform',
                  }}
                >
                  <div className={`h-full w-[330px] ${isContactInfoVisible ? 'block' : 'hidden'}`}>
                    <ContactInfo 
                      contact={currentContactInfo}
                      onClose={() => setIsContactInfoVisible(false)}
                      isMobile={screenSizes.isMobile}
                    />
                  </div>
                </div>
              )}

              {/* Contact Info - Mobile overlay */}
              {screenSizes.isMobile && isContactInfoVisible && (
                <div className="fixed inset-0 z-50 bg-white">
                  <ContactInfo 
                    contact={currentContactInfo}
                    onClose={() => setIsContactInfoVisible(false)}
                    isMobile={screenSizes.isMobile}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Compose surfaces: one from the list (blank), one for the open contact */}
      <ComposeEmailDialog
        open={isComposeOpen}
        onOpenChange={setIsComposeOpen}
        draftId="compose:blank"
        title="New email"
        description="Start a conversation with a new recipient."
        onSend={handleComposeSend}
      />
    </div>
  );
}