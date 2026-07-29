import Link from "next/link";
import Image from "next/image";
import { Star, Clock, BarChart3, ArrowRight } from "lucide-react";
import type { Course } from "@skillforge/shared";
import { CATEGORY_LABELS, LEVEL_LABELS } from "@skillforge/shared";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { formatPrice, formatRating } from "@/lib/utils";

interface CourseCardProps {
    course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
    return (
        <Link href={`/courses/${course.slug}`} className="group block h-full">
            <Card
                interactive
                className="flex h-full flex-col overflow-hidden rounded-3xl border bg-card transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-2xl"
            >
                {/* Image */}
                <div className="relative aspect-video overflow-hidden rounded-t-3xl">
                    <Image
                        src={course.imageUrl}
                        alt={course.title}
                        fill
                        sizes="(max-width:768px)100vw,25vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    {course.featured && (
                        <span className="absolute left-4 top-4 rounded-full bg-amber-500 px-3 py-1 text-xs font-semibold text-white shadow-lg">
                            ★ Featured
                        </span>
                    )}

                    <span className="absolute right-4 bottom-4 rounded-xl bg-background/90 px-3 py-1.5 font-bold shadow-lg backdrop-blur">
                        {formatPrice(course.price)}
                    </span>
                </div>

                {/* Progress Line */}

                <div className="h-1 w-full bg-muted">
                    <div className="h-full w-2/3 bg-gradient-to-r from-primary via-violet-500 to-cyan-400" />
                </div>

                {/* Header */}
                <CardHeader className="space-y-4 pb-3">
                    <div className="flex flex-wrap gap-2">
                        <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                            {CATEGORY_LABELS[course.category]}
                        </span>

                        <span className="rounded-full border border-secondary/20 bg-secondary/10 px-3 py-1 text-xs font-semibold text-secondary">
                            {LEVEL_LABELS[course.level]}
                        </span>
                    </div>

                    <h3 className="line-clamp-2 text-xl font-bold leading-snug transition-colors group-hover:text-primary">
                        {course.title}
                    </h3>

                    <p className="h-12 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                        {course.description}
                    </p>
                </CardHeader>

                {/* Instructor and Stats */}
                <CardContent className="flex flex-1 flex-col pt-0">
                    {/* Instructor */}

                    <div className="flex items-center gap-3 mt-5">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 font-semibold text-primary">
                            {course.instructor.charAt(0)}
                        </div>

                        <div>
                            <p className="text-xs text-muted-foreground">
                                Instructor
                            </p>

                            <p className="font-semibold">{course.instructor}</p>
                        </div>
                    </div>

                    {/* Stats */}

                    <div className="mt-5 flex items-center justify-between rounded-xl bg-muted/40 p-3">
                        <div className="flex items-center gap-1 text-amber-500">
                            <Star className="h-4 w-4 fill-current" />

                            <span className="font-semibold">
                                {formatRating(course.rating)}
                            </span>
                        </div>

                        <div className="flex items-center gap-1 text-muted-foreground">
                            <Clock className="h-4 w-4" />
                            {course.durationHours}h
                        </div>

                        <div className="flex items-center gap-1 text-muted-foreground">
                            <BarChart3 className="h-4 w-4" />

                            {course.reviewCount}
                        </div>
                    </div>

                    {/* CTA */}

                    <div className="mt-auto pt-6">
                        <div className="inline-flex w-full items-center justify-center rounded-xl bg-primary px-4 py-3 font-semibold text-primary-foreground transition-all duration-300 group-hover:shadow-xl">
                            View Course
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </div>
                    </div>
                </CardContent>
            </Card>
        </Link>
    );
}

export function CourseCardSkeleton() {
    return (
        <Card className="h-full overflow-hidden flex flex-col">
            <Skeleton className="aspect-video w-full rounded-none" />
            <CardHeader className="pb-2 flex-1">
                <div className="flex gap-2 mb-2.5">
                    <Skeleton className="h-5 w-20 rounded-full" />
                    <Skeleton className="h-5 w-16 rounded-full" />
                </div>
                <Skeleton className="h-5 w-full mb-2" />
                <Skeleton className="h-4 w-4/5 mb-1" />
                <Skeleton className="h-4 w-3/5" />
            </CardHeader>
            <CardContent className="pt-0">
                <Skeleton className="h-4 w-28 mb-3" />
                <div className="flex gap-4 border-t pt-3">
                    <Skeleton className="h-4 w-10" />
                    <Skeleton className="h-4 w-10" />
                    <Skeleton className="h-4 w-10" />
                </div>
            </CardContent>
        </Card>
    );
}
