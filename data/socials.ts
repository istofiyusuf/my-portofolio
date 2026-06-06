import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Mail,
  Globe,
  type LucideIcon,
} from "lucide-react";

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: LucideIcon;
  color: string;
  gradient: string;
}

export const socialLinks: SocialLink[] = [
  {
    id: "github",
    name: "GitHub",
    url: "https://github.com/istofiyusuf",
    icon: Github,
    color: "#333333",
    gradient: "linear-gradient(135deg, #333333, #242424)",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    url: "https://linkedin.com/in/yusufistofi",
    icon: Linkedin,
    color: "#0077B5",
    gradient: "linear-gradient(135deg, #0077B5, #005582)",
  },
  {
    id: "twitter",
    name: "Twitter",
    url: "https://twitter.com/yusufiscr",
    icon: Twitter,
    color: "#1DA1F2",
    gradient: "linear-gradient(135deg, #1DA1F2, #0D8BD9)",
  },
  {
    id: "instagram",
    name: "Instagram",
    url: "https://instagram.com/istofiyusuf",
    icon: Instagram,
    color: "#E4405F",
    gradient: "linear-gradient(135deg, #E4405F, #C13584)",
  },
  {
    id: "email",
    name: "Email",
    url: "mailto:yusufistofi@gmail.com",
    icon: Mail,
    color: "#34C759",
    gradient: "linear-gradient(135deg, #34C759, #28A745)",
  },
  {
    id: "portfolio",
    name: "Portfolio",
    url: "https://istofiyusuf.id",
    icon: Globe,
    color: "#007AFF",
    gradient: "linear-gradient(135deg, #007AFF, #5856D6)",
  },
];
