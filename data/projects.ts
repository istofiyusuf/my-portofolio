import {
  Globe,
  Film,
  Sparkles,
  ShoppingBag,
  Gauge,
  Users,
  type LucideIcon,
} from "lucide-react";

export interface ProjectLink {
  url: string;
  label: string;
  isExternal?: boolean;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  icon: LucideIcon;
  iconGradient: string;
  image: string; // Desktop: 800x500
  imageMobile: string; // Mobile: 400x250
  tags: string[];
  techs: string[];
  links: ProjectLink[];
  features: string[];
  status: "live" | "coming-soon" | "maintenance";
  featured: boolean;
  year: number;
  category: "web" | "mobile" | "ai" | "design" | "other";
}

export const projectsData: Project[] = [
  {
    id: "zenverse",
    title: "ZENVERSE",
    description: "Platform download aplikasi dan game Android premium.",
    longDescription:
      "ZENVERSE adalah ecosystem modern untuk mendownload aplikasi Android premium, game mod, dan tools.",
    icon: Globe,
    iconGradient: "linear-gradient(135deg, #007AFF, #5856D6)",
    image: "/projects/zenverse.jpg",
    imageMobile: "/projects/zenverse-mobile.jpg",
    tags: ["Website", "Android", "Download"],
    techs: ["Next.js", "Tailwind CSS", "TypeScript", "Vercel"],
    links: [
      {
        url: "https://zenversehub.vercel.app",
        label: "Live Demo",
        isExternal: true,
      },
    ],
    features: [
      "Fast Access",
      "Safe Files",
      "Direct Download",
      "Mobile Friendly",
    ],
    status: "live",
    featured: true,
    year: 2024,
    category: "web",
  },
  {
    id: "zenmovie",
    title: "ZENMOVIE",
    description: "Platform streaming anime, donghua, dan series Asia.",
    longDescription:
      "ZENMOVIE hadir sebagai destinasi streaming untuk pecinta anime dan donghua.",
    icon: Film,
    iconGradient: "linear-gradient(135deg, #AF52DE, #5856D6)",
    image: "/projects/zenmovie.jpg",
    imageMobile: "/projects/zenmovie-mobile.jpg",
    tags: ["Streaming", "Anime", "Donghua"],
    techs: ["Next.js", "Tailwind CSS", "TypeScript", "TMDB API"],
    links: [
      {
        url: "https://zenmovie.vercel.app",
        label: "Live Demo",
        isExternal: true,
      },
    ],
    features: ["Streaming gratis", "Update episode", "Kualitas HD", "Subtitle"],
    status: "live",
    featured: true,
    year: 2024,
    category: "web",
  },
  {
    id: "ai-assistant",
    title: "AI Chat Assistant",
    description: "Smart chatbot dengan integrasi LLM untuk customer service.",
    icon: Sparkles,
    iconGradient: "linear-gradient(135deg, #34C759, #30B753)",
    image: "/projects/ai-assistant.jpg",
    imageMobile: "/projects/ai-assistant-mobile.jpg",
    tags: ["AI", "Chatbot", "LLM"],
    techs: ["Next.js", "OpenAI API", "LangChain"],
    links: [{ url: "#", label: "Coming Soon", isExternal: true }],
    features: ["Natural language", "Context-aware", "Multi-language"],
    status: "coming-soon",
    featured: false,
    year: 2025,
    category: "ai",
  },
  {
    id: "shopverse",
    title: "ShopVerse",
    description:
      "Platform e-commerce modern dengan pengalaman belanja seamless.",
    icon: ShoppingBag,
    iconGradient: "linear-gradient(135deg, #FF9F0A, #FF6B00)",
    image: "/projects/shopverse.jpg",
    imageMobile: "/projects/shopverse-mobile.jpg",
    tags: ["E-commerce", "Payment"],
    techs: ["Next.js", "Stripe", "PostgreSQL"],
    links: [
      {
        url: "https://shopverse-id.vercel.app",
        label: "Live Demo",
        isExternal: true,
      },
    ],
    features: ["Payment gateway", "Real-time inventory", "Reviews"],
    status: "live",
    featured: false,
    year: 2025,
    category: "web",
  },
  {
    id: "analytics-dashboard",
    title: "Analytics Dashboard",
    description: "Dashboard interaktif untuk monitoring performa website.",
    icon: Gauge,
    iconGradient: "linear-gradient(135deg, #64D2FF, #007AFF)",
    image: "/projects/dashboard.jpg",
    imageMobile: "/projects/dashboard-mobile.jpg",
    tags: ["Analytics", "Dashboard"],
    techs: ["React", "Chart.js", "Tailwind CSS"],
    links: [{ url: "#", label: "Preview Soon", isExternal: true }],
    features: ["Data visualization", "Customizable widgets", "Export reports"],
    status: "coming-soon",
    featured: false,
    year: 2025,
    category: "web",
  },
  {
    id: "devhub",
    title: "DevHub",
    description: "Platform komunitas developer untuk berbagi knowledge.",
    icon: Users,
    iconGradient: "linear-gradient(135deg, #FF3B30, #AF52DE)",
    image: "/projects/devhub.jpg",
    imageMobile: "/projects/devhub-mobile.jpg",
    tags: ["Community", "Social"],
    techs: ["Next.js", "Supabase", "Tailwind CSS"],
    links: [{ url: "#", label: "Planning", isExternal: true }],
    features: ["User profiles", "Code snippet", "Discussion forums"],
    status: "coming-soon",
    featured: false,
    year: 2025,
    category: "web",
  },
];

// Helper functions
export const getAllProjects = (): Project[] => projectsData;
export const getFeaturedProjects = (): Project[] =>
  projectsData.filter(
    (project) => project.featured === true && project.status === "live",
  );
export const getProjectById = (id: string): Project | undefined =>
  projectsData.find((project) => project.id === id);
export const getAllTags = (): string[] => {
  const tags = new Set<string>();
  projectsData.forEach((project) => {
    project.tags.forEach((tag) => tags.add(tag));
  });
  return Array.from(tags);
};
