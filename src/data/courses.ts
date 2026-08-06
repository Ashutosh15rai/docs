export interface Course {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  level: string;
  lessons: number;
  price: string;
  priceNote?: string;
  lastUpdated: string;
  image?: string;
  featured?: boolean;
}

export const COURSES: Course[] = [
  {
    id: 'options-mastery',
    slug: 'vriddhi-options-mastery-program',
    title: 'Vriddhi Options Mastery Program',
    subtitle: 'Master Options. Manage Risk. Maximize Returns.',
    description:
      'Vriddhi Options Mastery Program is a comprehensive recorded course designed for beginners, traders, and working professionals who want to build a strong foundation in stock market and options trading.',
    badge: 'Pro',
    level: 'Beginner to Advanced',
    lessons: 20,
    price: 'Free',
    priceNote: 'No payment required',
    lastUpdated: 'June 2, 2026',
    featured: true,
  },
];

export const FEATURED_COURSES = COURSES.filter((c) => c.featured);
