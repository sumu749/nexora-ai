"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";

interface NavbarCTAProps {
    href: string;
    label: string;
}

export function NavbarCTA({ href, label }: NavbarCTAProps) {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
        >
            <Button
                asChild
                className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-primary to-violet-600 px-6 font-semibold text-white shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 transition-all"
            >
                <Link href={href}>
                    <span className="relative z-10 flex items-center gap-2">
                        {label}
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                </Link>
            </Button>
        </motion.div>
    );
}
