"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Minus, Plus } from "lucide-react";

import { cn } from "@/lib/utils";

function Accordion({
    ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
    return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

function AccordionItem({
    className,
    ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
    return (
        <AccordionPrimitive.Item
            data-slot="accordion-item"
            className={cn("group relative", className)}
            {...props}
        />
    );
}

function AccordionTrigger({
    className,
    children,
    ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
    return (
        <AccordionPrimitive.Header className="flex">
            <AccordionPrimitive.Trigger
                data-slot="accordion-trigger"
                className={cn(
                    "flex flex-1 items-center justify-between py-6 text-left font-semibold transition-all hover:no-underline",
                    className,
                )}
                {...props}
            >
                {children}

                <span
                    className="
                        relative
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-border
                        bg-background/70
                        transition-all
                        duration-300
                        group-data-[state=open]:border-primary/40
                        group-data-[state=open]:bg-primary/10
                    "
                >
                    <Plus
                        className="
                            absolute
                            h-4
                            w-4
                            transition-all
                            duration-300
                            group-data-[state=open]:rotate-90
                            group-data-[state=open]:scale-0
                        "
                    />

                    <Minus
                        className="
                            absolute
                            h-4
                            w-4
                            scale-0
                            transition-all
                            duration-300
                            group-data-[state=open]:scale-100
                        "
                    />
                </span>
            </AccordionPrimitive.Trigger>
        </AccordionPrimitive.Header>
    );
}

function AccordionContent({
    className,
    children,
    ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
    return (
        <AccordionPrimitive.Content
            data-slot="accordion-content"
            className="
                overflow-hidden
                data-[state=closed]:animate-accordion-up
                data-[state=open]:animate-accordion-down
            "
            {...props}
        >
            <div
                className={cn(
                    "pb-6 text-muted-foreground leading-8",
                    className,
                )}
            >
                {children}
            </div>
        </AccordionPrimitive.Content>
    );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
