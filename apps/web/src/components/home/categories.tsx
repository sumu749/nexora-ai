"use client";

import { HOME_CATEGORIES } from "@/data/home/categories";

import { PageContainer, Section, SectionHeading } from "@/components/shared";

import CategoryTile from "@/components/ui/category-tile";

export default function HomeCategories() {
    return (
        <Section className="relative overflow-hidden py-28">
            {/* Background Mesh */}
            <div className="absolute inset-0 bg-mesh opacity-[0.04]" />

            {/* Top Glow */}
            <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />

            {/* Bottom Glow */}
            <div className="pointer-events-none absolute bottom-0 right-0 h-[340px] w-[340px] rounded-full bg-cyan-500/10 blur-[120px]" />

            {/* Left Glow */}
            <div className="pointer-events-none absolute left-0 top-1/2 h-[260px] w-[260px] -translate-y-1/2 rounded-full bg-violet-500/10 blur-[120px]" />

            <PageContainer className="relative">
                <SectionHeading
                    eyebrow="Categories"
                    title="Choose Your Learning Path"
                    description="Explore technologies, build real-world projects, and master the skills powering today's software industry."
                />

                <div
                    className="
        group/categories

        mt-20

        grid
        auto-rows-[220px]

        grid-cols-1
        gap-6

        md:grid-cols-2
        lg:grid-cols-4
    "
                >
                    {HOME_CATEGORIES.map((category, index) => (
                        <CategoryTile
                            key={category.id}
                            {...category}
                            style={{
                                animationDelay: `${index * 80}ms`,
                            }}
                        />
                    ))}
                </div>
            </PageContainer>
        </Section>
    );
}
