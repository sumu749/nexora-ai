import React, { createContext, useContext, useEffect, useState } from "react";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";

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

    return (
        <EmblaContext.Provider
            value={{ embla: emblaApi ?? null, selected, scrollSnaps }}
        >
            <div className={className}>
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="-ml-3 flex">{children}</div>
                </div>
                {controls ? <div className="mt-10">{controls}</div> : null}
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
            className={`min-w-0 flex-shrink-0 pl-3 ${
                className ?? "basis-full"
            }`}
        >
            {children}
        </div>
    );
}

export function CarouselPrev({ className }: { className?: string }) {
    const { embla } = useEmblaContext();
    return (
        <button
            onClick={() => embla && embla.scrollPrev()}
            className={className}
            aria-label="Previous"
        >
            ‹
        </button>
    );
}

export function CarouselNext({ className }: { className?: string }) {
    const { embla } = useEmblaContext();
    return (
        <button
            onClick={() => embla && embla.scrollNext()}
            className={className}
            aria-label="Next"
        >
            ›
        </button>
    );
}

export function CarouselDots() {
    const { embla, scrollSnaps, selected } = useEmblaContext();

    return (
        <div className="flex items-center gap-2">
            {scrollSnaps.map((_, idx) => (
                <button
                    key={idx}
                    onClick={() => embla?.scrollTo(idx)}
                    className={`rounded-full transition-all duration-300 ${
                        selected === idx
                            ? "h-2 w-8 bg-primary"
                            : "h-2 w-2 bg-muted-foreground/30 hover:bg-primary/50"
                    }`}
                />
            ))}
        </div>
    );
}

export default Carousel;
