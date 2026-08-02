"use client";
import HomeStats from "@/components/home/stats";
import HomeCategories from "@/components/home/categories";
import HomeTestimonials from "@/components/home/testimonials";
import { HomeFeatures } from "@/components/home/features";
import { HomeHero } from "@/components/home/hero";
import { HomeFeaturedCourses } from "@/components/home/featured-courses";
import { HomeHowItWorks } from "@/components/home/howItWorks";
import HomeNewsletter from "@/components/home/newsLetter";
import HomeFAQ from "@/components/home/faq";

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

            {/* FAQ */}
            <HomeFAQ />
        </>
    );
}
