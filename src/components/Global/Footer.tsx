"use client";

import { useTranslations } from "next-intl";

export default function Footer() {
    const t = useTranslations("global.footer");

    return (
        <footer className="bg-gray-900 text-gray-400 py-6 text-center ">
            <p className="text-sm">{t("copyright")}</p>
        </footer>
    );
}
