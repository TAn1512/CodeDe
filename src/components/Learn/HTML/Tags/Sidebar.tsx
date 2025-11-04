"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";


interface LessonItem {
    id: string;
    key: string;
    children?: LessonItem[];
}

export default function Sidebar({
    lessons,
    basePath = "/learn/html",
    namespace = "html.sidebar",
}: {
    lessons: LessonItem[];
    basePath: string;
    namespace?: string;
}) {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const [expanded, setExpanded] = useState<string | null>(null);
    const t = useTranslations(namespace);

    const locale = useLocale();


    const toggleExpand = (id: string) =>
        setExpanded((prev) => (prev === id ? null : id));

    const renderLinks = (items: LessonItem[], parentPath?: string) => (
        <ul className="space-y-1">
            {items.map((item) => {
                const hasChildren = item.children && item.children.length > 0;

                // 🔹 Nếu có parentPath (vd: "forms") thì nối thêm vào
                const fullPath = parentPath
                    ? `${basePath}/${parentPath}/${item.id}`
                    : `${basePath}/${item.id}`;

                // 🔹 Active check
                const isActive = pathname === fullPath;

                return (
                    <li key={item.id}>
                        <div
                            className={clsx(
                                "flex items-center justify-between px-3 py-2 rounded-md cursor-pointer transition",
                                isActive
                                    ? "bg-indigo-600 text-white"
                                    : "hover:bg-gray-700 text-gray-300"
                            )}
                            onClick={() =>
                                hasChildren ? toggleExpand(item.id) : null
                            }
                        >
                            {hasChildren ? (
                                <span className="font-medium">{t(item.key)}</span>
                            ) : (
                                <Link
                                    href={`/${locale}${fullPath}`}
                                    onClick={() => setOpen(false)}
                                    className="block w-full"
                                >
                                    {t(item.key)}
                                </Link>
                            )}
                            {hasChildren && (
                                <span>
                                    {expanded === item.id ? (
                                        <ChevronDown size={18} />
                                    ) : (
                                        <ChevronRight size={18} />
                                    )}
                                </span>
                            )}
                        </div>

                        {/* 🔹 Render children */}
                        {hasChildren && expanded === item.id && (
                            <ul className="ml-4 mt-1 space-y-1 border-l border-gray-700 pl-3">
                                {item.children!.map((child) => {
                                    const childPath = `${basePath}/${item.id}/${child.id}`;
                                    const isChildActive = pathname === childPath;

                                    return (
                                        <li key={child.id}>
                                            <Link
                                                href={`/${locale}${childPath}`}
                                                onClick={() => setOpen(false)}
                                                className={clsx(
                                                    "block px-2 py-1 rounded-md text-sm transition",
                                                    isChildActive
                                                        ? "bg-indigo-500 text-white"
                                                        : "hover:bg-gray-700 text-gray-300"
                                                )}
                                            >
                                                {t(child.key)}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        )}
                    </li>
                );
            })}
        </ul>
    );

    return (
        <>
            {/* 📱 Mobile button */}
            <button
                onClick={() => setOpen(true)}
                className="lg:hidden flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-md m-3 shadow-md"
            >
                <Menu size={22} />
                <span>{t("menu")}</span>
            </button>

            {/* 💻 Desktop Sidebar */}
            <aside className="hidden lg:block sticky top-20 h-fit bg-gray-800 text-gray-100 rounded-lg p-4 w-64">
                <h2 className="text-lg font-semibold mb-3">{t("title")}</h2>
                {renderLinks(lessons)}
            </aside>

            {/* 📱 Mobile Overlay */}
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
                    {renderLinks(lessons)}
                </div>
            </div>
        </>
    );
}
