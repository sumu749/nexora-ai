"use client";

import { motion } from "framer-motion";

import { NexoraLogo } from "@/components/icons/nexora-logo";

interface LogoProps {
    iconOnly?: boolean;
}

export function Logo({ iconOnly = false }: LogoProps) {
    return (
        <div className="group inline-flex items-center gap-3">
            <motion.div
                whileHover={{
                    rotate: 8,
                    scale: 1.1,
                }}
                transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                }}
                className="drop-shadow-lg drop-shadow-primary/30 transition-all duration-300 group-hover:drop-shadow-2xl group-hover:drop-shadow-primary/40"
            >
                <NexoraLogo />
            </motion.div>

            {!iconOnly && (
                <div className="leading-none">
                    <h1 className="text-[1.1rem] font-bold tracking-[0.02em] bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">
                        Nexora
                    </h1>

                    <span className="mt-0.5 block text-[11px] font-semibold uppercase tracking-[0.4em] bg-clip-text text-transparent bg-gradient-to-r from-primary to-violet-500">
                        AI
                    </span>
                </div>
            )}
        </div>
    );
}
