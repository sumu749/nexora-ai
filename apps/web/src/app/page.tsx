"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import {
    ArrowRight,
    Sparkles,
    CheckCircle,
    CheckCircle2,
    FileText,
    Briefcase,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import {
    CourseCard,
    CourseCardSkeleton,
} from "@/components/courses/course-card";
import { api } from "@/lib/api";
import type { Course } from "@skillforge/shared";
import HomeStats from "@/components/home/stats";
import HomeCategories from "@/components/home/categories";
import HomeTestimonials from "@/components/home/testimonials";
import { PageContainer, Section, SectionHeading } from "@/components/shared";

const heroSlides = [
    {
        title: "Built for busy learners",
        description:
            "Learn at your own pace with bite-sized modules, guided projects, and quick AI feedback.",
    },
    {
        title: "AI help on demand",
        description:
            "Ask the tutor anything from syntax to architecture and get instant context-aware answers.",
    },
    {
        title: "Career-ready pathways",
        description:
            "Follow structured programs that connect you to real-world skills employers are hiring for.",
    },
];

export default function HomePage() {
    const [activeSlide, setActiveSlide] = useState(0);
    const { data, isLoading } = useQuery({
        queryKey: ["featured-courses"],
        queryFn: async () => {
            const res = await api.get("/courses", {
                params: { limit: 4, sort: "popular" },
            });
            return res.data as { data: Course[] };
        },
    });

    useEffect(() => {
        const timer = window.setInterval(() => {
            setActiveSlide((current) => (current + 1) % heroSlides.length);
        }, 6000);

        return () => window.clearInterval(timer);
    }, []);

    return (
        <>
            {/* Hero */}
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
                                Learn • Build • Get Hired
                            </span>

                            {/* Heading */}
                            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
                                Build Your{" "}
                                <span className="text-gradient">
                                    Developer Career
                                </span>
                                <br />
                                with AI
                            </h1>

                            {/* Description */}
                            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                                Master in-demand skills, build portfolio-ready
                                projects, prepare for technical interviews, and
                                accelerate your career with one AI-powered
                                developer platform.
                            </p>

                            {/* CTA */}
                            <div className="mt-8 flex flex-wrap gap-4">
                                <Link href="/explore">
                                    <Button
                                        size="lg"
                                        className="group shadow-glow"
                                    >
                                        Start Learning
                                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </Button>
                                </Link>

                                <Link href="/dashboard/chat">
                                    <Button size="lg" variant="secondary">
                                        Try AI Tutor
                                    </Button>
                                </Link>
                            </div>

                            {/* Trust Signals */}
                            <div className="mt-8 flex flex-wrap gap-4 text-sm text-muted-foreground">
                                <span>✓ AI Tutor</span>

                                <span>✓ Interview Prep</span>

                                <span>✓ Portfolio Projects</span>

                                <span>✓ Career Roadmaps</span>
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

            {/* Stats */}
            <HomeStats />

            {/* Featured Courses */}
            <Section>
                <PageContainer>
                    <div className="flex items-center justify-between mb-8">
                        <SectionHeading
                            eyebrow="Trending Now"
                            title="Popular Courses"
                            description="Start with our most-loved programs"
                            className="!text-left !mx-0 max-w-none"
                        />
                        <Link href="/explore">
                            <Button
                                variant="outline"
                                className="group shadow-xs"
                            >
                                View All
                                <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                            </Button>
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {isLoading
                            ? Array.from({ length: 4 }).map((_, i) => (
                                  <CourseCardSkeleton key={i} />
                              ))
                            : data?.data.map((course) => (
                                  <CourseCard key={course.id} course={course} />
                              ))}
                    </div>
                </PageContainer>
            </Section>

            {/* AI Tutor Feature */}
            <section className="py-16 bg-muted/30">
                <div className="container grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-4">
                            Your Personal AI Tutor
                        </h2>
                        <p className="text-muted-foreground mb-6">
                            Get instant explanations, code reviews, and
                            personalized study guidance. Our AI tutor
                            understands your learning context and adapts to your
                            pace.
                        </p>
                        <ul className="space-y-3 mb-8">
                            {[
                                "Context-aware answers based on your current course",
                                "Streaming responses for real-time learning",
                                "Covers programming, data science, cloud, and more",
                            ].map((item) => (
                                <li
                                    key={item}
                                    className="flex items-start gap-2"
                                >
                                    <CheckCircle className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <Link href="/dashboard/chat">
                            <Button>
                                <Sparkles className="mr-2 h-4 w-4" />
                                Start Chatting
                            </Button>
                        </Link>
                    </div>
                    <Card className="p-6">
                        <div className="space-y-4">
                            <div className="flex gap-3">
                                <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center text-xs">
                                    AI
                                </div>
                                <div className="rounded-xl bg-muted p-3 text-sm flex-1">
                                    What is the difference between useState and
                                    useReducer in React?
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs">
                                    AI
                                </div>
                                <div className="rounded-xl bg-primary/10 p-3 text-sm flex-1">
                                    Great question! useState is ideal for simple
                                    state, while useReducer handles complex
                                    state logic with multiple sub-values and
                                    actions...
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-20">
                <div className="container">
                    <div className="text-center max-w-xl mx-auto mb-14">
                        <h2 className="text-3xl font-bold tracking-tight mb-3">
                            How SkillForge Works
                        </h2>
                        <p className="text-muted-foreground">
                            Three simple steps between you and your next skill.
                        </p>
                    </div>
                    <div className="relative grid md:grid-cols-3 gap-8">
                        <div className="hidden md:block absolute top-8 left-[16.5%] right-[16.5%] h-px bg-gradient-to-r from-primary/40 via-secondary/40 to-accent/40" />
                        {[
                            {
                                step: "1",
                                title: "Choose Your Path",
                                desc: "Browse 13+ courses across web dev, data science, cloud, security, and AI.",
                                accent: "from-primary to-primary/80",
                            },
                            {
                                step: "2",
                                title: "Learn with Experts",
                                desc: "Follow structured modules with hands-on projects and real-world applications.",
                                accent: "from-secondary to-secondary/80",
                            },
                            {
                                step: "3",
                                title: "Get AI Support",
                                desc: "Ask your AI tutor anytime for explanations, debugging help, and study tips.",
                                accent: "from-accent to-accent/80",
                            },
                        ].map((item) => (
                            <Card
                                key={item.step}
                                interactive
                                className="relative text-center p-8"
                            >
                                <div
                                    className={cn(
                                        "relative z-10 h-16 w-16 rounded-2xl bg-gradient-to-br text-white flex items-center justify-center text-2xl font-bold mx-auto mb-5 shadow-md",
                                        item.accent,
                                    )}
                                >
                                    {item.step}
                                </div>
                                <h3 className="font-semibold text-lg mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {item.desc}
                                </p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <HomeTestimonials />

            {/* Categories */}
            <HomeCategories />

            {/* Newsletter */}
            <section className="py-16">
                <div className="container">
                    <Card className="max-w-2xl mx-auto p-8 md:p-10 text-center bg-mesh border-primary/10">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 mx-auto mb-4">
                            <Sparkles className="h-5.5 w-5.5 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">
                            Join our Newsletter
                        </h3>
                        <p className="text-muted-foreground mb-6">
                            Get course updates, AI tips, and special offers
                            delivered weekly.
                        </p>
                        <form
                            onSubmit={async (e) => {
                                e.preventDefault();
                                const form = e.currentTarget as HTMLFormElement;
                                const fd = new FormData(form);
                                const email = fd.get("email");
                                if (!email)
                                    return alert("Please enter your email");
                                try {
                                    await fetch("/api/newsletter", {
                                        method: "POST",
                                        headers: {
                                            "Content-Type": "application/json",
                                        },
                                        body: JSON.stringify({ email }),
                                    });
                                    alert("Thanks — check your inbox!");
                                    form.reset();
                                } catch (err) {
                                    console.error(err);
                                    alert("Failed to subscribe");
                                }
                            }}
                            className="max-w-md mx-auto flex items-center gap-2"
                        >
                            <input
                                name="email"
                                type="email"
                                placeholder="you@domain.com"
                                className="flex-1 h-11 rounded-lg border border-input bg-background px-4 text-sm shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                            />
                            <Button
                                type="submit"
                                size="lg"
                                className="shadow-sm"
                            >
                                Subscribe
                            </Button>
                        </form>
                    </Card>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20">
                <div className="container">
                    <Card className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-secondary text-primary-foreground p-12 md:p-16 text-center border-0 shadow-xl">
                        <div className="absolute inset-0 bg-mesh opacity-30" />
                        <CardContent className="p-0 relative z-10">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
                                Ready to Level Up Your Skills?
                            </h2>
                            <p className="mb-8 opacity-90 max-w-xl mx-auto leading-relaxed">
                                Join thousands of learners mastering in-demand
                                tech skills with expert courses and AI-powered
                                guidance.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <Link href="/sign-up">
                                    <Button
                                        size="lg"
                                        variant="secondary"
                                        className="shadow-lg"
                                    >
                                        Get Started Free
                                    </Button>
                                </Link>
                                <Link href="/explore">
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="border-white/30 bg-white/5 text-white hover:bg-white/15 backdrop-blur-sm"
                                    >
                                        Browse Courses
                                    </Button>
                                </Link>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </>
    );
}
