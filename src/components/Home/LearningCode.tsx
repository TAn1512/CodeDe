"use client";
import Link from "next/link";
import { Code2, Globe, Paintbrush, Layers, Server } from "lucide-react";
import { motion } from "framer-motion";

export default function LearningCode({ t }: { t: any }) {
    const items = [
        { href: "/learn/html", icon: <Globe className="w-8 h-8 text-indigo-500" />, title: t("paths.html.title"), desc: t("paths.html.desc") },
        { href: "/learn/css", icon: <Paintbrush className="w-8 h-8 text-pink-500" />, title: t("paths.css.title"), desc: t("paths.css.desc") },
        { href: "/learn/javascript", icon: <Code2 className="w-8 h-8 text-yellow-500" />, title: t("paths.js.title"), desc: t("paths.js.desc") },
        { href: "/learn/react", icon: <Layers className="w-8 h-8 text-sky-500" />, title: t("paths.react.title"), desc: t("paths.react.desc") },
        { href: "/learn/node", icon: <Server className="w-8 h-8 text-emerald-500" />, title: t("paths.node.title"), desc: t("paths.node.desc") },
    ];

    return (
        <section className="max-w-6xl mx-auto px-6 py-24">
            <h2 className="text-3xl font-bold text-center mb-12">{t("sections.code.title")}</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((item, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
                        <Link
                            href={item.href}
                            className="group p-6 bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition flex flex-col items-start"
                        >
                            <div className="mb-4">{item.icon}</div>
                            <h3 className="text-xl font-semibold mb-2 group-hover:text-indigo-600">{item.title}</h3>
                            <p className="text-gray-600 text-sm flex-1">{item.desc}</p>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
