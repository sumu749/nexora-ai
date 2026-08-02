"use client";

import Link from "next/link";
import { PageContainer, Section, SectionHeading } from "../shared";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { Course } from "@skillforge/shared";
import { api } from "@/lib/api";
import { CourseCard, CourseCardSkeleton } from "../courses/course-card";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import Carousel, {
    CarouselItem,
    CarouselDots,
    CarouselPrev,
    CarouselNext,
} from "../ui/carousel";

export function HomeFeaturedCourses() {
    const { data, isLoading } = useQuery({
        queryKey: ["featured-courses"],
        queryFn: async () => {
            const res = await api.get("/courses", {
                // request a few more so carousel can paginate
                params: { limit: 9, sort: "popular" },
            });
            return res.data as { data: Course[] };
        },
    });

    const autoplay = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));
    return (
        <Section>
            <PageContainer>
                <div className="flex items-center justify-between mb-8">
                    <SectionHeading
                        eyebrow="Trending Now"
                        title="Popular Courses"
                        description="Start with our most-loved programs"
                        className="!text-left !mx-0 max-w-none"
                    />
                    <Link href="/explore">
                        <Button
                            variant="outline"
                            className="group rounded-xl px-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                        >
                            View All
                            <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                        </Button>
                    </Link>
                </div>
                <div>
                    {isLoading ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {Array.from({ length: 6 }).map((_, i) => (
                                <CourseCardSkeleton key={i} />
                            ))}
                        </div>
                    ) : (
                        <div className="relative">
                            <Carousel
                                opts={{
                                    align: "start",
                                    loop: true,
                                    slidesToScroll: 3,
                                }}
                                plugins={[autoplay.current]}
                                controls={
                                    <div className="mt-8 flex items-center justify-center gap-6">
                                        <CarouselPrev className=" flex h-11 w-11 items-center justify-center rounded-full  border  bg-background text-lg shadow-sm  transition-all hover:border-primary hover:bg-primary hover:text-white" />

                                        <CarouselDots />

                                        <CarouselNext className=" flex h-11 w-11 items-center justify-center rounded-full  border  bg-background text-lg shadow-sm  transition-all hover:border-primary  hover:bg-primary  hover:text-white " />
                                    </div>
                                }
                            >
                                {data?.data.map((course) => (
                                    <CarouselItem
                                        key={course.id}
                                        className="basis-full md:basis-1/2 lg:basis-1/3 min-w-0"
                                    >
                                        <CourseCard course={course} />
                                    </CarouselItem>
                                ))}
                            </Carousel>
                        </div>
                    )}
                </div>
            </PageContainer>
        </Section>
    );
}
