"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";
// import LanguageReminder from "./LanguageReminder";
// import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";


export default function Navbar() {
    const t = useTranslations("global.navbar");
    // const pathname = usePathname();
    // const isHome = pathname === "/" || pathname === "/en" || pathname === "/vi";

    const [menuOpen, setMenuOpen] = useState(false);
    const locale = useLocale();


    return (
        <nav className="fixed w-full z-50 bg-gradient-to-r from-indigo-600 to-purple-700 text-white shadow-md">
            <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link href={`/${locale}`} className="flex items-center gap-2">
                    <Image
                        src="/logo.png"
                        alt="Logo"
                        width={36}
                        height={36}
                        className="rounded-md"
                    />
                    <span className="text-xl font-extrabold tracking-wide">
                        CodeDe
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <Link href="/" className="hover:text-yellow-300 transition">
                        {t("home")}
                    </Link>
                    <Link href="/sort" className="hover:text-yellow-300 transition">
                        {t("sorting")}
                    </Link>
                </div>

                {/* Language Switcher (always visible) */}
                <div className="flex items-center gap-3">
                    <LanguageSwitcher />

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden p-2 rounded hover:bg-indigo-700 transition"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown */}
            {menuOpen && (
                <div className="md:hidden bg-indigo-700/90 text-white px-5 py-3 space-y-3">
                    <Link
                        href="/"
                        className="block hover:text-yellow-300 transition"
                        onClick={() => setMenuOpen(false)}
                    >
                        {t("home")}
                    </Link>
                    <Link
                        href="/sort"
                        className="block hover:text-yellow-300 transition"
                        onClick={() => setMenuOpen(false)}
                    >
                        {t("sorting")}
                    </Link>
                </div>
            )}

            {/* {isHome && <LanguageReminder />} */}
        </nav>
    );
}
