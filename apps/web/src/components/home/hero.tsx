import Link from "next/link";
import { PageContainer, Section } from "../shared";
import { Button } from "../ui/button";
import { ArrowRight, Briefcase, CheckCircle2, FileText } from "lucide-react";
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
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
            <PageContainer>
                <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
                    {/* Left: copy */}
                    <div className="max-w-2xl animate-in-up">
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
                        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                            {HERO_CONTENT.description}
                        </p>

                        {/* CTA */}
                        <div className="mt-8 flex flex-wrap gap-4">
                            <Link href="/explore">
                                <Button
                                    size="lg"
                                    className="group h-12 rounded-xl px-6 font-semibold shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                                >
                                    Start Learning
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Button>
                            </Link>

                            <Link href="/dashboard/chat">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="h-12 rounded-xl border-2 bg-background/80 px-6 font-semibold backdrop-blur-sm transition-all duration-300 hover:border-primary hover:bg-primary/5"
                                >
                                    Try AI Tutor
                                </Button>
                            </Link>
                        </div>

                        {/* Trust Signals */}
                        <div className="mt-8 flex flex-wrap gap-3">
                            {HERO_TRUST_ITEMS.map((item) => (
                                <div
                                    key={item}
                                    className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-4 py-2 text-sm font-medium shadow-sm backdrop-blur"
                                >
                                    <CheckCircle2 className="h-4 w-4 text-primary" />
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: product preview mockup */}
                    <div
                        className="relative hidden lg:block animate-in-up"
                        style={{ animationDelay: "120ms" }}
                    >
                        <div className="relative rounded-2xl border border-border bg-card shadow-xl overflow-hidden">
                            <div className="flex items-center gap-1.5 border-b border-border bg-muted/40 px-4 py-3">
                                <span className="h-2.5 w-2.5 rounded-full bg-destructive/60" />
                                <span className="h-2.5 w-2.5 rounded-full bg-accent/60" />
                                <span className="h-2.5 w-2.5 rounded-full bg-secondary/60" />
                                <span className="ml-3 text-xs text-muted-foreground font-mono">
                                    skillforge.ai/dashboard/chat
                                </span>
                            </div>
                            <div className="p-6">
                                <h3 className="text-lg font-bold">
                                    AI Career Dashboard
                                </h3>

                                <p className="mt-1 text-sm text-muted-foreground">
                                    AI-powered insights for your learning
                                    journey.
                                </p>
                                <div className="mt-6 grid grid-cols-2 gap-4">
                                    <div className="rounded-xl border border-border bg-muted/30 p-4">
                                        <p className="text-xs text-muted-foreground">
                                            Resume Score
                                        </p>
                                        <p className="mt-2 text-2xl font-bold text-primary">
                                            92%
                                        </p>
                                    </div>

                                    <div className="rounded-xl border border-border bg-muted/30 p-4">
                                        <p className="text-xs text-muted-foreground">
                                            Interview Ready
                                        </p>
                                        <p className="mt-2 text-2xl font-bold text-primary">
                                            84%
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <div className="mb-2 flex items-center justify-between">
                                        <p className="text-sm font-medium">
                                            Weekly Progress
                                        </p>
                                        <span className="text-sm text-primary font-semibold">
                                            80%
                                        </span>
                                    </div>

                                    <div className="h-2 overflow-hidden rounded-full bg-muted">
                                        <div className="h-full w-[80%] rounded-full bg-primary" />
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <p className="mb-3 text-sm font-medium">
                                        Next Recommendations
                                    </p>

                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2 text-sm">
                                            <CheckCircle2 className="h-4 w-4 text-primary" />
                                            <span>Advanced React</span>
                                        </div>

                                        <div className="flex items-center gap-2 text-sm">
                                            <CheckCircle2 className="h-4 w-4 text-primary" />
                                            <span>System Design</span>
                                        </div>

                                        <div className="flex items-center gap-2 text-sm">
                                            <CheckCircle2 className="h-4 w-4 text-primary" />
                                            <span>Mock Interview</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating stat chips */}
                        <div
                            className="absolute -left-6 -top-4 rounded-xl border border-border bg-card px-4 py-3 shadow-lg animate-in-up"
                            style={{ animationDelay: "260ms" }}
                        >
                            <div className="flex items-center gap-2">
                                <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
                                    <FileText className="h-4 w-4 text-primary" />
                                </div>

                                <div>
                                    <p className="text-xs text-muted-foreground">
                                        Resume Score
                                    </p>

                                    <p className="text-sm font-bold">92%</p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="absolute -right-4 -bottom-6 rounded-xl border border-border bg-card px-4 py-3 shadow-lg animate-in-up"
                            style={{ animationDelay: "380ms" }}
                        >
                            <div className="flex items-center gap-2">
                                <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
                                    <Briefcase className="h-4 w-4 text-primary" />
                                </div>

                                <div>
                                    <p className="text-xs text-muted-foreground">
                                        Interview Ready
                                    </p>

                                    <p className="text-sm font-bold">84%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </PageContainer>
        </Section>
    );
};
