import { cn } from "@/lib/utils";

interface NexoraLogoProps {
    className?: string;
}

export function NexoraLogo({ className }: NexoraLogoProps) {
    return (
        <svg
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={cn("h-10 w-10", className)}
        >
            <defs>
                <linearGradient
                    id="nexora-gradient"
                    x1="10"
                    y1="8"
                    x2="54"
                    y2="56"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#6D5DF6" />
                    <stop offset="0.55" stopColor="#8B5CF6" />
                    <stop offset="1" stopColor="#14B8A6" />
                </linearGradient>
            </defs>

            {/* Hexagon */}
            <path
                d="M32 4L54 16.5V47.5L32 60L10 47.5V16.5L32 4Z"
                fill="url(#nexora-gradient)"
            />

            {/* Inner Cut */}
            <path
                d="M24 20L40 32L24 44"
                stroke="white"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
