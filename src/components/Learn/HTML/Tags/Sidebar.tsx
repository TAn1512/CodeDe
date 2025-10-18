"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import { useTranslations } from "next-intl";

const lessons = [
    { id: "introduction", key: "introduction" },
    { id: "headings", key: "headings" },
    { id: "paragraphs", key: "paragraphs" },
    { id: "styles", key: "styles" },
    { id: "formatting", key: "formatting" },
    { id: "links", key: "links" },
];

export default function Sidebar() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const t = useTranslations("html.sidebar");

    const renderLinks = () => (
        <ul className="space-y-2">
            {lessons.map((item) => {
                const isActive = pathname.endsWith(item.id);
                return (
                    <li key={item.id}>
                        <Link
                            href={`/learn/html/${item.id}`}
                            onClick={() => setOpen(false)}
                            className={clsx(
                                "block px-3 py-2 rounded-md transition",
                                isActive
                                    ? "bg-indigo-600 text-white"
                                    : "hover:bg-gray-700 text-gray-300"
                            )}
                        >
                            {t(item.key)}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );

    return (
        <>
            {/* 📱 Nút mở sidebar trên mobile */}
            <button
                onClick={() => setOpen(true)}
                className="lg:hidden flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-md m-3 shadow-md"
            >
                <Menu size={22} />
                <span>{t("menu")}</span>
            </button>

            {/* 💻 Sidebar desktop */}
            <aside className="hidden lg:block sticky top-20 h-fit bg-gray-800 text-gray-100 rounded-lg p-4 w-64">
                <h2 className="text-lg font-semibold mb-3">{t("title")}</h2>
                {renderLinks()}
            </aside>

            {/* 📱 Sidebar mobile overlay */}
            <div
                className={clsx(
                    "fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden",
                    open
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none"
                )}
                onClick={() => setOpen(false)}
            >
                <div
                    className={clsx(
                        "absolute top-0 left-0 w-64 h-full bg-gray-800 p-5 text-gray-100 transform transition-transform duration-300",
                        open ? "translate-x-0" : "-translate-x-full"
                    )}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-semibold">{t("title")}</h2>
                        <button onClick={() => setOpen(false)}>
                            <X size={24} />
                        </button>
                    </div>
                    {renderLinks()}
                </div>
            </div>
        </>
    );
}
