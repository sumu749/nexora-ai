"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

interface NavbarCTAProps {
    href: string;
    label: string;
}

export function NavbarCTA({ href, label }: NavbarCTAProps) {
    return (
        <motion.div
            whileHover={{ scale: 1.04, y: -3 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 360, damping: 24 }}
            className="relative"
        >
            <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-violet-500 to-pink-500 opacity-70 blur-3xl"
                animate={{ opacity: [0.5, 0.8, 0.5], scale: [1, 1.03, 1] }}
                transition={{ duration: 2.8, repeat: Infinity }}
            />

            <Link
                href={href}
                className="relative isolate inline-flex items-center gap-3 overflow-hidden rounded-full border border-white/20 bg-slate-950/95 px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_45px_-20px_rgba(112,211,255,0.85)] ring-1 ring-white/10 backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_60px_-24px_rgba(59,130,246,0.55)]"
            >
                <span className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.22),transparent_35%)] opacity-70" />
                <span className="absolute right-0 top-1/2 h-12 w-12 -translate-y-1/2 rounded-full bg-white/10 blur-xl" />

                <span className="relative z-10 flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-cyan-300 via-violet-400 to-fuchsia-500 shadow-lg shadow-cyan-500/30">
                        <Sparkles className="h-4 w-4 text-white" />
                    </span>
                    <span className="relative z-10 text-white">{label}</span>
                    <ArrowRight className="relative z-10 h-4 w-4 text-white transition-transform duration-300 group-hover:translate-x-2" />
                </span>
            </Link>
        </motion.div>
    );
}
