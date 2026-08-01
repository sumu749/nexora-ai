"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Sparkles, CheckCircle, Bot, UserRound } from "lucide-react";

import { AI_CHAT_MESSAGES } from "@/data/home/ai-chat";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageContainer, Section, SectionHeading } from "@/components/shared";

export const HomeFeatures = () => {
    const [conversationIndex, setConversationIndex] = useState(0);
    const [typedAnswer, setTypedAnswer] = useState("");
    const [isThinking, setIsThinking] = useState(true);
    const [showMessage, setShowMessage] = useState(false);
    const [showQuestion, setShowQuestion] = useState(false);

    useEffect(() => {
        const current = AI_CHAT_MESSAGES[conversationIndex];

        setTypedAnswer("");
        setShowQuestion(false);
        setShowMessage(false);
        setIsThinking(false);

        // Show user question
        const questionTimer = setTimeout(() => {
            setShowQuestion(true);
        }, 300);

        // AI starts thinking
        const thinkingTimer = setTimeout(() => {
            setIsThinking(true);
        }, 1200);

        // AI starts typing
        const answerTimer = setTimeout(() => {
            setIsThinking(false);
            setShowMessage(true);

            let i = 0;

            const typing = setInterval(() => {
                setTypedAnswer(current.answer.slice(0, i));
                i++;

                if (i > current.answer.length) {
                    clearInterval(typing);

                    setTimeout(() => {
                        setConversationIndex(
                            (prev) => (prev + 1) % AI_CHAT_MESSAGES.length,
                        );
                    }, 3000);
                }
            }, 20);
        }, 2600);

        return () => {
            clearTimeout(questionTimer);
            clearTimeout(thinkingTimer);
            clearTimeout(answerTimer);
        };
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
                <div className="relative">
                    <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-primary/20 via-violet-500/20 to-cyan-400/20 blur-xl" />

                    <Card className=" overflow-hidden rounded-3xl border bg-background/70 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:-translate-y-1 hover:shadow-primary/10">
                        {/* Header */}
                        <div className="flex items-center justify-between border-b px-6 py-4">
                            <div className="flex items-center gap-2">
                                <Bot className="h-5 w-5 text-primary" />
                                <span className="font-semibold">AI Tutor</span>
                            </div>

                            <span className="flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-600">
                                <span className="relative flex h-2 w-2">
                                    <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 animate-ping"></span>

                                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                                </span>
                                Online
                            </span>
                        </div>

                        <div className="space-y-6 p-6">
                            {/* User Message */}
                            <div
                                className={`flex justify-end transition-all duration-500 ${
                                    showQuestion
                                        ? "translate-x-0 opacity-100"
                                        : "translate-x-10 opacity-0"
                                }`}
                            >
                                <div className="flex max-w-[85%] flex-row-reverse items-start gap-3">
                                    {/* User Avatar */}
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full border bg-background shadow-md">
                                        <UserRound className="h-5 w-5 text-primary" />
                                    </div>

                                    <div className="rounded-2xl rounded-tr-md bg-primary px-4 py-3 text-sm text-primary-foreground shadow-md">
                                        {
                                            AI_CHAT_MESSAGES[conversationIndex]
                                                .question
                                        }
                                    </div>
                                </div>
                            </div>

                            {/* AI Response */}
                            <div
                                className={`mt-4 flex items-start gap-3 transition-all duration-500 ${
                                    showMessage || isThinking
                                        ? "translate-x-0 opacity-100"
                                        : "-translate-x-10 opacity-0"
                                }`}
                            >
                                {/* AI Avatar */}
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary via-violet-500 to-cyan-500 shadow-lg">
                                    <Bot className="h-5 w-5 text-white" />
                                </div>

                                <div className="max-w-[85%] rounded-2xl rounded-tl-md bg-muted px-4 py-3 text-sm leading-7 shadow">
                                    {isThinking ? (
                                        <>
                                            <p className="mb-2 text-xs font-medium text-primary">
                                                AI is thinking...
                                            </p>

                                            <div className="flex gap-1">
                                                <span className="h-2 w-2 rounded-full bg-primary animate-bounce" />
                                                <span
                                                    className="h-2 w-2 rounded-full bg-primary animate-bounce"
                                                    style={{
                                                        animationDelay: "120ms",
                                                    }}
                                                />
                                                <span
                                                    className="h-2 w-2 rounded-full bg-primary animate-bounce"
                                                    style={{
                                                        animationDelay: "240ms",
                                                    }}
                                                />
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            {typedAnswer}
                                            <span className="animate-pulse">
                                                |
                                            </span>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </PageContainer>
        </Section>
    );
};
