"use client";

import { HOME_CATEGORIES } from "@/data/home/categories";

import { PageContainer, Section, SectionHeading } from "@/components/shared";

import CategoryTile from "@/components/ui/category-tile";

export default function HomeCategories() {
    return (
        <Section className="relative overflow-hidden py-24">
            {/* Background */}
            <div className="absolute inset-0 bg-mesh opacity-30" />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#6D5DF6_0%,transparent_30%),radial-gradient(circle_at_bottom_right,#14B8A6_0%,transparent_30%)] opacity-10" />

            <PageContainer className="relative">
                <SectionHeading
                    eyebrow="Categories"
                    title="Choose Your Learning Path"
                    description="Explore technologies, build projects, and master the skills that power today's software industry."
                />

                <div
                    className="
                        mt-20
                        grid
                        auto-rows-[240px]
                        grid-cols-1
                        gap-6

                        md:grid-cols-2

                        lg:grid-cols-4
                    "
                >
                    {HOME_CATEGORIES.map((category) => (
                        <CategoryTile key={category.id} {...category} />
                    ))}
                </div>
            </PageContainer>
        </Section>
    );
}
