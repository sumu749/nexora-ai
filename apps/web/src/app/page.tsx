"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { ArrowRight, Sparkles } from "lucide-react";
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
import { HomeFeatures } from "@/components/home/features";
import { HomeHero } from "@/components/home/hero";

export default function HomePage() {
    const { data, isLoading } = useQuery({
        queryKey: ["featured-courses"],
        queryFn: async () => {
            const res = await api.get("/courses", {
                params: { limit: 4, sort: "popular" },
            });
            return res.data as { data: Course[] };
        },
    });

    return (
        <>
            {/* Hero */}
            <HomeHero />

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
            <HomeFeatures />

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
