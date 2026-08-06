export interface Plan {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  period: string;
  description: string;
  features: string[];
  featured?: boolean;
}

export const PLANS: Plan[] = [
  {
    id: 'monthly',
    name: 'Monthly Plan',
    price: 24999,
    originalPrice: 29999,
    period: 'month',
    description: 'Ideal for active traders who want continuous research support and market insights on a monthly basis.',
    features: [
      'Trade Alerts on WhatsApp',
      'Directional Trades for Nifty & Bank Nifty',
      'Entry & Exit Levels with Targets & Stop-Loss',
      'Morning Special Trades',
      'Expiry Special Trades',
      'Swing Trade Recommendations',
      'Free Educational Sessions',
      'Trading Psychology & Money Management',
    ],
  },
  {
    id: 'quarterly',
    name: 'Quarterly Plan',
    price: 59999,
    originalPrice: 74999,
    period: 'quarter',
    description: 'Best value for committed traders who want 3 months of uninterrupted research support and learning.',
    features: [
      'Everything in Monthly Plan',
      'Priority Support',
      '1 Month Free Extension',
      'Exclusive Quarterly Webinars',
      'Personal Trade Review Session',
      'Advanced Strategy Sessions',
      'Dedicated Research Calls',
      'Comprehensive Market Analysis',
    ],
    featured: true,
  },
];
