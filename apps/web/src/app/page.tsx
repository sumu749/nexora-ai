import dynamic from "next/dynamic";

const SectionSkeleton = () => (
    <div className="min-h-[320px] animate-pulse rounded-3xl border border-slate-200/70 bg-slate-50/70 p-8 dark:border-slate-800 dark:bg-slate-900/50" />
);

const HomeHero = dynamic(
    () => import("@/components/home/hero").then((mod) => mod.HomeHero),
    {
        loading: () => <SectionSkeleton />,
    },
);

const HomeStats = dynamic(() => import("@/components/home/stats"), {
    loading: () => <SectionSkeleton />,
});

const HomeFeaturedCourses = dynamic(
    () =>
        import("@/components/home/featured-courses").then(
            (mod) => mod.HomeFeaturedCourses,
        ),
    {
        loading: () => <SectionSkeleton />,
    },
);

const HomeFeatures = dynamic(
    () => import("@/components/home/features").then((mod) => mod.HomeFeatures),
    {
        loading: () => <SectionSkeleton />,
    },
);

const HomeHowItWorks = dynamic(
    () =>
        import("@/components/home/howItWorks").then(
            (mod) => mod.HomeHowItWorks,
        ),
    {
        loading: () => <SectionSkeleton />,
    },
);

const HomeTestimonials = dynamic(
    () => import("@/components/home/testimonials"),
    {
        loading: () => <SectionSkeleton />,
    },
);

const HomeCategories = dynamic(() => import("@/components/home/categories"), {
    loading: () => <SectionSkeleton />,
});

const HomeNewsletter = dynamic(() => import("@/components/home/newsLetter"), {
    loading: () => <SectionSkeleton />,
});

const HomeFAQ = dynamic(() => import("@/components/home/faq"), {
    loading: () => <SectionSkeleton />,
});

export default function HomePage() {
    return (
        <>
            <HomeHero />
            <HomeStats />
            <HomeFeaturedCourses />
            <HomeFeatures />
            <HomeHowItWorks />
            <HomeTestimonials />
            <HomeCategories />
            <HomeNewsletter />
            <HomeFAQ />
        </>
    );
}
