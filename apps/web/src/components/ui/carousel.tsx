import React, { createContext, useContext, useEffect, useState } from "react";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type EmblaContextType = {
    embla: ReturnType<typeof useEmblaCarousel>[1] | null;
    selected: number;
    scrollSnaps: number[];
};

const EmblaContext = createContext<EmblaContextType | null>(null);

export function useEmblaContext() {
    const ctx = useContext(EmblaContext);
    return ctx ?? { embla: null, selected: 0, scrollSnaps: [] };
}

export function Carousel({
    children,
    opts,
    plugins,
    className,
    controls,
}: {
    children: React.ReactNode;
    opts?: EmblaOptionsType;
    plugins?: any[];
    className?: string;
    controls?: React.ReactNode;
}) {
    const [emblaRef, emblaApi] = useEmblaCarousel(opts, plugins);
    const [selected, setSelected] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

    useEffect(() => {
        if (!emblaApi) return;
        setScrollSnaps(emblaApi.scrollSnapList());
        const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
        emblaApi.on("select", onSelect);
        emblaApi.on("reInit", onSelect);
        return () => {
            emblaApi.off("select", onSelect);
            emblaApi.off("reInit", onSelect);
        };
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;

        const handler = (e: KeyboardEvent) => {
            if (e.key === "ArrowLeft") emblaApi.scrollPrev();
            if (e.key === "ArrowRight") emblaApi.scrollNext();
        };

        window.addEventListener("keydown", handler);

        return () => window.removeEventListener("keydown", handler);
    }, [emblaApi]);

    return (
        <EmblaContext.Provider
            value={{ embla: emblaApi ?? null, selected, scrollSnaps }}
        >
            <div className={className}>
                <div ref={emblaRef} className="overflow-hidden">
                    <div className="flex -ml-6">{children}</div>
                </div>

                {controls && <div className="mt-8">{controls}</div>}
            </div>
        </EmblaContext.Provider>
    );
}

export function CarouselItem({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div
            className={`min-w-0 shrink-0 grow-0 basis-full pl-6 ${className ?? ""}`}
        >
            {children}
        </div>
    );
}

export function CarouselPrev({ className }: { className?: string }) {
    const { embla } = useEmblaContext();

    return (
        <button
            onClick={() => embla?.scrollPrev()}
            aria-label="Previous"
            className={`flex h-11 w-11 items-center justify-center rounded-full border bg-background shadow-md transition-all duration-300 hover:scale-105 hover:border-primary hover:bg-primary hover:text-white ${className}`}
        >
            <ChevronLeft className="h-5 w-5" />
        </button>
    );
}

export function CarouselNext({ className }: { className?: string }) {
    const { embla } = useEmblaContext();

    return (
        <button
            onClick={() => embla?.scrollNext()}
            aria-label="Next"
            className={`flex h-11 w-11 items-center justify-center rounded-full border bg-background shadow-md transition-all duration-300 hover:scale-105 hover:border-primary hover:bg-primary hover:text-white ${className}`}
        >
            <ChevronRight className="h-5 w-5" />
        </button>
    );
}

export function CarouselDots() {
    const { embla, scrollSnaps, selected } = useEmblaContext();

    return (
        <div className="flex items-center gap-2">
            {scrollSnaps.map((_, index) => (
                <button
                    key={index}
                    onClick={() => embla?.scrollTo(index)}
                    className={`rounded-full transition-all duration-300 ${
                        selected === index
                            ? "h-2 w-8 bg-primary"
                            : "h-2 w-2 bg-muted-foreground/30 hover:bg-primary/50"
                    }`}
                />
            ))}
        </div>
    );
}

export default Carousel;
