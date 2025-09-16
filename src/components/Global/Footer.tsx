"use client";

import { useTranslations } from "next-intl";

export default function Footer() {
    const t = useTranslations("Footer");

    return (
        <footer className="bg-gray-900 text-gray-400 py-6 text-center mt-12">
            <p className="text-sm">{t("copyright")}</p>
        </footer>
    );
}
