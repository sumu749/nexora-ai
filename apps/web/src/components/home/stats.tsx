"use client";

import CountUp from "react-countup";
import { TrendingUp } from "lucide-react";

import { HOME_STATS } from "@/data/home/stats";
import { PageContainer, Section } from "@/components/shared";
import { cn } from "@/lib/utils";

export default function HomeStats() {
    return (
        <Section className="relative overflow-hidden py-24">
            {/* Background */}
            <div className="absolute inset-0 bg-mesh opacity-20" />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,#6D5DF6_0%,transparent_35%),radial-gradient(circle_at_right,#14B8A6_0%,transparent_35%)] opacity-10" />

            <PageContainer>
                {/* Top Line */}
                <div className="mb-16 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />

                <div className="grid grid-cols-2 gap-y-14 lg:grid-cols-4">
                    {HOME_STATS.map((stat, index) => {
                        const Icon = stat.icon;

                        return (
                            <div
                                key={stat.label}
                                className="group relative flex flex-col items-center text-center"
                            >
                                {/* Vertical Divider */}
                                {index !== HOME_STATS.length - 1 && (
                                    <div className="absolute right-0 top-1/2 hidden h-28 -translate-y-1/2 lg:block">
                                        <div className="relative h-full w-px bg-border">
                                            <div className="absolute inset-0 origin-top scale-y-0 bg-gradient-to-b from-primary via-cyan-400 to-secondary transition-transform duration-500 group-hover:scale-y-100" />
                                        </div>
                                    </div>
                                )}

                                {/* Icon */}
                                <div
                                    className={cn(
                                        "relative mb-6 transition-all duration-500",
                                        "group-hover:-translate-y-2 group-hover:scale-110",
                                        stat.accent,
                                    )}
                                >
                                    <div className="absolute inset-0 rounded-full bg-current opacity-10 blur-2xl transition-all duration-500 group-hover:scale-150" />

                                    <Icon className="relative h-10 w-10" />
                                </div>

                                {/* Number */}
                                <h3 className="text-5xl font-black tracking-tight transition-transform duration-300 group-hover:scale-110">
                                    <CountUp
                                        end={stat.end}
                                        duration={2.5}
                                        separator=","
                                        enableScrollSpy
                                        scrollSpyOnce
                                    />
                                    {stat.suffix}
                                </h3>

                                {/* Label */}
                                <p className="mt-3 text-lg font-semibold">
                                    {stat.label}
                                </p>

                                {/* Description */}
                                <p className="mt-2 max-w-[220px] text-sm leading-6 text-muted-foreground">
                                    {stat.description}
                                </p>

                                {/* Animated Line */}
                                <div className="mt-6 h-[3px] w-12 overflow-hidden rounded-full bg-border">
                                    <div className="h-full w-0 rounded-full bg-gradient-to-r from-primary to-cyan-400 transition-all duration-500 group-hover:w-full" />
                                </div>

                                {/* Trend */}
                                <div className="mt-4 flex items-center gap-2 text-xs font-medium text-primary opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                                    <TrendingUp className="h-3.5 w-3.5" />

                                    {stat.trend}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom Line */}
                <div className="mt-16 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
            </PageContainer>
        </Section>
    );
}
