import { BookOpen, GraduationCap, Bot, BriefcaseBusiness } from "lucide-react";

export const HOW_IT_WORKS = [
    {
        id: 1,
        step: "01",
        icon: BookOpen,
        title: "Choose Your Course",
        description:
            "Browse curated learning paths and choose the technologies you want to master.",
        button: "Explore Courses",
        href: "/explore",
        color: "primary",
    },
    {
        id: 2,
        step: "02",
        icon: GraduationCap,
        title: "Learn & Build",
        description:
            "Complete structured lessons, build real-world projects, and strengthen your portfolio.",
        button: "Start Learning",
        href: "/explore",
        color: "secondary",
    },
    {
        id: 3,
        step: "03",
        icon: Bot,
        title: "Practice with AI",
        description:
            "Get instant explanations, debugging help, mock interviews, and personalized learning guidance.",
        button: "Try AI Tutor",
        href: "/dashboard/chat",
        color: "accent",
        featured: true,
    },
    {
        id: 4,
        step: "04",
        icon: BriefcaseBusiness,
        title: "Become Job Ready",
        description:
            "Build an impressive portfolio, prepare for interviews, and confidently apply for developer roles.",
        button: "Get Started",
        href: "/explore",
        color: "success",
    },
];

export const STEP_COLORS = {
    primary: {
        icon: "text-primary",
        bg: "bg-primary/10",
        border: "border-primary/20",
    },

    secondary: {
        icon: "text-violet-500",
        bg: "bg-violet-500/10",
        border: "border-violet-500/20",
    },

    accent: {
        icon: "text-cyan-500",
        bg: "bg-cyan-500/10",
        border: "border-cyan-500/20",
    },

    success: {
        icon: "text-emerald-500",
        bg: "bg-emerald-500/10",
        border: "border-emerald-500/20",
    },
};
