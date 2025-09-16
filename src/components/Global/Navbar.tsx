"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";
import { usePathname } from "next/navigation";
import LanguageReminder from "./LanguageReminder";

export default function Navbar() {
    const t = useTranslations("Navbar");

    const pathname = usePathname();

    const isHome = pathname === "/" || pathname === "/en" || pathname === "/vi";
    return (
        <nav className="flex items-center justify-between px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-700 text-white shadow-md">
            {/* Logo */}
            <Link href="/" className="text-2xl font-extrabold tracking-wide">
                AlgoVis
            </Link>

            {/* Menu */}
            <div className="flex items-center gap-8">
                <Link href="/" className="hover:text-yellow-300 transition">
                    {t("home")}
                </Link>
                <Link
                    href="/sort"
                    className="hover:text-yellow-300 transition"
                >
                    {t("sorting")}
                </Link>
            </div>

            {/* Language Switcher */}
            {/* {isHome && <LanguageSwitcher />} */}
            <LanguageSwitcher />
            {isHome && <LanguageReminder />}
        </nav>
    );
}
