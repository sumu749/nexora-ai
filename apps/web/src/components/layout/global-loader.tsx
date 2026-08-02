"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function GlobalLoader({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = window.setTimeout(() => setIsLoading(false), 180);
        return () => window.clearTimeout(timer);
    }, []);

    useEffect(() => {
        setIsLoading(true);
        const timer = window.setTimeout(() => setIsLoading(false), 220);
        return () => window.clearTimeout(timer);
    }, [pathname]);

    if (isLoading) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-background px-6 py-16">
                <div className="flex flex-col items-center gap-4 rounded-2xl border border-slate-200/70 bg-white/80 p-8 text-center shadow-lg backdrop-blur dark:border-slate-800 dark:bg-slate-900/80">
                    <div className="relative h-12 w-12 animate-spin rounded-full border-4 border-slate-300 border-t-sky-500 dark:border-slate-700 dark:border-t-sky-400" />
                    <div className="space-y-2">
                        <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                            Loading SkillForge
                        </p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                            Preparing your next learning experience...
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    return <>{children}</>;
}
