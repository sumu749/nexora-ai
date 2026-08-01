import { Card } from "@/components/ui/card";
import { BadgeCheck, Quote, Star } from "lucide-react";

interface Props {
    name: string;
    role: string;
    text: string;
}

export function TestimonialCard({ name, role, text }: Props) {
    const initials = name
        .split(" ")
        .map((word) => word[0])
        .join("");

    return (
        <Card
            interactive
            className="
                group
                relative
                w-[400px]
                shrink-0
                overflow-hidden
                rounded-3xl
                border
                border-border/60
                bg-card/70
                p-7
                backdrop-blur-xl
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-primary/30
                hover:shadow-[0_20px_50px_rgba(109,93,246,0.18)]
            "
        >
            {/* Glow */}
            <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-primary/10 blur-3xl" />
            </div>

            {/* Quote Icon */}
            <Quote className="absolute right-6 top-6 h-10 w-10 rotate-180 text-primary/10 transition-transform duration-500 group-hover:scale-110" />

            {/* Rating */}
            <div className="relative z-10 mb-5 flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                        key={index}
                        className="h-4 w-4 fill-amber-400 text-amber-400"
                    />
                ))}
            </div>

            {/* Testimonial */}
            <p className="relative z-10 min-h-[140px] text-[15px] leading-8 text-muted-foreground">
                &quot;{text}&quot;
            </p>

            {/* Footer */}
            <div className="relative z-10 mt-7 flex items-center gap-4 border-t border-border/60 pt-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary via-violet-500 to-cyan-500 font-semibold text-white shadow-lg">
                    {initials}
                </div>

                <div className="min-w-0 flex-1">
                    <h4 className="truncate font-semibold text-foreground">
                        {name}
                    </h4>

                    <p className="truncate text-sm text-muted-foreground">
                        {role}
                    </p>
                </div>

                <BadgeCheck className="h-5 w-5 shrink-0 text-primary" />
            </div>
        </Card>
    );
}
