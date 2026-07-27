import Link from "next/link";
import { Sparkles, CheckCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageContainer, Section, SectionHeading } from "@/components/shared";
export const HomeFeatures = () => {
    return (
        <Section className=" bg-muted/30">
            <PageContainer className=" grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <SectionHeading
                        eyebrow="AI Assistant"
                        title="Your Personal AI Tutor"
                        description="Get instant explanations, code reviews, and personalized study guidance. Our AI tutor understands your learning context and adapts to your pace."
                        className="!text-left !mx-0 max-w-none mb-6"
                    />
                    <ul className="space-y-3 mb-8">
                        {[
                            "Context-aware answers based on your current course",
                            "Streaming responses for real-time learning",
                            "Covers programming, data science, cloud, and more",
                        ].map((item) => (
                            <li key={item} className="flex items-start gap-2">
                                <CheckCircle className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                    <Link href="/dashboard/chat">
                        <Button>
                            <Sparkles className="mr-2 h-4 w-4" />
                            Start Chatting
                        </Button>
                    </Link>
                </div>
                <Card className="p-6">
                    <div className="space-y-4">
                        <div className="flex gap-3">
                            <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center text-xs">
                                AI
                            </div>
                            <div className="rounded-xl bg-muted p-3 text-sm flex-1">
                                What is the difference between useState and
                                useReducer in React?
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs">
                                AI
                            </div>
                            <div className="rounded-xl bg-primary/10 p-3 text-sm flex-1">
                                Great question! useState is ideal for simple
                                state, while useReducer handles complex state
                                logic with multiple sub-values and actions...
                            </div>
                        </div>
                    </div>
                </Card>
            </PageContainer>
        </Section>
    );
};
