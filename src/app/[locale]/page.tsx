"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";

export default function HomePage() {
    const t = useTranslations("Home");

    return (
        <div className="flex flex-col min-h-screen">


            {/* Hero Section */}
            <main className="flex-1 flex flex-col items-center justify-center text-center px-6 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
                <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
                    {t("title")}
                </h1>
                <p className="text-lg text-gray-600 mb-8 max-w-xl">
                    {t("description")}
                </p>

                <Link href="/sort">
                    <div className="p-6 bg-white shadow-lg rounded-lg cursor-pointer hover:shadow-xl transition">
                        <h2 className="text-xl font-bold">{t("Sorting.title")}</h2>
                        <p className="text-gray-600">{t("Sorting.description")}</p>
                    </div>
                </Link>
            </main>


        </div>
    );
}
