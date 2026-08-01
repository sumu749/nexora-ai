"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { HomeCategory } from "@/data/home/categories";

type CategoryTileProps = HomeCategory;

export default function CategoryTile({
    name,
    description,
    href,
    icon: Icon,
    gradient,
    span,
}: CategoryTileProps) {
    return (
        <Link
            href={href}
            className={cn("group relative overflow-hidden rounded-3xl", span)}
        >
            {/* Border */}
            <div className="absolute inset-0 rounded-3xl border border-border/60 transition-all duration-500 group-hover:border-primary/40" />

            {/* Glow */}
            <div
                className={cn(
                    "absolute inset-0 bg-gradient-to-br opacity-0 blur-3xl transition-all duration-700 group-hover:opacity-100",
                    gradient,
                )}
            />

            {/* Background */}
            <div className="absolute inset-0 rounded-3xl bg-card/70 backdrop-blur-xl transition-all duration-500 group-hover:bg-card" />

            {/* Grid Pattern */}
            <div
                className="
                    absolute inset-0 opacity-[0.04]
                    [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)]
                    [background-size:28px_28px]
                "
            />

            {/* Spotlight */}
            <div
                className="
                    absolute -right-16 -top-16
                    h-44 w-44 rounded-full
                    bg-primary/10 blur-3xl
                    transition-all duration-700
                    group-hover:scale-125
                "
            />

            {/* Content */}
            <div className="relative flex h-full flex-col justify-between p-8">
                <div className="flex items-start justify-between">
                    <div
                        className="
                            flex h-16 w-16 items-center justify-center
                            rounded-2xl
                            border border-primary/20
                            bg-primary/5
                            transition-all duration-500
                            group-hover:rotate-6
                            group-hover:scale-110
                            group-hover:bg-primary/10
                        "
                    >
                        <Icon className="h-8 w-8 text-primary transition-transform duration-500 group-hover:scale-110" />
                    </div>

                    <ArrowUpRight
                        className="
                            h-6 w-6
                            text-muted-foreground
                            transition-all duration-500
                            group-hover:translate-x-1
                            group-hover:-translate-y-1
                            group-hover:text-primary
                        "
                    />
                </div>

                <div className="mt-10">
                    <h3 className="text-2xl font-bold tracking-tight">
                        {name}
                    </h3>

                    <p className="mt-3 max-w-xs leading-7 text-muted-foreground">
                        {description}
                    </p>
                </div>

                {/* Bottom Progress Line */}
                <div className="mt-10 h-px overflow-hidden rounded-full bg-border">
                    <div
                        className="
                            h-full
                            w-0
                            bg-gradient-to-r
                            from-primary
                            via-violet-500
                            to-cyan-400
                            transition-all duration-700
                            group-hover:w-full
                        "
                    />
                </div>
            </div>
        </Link>
    );
}
