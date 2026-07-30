export interface Statistic {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

export const STATISTICS: Statistic[] = [
  { label: 'Active Students', value: 8500, suffix: '+' },
  { label: 'Courses Delivered', value: 12, suffix: '+' },
  { label: 'SEBI Registered', value: 5, suffix: '+ Years' },
  { label: 'Community Members', value: 15000, suffix: '+' },
];
