"use client";

import Link from "next/link";
import { PageContainer, Section } from "../shared";
import { Button } from "../ui/button";
import {
    ArrowRight,
    BadgeCheck,
    Briefcase,
    CheckCircle2,
    FileText,
    Sparkles,
    TrendingUp,
} from "lucide-react";
import { useEffect, useState } from "react";
import { HERO_CONTENT, HERO_TRUST_ITEMS, heroSlides } from "@/data/home/hero";

export const HomeHero = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    useEffect(() => {
        const timer = window.setInterval(() => {
            setActiveSlide((current) => (current + 1) % heroSlides.length);
        }, 6000);

        return () => window.clearInterval(timer);
    }, []);
    return (
        <Section className="relative overflow-hidden">
            <div className="absolute inset-0 bg-mesh" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#6D5DF6_0%,transparent_35%),radial-gradient(circle_at_top_right,#14B8A6_0%,transparent_35%)] opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
            <PageContainer>
                <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
                    {/* Left: copy */}
                    <div className="max-w-xl animate-in-up">
                        {/* Badge */}
                        <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                            </span>
                            {HERO_CONTENT.badge}
                        </span>

                        {/* Heading */}
                        <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
                            {HERO_CONTENT.title}{" "}
                            <span className="text-gradient">
                                {HERO_CONTENT.highlightedTitle}
                            </span>{" "}
                            {HERO_CONTENT.suffix}
                        </h1>

                        {/* Description */}
                        <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
                            {HERO_CONTENT.description}
                        </p>

                        {/* CTA */}
                        <div className="mt-8 flex flex-wrap gap-4">
                            <Link href="/explore">
                                <Button
                                    size="lg"
                                    className="group h-12 rounded-xl px-6 font-semibold  transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-primary/30 hover:scale-[1.02]"
                                >
                                    Start Learning
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Button>
                            </Link>

                            <Link href="/dashboard/chat">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="h-12 rounded-xl  bg-background/80 px-6 font-semibold backdrop-blur-sm transition-all duration-300 border-primary/30 hover:bg-primary/10 hover:scale-[1.02]"
                                >
                                    Try AI Tutor
                                </Button>
                            </Link>
                        </div>

                        {/* Trust Signals */}
                        <div className="mt-8">
                            <p className="mb-3 text-sm font-medium text-muted-foreground">
                                Trusted by aspiring developers to learn,
                                practice, and grow.
                            </p>

                            <div className="flex flex-wrap gap-3">
                                {HERO_TRUST_ITEMS.map((item, index) => (
                                    <div
                                        key={item}
                                        className={`inline-flex items-center gap-2 rounded-full border bg-background/70 px-5 py-2.5 text-sm font-medium shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md ${
                                            index === 0
                                                ? "border-primary/40 bg-primary/5"
                                                : "border-border"
                                        }`}
                                    >
                                        <CheckCircle2 className="h-4 w-4 text-primary" />
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right: product preview mockup */}
                    <div
                        className="relative hidden lg:block animate-in-up"
                        style={{ animationDelay: "120ms" }}
                    >
                        <div className=" overflow-hidden rounded-3xl  border border-border bg-card/95  backdrop-blur-xl  shadow-2xl ring-1 ring-white/5 ">
                            {/* Window Bar */}
                            <div className="flex items-center gap-2 border-b border-border bg-muted/40 px-5 py-4">
                                <span className="h-3 w-3 rounded-full bg-red-400" />
                                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                                <span className="h-3 w-3 rounded-full bg-green-400" />

                                <span className="ml-4 text-xs font-mono text-muted-foreground">
                                    skillforge.ai/dashboard
                                </span>
                            </div>

                            <div className="space-y-6 p-6">
                                {/* Header */}
                                <div>
                                    <h3 className="text-xl font-bold">
                                        AI Career Dashboard
                                    </h3>

                                    <p className="mt-1 text-sm text-muted-foreground">
                                        Personalized insights powered by AI.
                                    </p>
                                </div>

                                {/* Stats */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="rounded-2xl border border-white/10 bg-background/50 backdrop-blur-sm p-5">
                                        <p className="text-xs text-muted-foreground">
                                            Resume Score
                                        </p>

                                        <p className="mt-2 text-3xl font-bold text-primary">
                                            92%
                                        </p>

                                        <div className="mt-2 flex items-center gap-1 text-xs font-medium text-emerald-500">
                                            <TrendingUp className="h-3.5 w-3.5" />
                                            Excellent
                                        </div>
                                    </div>
                                    <div className="rounded-2xl border border-white/10 bg-background/50 backdrop-blur-sm p-5">
                                        <p className="text-xs text-muted-foreground">
                                            Interview Ready
                                        </p>

                                        <p className="mt-2 text-3xl font-bold text-primary">
                                            84%
                                        </p>

                                        <div className="mt-2 flex items-center gap-1 text-xs font-medium text-amber-500">
                                            <BadgeCheck className="h-3.5 w-3.5" />
                                            Ready
                                        </div>
                                    </div>
                                </div>

                                {/* Progress */}
                                <div className="rounded-2xl border border-white/10 bg-background/50 backdrop-blur-sm p-5">
                                    <div className="mb-3 flex items-center justify-between">
                                        <span className="text-sm font-medium">
                                            Frontend Roadmap
                                        </span>

                                        <span className="text-sm font-semibold text-primary">
                                            78%
                                        </span>
                                    </div>

                                    <div className="h-2 overflow-hidden rounded-full bg-muted/60">
                                        <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-primary via-violet-500 to-cyan-400" />
                                    </div>
                                </div>

                                {/* Recommendation */}
                                <div className="rounded-2xl border border-white/10 bg-background/50 backdrop-blur-sm p-5">
                                    <div className="flex items-center gap-2">
                                        <Sparkles className="h-4 w-4 text-primary" />

                                        <p className="text-xs uppercase tracking-wide text-muted-foreground">
                                            AI Recommendation
                                        </p>
                                    </div>

                                    <p className="mt-3">
                                        <span className="text-muted-foreground">
                                            Continue:
                                        </span>{" "}
                                        <span className="font-semibold">
                                            Advanced React Patterns
                                        </span>
                                    </p>

                                    <p className="mt-1 text-sm text-muted-foreground">
                                        Estimated time: 2h 30m
                                    </p>
                                </div>

                                {/* Upcoming */}
                                <div className="rounded-2xl border border-white/10 bg-background/50 backdrop-blur-sm p-5">
                                    <p className="text-xs uppercase tracking-wide text-muted-foreground">
                                        Upcoming Assessment
                                    </p>

                                    <p className="mt-2 font-semibold">
                                        React Hooks Interview
                                    </p>

                                    <p className="mt-1 text-sm text-muted-foreground">
                                        Scheduled for today
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Floating Cards */}

                        {/* Top */}
                        <div className="absolute -right-8 top-6 rounded-2xl border border-white/10 bg-card/90 backdrop-blur-xl px-4 py-3 shadow-xl">
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                                    <FileText className="h-5 w-5 text-primary" />
                                </div>

                                <div>
                                    <p className="text-xs text-muted-foreground">
                                        Resume Score
                                    </p>

                                    <p className="font-bold">92%</p>
                                </div>
                            </div>
                        </div>

                        {/* Bottom */}
                        <div className="absolute -right-8 bottom-6 rounded-2xl border border-white/10 bg-card/90 backdrop-blur-xl px-4 py-3 shadow-xl">
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                                    <Briefcase className="h-5 w-5 text-primary" />
                                </div>

                                <div>
                                    <p className="text-xs text-muted-foreground">
                                        Interview Ready
                                    </p>

                                    <p className="font-bold">84%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </PageContainer>
        </Section>
    );
};
