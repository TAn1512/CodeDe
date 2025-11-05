"use client";

import { useTranslations } from "next-intl";
import HeroSection from "@/components/Home/HeroSection";
import LearningCode from "@/components/Home/LearningCode";
import LearningVisual from "@/components/Home/LearningVisual";
import LearningAlgo from "@/components/Home/LearningAlgo";
import WhyChoose from "@/components/Home/WhyChoose";
import CTASection from "@/components/Home/CTASection";

export default function HomePage() {
    const t = useTranslations("home.homePage");

    return (
        <main className="flex flex-col min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 text-gray-800">
            <HeroSection t={t} />
            <LearningCode t={t} />
            <LearningVisual t={t} />
            <LearningAlgo t={t} />
            <WhyChoose t={t} />
            <CTASection t={t} />
        </main>
    );
}
