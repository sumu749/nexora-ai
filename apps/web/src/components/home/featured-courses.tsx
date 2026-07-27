import Link from "next/link";
import { PageContainer, Section, SectionHeading } from "../shared";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { Course } from "@skillforge/shared";
import { api } from "@/lib/api";
import { CourseCard, CourseCardSkeleton } from "../courses/course-card";

export function HomeFeaturedCourses() {
    const { data, isLoading } = useQuery({
        queryKey: ["featured-courses"],
        queryFn: async () => {
            const res = await api.get("/courses", {
                params: { limit: 4, sort: "popular" },
            });
            return res.data as { data: Course[] };
        },
    });
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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {isLoading
                        ? Array.from({ length: 4 }).map((_, i) => (
                              <CourseCardSkeleton key={i} />
                          ))
                        : data?.data.map((course) => (
                              <CourseCard key={course.id} course={course} />
                          ))}
                </div>
            </PageContainer>
        </Section>
    );
}
