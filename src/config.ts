// Placeholder site config — replace with your own details.
export const SITE = {
  title: 'Spoon3775 — Portfolio',
  description:
    'Portfolio of Spoon3775, a software developer, aspiring penetration tester & cyber security geek.',
  name: 'Spoon3775',
  url: 'https://example.com',
};

export const SOCIALS = {
  github: 'https://github.com/Spoon3775',
  linkedin: 'https://www.linkedin.com/in/your-username',
  email: 'mailto:you@example.com',
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo?: string;
};

export const PROJECTS: Project[] = [
  {
    title: 'Cade',
    description:
      'An Android Music application, designed to run using the Spotify API.',
    tags: ['Kotlin', 'Android 10'],
    github: 'https://github.com/Spoon3775/Cade',
  },
  {
    title: 'Monty',
    description:
      'A Discord bot built in python, providing a variety of commands, features and integrations.',
    tags: ['Python', 'Discord', 'PostgreSQL'],
    github: 'https://github.com/Spoon3775/Monty',
  },
  {
    title: 'Project Three',
    description:
      'Coming Soon...',
    tags: [''],
    github: '',
  },
  {
    title: 'Project Four',
    description:
      'Coming Soon...',
    tags: [''],
    github: '',
  },
];

export const SKILLS: { category: string; items: string[] }[] = [
  { category: 'Languages', items: ['C', 'C++', 'C#', 'JavaScript', 'Python', 'Lua', 'PostgreSQL'] },
  { category: 'Learning', items: ['x86 ASM', 'Java', 'Kotlin'] },
  { category: 'Interests', items: ['Pen-Testing', 'Cyber Security', 'Mobile & Desktop Development'] },
  { category: 'Tools', items: ['Git', 'Docker', 'GitHub Actions', 'Linux', 'VS Code', 'Visual Studio', 'Android Studio'] },
];