export const waystoweb = {
  name: "Waystoweb Technologies",
  url: "https://waystoweb.com",
  description:
    "I build and ship ready-to-use MVPs quickly, helping founders validate ideas with real users.",
} as const;
export const profile = {
  name: "Pawan Sargar",
  siteUrl: "https://pavansargar.com",
  role: "Full Stack Lead",
  company: "Cassandra Risk",
  affiliation: "Improbable Worlds",
  location: "India",
  headline: "Curious by nature. A developer by craft.",
  introduction:
    "I’m Pawan Sargar, Full Stack Lead at Cassandra Risk (Improbable Worlds) and Founder of Waystoweb Technologies. I turn ideas into useful products and MVPs.",
  personalIntroduction:
    "I’m a developer who loves a new problem. I learn quickly, pick up the tools a product needs, and turn ideas into things people can use.",
  links: {
    github: "https://github.com/pavansargar",
    linkedin: "https://www.linkedin.com/in/pavan-sargar/",
    upwork: "https://www.upwork.com/freelancers/~0135477dd9a723c6f2",
    fiverr: "https://www.fiverr.com/pavansargar",
  },
} as const;
export interface Photo {
  src: string;
  alt: string;
  position: string;
  zoom?: number;
  zoomOrigin?: string;
}
export const portraitOptions = {
  mountains: {
    src: "/images/pawan-mountains.webp",
    alt: "Pawan Sargar standing in front of snow-covered mountains",
    position: "62% 50%",
  },
  forest: {
    src: "/images/pawan-forest.webp",
    alt: "Pawan Sargar standing in front of a wooded hillside",
    position: "50% 72%",
  },
  solid: {
    src: "/images/pawan-solid.webp",
    alt: "Pawan Sargar standing against a plain gray background",
    position: "50% 74%",
    zoom: 1.3,
    zoomOrigin: "65% 50%",
  },
} satisfies Record<string, Photo>;
export const photos = {
  portrait: portraitOptions.solid,
};
export interface AboutPhoto extends Photo {
  label: string;
  caption: string;
  clockwise?: boolean;
}
export const aboutPhotos: AboutPhoto[] = [
  {
    src: "/images/pawan-desk.webp",
    alt: "Pawan’s laptop showing code beside a coffee on a wooden table",
    position: "50% 30%",
    label: "Desk",
    caption: "A little code, a little coffee.",
  },
  {
    src: "/images/pawan-mountain-air.webp",
    alt: "Pawan with his arms outstretched in front of snow-covered mountains",
    position: "50% 50%",
    label: "Mountains",
    caption: "A little mountain air.",
  },
  {
    ...portraitOptions.mountains,
    position: "50% 50%",
    label: "Snow",
    caption: "Somewhere away from the screen.",
  },
  {
    src: "/images/pawan-paragliding.webp",
    alt: "Pawan wearing a helmet and paragliding harness",
    position: "28% 50%",
    label: "Paragliding",
    caption: "Ready for a different kind of adventure.",
    clockwise: true,
  },
];
export const cassandra = {
  name: "Cassandra Risk",
  url: "https://cassandrarisk.com",
  slug: "/work/cassandra-risk",
  role: "Full Stack Lead",
  timeline: "May 2026–present",
  description:
    "A public early-warning platform for conflict, bringing together community forecasts about the warning signs that precede it.",
  contribution:
    "I lead frontend and backend development, UI/UX, and AI integration, with GCP for deployments and scaling.",
  milestone: {
    value: "150+",
    label: "forecasters",
    date: "November 2026",
    source: "Owner-provided milestone, November 2026",
  },
  capabilities: [
    "Full-stack development",
    "Vertex AI RAG",
    "Google Cloud",
    "UI/UX",
    "Product delivery",
  ],
  responsibilities: [
    {
      title: "Frontend and UI/UX",
      body: "Designing and building the interfaces people use to explore the platform and contribute forecasts.",
    },
    {
      title: "The systems behind the interface",
      body: "Backend development and AI integration using a Vertex AI RAG corpus, connecting the product experience with its supporting services.",
    },
    {
      title: "From development to production",
      body: "GCP deployments, scaling, and management of the software development lifecycle to support the live platform.",
    },
    {
      title: "Full-stack leadership",
      body: "Managing the software development lifecycle, from implementation through deployment and ongoing improvements.",
    },
  ],
} as const;
export const projectPreviews = {
  cassandra: {
    src: "/images/cassandra-public.webp",
    width: 1498,
    height: 766,
    domain: "cassandrarisk.com",
    alt: "Cassandra Risk public website showing its conflict early-warning mission",
    caption: "The public Cassandra Risk website, November 2026.",
    sourceUrl: "https://cassandrarisk.com",
  },
  yaptxt: {
    src: "/images/yaptxt-public.webp",
    width: 1280,
    height: 720,
    domain: "yaptxt.com",
    alt: "YapTxt public website showing its dictation app for Windows and Mac",
    caption: "The public YapTxt website, November 2026.",
    sourceUrl: "https://yaptxt.com",
  },
  vfx: {
    src: "/images/vfx-public.webp",
    width: 1280,
    height: 720,
    domain: "vfxai.com",
    alt: "VFX AI public product page showing its video editor",
    caption: "VFX AI’s current public editor page, November 2026.",
    sourceUrl: "https://www.vfxai.com/product/ai-video-editor",
  },
  skillwhisk: {
    src: "/images/skillwhisk-public.webp",
    width: 1280,
    height: 720,
    domain: "skillwhisk.vercel.app",
    alt: "SkillWhisk public website showing its copy-ready AI recipe library and category filters",
    caption: "SkillWhisk’s public recipe library, November 2026.",
    sourceUrl: "https://skillwhisk.vercel.app",
  },
} as const;
export type ProjectId = keyof typeof projectPreviews;
export interface SelectedProject {
  id: ProjectId;
  name: string;
  context: string;
  description: string;
  contribution: string;
  technologies: string[];
  url: string;
  caseStudy?: string;
}
export const selectedProjects: SelectedProject[] = [
  {
    id: "cassandra",
    name: "Cassandra Risk",
    context: "Full Stack Lead · Improbable Worlds",
    description: "A public conflict early-warning platform. Frontend, backend, UI/UX, and AI integration, with GCP for deployments.",
    contribution: "I lead full-stack development, integrate AI using a Vertex AI RAG corpus, and manage deployment and scaling on Google Cloud. My role spans the software development lifecycle, from the interface to production.",
    technologies: ["Frontend & backend", "UI/UX", "Vertex AI RAG", "Google Cloud"],
    url: cassandra.url,
    caseStudy: cassandra.slug,
  },
  {
    id: "skillwhisk",
    name: "SkillWhisk",
    context: "Personal project",
    description: "I built SkillWhisk, a library of 110 copy-ready AI recipes that combine curated agent skills, GitHub repositories, and quality checks for websites, apps, videos, and security audits.",
    contribution: "I built the product and brought the recipes, skills, repositories, and checks into one place. Pick a project, choose a style, and copy a prompt to use with your AI coding agent.",
    technologies: ["AI recipes", "Agent skills", "GitHub repositories", "Quality checks"],
    url: "https://skillwhisk.vercel.app",
  },
  {
    id: "yaptxt",
    name: "YapTxt",
    context: "Desktop app · Windows & macOS",
    description: "A desktop app I built to turn speech into text across the apps you use.",
    contribution: "YapTxt is a voice-to-text companion for Windows and macOS. Use a hotkey, speak naturally, and your words appear in the app you’re using. I built this product, also featured in the WaysToWeb project collection.",
    technologies: ["Voice to text", "Windows", "macOS"],
    url: "https://yaptxt.com",
  },
  {
    id: "vfx",
    name: "VFX AI",
    context: "Software Engineer · Radiansys",
    description: "Video-editor development with Fabric, social integrations, and performance improvements.",
    contribution: "At Radiansys, I worked on VFX AI’s video editor: developing the editor with Fabric, connecting social platforms, and improving performance for smoother editing workflows.",
    technologies: ["Fabric", "Video editing", "Social integrations"],
    url: "https://www.vfxai.com",
  },
];
export interface Experience {
  company: string;
  role: string;
  from: string;
  to: string;
  description: string;
}
export const experience: Experience[] = [
  {
    company: "Cassandra Risk (Improbable Worlds)",
    role: "Full Stack Lead",
    from: "May 2026",
    to: "Present",
    description:
      "Leading frontend, backend, UI/UX, AI integration, and GCP deployments for the public conflict early-warning platform.",
  },
  {
    company: waystoweb.name,
    role: "Founder",
    from: "Aug 2024",
    to: "Present",
    description: waystoweb.description,
  },
  {
    company: "Radiansys Inc.",
    role: "Software Engineer",
    from: "Sep 2025",
    to: "Aug 2026",
    description:
      "Built enterprise interfaces for Simpplr and worked on VFXAI’s video editor with Fabric, social integrations, and performance improvements.",
  },
  {
    company: "Independent / Upwork",
    role: "Freelance Software Developer",
    from: "Jan 2025",
    to: "Present",
    description:
      "Delivering frontend and full-stack web applications with clients and distributed teams.",
  },
  {
    company: "Magure Inc.",
    role: "Freelance Software Engineer",
    from: "Apr 2025",
    to: "Jul 2025",
    description:
      "Freelance software engineering and full-stack development engagements.",
  },
  {
    company: "ConvertEdge Tech / Aheadrace",
    role: "Software Engineer",
    from: "Aug 2023",
    to: "Apr 2025",
    description:
      "Built reusable MUI components, Storybook documentation, and GraphQL integrations with Redux Saga and TypeScript.",
  },
  {
    company: "PenguinApps",
    role: "Software Developer Intern",
    from: "Dec 2022",
    to: "Jul 2023",
    description: "Worked on web and application development.",
  },
  {
    company: "SporTech Innovation Lab",
    role: "Software Engineer Intern",
    from: "Jun 2022",
    to: "Sep 2022",
    description: "Contributed to software engineering in an innovation lab.",
  },
  {
    company: "Coding Master",
    role: "Technical Content Writer",
    from: "Nov 2021",
    to: "Jun 2022",
    description:
      "Wrote web development articles and managed the WordPress blog.",
  },
];
export interface EarlierWork {
  name: string;
  description: string;
  stack: string;
  url?: string;
}
export const earlierWork: EarlierWork[] = [
  {
    name: "Profili.me",
    description: "Personal pages for sharing a digital identity.",
    stack: "React, TypeScript, Node.js",
  },
  {
    name: "AnaghaSoftech",
    description: "A client website and full-stack web development project.",
    stack: "React, Node.js, MongoDB",
  },
  {
    name: "Kamala Education",
    url: "https://kamalaeducation.netlify.app",
    description: "A client website for an education business.",
    stack: "React, Node.js, MongoDB",
  },
  {
    name: "Revisela",
    description: "Frontend development for a client web application.",
    stack: "Next.js, Redux, TypeScript",
  },
  {
    name: "Haunted House",
    url: "https://hhouse.netlify.app",
    description: "An exploration of interactive 3D on the web.",
    stack: "JavaScript, Three.js",
  },
];
export const testimonials = [
  {
    name: "Kurt Merbeth",
    quote:
      "Great job as always. Excellent communication, very structured and high-quality work, and delivered exactly what was requested. The system is robust, well thought-out, and production-ready. 10/10 - will definitely work together again.",
    url: "https://www.fiverr.com/kurtmerbeth",
  },
  {
    name: "Hellohealer",
    quote:
      "Great guy and very skilled! Understood my issue very well and offered solutions accordingly. Recommended for Web Dev tasks.",
    url: "https://www.fiverr.com/ctlattube",
  },
  {
    name: "Fernando",
    quote:
      "Very communicative and open to suggestions. Would definitely work again and recommend",
    url: "https://www.fiverr.com/fernandoku24",
  },
];
