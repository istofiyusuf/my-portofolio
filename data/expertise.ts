import {
  Code2,
  Server,
  Brain,
  Palette,
  Gauge,
  Cloud,
  type LucideIcon,
} from "lucide-react";

export interface ExpertiseItem {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  iconSize?: number;
  techs: string[];
  gradient: string;
}

export const expertiseData: ExpertiseItem[] = [
  {
    id: 1,
    title: "Frontend Development",
    description:
      "Building responsive, accessible, and performant user interfaces with modern frameworks.",
    icon: Code2,
    iconSize: 28,
    techs: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    gradient: "linear-gradient(135deg, #007AFF, #5856D6)",
  },
  {
    id: 2,
    title: "Backend Development",
    description:
      "Creating robust APIs, databases, and server-side logic for scalable applications.",
    icon: Server,
    iconSize: 28,
    techs: ["Node.js", "Python", "PostgreSQL", "REST API"],
    gradient: "linear-gradient(135deg, #34C759, #30B753)",
  },
  {
    id: 3,
    title: "AI & Machine Learning",
    description:
      "Integrating AI capabilities, LLMs, and intelligent automation into web applications.",
    icon: Brain,
    iconSize: 28,
    techs: ["OpenAI API", "LangChain", "RAG", "AI Agents"],
    gradient: "linear-gradient(135deg, #AF52DE, #5856D6)",
  },
  {
    id: 4,
    title: "UI/UX Design",
    description:
      "Designing beautiful, intuitive interfaces following Apple HIG principles.",
    icon: Palette,
    iconSize: 28,
    techs: ["Figma", "Apple HIG", "Responsive Design", "Prototyping"],
    gradient: "linear-gradient(135deg, #FF9F0A, #FF6B00)",
  },
  {
    id: 5,
    title: "Performance Optimization",
    description:
      "Optimizing web applications for speed, SEO, and Core Web Vitals.",
    icon: Gauge,
    iconSize: 28,
    techs: ["Lighthouse", "Web Vitals", "Code Splitting", "Caching"],
    gradient: "linear-gradient(135deg, #64D2FF, #007AFF)",
  },
  {
    id: 6,
    title: "DevOps & Cloud",
    description:
      "Deploying and scaling applications on modern cloud infrastructure.",
    icon: Cloud,
    iconSize: 28,
    techs: ["Docker", "Vercel", "AWS", "CI/CD"],
    gradient: "linear-gradient(135deg, #FF3B30, #FF6B00)",
  },
];
