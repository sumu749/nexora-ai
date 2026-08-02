"use client";

import { FormEvent, useState } from "react";

import {
    ArrowRight,
    CheckCircle2,
    Loader2,
    Mail,
    ShieldCheck,
    Sparkles,
    TrendingUp,
    Zap,
} from "lucide-react";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { PageContainer, Section } from "@/components/shared";

const highlights = [
    "Weekly resource drops",
    "AI career and interview tips",
    "New course announcements",
    "Zero spam, just value",
];

const stats = [
    { label: "Active learners", value: "12k+" },
    { label: "Weekly send", value: "Every Monday" },
];

export default function HomeNewsletter() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (isSubmitting) return;

        const form = e.currentTarget;

        const fd = new FormData(form);

        const email = fd.get("email")?.toString().trim();

        if (!email) {
            toast.error("Please enter your email.");
            return;
        }

        try {
            setIsSubmitting(true);

            const response = await fetch("/api/newsletter", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                }),
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => null);
                const errorMessage =
                    errorData?.error ||
                    "Something went wrong. Please try again.";

                throw new Error(errorMessage);
            }

            toast.success("You're subscribed! Welcome to SkillForge AI 🎉");

            form.reset();
        } catch (error) {
            console.error(error);

            toast.error("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <Section className="relative overflow-hidden py-28">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.14),_transparent_45%),radial-gradient(circle_at_bottom_right,_rgba(34,211,238,0.12),_transparent_40%)]" />
            <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]" />
            <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[140px]" />

            <PageContainer>
                <div className="relative overflow-hidden rounded-[36px] border border-border/70 bg-card/80 p-8 shadow-[0_30px_120px_rgba(15,23,42,0.14)] backdrop-blur-xl transition-all duration-500 hover:border-primary/30 hover:shadow-[0_35px_140px_rgba(109,93,246,0.2)] md:p-10 lg:p-12">
                    <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.06),transparent_35%,rgba(255,255,255,0.04))]" />
                    <div className="absolute -left-20 top-0 h-48 w-48 rounded-full bg-primary/10 blur-[120px]" />
                    <div className="absolute -right-16 bottom-0 h-48 w-48 rounded-full bg-cyan-500/10 blur-[120px]" />

                    <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                        <div className="text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary">
                                <Sparkles className="h-4 w-4" />
                                Weekly AI learning digest
                            </div>

                            <h2 className="mt-6 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
                                Stay ahead with curated tech insights
                            </h2>

                            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted-foreground lg:mx-0">
                                Get practical learning guides, AI updates,
                                interview prep, and fresh course picks in your
                                inbox every week.
                            </p>

                            <form
                                onSubmit={handleSubmit}
                                className="mx-auto mt-8 max-w-2xl lg:mx-0"
                            >
                                <div className="flex flex-col gap-3 rounded-[22px] border border-border/70 bg-background/80 p-3 shadow-inner shadow-black/5 backdrop-blur md:flex-row">
                                    <div className="flex flex-1 items-center rounded-[16px] border border-transparent bg-background/70 px-4 transition focus-within:border-primary/30 focus-within:ring-4 focus-within:ring-primary/10">
                                        <Mail className="mr-3 h-4 w-4 text-muted-foreground" />
                                        <input
                                            name="email"
                                            type="email"
                                            required
                                            autoComplete="email"
                                            placeholder="Enter your email address"
                                            className="h-14 flex-1 bg-transparent pr-2 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
                                            disabled={isSubmitting}
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        size="lg"
                                        disabled={isSubmitting}
                                        className="h-14 min-w-[170px] rounded-[16px] px-6 shadow-lg shadow-primary/20"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                Subscribing...
                                            </>
                                        ) : (
                                            <>
                                                Subscribe
                                                <ArrowRight className="ml-2 h-4 w-4" />
                                            </>
                                        )}
                                    </Button>
                                </div>
                            </form>

                            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm text-muted-foreground lg:justify-start">
                                <span className="text-amber-400">★★★★★</span>
                                <span>
                                    Trusted by{" "}
                                    <strong className="text-foreground">
                                        12,000+
                                    </strong>{" "}
                                    learners worldwide
                                </span>
                            </div>
                        </div>

                        <div className="rounded-[28px] border border-border/70 bg-background/70 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur">
                            <div className="flex items-start gap-3">
                                <div className="rounded-2xl bg-primary/10 p-3 text-primary">
                                    <Zap className="h-5 w-5" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-foreground">
                                        What you’ll get
                                    </h3>
                                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                                        A refined weekly mix of actionable
                                        insights for modern builders.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-6 space-y-3">
                                {highlights.map((item) => (
                                    <div
                                        key={item}
                                        className="flex items-center gap-3 rounded-2xl border border-border/60 bg-card/70 px-4 py-3"
                                    >
                                        <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                                        <span className="text-sm text-foreground">
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6 grid gap-3 sm:grid-cols-2">
                                {stats.map((stat) => (
                                    <div
                                        key={stat.label}
                                        className="rounded-2xl border border-border/60 bg-gradient-to-br from-primary/10 to-cyan-500/10 p-4"
                                    >
                                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <TrendingUp className="h-4 w-4 text-primary" />
                                            {stat.label}
                                        </div>
                                        <p className="mt-2 text-xl font-semibold text-foreground">
                                            {stat.value}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6 flex items-center gap-2 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-700 dark:text-emerald-400">
                                <ShieldCheck className="h-4 w-4" />
                                No spam. Just thoughtful updates you can
                                actually use.
                            </div>
                        </div>
                    </div>
                </div>
            </PageContainer>
        </Section>
    );
}
