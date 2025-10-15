"use client";

import Link from "next/link";
import { Code2, Cpu, Globe, Layers, Server } from "lucide-react";

export default function LearningPaths({ t }: { t: any }) {
    const sections = [
        {
            href: "/learn/html",
            icon: <Globe className="w-8 h-8 text-indigo-500" />,
            title: t("paths.html.title"),
            desc: t("paths.html.desc"),
        },
        {
            href: "/learn/javascript",
            icon: <Code2 className="w-8 h-8 text-yellow-500" />,
            title: t("paths.js.title"),
            desc: t("paths.js.desc"),
        },
        {
            href: "/learn/react",
            icon: <Layers className="w-8 h-8 text-sky-500" />,
            title: t("paths.react.title"),
            desc: t("paths.react.desc"),
        },
        {
            href: "/learn/node",
            icon: <Server className="w-8 h-8 text-emerald-500" />,
            title: t("paths.node.title"),
            desc: t("paths.node.desc"),
        },
        {
            href: "/sort",
            icon: <Cpu className="w-8 h-8 text-purple-500" />,
            title: t("paths.algo.title"),
            desc: t("paths.algo.desc"),
        },
    ];

    return (
        <section className="max-w-6xl mx-auto px-6 py-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {sections.map((sec) => (
                <Link
                    key={sec.href}
                    href={sec.href}
                    className="group p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition flex flex-col items-start"
                >
                    <div className="mb-4">{sec.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-indigo-600">
                        {sec.title}
                    </h3>
                    <p className="text-gray-600 text-sm flex-1">{sec.desc}</p>
                </Link>
            ))}
        </section>
    );
}
