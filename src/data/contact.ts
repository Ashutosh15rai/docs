export interface ContactChannel {
  badge: string;
  icon: string;
  title: string;
  description: string;
  linkLabel: string;
  linkHref: string;
  variant: 'highlighted' | 'default';
}

export const CONTACT_CHANNELS: ContactChannel[] = [
  {
    badge: 'RECOMMENDED',
    icon: 'whatsapp',
    title: 'WhatsApp Community',
    description: 'Join our free community for daily NIFTY & BANKNIFTY market updates and direct access to our research team.',
    linkLabel: 'Join Free Community →',
    linkHref: 'https://wa.me/919082318833',
    variant: 'highlighted',
  },
  {
    badge: 'ENQUIRIES',
    icon: 'email',
    title: 'Email Us',
    description: 'For subscriptions, course enquiries, research queries, compliance questions, and formal communications.',
    linkLabel: 'support@vriddhiresearch.com →',
    linkHref: 'mailto:support@vriddhiresearch.com',
    variant: 'default',
  },
  {
    badge: 'SUPPORT',
    icon: 'phone',
    title: 'Call / WhatsApp',
    description: 'Speak to our support team directly. Available Mon-Sat, 10 AM – 6 PM IST. Use WhatsApp for faster response.',
    linkLabel: '+91 90823 18833 →',
    linkHref: 'tel:+919082318833',
    variant: 'default',
  },
];

export const CONTACT_INFO = {
  companyName: 'Vriddhi Research',
  sebiReg: 'INH000027593',
  email: 'support@vriddhiresearch.com',
  phone: '+91 90823 18833',
  hours: 'Mon – Sat, 10:00 AM – 6:00 PM IST',
};
