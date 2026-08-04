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
                    scale: 1.08,
                }}
                transition={{
                    type: "spring",
                    stiffness: 280,
                    damping: 18,
                }}
                className="drop-shadow-[0_0_18px_rgba(109,93,246,.28)]"
            >
                <NexoraLogo />
            </motion.div>

            {!iconOnly && (
                <div className="leading-none">
                    <h1 className="text-[1.05rem] font-semibold tracking-[0.02em] text-foreground">
                        Nexora
                    </h1>

                    <span className="mt-0.5 block text-[10px] font-medium uppercase tracking-[0.35em] text-muted-foreground">
                        AI
                    </span>
                </div>
            )}
        </div>
    );
}
