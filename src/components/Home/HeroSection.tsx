"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Rocket, Sparkles } from "lucide-react";

export default function HeroSection({ t }: { t: any }) {
    return (
        <section className="relative flex flex-col items-center justify-center text-center py-28 px-6 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-100 via-transparent to-purple-100 blur-3xl opacity-60 animate-pulse" />
            <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 leading-tight relative z-10"
            >
                {t("hero.title")}
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl relative z-10"
            >
                {t("hero.description")}
            </motion.p>
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
            >
                <Link
                    href="/learn/html"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white text-lg font-semibold px-8 py-3 rounded-full shadow-lg transition-all"
                >
                    <Rocket className="w-5 h-5" /> {t("hero.startLearning")}
                </Link>
            </motion.div>
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-10 text-sm text-gray-500 italic relative z-10 flex items-center gap-2"
            >
                <Sparkles size={16} className="text-indigo-400" />
                {t("hero.slogan")}
            </motion.p>
        </section>
    );
}
