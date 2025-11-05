"use client";
import Link from "next/link";
import { Rocket } from "lucide-react";

export default function CTASection({ t }: { t: any }) {
    return (
        <section className="py-20 text-center bg-white">
            <h2 className="text-3xl font-bold mb-4">{t("cta.title")}</h2>
            <p className="text-gray-600 mb-8">{t("cta.desc")}</p>
            <Link
                href="/learn/html"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white text-lg font-semibold px-8 py-3 rounded-full shadow-lg transition-all"
            >
                <Rocket className="w-5 h-5" /> {t("hero.startLearning")}
            </Link>
        </section>
    );
}
