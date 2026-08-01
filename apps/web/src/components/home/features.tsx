"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Sparkles, CheckCircle, Bot, User } from "lucide-react";

import { AI_CHAT_MESSAGES } from "@/data/home/ai-chat";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageContainer, Section, SectionHeading } from "@/components/shared";

export const HomeFeatures = () => {
    const [conversationIndex, setConversationIndex] = useState(0);
    const [typedAnswer, setTypedAnswer] = useState("");

    useEffect(() => {
        const current =
            AI_CHAT_MESSAGES[conversationIndex] ?? AI_CHAT_MESSAGES[0];
        const answer =
            typeof current?.answer === "string" ? current.answer : "";
        const question =
            typeof current?.question === "string" ? current.question : "";

        let index = 0;
        setTypedAnswer("");

        const typing = window.setInterval(() => {
            setTypedAnswer(answer.slice(0, index));
            index++;

            if (index > answer.length) {
                clearInterval(typing);

                setTimeout(() => {
                    setConversationIndex(
                        (prev) => (prev + 1) % AI_CHAT_MESSAGES.length,
                    );
                }, 2500);
            }
        }, 25);

        return () => clearInterval(typing);
    }, [conversationIndex]);

    return (
        <Section className="bg-muted/30">
            <PageContainer className="grid items-center gap-14 lg:grid-cols-2">
                {/* Left */}
                <div>
                    <SectionHeading
                        eyebrow="AI Assistant"
                        title="Your Personal AI Tutor"
                        description="Get instant explanations, code reviews, personalized learning guidance, and interview support powered by AI."
                        className="!mx-0 !text-left max-w-none mb-8"
                    />

                    <ul className="mb-8 space-y-4">
                        {[
                            "Context-aware answers based on your learning progress",
                            "Real-time AI responses with typing animation",
                            "Programming, System Design, DSA & Interview preparation",
                        ].map((item) => (
                            <li key={item} className="flex items-start gap-3">
                                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                                <span className="text-muted-foreground">
                                    {item}
                                </span>
                            </li>
                        ))}
                    </ul>

                    <Link href="/dashboard/chat">
                        <Button
                            size="lg"
                            className="rounded-xl px-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                        >
                            <Sparkles className="mr-2 h-4 w-4" />
                            Try AI Tutor
                        </Button>
                    </Link>
                </div>

                {/* Right */}
                <Card className="overflow-hidden rounded-3xl border bg-background/80 shadow-xl backdrop-blur">
                    {/* Header */}
                    <div className="flex items-center justify-between border-b px-6 py-4">
                        <div className="flex items-center gap-2">
                            <Bot className="h-5 w-5 text-primary" />
                            <span className="font-semibold">AI Tutor</span>
                        </div>

                        <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-600">
                            ● Online
                        </span>
                    </div>

                    <div className="space-y-6 p-6">
                        {/* User */}
                        <div className="flex gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                                <User className="h-5 w-5" />
                            </div>

                            <div className="max-w-[85%] rounded-2xl bg-muted px-4 py-3 text-sm">
                                {AI_CHAT_MESSAGES[conversationIndex]
                                    ?.question ?? AI_CHAT_MESSAGES[0].question}
                            </div>
                        </div>

                        {/* AI */}
                        <div className="flex gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                                <Bot className="h-5 w-5" />
                            </div>

                            <div className="max-w-[85%] rounded-2xl bg-primary/10 px-4 py-3 text-sm leading-7">
                                {typedAnswer}

                                <span className="ml-1 animate-pulse text-primary">
                                    |
                                </span>
                            </div>
                        </div>
                    </div>
                </Card>
            </PageContainer>
        </Section>
    );
};
