"use client";

import { cn } from "@/lib/utils";

interface InfiniteMarqueeProps {
    children: React.ReactNode;
    direction?: "left" | "right";
    speed?: "slow" | "normal" | "fast";
    pauseOnHover?: boolean;
    className?: string;
}

export function InfiniteMarquee({
    children,
    direction = "left",
    speed = "normal",
    pauseOnHover = true,
    className,
}: InfiniteMarqueeProps) {
    const duration =
        speed === "slow" ? "38s" : speed === "fast" ? "18s" : "26s";

    return (
        <div
            className={cn(
                "relative overflow-hidden",
                pauseOnHover && "group",
                className,
            )}
        >
            <div
                className={cn(
                    "flex w-max gap-6 animate-marquee",
                    direction === "right" && "[animation-direction:reverse]",
                    pauseOnHover && "group-hover:[animation-play-state:paused]",
                )}
                style={{
                    animationDuration: duration,
                }}
            >
                {children}
                {children}
            </div>
        </div>
    );
}
