import { cn } from "@/lib/utils";

interface SectionHeadingProps {
    eyebrow?: string;
    title: string;
    description?: string;
    className?: string;
}

export function SectionHeading({
    eyebrow,
    title,
    description,
    className,
}: SectionHeadingProps) {
    return (
        <div className={cn("mx-auto max-w-3xl text-center", className)}>
            {eyebrow && (
                <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
                    {eyebrow}
                </p>
            )}

            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                {title}
            </h2>

            {description && (
                <p className="mt-4 text-muted-foreground">{description}</p>
            )}
        </div>
    );
}
