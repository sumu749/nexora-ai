import Link from "next/link";

export function Logo() {
    return (
        <Link href="/" className="group flex items-center gap-3">
            <div
                className="
                relative
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                bg-gradient-to-br
                from-primary
                via-violet-500
                to-cyan-500
                transition-all
                duration-500
                group-hover:rotate-6
                group-hover:scale-105
                group-hover:shadow-[0_0_30px_rgba(109,93,246,.45)]
            "
            >
                <div className="absolute inset-[1px] rounded-[11px] bg-background/15 backdrop-blur-sm" />

                <span className="relative text-lg font-bold text-white">N</span>
            </div>

            <div className="leading-tight">
                <h2 className="text-lg font-bold tracking-tight">Nexora</h2>

                <p className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
                    AI
                </p>
            </div>
        </Link>
    );
}
