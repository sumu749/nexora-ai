"use client";

import { HOME_TESTIMONIALS } from "@/data/home/testimonials";

import { PageContainer, Section, SectionHeading } from "@/components/shared";

import { InfiniteMarquee } from "@/components/ui/infinite-marquee";
import { TestimonialCard } from "@/components/ui/testimonial-card";

export default function HomeTestimonials() {
    return (
        <Section className="relative overflow-hidden py-24">
            {/* Background */}
            <div className="absolute inset-0 bg-mesh opacity-40" />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#6D5DF6_0%,transparent_30%),radial-gradient(circle_at_bottom_right,#14B8A6_0%,transparent_30%)] opacity-15" />

            <PageContainer className="relative">
                <SectionHeading
                    eyebrow="Testimonials"
                    title="Loved by Developers Worldwide"
                    description="Thousands of learners trust SkillForge AI to improve their skills, prepare for interviews, and accelerate their careers."
                />

                <div className="mt-16">
                    <InfiniteMarquee direction="left" speed="slow">
                        {HOME_TESTIMONIALS.map((item) => (
                            <TestimonialCard key={item.name} {...item} />
                        ))}
                    </InfiniteMarquee>
                </div>
            </PageContainer>
        </Section>
    );
}
