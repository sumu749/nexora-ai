import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

import { HOW_IT_WORKS, STEP_COLORS } from "@/data/home/how-it-works";
import { PageContainer, Section, SectionHeading } from "@/components/shared";
import { cn } from "@/lib/utils";

export const HomeHowItWorks = () => {
    return (
        <Section className="relative overflow-hidden py-28">
            {/* Background */}
            <div className="absolute inset-0 bg-mesh opacity-30" />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#6D5DF6_0%,transparent_35%),radial-gradient(circle_at_bottom_right,#14B8A6_0%,transparent_30%)] opacity-15" />

            <div className="absolute inset-0 bg-grid-white/[0.015]" />

            <PageContainer>
                <SectionHeading
                    eyebrow="Learning Journey"
                    title="Your Roadmap to Becoming a Developer"
                    description="From choosing your first course to landing your dream job, SkillForge guides you through every step of your learning journey."
                />

                <div className="relative mt-24">
                    {/* Desktop Connector */}
                    <div className="absolute left-0 right-0 top-10 hidden lg:block">
                        <div className="mx-auto h-px w-[82%] bg-gradient-to-r from-primary via-cyan-400 to-secondary opacity-30" />

                        <div className="absolute inset-x-0 top-0 mx-auto h-px w-[82%] blur-sm bg-gradient-to-r from-primary via-cyan-400 to-secondary opacity-30" />
                    </div>

                    <div className="grid gap-10 lg:grid-cols-4">
                        {HOW_IT_WORKS.map((item, index) => {
                            const Icon = item.icon;

                            const color =
                                STEP_COLORS[
                                    item.color as keyof typeof STEP_COLORS
                                ];

                            return (
                                <div
                                    key={item.id}
                                    className="group relative flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-6 duration-700"
                                    style={{
                                        animationDelay: `${index * 120}ms`,
                                    }}
                                >
                                    {/* Giant Step Number */}
                                    <span className="pointer-events-none absolute -top-10 text-8xl font-black tracking-tight text-primary/[0.04] select-none">
                                        0{item.step}
                                    </span>

                                    {/* Icon */}
                                    <div
                                        style={{
                                            animation: `float 6s ease-in-out infinite`,
                                            animationDelay: `-${index * 1.5}s`,
                                        }}
                                        className={cn(
                                            "relative z-20 flex h-20 w-20 items-center justify-center rounded-3xl border backdrop-blur-xl shadow-xl transition-all duration-500",
                                            "bg-gradient-to-br from-background to-primary/5",
                                            "group-hover:-translate-y-3 group-hover:scale-110",
                                            "group-hover:shadow-[0_20px_45px_rgba(109,93,246,.35)]",
                                            "group-hover:ring-2 group-hover:ring-primary/20",
                                            "animate-[float_6s_ease-in-out_infinite]",
                                            color.border,
                                            color.bg,
                                        )}
                                    >
                                        {item.featured && (
                                            <Sparkles className="absolute -right-2 -top-2 h-5 w-5 animate-pulse text-primary" />
                                        )}

                                        <Icon
                                            className={cn(
                                                "h-9 w-9 transition-all duration-500 group-hover:scale-110",
                                                color.icon,
                                            )}
                                        />
                                    </div>

                                    {/* Card */}
                                    <div
                                        className={cn(
                                            "mt-8 flex flex-1 flex-col rounded-3xl border",
                                            "border-white/10",
                                            "bg-card/60",
                                            "backdrop-blur-xl",
                                            "p-7",
                                            "transition-all duration-500",
                                            "group-hover:-translate-y-2",
                                            "group-hover:border-primary/30",
                                            "group-hover:ring-1 group-hover:ring-primary/20",
                                            "group-hover:shadow-2xl",
                                        )}
                                    >
                                        {/* Badge */}
                                        <span className="mx-auto rounded-full bg-primary/10 px-4 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
                                            STEP 0{item.step}
                                        </span>

                                        {/* Title */}
                                        <h3 className="mt-6 text-2xl font-bold tracking-tight">
                                            {item.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="mt-4 flex-1 text-[15px] leading-8 text-muted-foreground">
                                            {item.description}
                                        </p>

                                        {/* CTA */}
                                        <Link
                                            href={item.href}
                                            className="mt-8 inline-flex items-center justify-center gap-2 font-semibold text-primary transition-all duration-300 group-hover:translate-x-1"
                                        >
                                            {item.button}

                                            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                        </Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </PageContainer>
        </Section>
    );
};
