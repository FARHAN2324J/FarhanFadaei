import MNTN from "../assets/images/MNTN.webp";
import Finance from "../assets/images/Finance.webp";
import Veloce from "../assets/images/Framev.webp";
import RunningForChange from "../assets/images/RunningForChange.webp";
import Planto from "../assets/images/Planto.webp";
import Blog from "../assets/images/Blog.webp";
import Updev from "../assets/images/updev.jpg";

import type { Types } from "../types/types";

export interface Card extends Omit<Types, "alt" | "caption" | "description"> {
  tags: string[];
  category: "featured" | "learning";
  features?: string[];
  description?: string;
  links: {
    source?: string;
    info: string;
    live: string;
  };
}

export const cards: Card[] = [
  {
    id: 1,
    title: "UPDEV",
    src: Updev,
    tags: ["Nextjs", "TypeScript", "TailwindCSS", "Supabase", "Prisma"],
    category: "featured",
    features: [
      "📰 Aggregated RSS feeds",
      "🏷️ Filter articles by category",
      "📄 Pagination: browse through a clean, paginated feed",
      "🔍 Clean and intuitive reading experience",
      "🌐 Deployed on Vercel",
    ],
    description:
      "A platform that aggregates the latest articles and updates from popular technology websites, making it easy to stay informed without switching between multiple sources.",
    links: {
      source: "https://github.com/FARHAN2324J/UPDEV",
      info: "#",
      live: "https://updev-app.vercel.app/",
    },
  },
  {
    id: 2,
    title: "Blog",
    src: Blog,
    tags: ["Nextjs", "TypeScript", "TailwindCSS", "Supabase"],
    category: "featured",
    features: [
      "📰 Blog post listing with loading skeletons",
      "🔍 Debounced post search to avoid unnecessary requests",
      "📄 Pagination for navigating between posts",
      "🧾 Dedicated post page with dynamic routing (/[id])",
      "🌗 Dark / Light mode switch with next-themes",
      "🔗 Social media share buttons for posts",
      "🕒 Recent Posts section",
      "⚠️ Custom error and not-found pages",
    ],
    description:
      "A modern blog application built with Next.js, TypeScript, Tailwind CSS, and Supabase. The project fetches blog posts from Supabase and offers features like search, pagination, dark/light mode, and social media sharing.",
    links: {
      source: "https://github.com/FARHAN2324J/Blog",
      info: "#",
      live: "https://blog-farhan.vercel.app/",
    },
  },
  {
    id: 3,
    title: "Planto",
    src: Planto,
    tags: ["React", "TypeScript", "Zustand", "TailwindCSS"],
    category: "featured",
    features: [
      "Shopping Cart System with Zustand State Management",
      "Modern and clean user interface",
      "Fully responsive design",
      "Type-safe code with TypeScript",
      "Clean and structured code using Component-Based Architecture",
    ],
    description:
      "Planto is a platform for presenting natural and indoor plants. The goal of this project is to improve the air quality of your home, create a sense of calm in your living space, and add the beauty of nature to your everyday environment. With a focus on trendy and popular plants, Planto offers a simple and enjoyable experience for choosing and caring for your green space.",
    links: {
      source: "https://github.com/FARHAN2324J/Planto-web",
      info: "#",
      live: "https://farhan2324j.github.io/Planto/",
    },
  },
  {
    id: 4,
    title: "RunningForChange",
    src: RunningForChange,
    tags: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "GSAP",
      "SplitText",
      "ScrollTrigger",
    ],
    category: "learning",
    links: {
      info: "#",
      live: "https://farhan2324j.github.io/RunningForChange/",
    },
  },
  {
    id: 5,
    title: "Véloce",
    src: Veloce,
    tags: ["React", "TypeScript", "TailwindCSS", "SplitText"],
    category: "learning",
    links: {
      info: "#",
      live: "https://farhan2324j.github.io/VELOSE/",
    },
  },
  {
    id: 6,
    title: "Noble Finances",
    src: Finance,
    tags: ["React", "TypeScript", "TailwindCSS", "GSAP"],
    category: "learning",
    links: {
      info: "#",
      live: "https://farhan2324j.github.io/NobleFinances/",
    },
  },
  {
    id: 7,
    title: "MNTN",
    src: MNTN,
    tags: ["React", "TailwindCSS", "ScrollTrigger"],
    category: "learning",
    links: {
      info: "#",
      live: "https://farhan2324j.github.io/MNTN/",
    },
  },
];
