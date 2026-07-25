import { HOME_TESTIMONIALS } from "@/data/home/testimonials";
import { PageContainer, Section, SectionHeading } from "../shared";
import { Card } from "../ui/card";
import { Star } from "lucide-react";

export default function HomeTestimonials() {
    return (
        <Section>
            <PageContainer>
                <SectionHeading
                    eyebrow="Testimonials"
                    title="What Our Learners Say"
                    description="Discover how SkillForge AI is helping learners achieve their goals."
                />

                <div className="grid md:grid-cols-3 gap-6">
                    {HOME_TESTIMONIALS.map((t) => (
                        <Card key={t.name} interactive className="p-6 relative">
                            <span className="absolute top-5 right-6 text-5xl font-serif text-primary/10 select-none leading-none">
                                &rdquo;
                            </span>
                            <div className="flex gap-1 mb-4">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <Star
                                        key={i}
                                        className="h-4 w-4 fill-accent text-accent"
                                    />
                                ))}
                            </div>
                            <p className="text-sm mb-5 leading-relaxed relative z-10">
                                &ldquo;{t.text}&rdquo;
                            </p>
                            <div className="flex items-center gap-3 pt-4 border-t">
                                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-white text-xs font-semibold shrink-0">
                                    {t.name
                                        .split(" ")
                                        .map((n) => n[0])
                                        .join("")}
                                </div>
                                <div>
                                    <div className="font-semibold text-sm">
                                        {t.name}
                                    </div>
                                    <div className="text-xs text-muted-foreground">
                                        {t.role}
                                    </div>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </PageContainer>
        </Section>
    );
}
