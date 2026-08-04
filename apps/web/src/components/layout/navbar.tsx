"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";
import { isClerkEnabled } from "@/lib/clerk-config";
import { ClerkNavbarAuth } from "./navbar-clerk";
import { Logo } from "../navigation/logo";
import { NavbarCTA } from "../navigation/navbar-cta";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/explore", label: "Explore" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
];

export function Navbar() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const isActive = (href: string) => pathname === href;

    return (
        <header className="sticky top-0 z-50 w-full">
            <nav
                className={cn(
                    "relative mx-auto max-w-7xl px-4 py-4 transition-all duration-500 sm:px-6 lg:px-8",
                    scrolled
                        ? "border-b border-white/10 bg-background/80 shadow-xl shadow-black/10 backdrop-blur-2xl"
                        : "bg-background/0",
                )}
            >
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex shrink-0 items-center gap-2">
                        <Logo />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden items-center gap-8 lg:flex">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "group relative text-sm font-medium tracking-[0.01em] transition-colors duration-300",
                                    isActive(link.href)
                                        ? "text-primary"
                                        : "text-muted-foreground hover:text-foreground",
                                )}
                            >
                                {link.label}
                                <span
                                    className={cn(
                                        "absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary/60 to-violet-500/40 transition-all duration-300",
                                        isActive(link.href)
                                            ? "w-full"
                                            : "w-0 group-hover:w-full",
                                    )}
                                />
                            </Link>
                        ))}
                    </div>

                    {/* Right Actions */}
                    <div className="flex items-center gap-3 sm:gap-4">
                        <ThemeToggle />
                        {isClerkEnabled ? (
                            <ClerkNavbarAuth variant="auth" />
                        ) : (
                            <>
                                <Link
                                    href="/sign-in"
                                    className="hidden sm:block"
                                >
                                    <Button
                                        variant="ghost"
                                        className="font-medium tracking-[0.01em] transition-all duration-300 hover:bg-primary/10 hover:text-primary"
                                    >
                                        Sign In
                                    </Button>
                                </Link>
                                <NavbarCTA
                                    href="/dashboard"
                                    label="Get Started"
                                />
                            </>
                        )}

                        {/* Mobile Menu Toggle */}
                        <Button
                            variant="ghost"
                            size="icon"
                            className="lg:hidden transition-all duration-300 hover:bg-primary/10"
                            onClick={() => setMobileOpen(!mobileOpen)}
                        >
                            {mobileOpen ? (
                                <X className="h-5 w-5" />
                            ) : (
                                <Menu className="h-5 w-5" />
                            )}
                        </Button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {mobileOpen && (
                    <div className="border-t border-white/10 pt-4 sm:hidden">
                        <div className="flex flex-col gap-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    className={cn(
                                        "group rounded-lg px-4 py-2.5 text-sm font-medium tracking-[0.01em] transition-all duration-300",
                                        isActive(link.href)
                                            ? "bg-gradient-to-r from-primary/20 to-violet-500/10 text-primary"
                                            : "text-muted-foreground hover:bg-primary/10 hover:text-foreground",
                                    )}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}
