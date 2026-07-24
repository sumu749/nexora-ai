import { cn } from "@/lib/utils";
import { Award, BookOpen, TrendingUp, Users } from "lucide-react";

export default function HomeStats() {
    return (
        <>
            <section className="border-y bg-muted/30 py-14">
                <div className="container grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                        {
                            icon: BookOpen,
                            label: "Expert Courses",
                            value: "13+",
                            accent: "text-primary bg-primary/10",
                        },
                        {
                            icon: Users,
                            label: "Active Learners",
                            value: "2,800+",
                            accent: "text-secondary bg-secondary/10",
                        },
                        {
                            icon: Award,
                            label: "Certificates",
                            value: "1,200+",
                            accent: "text-accent bg-accent/10",
                        },
                        {
                            icon: TrendingUp,
                            label: "Avg. Rating",
                            value: "4.7/5",
                            accent: "text-primary bg-primary/10",
                        },
                    ].map((stat) => (
                        <div
                            key={stat.label}
                            className="group flex flex-col items-center text-center"
                        >
                            <div
                                className={cn(
                                    "flex h-12 w-12 items-center justify-center rounded-2xl mb-3 transition-transform duration-300 ease-smooth group-hover:scale-110 group-hover:-translate-y-0.5",
                                    stat.accent,
                                )}
                            >
                                <stat.icon className="h-5.5 w-5.5" />
                            </div>
                            <div className="text-2xl md:text-3xl font-bold tracking-tight">
                                {stat.value}
                            </div>
                            <div className="text-sm text-muted-foreground mt-0.5">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
