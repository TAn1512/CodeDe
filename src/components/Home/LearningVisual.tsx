"use client";
import { motion } from "framer-motion";
import { Network, ChartLine, ChartArea } from "lucide-react";

export default function LearningVisual({ t }: { t: any }) {
    const visuals = [
        { icon: <ChartArea className="w-10 h-10 text-purple-500" />, title: t("sections.visual.diagram.title"), desc: t("sections.visual.diagram.desc") },
        { icon: <ChartLine className="w-10 h-10 text-indigo-500" />, title: t("sections.visual.flowchart.title"), desc: t("sections.visual.flowchart.desc") },
        { icon: <Network className="w-10 h-10 text-pink-500" />, title: t("sections.visual.structure.title"), desc: t("sections.visual.structure.desc") },
    ];

    return (
        <section className="bg-gradient-to-r from-purple-50 to-indigo-50 py-24 px-6">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-12">{t("sections.visual.title")}</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {visuals.map((v, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition"
                        >
                            <div className="mb-4 flex justify-center">{v.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{v.title}</h3>
                            <p className="text-gray-600">{v.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
