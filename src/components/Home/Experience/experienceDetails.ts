export type ExperienceType = "full time" | "freelance" | "internship";

export interface ExperienceEntry {
  company: string;
  website: string;
  logo?: string;
  role: string;
  location?: string;
  type: ExperienceType;
  dateFrom: string;
  dateTo: string;
  current?: boolean;
  points: string[];
}

export const experienceList: ExperienceEntry[] = [
  {
    company: "Radiansys Inc.",
    website: "https://example.com",
    role: "Software Engineer",
    location: "Gurugram, Haryana",
    type: "full time",
    dateFrom: "September 2025",
    dateTo: "Present",
    current: true,
    points: [
      "Simpplr: Contributed to enterprise-grade front-end development, focusing on scalable UI architecture, performance optimization, and maintainable component systems using React and TypeScript.",
      "VFXAI: Working on an AI-powered video editor, developing the editor from scratch using Fabric, integrating social media connections, and improving performance for smooth, responsive editing workflows.",
    ],
  },
  {
    company: "Upwork",
    website: "https://www.upwork.com",
    role: "Freelance Software Developer",
    location: "Remote",
    type: "freelance",
    dateFrom: "January 2025",
    dateTo: "Present",
    current: true,
    points: [
      "Delivering full-stack and front-end solutions for diverse clients.",
      "Collaborating with global teams on web applications and product development.",
    ],
  },
  {
    company: "Capcons Analytics Private Limited",
    website: "https://example.com",
    role: "Freelance Frontend Developer",
    location: "Remote",
    type: "freelance",
    dateFrom: "July 2025",
    dateTo: "August 2025",
    points: [
      "Spearheaded the end-to-end front-end development for capcons.com, single-handedly delivering a comprehensive marketing site, user platform, and admin CMS.",
      "Developed and launched the company's primary marketing website, focusing on performance, Server-Side Rendering (SSR), and a responsive, pixel-perfect user interface.",
      "Engineered a secure, manual authentication system using Next.js Server Actions and implemented an intuitive user onboarding experience.",
      "Constructed a custom Content Management System (CMS) with a rich-text editor, allowing non-technical teams to manage website content efficiently. Configured and managed the project within a manual monorepo structure, deploying seamlessly to Vercel. Key technologies: Next.js, React, TypeScript, Tailwind CSS, Shadcn/ui, Custom Authentication, Vercel.",
    ],
  },
  {
    company: "Magure Inc",
    website: "https://example.com",
    role: "Freelance Software Engineer",
    location: "Remote",
    type: "freelance",
    dateFrom: "April 2025",
    dateTo: "July 2025",
    points: [
      "Freelance software engineering and full-stack development engagements.",
    ],
  },
  {
    company: "ConvertEdge Tech",
    website: "https://example.com",
    role: "Software Engineer (Aheadrace)",
    location: "Hyderabad, Telangana, India",
    type: "full time",
    dateFrom: "August 2023",
    dateTo: "April 2025",
    points: [
      "Developing efficient, reusable components utilizing MUI and documenting them through Stories.",
      "Overseeing state management via Redux and seamlessly integrating GraphQL APIs using Redux Saga.",
      "Crafting responsive user interfaces with MUI.",
      "Authoring TypeScript interfaces and types to enhance development efficiency.",
    ],
  },
  {
    company: "PenguinApps",
    website: "https://example.com",
    role: "Software Developer Intern",
    location: "Remote",
    type: "internship",
    dateFrom: "December 2022",
    dateTo: "July 2023",
    points: [
      "Software development internship with focus on web and application development.",
    ],
  },
  {
    company: "SporTech Innovation Lab Pvt Ltd",
    website: "https://example.com",
    role: "Software Engineer Intern",
    location: "Remote",
    type: "internship",
    dateFrom: "June 2022",
    dateTo: "September 2022",
    points: [
      "Software engineering internship in an innovation lab environment.",
    ],
  },
  {
    company: "Coding Master",
    website: "https://example.com",
    role: "Technical Content Writer",
    location: "Remote",
    type: "freelance",
    dateFrom: "November 2021",
    dateTo: "June 2022",
    points: [
      "Curated and wrote high-quality SEO-friendly technical content on Web Development. Also managed the WordPress blog.",
    ],
  },
];
