export interface Instructor {
  name: string;
  title: string;
  bio: string;
  photo?: string;
  certifications: string[];
  experience: string;
  sebiReg?: string;
}

export const INSTRUCTORS: Instructor[] = [
  {
    name: 'Yeshwant Bhisham Valecha',
    title: 'Founder & Lead Research Analyst',
    bio:
      'SEBI Registered Research Analyst with over 5 years of experience in Indian equity markets. Specializes in index research, options strategies, and building systematic trading frameworks. Passionate about making financial education accessible to every Indian trader.',
    certifications: ['SEBI RA', 'NISM Certified'],
    experience: '5+ Years',
    sebiReg: 'INH000027593',
  },
];
