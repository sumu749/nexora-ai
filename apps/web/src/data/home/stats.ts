import { BookOpen, Users, Bot, GraduationCap } from "lucide-react";

export const HOME_STATS = [
    {
        end: 20,
        suffix: "+",
        label: "Premium Courses",
        description: "Industry-focused learning paths.",
        trend: "+4 new this month",
        icon: BookOpen,
        accent: "text-violet-500",
    },
    {
        end: 5000,
        suffix: "+",
        label: "Active Learners",
        description: "Developers learning every day.",
        trend: "+18% monthly growth",
        icon: Users,
        accent: "text-cyan-500",
    },
    {
        end: 98,
        suffix: "%",
        label: "Completion Rate",
        description: "Students complete our guided roadmap.",
        trend: "Top rated experience",
        icon: GraduationCap,
        accent: "text-emerald-500",
    },
    {
        end: 24,
        suffix: "/7",
        label: "AI Tutor",
        description: "Always available for instant help.",
        trend: "Real-time assistance",
        icon: Bot,
        accent: "text-amber-500",
    },
];
