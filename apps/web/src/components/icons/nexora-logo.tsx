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
            className={cn("h-11 w-11", className)}
        >
            <defs>
                <linearGradient
                    id="nexora-gradient"
                    x1="12"
                    y1="8"
                    x2="52"
                    y2="56"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#6D5DF6" />
                    <stop offset="0.55" stopColor="#8B5CF6" />
                    <stop offset="1" stopColor="#14B8A6" />
                </linearGradient>
            </defs>

            <path
                d="M32 6L50 17.5V46.5L32 58L14 46.5V17.5L32 6Z"
                fill="url(#nexora-gradient)"
            />

            <path
                d="M24 20L40 32L24 44"
                stroke="white"
                strokeWidth="4.2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />

            <circle cx="40" cy="24" r="2.4" fill="white" />
        </svg>
    );
}
