"use client";

import type { CSSProperties } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

import { cn } from "@/lib/utils";
import type { HomeCategory } from "@/data/home/categories";

type CategoryTileProps = HomeCategory & { style?: CSSProperties };

export default function CategoryTile({
    id,
    name,
    description,
    badge,
    courses,
    projects,
    href,
    icon: Icon,
    accent,
    span,
    style,
}: CategoryTileProps) {
    const isHero = Boolean(span);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const spotlight = useMotionTemplate`
        radial-gradient(
            240px circle at ${mouseX}px ${mouseY}px,
            rgba(255,255,255,.16),
            transparent 80%
        )
    `;

    function handleMouseMove(e: React.MouseEvent<HTMLAnchorElement>) {
        const rect = e.currentTarget.getBoundingClientRect();

        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
    }

    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 40,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{
                once: true,
            }}
            transition={{
                duration: 0.45,
                delay: id * 0.06,
            }}
            style={style}
            className={cn(
                span,
                "transition-all duration-300",
                "group-hover/categories:opacity-45",
                "group-hover/categories:scale-[0.985]",
                "hover:!opacity-100",
                "hover:!scale-100",
            )}
        >
            <Link
                href={href}
                onMouseMove={handleMouseMove}
                className="group relative block h-full overflow-hidden rounded-[32px]"
            >
                {/* Border */}

                <div className="absolute inset-0 rounded-[32px] border border-border/60 transition-colors duration-500 group-hover:border-primary/40" />

                {/* Background */}

                <div
                    className={cn(
                        "absolute inset-0 rounded-[32px] backdrop-blur-xl transition-all duration-500",
                        isHero ? "bg-card" : "bg-card/70",
                    )}
                />

                {/* Accent Glow */}

                <div
                    className="absolute inset-0 opacity-70 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                        background: `
                            radial-gradient(
                                circle at top left,
                                ${accent}25,
                                transparent 70%
                            )
                        `,
                    }}
                />

                {/* Noise */}

                <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(circle,#ffffff_1px,transparent_1px)] [background-size:18px_18px]" />

                {/* Mouse Spotlight */}

                <motion.div
                    className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                        WebkitMaskImage: spotlight,
                        maskImage: spotlight,
                        background:
                            "linear-gradient(to bottom right, rgba(255,255,255,.16), transparent)",
                    }}
                />

                {/* Content */}

                <div
                    className={cn(
                        "relative flex h-full flex-col justify-between",
                        isHero ? "p-10" : "p-8",
                    )}
                >
                    {/* Top */}
                    <div className="flex items-start justify-between">
                        {/* Icon */}
                        <motion.div
                            whileHover={{
                                y: -4,
                                rotate: 6,
                                scale: 1.05,
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 260,
                                damping: 18,
                            }}
                            className={cn(
                                "relative flex items-center justify-center rounded-2xl border border-primary/15 bg-background/70 backdrop-blur-md",
                                isHero ? "h-20 w-20" : "h-16 w-16",
                            )}
                        >
                            {/* Icon Glow */}
                            <div className="absolute inset-0 rounded-2xl bg-primary/10 blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                            <Icon
                                className={cn(
                                    "relative z-10 text-primary transition-transform duration-500 group-hover:scale-110",
                                    isHero ? "h-10 w-10" : "h-8 w-8",
                                )}
                            />
                        </motion.div>

                        {/* Right Side */}
                        <div className="flex flex-col items-end gap-4">
                            {/* Hero Badge */}
                            {badge && (
                                <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1">
                                    <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                                    <span className="text-xs font-medium text-primary">
                                        {badge}
                                    </span>
                                </div>
                            )}

                            {/* Arrow */}
                            <div
                                className="
                                    flex
                                    h-10
                                    w-10
                                    items-center
                                    justify-center
                                    rounded-full
                                    border
                                    border-border/60
                                    bg-background/60
                                    backdrop-blur
                                    transition-all
                                    duration-300
                                    group-hover:border-primary
                                    group-hover:bg-primary
                                    group-hover:text-white
                                    group-hover:translate-x-1
                                    group-hover:-translate-y-1
                                "
                            >
                                <ArrowUpRight className="h-4 w-4" />
                            </div>
                        </div>
                    </div>

                    {/* Bottom Content */}
                    <div>
                        <h3
                            className={cn(
                                "font-bold tracking-tight transition-colors duration-300 group-hover:text-primary",
                                isHero ? "text-3xl" : "text-xl",
                            )}
                        >
                            {name}
                        </h3>

                        <p
                            className={cn(
                                "mt-4 text-muted-foreground",
                                isHero
                                    ? "max-w-sm text-base leading-8"
                                    : "text-sm leading-7",
                            )}
                        >
                            {description}
                        </p>

                        {/* CTA */}
                        <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                            Explore Courses
                            <ArrowUpRight className="h-4 w-4" />
                        </div>

                        {/* Stats */}
                        <div className="mt-8 flex items-center gap-6 text-sm text-muted-foreground">
                            <div>
                                <span className="font-semibold text-foreground">
                                    {courses}+
                                </span>{" "}
                                Courses
                            </div>

                            <div>
                                <span className="font-semibold text-foreground">
                                    {projects}
                                </span>{" "}
                                Projects
                            </div>
                        </div>

                        {/* Progress Line */}
                        <div className="mt-8 h-[2px] overflow-hidden rounded-full bg-border/50">
                            <motion.div
                                initial={{ width: 0 }}
                                whileHover={{ width: "100%" }}
                                transition={{
                                    duration: 0.45,
                                    ease: "easeOut",
                                }}
                                className="h-full bg-gradient-to-r from-primary via-violet-500 to-cyan-400"
                            />
                        </div>
                    </div>
                    {/* Hero Decoration */}
                    {isHero && (
                        <div className="pointer-events-none absolute bottom-8 right-8">
                            <div className="h-28 w-28 rounded-full bg-primary/10 blur-3xl" />
                        </div>
                    )}

                    {/* Corner Accent */}
                    <div
                        className="
                            pointer-events-none
                            absolute
                            -right-12
                            -top-12
                            h-36
                            w-36
                            rounded-full
                            bg-gradient-to-br
                            from-primary/10
                            to-cyan-400/10
                            blur-3xl
                            opacity-0
                            transition-opacity
                            duration-500
                            group-hover:opacity-100
                        "
                    />
                </div>
            </Link>
        </motion.div>
    );
}
