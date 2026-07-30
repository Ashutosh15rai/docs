export interface Testimonial {
  id: string;
  quote: string;
  authorName: string;
  authorTitle: string;
  rating: 1 | 2 | 3 | 4 | 5;
  avatarInitial: string;
  avatarColor: string;
  course?: string;
  featured?: boolean;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    quote:
      'The Options Mastery Program completely changed how I approach the market. The structured curriculum and real-time examples helped me move from random trades to a systematic process.',
    authorName: 'Rahul',
    authorTitle: 'Active Subscriber, 8 months',
    rating: 5,
    avatarInitial: 'R',
    avatarColor: 'bg-blue-100 text-blue-700',
    course: 'Options Mastery Program',
    featured: true,
  },
  {
    id: 't2',
    quote:
      'I joined the free community first and was impressed by the quality of daily insights. Upgrading to the premium plan was the best decision for my trading journey.',
    authorName: 'Priya',
    authorTitle: 'Premium Member, 1 year',
    rating: 5,
    avatarInitial: 'P',
    avatarColor: 'bg-green-100 text-green-700',
    featured: true,
  },
  {
    id: 't3',
    quote:
      'The risk management module alone saved me from several bad trades. Understanding position sizing changed everything about how I allocate capital.',
    authorName: 'Amit',
    authorTitle: 'Course Graduate',
    rating: 5,
    avatarInitial: 'A',
    avatarColor: 'bg-amber-100 text-amber-700',
    featured: false,
  },
  {
    id: 't4',
    quote:
      'As a complete beginner, the Technical Analysis course gave me the confidence to start reading charts. The instructors explain complex concepts in simple terms.',
    authorName: 'Sneha',
    authorTitle: 'Beginner Trader',
    rating: 4,
    avatarInitial: 'S',
    avatarColor: 'bg-purple-100 text-purple-700',
    featured: false,
  },
  {
    id: 't5',
    quote:
      'The daily market insights are incredibly valuable. Having a SEBI-registered analyst guide my learning gives me confidence that I am receiving quality education.',
    authorName: 'Vikram',
    authorTitle: 'Premium Member, 6 months',
    rating: 5,
    avatarInitial: 'V',
    avatarColor: 'bg-rose-100 text-rose-700',
    featured: true,
  },
];

export const FEATURED_TESTIMONIALS = TESTIMONIALS.filter((t) => t.featured);
