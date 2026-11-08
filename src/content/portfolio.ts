export const profile = {
  name: "Pawan Sargar",
  siteUrl: "https://pavansargar.com",
  role: "Full Stack Lead",
  company: "Cassandra Risk",
  affiliation: "Improbable Worlds",
  location: "India",
  headline: "Curious by nature. A developer by craft.",
  introduction:
    "I’m Pawan Sargar, a developer and quick learner who loves turning ideas into working products. Currently Full Stack Lead at Cassandra Risk (Improbable Worlds).",
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
  credit?: string;
  creditUrl?: string;
  placeholder: boolean;
}
export const portraitOptions = {
  mountains: {
    src: "/images/pawan-mountains.webp",
    alt: "Pawan Sargar standing in front of snow-covered mountains",
    position: "62% 50%",
    placeholder: false,
  },
  forest: {
    src: "/images/pawan-forest.webp",
    alt: "Pawan Sargar standing in front of a wooded hillside",
    position: "50% 72%",
    placeholder: false,
  },
  solid: {
    src: "/images/pawan-solid.webp",
    alt: "Pawan Sargar standing against a plain gray background",
    position: "50% 74%",
    zoom: 1.3,
    zoomOrigin: "65% 50%",
    placeholder: false,
  },
} satisfies Record<string, Photo>;
export const photos: Record<"portrait" | "about", Photo> = {
  portrait: portraitOptions.solid,
  about: {
    src: "/images/workspace-placeholder.jpg",
    alt: "A bright workspace with a computer, notebook and plants",
    position: "50% 50%",
    credit: "Domenico Loia / Unsplash",
    creditUrl: "https://unsplash.com/photos/hGV2TfOh0ns",
    placeholder: true,
  },
};
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
    name: "Waystoweb",
    description: "A technical blog migrated from WordPress to Next.js.",
    stack: "Next.js, Markdown",
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
  {
    name: "Solve33",
    url: "https://solve33.netlify.app",
    description: "A client interface built with React.",
    stack: "React, Styled Components",
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
