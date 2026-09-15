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
    title: 'Project Two',
    description:
      'Another placeholder description. Highlight the problem you solved, the stack you used, and any notable results.',
    tags: ['Python', 'FastAPI', 'PostgreSQL'],
    github: 'https://github.com/your-username/project-two',
  },
  {
    title: 'Project Three',
    description:
      'A third placeholder project. Link the repository and add a live demo URL if you have one.',
    tags: ['Go', 'Docker', 'Kubernetes'],
    github: 'https://github.com/your-username/project-three',
  },
  {
    title: 'Project Four',
    description:
      'Yet another placeholder. Keep descriptions concise: one or two sentences is plenty.',
    tags: ['Rust', 'WebAssembly'],
    github: 'https://github.com/your-username/project-four',
  },
];

export const SKILLS: { category: string; items: string[] }[] = [
  { category: 'Languages', items: ['C', 'C++', 'C#', 'JavaScript', 'Python', 'Lua', 'PostgreSQL'] },
  { category: 'Learning', items: ['x86 ASM', 'Java', 'Kotlin'] },
  { category: 'Interests', items: ['Pen-Testing', 'Cyber Security', 'Mobile & Desktop Development'] },
  { category: 'Tools', items: ['Git', 'Docker', 'GitHub Actions', 'Linux', 'VS Code', 'Visual Studio', 'Android Studio'] },
];