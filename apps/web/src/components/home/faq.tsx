"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

import { HOME_FAQ } from "@/data/home/faq";

import { PageContainer, Section, SectionHeading } from "@/components/shared";

export default function HomeFAQ() {
    return (
        <Section className="relative overflow-hidden py-28">
            {/* Background */}
            <div className="absolute inset-0 bg-mesh opacity-[0.04]" />

            <div className="pointer-events-none absolute left-1/2 top-0 h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />

            <PageContainer className="relative">
                <SectionHeading
                    eyebrow="FAQ"
                    title="Frequently Asked Questions"
                    description="Everything you need to know before starting your learning journey with SkillForge AI."
                />

                <div className="mx-auto mt-16 max-w-4xl">
                    <Accordion type="single" collapsible className="space-y-5">
                        {HOME_FAQ.map((item) => (
                            <AccordionItem
                                key={item.id}
                                value={`item-${item.id}`}
                                className="
                                    overflow-hidden
                                    rounded-3xl
                                    border
                                    border-border/60
                                    bg-card/60
                                    px-7
                                    backdrop-blur-xl
                                    transition-all
                                    duration-500
                                    hover:border-primary/30
                                    hover:bg-card/80
                                    hover:shadow-[0_18px_50px_rgba(109,93,246,.08)]
                                "
                            >
                                <AccordionTrigger
                                    className="
                                        py-7
                                        text-left
                                        text-lg
                                        font-semibold
                                        hover:no-underline
                                    "
                                >
                                    {item.question}
                                </AccordionTrigger>

                                <AccordionContent
                                    className="
                                        pb-7
                                        text-base
                                        leading-8
                                        text-muted-foreground
                                    "
                                >
                                    {item.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </PageContainer>
        </Section>
    );
}
