"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

interface NavItemProps {
    href: string;
    label: string;
    active: boolean;
}

export function NavItem({ href, label, active }: NavItemProps) {
    return (
        <Link href={href} className="group relative block">
            <div
                className={cn(
                    "relative flex items-center gap-1 rounded-2xl px-4 py-2.5 text-sm font-semibold tracking-[0.01em] transition-all duration-300 hover:bg-accent/70",
                    active
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground",
                )}
            >
                {active && (
                    <motion.div
                        layoutId="navbar-active-pill"
                        transition={{
                            type: "spring",
                            stiffness: 420,
                            damping: 32,
                        }}
                        className="absolute inset-0 rounded-2xl border border-primary/20 bg-gradient-to-r from-primary/12 to-secondary/12 shadow-[inset_0_1px_0_rgba(255,255,255,0.35)]"
                    />
                )}

                <span className="relative z-10">{label}</span>

                <ArrowUpRight className="relative z-10 h-3.5 w-3.5 -translate-x-1 text-primary opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />

                <span className="absolute bottom-[7px] left-4 h-px w-0 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-[calc(100%-24px)]" />
            </div>
        </Link>
    );
}
