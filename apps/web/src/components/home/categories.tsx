import { HOME_CATEGORIES } from "@/data/home/categories";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Card } from "../ui/card";

const HomeCategories = () => {
    return (
        <div>
            <>
                <section className="py-20">
                    <div className="container">
                        <div className="text-center max-w-xl mx-auto mb-14">
                            <h2 className="text-3xl font-bold tracking-tight mb-3">
                                Explore by Category
                            </h2>
                            <p className="text-muted-foreground">
                                Find the track that matches where you want to
                                go.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {HOME_CATEGORIES.map((cat) => (
                                <Link
                                    key={cat}
                                    href={`/explore?search=${encodeURIComponent(
                                        cat.split(" ")[0],
                                    )}`}
                                    className="group"
                                >
                                    <Card
                                        interactive
                                        className="p-5 text-center h-full flex flex-col items-center justify-center gap-2"
                                    >
                                        <span className="text-sm font-semibold">
                                            {cat}
                                        </span>
                                        <span className="text-xs text-muted-foreground inline-flex items-center gap-1 opacity-0 -translate-y-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0">
                                            Browse{" "}
                                            <ArrowRight className="h-3 w-3" />
                                        </span>
                                    </Card>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            </>
        </div>
    );
};

export default HomeCategories;
