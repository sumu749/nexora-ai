"use client";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import HomeStats from "@/components/home/stats";
import HomeCategories from "@/components/home/categories";
import HomeTestimonials from "@/components/home/testimonials";
import { HomeFeatures } from "@/components/home/features";
import { HomeHero } from "@/components/home/hero";
import { HomeFeaturedCourses } from "@/components/home/featured-courses";
import { HomeHowItWorks } from "@/components/home/HomeHowItWorks";

export default function HomePage() {
    return (
        <>
            {/* Hero */}
            <HomeHero />

            {/* Stats */}
            <HomeStats />

            {/* Featured Courses */}
            <HomeFeaturedCourses />

            {/* AI Tutor Feature */}
            <HomeFeatures />

            {/* How It Works */}
            <HomeHowItWorks />

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
