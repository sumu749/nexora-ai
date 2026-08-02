import {
    Globe,
    BrainCircuit,
    Cloud,
    Code2,
    Database,
    Palette,
    ShieldCheck,
    Smartphone,
} from "lucide-react";

export interface HomeCategory {
    id: number;
    name: string;
    description: string;

    // Small label shown on top
    badge?: string;

    // Small stats shown at bottom
    courses: number;
    projects: number;

    href: string;

    icon: React.ElementType;

    accent: string;

    span?: string;
}

export const HOME_CATEGORIES: HomeCategory[] = [
    {
        id: 1,
        name: "Web Development",
        description: "Frontend • Backend • Full Stack",
        badge: "Most Popular",
        courses: 124,
        projects: 36,
        href: "/explore?category=web-development",
        icon: Globe,
        accent: "#6D5DF6",
        span: "lg:col-span-2 lg:row-span-2",
    },
    {
        id: 2,
        name: "Programming",
        description: "C • C++ • JavaScript",
        courses: 82,
        projects: 18,
        href: "/explore?category=programming",
        icon: Code2,
        accent: "#06B6D4",
    },
    {
        id: 3,
        name: "Data Science",
        description: "Python • SQL • Analytics",
        courses: 64,
        projects: 20,
        href: "/explore?category=data-science",
        icon: Database,
        accent: "#4F46E5",
    },
    {
        id: 4,
        name: "AI & ML",
        description: "LLMs • Prompt Engineering • GenAI",
        badge: "Trending",
        courses: 98,
        projects: 27,
        href: "/explore?category=ai",
        icon: BrainCircuit,
        accent: "#C026D3",
        span: "lg:col-span-2",
    },
    {
        id: 5,
        name: "Cloud & DevOps",
        description: "AWS • Docker • CI/CD",
        courses: 46,
        projects: 14,
        href: "/explore?category=cloud",
        icon: Cloud,
        accent: "#0EA5E9",
    },
    {
        id: 6,
        name: "Cybersecurity",
        description: "Security • Pentesting",
        courses: 39,
        projects: 12,
        href: "/explore?category=cybersecurity",
        icon: ShieldCheck,
        accent: "#10B981",
    },
    {
        id: 7,
        name: "Mobile Development",
        description: "Android • React Native",
        courses: 51,
        projects: 15,
        href: "/explore?category=mobile",
        icon: Smartphone,
        accent: "#F97316",
    },
    {
        id: 8,
        name: "UI / UX Design",
        description: "Figma • Design Systems",
        courses: 44,
        projects: 10,
        href: "/explore?category=design",
        icon: Palette,
        accent: "#EC4899",
    },
];
