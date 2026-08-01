import {
    Globe,
    BrainCircuit,
    Database,
    ShieldCheck,
    Cloud,
    Smartphone,
    Palette,
    Code2,
} from "lucide-react";

export interface HomeCategory {
    id: number;
    name: string;
    description: string;
    href: string;
    icon: React.ElementType;
    gradient: string;
    span?: string;
}

export const HOME_CATEGORIES: HomeCategory[] = [
    {
        id: 1,
        name: "Web Development",
        description: "Frontend • Backend • Full Stack",
        href: "/explore?category=web-development",
        icon: Globe,
        gradient: "from-violet-500/20 via-violet-500/5 to-transparent",

        // Large Feature Card
        span: "lg:col-span-2 lg:row-span-2",
    },

    {
        id: 2,
        name: "Programming",
        description: "C • C++ • JavaScript",
        href: "/explore?category=programming",
        icon: Code2,
        gradient: "from-cyan-500/20 via-cyan-500/5 to-transparent",
    },

    {
        id: 3,
        name: "Data Science",
        description: "SQL • Analytics • Python",
        href: "/explore?category=data-science",
        icon: Database,
        gradient: "from-indigo-500/20 via-indigo-500/5 to-transparent",
    },

    {
        id: 4,
        name: "AI & ML",
        description: "LLMs • Prompt Engineering • GenAI",
        href: "/explore?category=ai",
        icon: BrainCircuit,
        gradient: "from-fuchsia-500/20 via-fuchsia-500/5 to-transparent",

        // Wide Card
        span: "lg:col-span-2",
    },

    {
        id: 5,
        name: "Cloud & DevOps",
        description: "AWS • Docker • CI/CD",
        href: "/explore?category=cloud",
        icon: Cloud,
        gradient: "from-sky-500/20 via-sky-500/5 to-transparent",
    },

    {
        id: 6,
        name: "Cybersecurity",
        description: "Security • Pentesting",
        href: "/explore?category=cybersecurity",
        icon: ShieldCheck,
        gradient: "from-emerald-500/20 via-emerald-500/5 to-transparent",
    },

    {
        id: 7,
        name: "Mobile Development",
        description: "Android • React Native",
        href: "/explore?category=mobile",
        icon: Smartphone,
        gradient: "from-orange-500/20 via-orange-500/5 to-transparent",
    },

    {
        id: 8,
        name: "UI / UX Design",
        description: "Figma • Design Systems",
        href: "/explore?category=design",
        icon: Palette,
        gradient: "from-pink-500/20 via-pink-500/5 to-transparent",
    },
];
