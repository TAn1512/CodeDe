"use client";
import { motion } from "framer-motion";
import { Brain, ChartArea, Zap, MonitorSmartphone } from "lucide-react";

export default function WhyChoose({ t }: { t: any }) {
    const reasons = [
        { icon: <MonitorSmartphone size={40} />, title: t("why.interactive.title"), desc: t("why.interactive.desc") },
        { icon: <Brain size={40} />, title: t("why.understand.title"), desc: t("why.understand.desc") },
        { icon: <Zap size={40} />, title: t("why.faster.title"), desc: t("why.faster.desc") },
        { icon: <ChartArea size={40} />, title: t("why.visual.title"), desc: t("why.visual.desc") },
    ];

    return (
        <section className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white py-20 px-6">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-12">{t("why.title")}</h2>
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                    {reasons.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:bg-white/20 transition"
                        >
                            <div className="mb-4 flex justify-center">{item.icon}</div>
                            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                            <p className="text-sm text-indigo-100">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
