export interface Course {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  thumbnail: string;
  badge?: { label: string; color: 'orange' | 'blue' | 'green' };
  price: number | 'free';
  originalPrice?: number;
  lessonCount: number;
  duration: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  instructor: string;
  enrolled?: number;
  rating?: number;
  tags: string[];
  featured?: boolean;
}

export const COURSES: Course[] = [
  {
    slug: 'options-mastery',
    title: 'Options Mastery Program',
    subtitle: 'From Basics to Advanced Strategies',
    description:
      'A comprehensive program covering options fundamentals, greeks, volatility analysis, and advanced spread strategies. Designed for traders who want to build a systematic approach to options trading.',
    thumbnail: '/images/courses/options-mastery.jpg',
    badge: { label: 'Pro', color: 'orange' },
    price: 24999,
    originalPrice: 34999,
    lessonCount: 42,
    duration: '8 weeks',
    level: 'intermediate',
    instructor: 'Yeshwant Bhisham Valecha',
    enrolled: 1240,
    rating: 4.8,
    tags: ['Options', 'Derivatives', 'Risk Management'],
    featured: true,
  },
  {
    slug: 'technical-analysis-fundamentals',
    title: 'Technical Analysis Fundamentals',
    subtitle: 'Read Charts Like a Professional',
    description:
      'Master candlestick patterns, support/resistance, trend analysis, and chart formations. Build the foundation every trader needs before entering the markets.',
    thumbnail: '/images/courses/technical-analysis.jpg',
    badge: { label: 'Popular', color: 'blue' },
    price: 14999,
    originalPrice: 19999,
    lessonCount: 28,
    duration: '6 weeks',
    level: 'beginner',
    instructor: 'Yeshwant Bhisham Valecha',
    enrolled: 2150,
    rating: 4.7,
    tags: ['Technical Analysis', 'Chart Patterns', 'Price Action'],
    featured: true,
  },
  {
    slug: 'digital-marketing-pro',
    title: 'Digital Marketing Pro',
    subtitle: 'Grow Brands with Data-Driven Marketing',
    description:
      'Learn SEO, social media marketing, paid advertising, content strategy, and analytics. Build campaigns that convert and grow any business online.',
    thumbnail: '/images/courses/digital-marketing.jpg',
    badge: { label: 'New', color: 'green' },
    price: 18999,
    originalPrice: 24999,
    lessonCount: 36,
    duration: '10 weeks',
    level: 'beginner',
    instructor: 'Vriddhi Team',
    enrolled: 890,
    rating: 4.9,
    tags: ['SEO', 'Social Media', 'Google Ads', 'Analytics'],
    featured: true,
  },
  {
    slug: 'risk-management-workshop',
    title: 'Risk Management Workshop',
    subtitle: 'Protect Your Capital, Trade Longer',
    description:
      'Position sizing, stop-loss strategies, portfolio diversification, and psychological discipline. The most overlooked skill in trading.',
    thumbnail: '/images/courses/risk-management.jpg',
    price: 'free',
    lessonCount: 12,
    duration: '2 weeks',
    level: 'beginner',
    instructor: 'Yeshwant Bhisham Valecha',
    enrolled: 3420,
    rating: 4.6,
    tags: ['Risk Management', 'Psychology', 'Position Sizing'],
    featured: false,
  },
];

export const FEATURED_COURSES = COURSES.filter((c) => c.featured);
