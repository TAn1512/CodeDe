"use client";

import HeroSection from "@/components/Home/HeroSection";
import LearningPaths from "@/components/Home/LearningPaths";
import { useTranslations } from "next-intl";


export default function HomePage() {
    const t = useTranslations("home.homePage");

    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
            <HeroSection t={t} />
            <LearningPaths t={t} />
        </div>
    );
}
