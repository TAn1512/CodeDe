"use client";

import Link from "next/link";
import { Rocket } from "lucide-react";

export default function HeroSection({ t }: { t: any }) {
    return (
        <section className="flex-1 flex flex-col items-center justify-center text-center px-6 py-20">
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-6 leading-tight">
                {t("title")}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl">
                {t("description")}
            </p>

            <Link
                href="/learn/html"
                className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-semibold px-8 py-3 rounded-full shadow-lg transition-all"
            >
                <Rocket className="w-5 h-5" /> {t("startLearning")}
            </Link>
        </section>
    );
}
