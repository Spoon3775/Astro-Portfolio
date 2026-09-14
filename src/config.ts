// Placeholder site config — replace with your own details.
export const SITE = {
  title: 'Alex Doe — Developer Portfolio',
  description:
    'Portfolio of Alex Doe, a full-stack developer building modern web applications. Explore projects, skills, and ways to get in touch.',
  name: 'Alex Doe',
  url: 'https://example.com',
};

export const SOCIALS = {
  github: 'https://github.com/your-username',
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
    title: 'Project One',
    description:
      'A placeholder project description. Replace this with a short summary of what it does and what makes it interesting.',
    tags: ['TypeScript', 'React', 'Node.js'],
    github: 'https://github.com/your-username/project-one',
    demo: 'https://example.com',
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
  { category: 'Languages', items: ['TypeScript', 'JavaScript', 'Python', 'Go', 'SQL'] },
  { category: 'Frontend', items: ['React', 'Astro', 'Tailwind CSS', 'Vite', 'HTML/CSS'] },
  { category: 'Backend', items: ['Node.js', 'FastAPI', 'PostgreSQL', 'Redis', 'REST APIs'] },
  { category: 'Tools', items: ['Git', 'Docker', 'GitHub Actions', 'Linux', 'VS Code'] },
];