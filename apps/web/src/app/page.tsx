"use client";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import HomeStats from "@/components/home/stats";
import HomeCategories from "@/components/home/categories";
import HomeTestimonials from "@/components/home/testimonials";
import { HomeFeatures } from "@/components/home/features";
import { HomeHero } from "@/components/home/hero";
import { HomeFeaturedCourses } from "@/components/home/featured-courses";
import { HomeHowItWorks } from "@/components/home/howItWorks";
import HomeNewsletter from "@/components/home/newsLetter";

export default function HomePage() {
    return (
        <>
            {/* Hero */}
            <HomeHero />

            {/* Stats */}
            <HomeStats />

            {/* Featured Courses */}
            <HomeFeaturedCourses />

            {/* AI Tutor Feature */}
            <HomeFeatures />

            {/* How It Works */}
            <HomeHowItWorks />

            {/* Testimonials */}
            <HomeTestimonials />

            {/* Categories */}
            <HomeCategories />

            {/* Newsletter */}
            <HomeNewsletter />
        </>
    );
}
