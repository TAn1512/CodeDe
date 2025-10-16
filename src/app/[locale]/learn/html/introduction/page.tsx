"use client";

import { useLocale, useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import HTMLPlayground from "@/components/Learn/HTML/HTMLPlayground";

export default function HTMLIntroductionPage() {
    const t = useTranslations("htmlIntroduction");
    const locale = useLocale();

    const sections = t.raw("sections") as {
        heading: string;
        content: string;
    }[];

    return (
        <div className="max-w-6xl mx-auto px-6 py-12 text-gray-800">
            {/* Tiêu đề */}
            <h1 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                {t("title")}
            </h1>
            <p className="text-gray-600 mb-10 text-lg">{t("description")}</p>

            {/* Các phần lý thuyết */}
            <div className="space-y-10">
                {sections.map((sec, idx) => (
                    <div
                        key={idx}
                        className="p-6 bg-white shadow-md rounded-2xl hover:shadow-lg transition"
                    >
                        <h2 className="text-2xl font-semibold mb-3 text-indigo-600">
                            {sec.heading}
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            {sec.content}
                        </p>
                    </div>
                ))}
            </div>

            <div className="mt-16 p-6 bg-white rounded-xl shadow-md border border-gray-100">
                <h3 className="text-2xl font-semibold text-indigo-600 mb-4">
                    {t("elementExplanation.title")}
                </h3>

                <p className="text-gray-700 leading-relaxed mb-6">
                    {t("elementExplanation.intro")}
                </p>

                {/* Highlight example */}
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                    <code>
                        &lt;<span className="text-green-400">h1</span>&gt;
                        <span className="text-yellow-300">Hello World!</span>
                        &lt;/<span className="text-green-400">h1</span>&gt;
                    </code>
                </pre>

                <ul className="mt-6 space-y-2 text-gray-700 text-sm sm:text-base">
                    <li>
                        🟢 <strong>{t("elementExplanation.openingTag.title")}:</strong>{" "}
                        <span
                            dangerouslySetInnerHTML={{
                                __html: t.raw("elementExplanation.openingTag.desc"),
                            }}
                        />
                    </li>
                    <li>
                        🟡 <strong>{t("elementExplanation.content.title")}:</strong>{" "}
                        {t("elementExplanation.content.desc")}
                    </li>
                    <li>
                        🔴 <strong>{t("elementExplanation.closingTag.title")}:</strong>{" "}
                        <span
                            dangerouslySetInnerHTML={{
                                __html: t.raw("elementExplanation.closingTag.desc"),
                            }}
                        />
                    </li>
                    <li>
                        🔷 <strong>{t("elementExplanation.fullElement.title")}:</strong>{" "}
                        {t("elementExplanation.fullElement.desc")}
                    </li>
                </ul>
            </div>

            {/* Playground */}
            <HTMLPlayground title={t("exampleTitle")} defaultCode={t.raw("exampleCode")} />


            {/* --- Explain Example --- */}
            <div className="mt-14 p-6 bg-white rounded-xl shadow-md border border-gray-100">

                <h3 className="text-xl font-semibold mt-6 mb-3 text-indigo-500">
                    {t("simpleDoc.explainedTitle")}
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>
                        <code>&lt;!DOCTYPE html&gt;</code> {t("simpleDoc.explained.doctype")}
                    </li>
                    <li>
                        <code>&lt;html&gt;</code> {t("simpleDoc.explained.html")}
                    </li>
                    <li>
                        <code>&lt;head&gt;</code> {t("simpleDoc.explained.head")}
                    </li>
                    <li>
                        <code>&lt;title&gt;</code> {t("simpleDoc.explained.title")}
                    </li>
                    <li>
                        <code>&lt;body&gt;</code> {t("simpleDoc.explained.body")}
                    </li>
                    <li>
                        <code>&lt;h1&gt;</code> {t("simpleDoc.explained.h1")}
                    </li>
                    <li>
                        <code>&lt;p&gt;</code> {t("simpleDoc.explained.p")}
                    </li>
                </ul>
            </div>

            {/* --- HTML Attributes --- */}
            <div className="mt-16 p-6 bg-white rounded-xl shadow-md border border-gray-100">
                <h3 className="text-2xl font-semibold text-indigo-600 mb-4">
                    {t("attributes.title")}
                </h3>

                <p className="text-gray-700 mb-6">
                    {t("attributes.intro")}
                </p>


                <HTMLPlayground
                    title={t("attributes.exampleTitle")}
                    defaultCode={`<!DOCTYPE html>
<html>
<body>
  <a href="https://algovis-annt.vercel.app/" target="_blank">Visit AlgoVis</a><br><br>
  <img src="https://firebasestorage.googleapis.com/v0/b/annt-project.appspot.com/o/images%2Flogo.png?alt=media&token=5c5e6f18-9c4a-4c97-8450-1932d90d71a9" alt="Example image" width="150"><br><br>
  <input type="text" placeholder="Enter your name"><br><br>
  <button style="background-color: teal; color: white; border: none; padding: 6px 12px; border-radius: 6px;">Click Me</button>
</body>
</html>`}
                />

                <ul className="mt-6 space-y-2 text-gray-700">
                    <li>🔹 <strong>href</strong> — {t("attributes.href")}</li>
                    <li>🔹 <strong>src</strong> — {t("attributes.src")}</li>
                    <li>🔹 <strong>alt</strong> — {t("attributes.alt")}</li>
                    <li>🔹 <strong>type</strong> — {t("attributes.type")}</li>
                    <li>🔹 <strong>style</strong> — {t("attributes.style")}</li>
                </ul>
            </div>

            {/* --- Setup VS Code --- */}
            <div className="mt-16 p-6 bg-white rounded-xl shadow-md border border-gray-100">
                <h3 className="text-2xl font-semibold text-indigo-600 mb-4">
                    {t("vscodeSetup.title")}
                </h3>
                <p className="text-gray-700 mb-6">{t("vscodeSetup.intro")}</p>

                <ol className="list-decimal pl-6 space-y-3 text-gray-700">
                    <li dangerouslySetInnerHTML={{ __html: t.raw("vscodeSetup.step1") }} />
                    <li dangerouslySetInnerHTML={{ __html: t.raw("vscodeSetup.step2") }} />
                    <li dangerouslySetInnerHTML={{ __html: t.raw("vscodeSetup.step3") }} />
                    <li dangerouslySetInnerHTML={{ __html: t.raw("vscodeSetup.step4") }} />
                    <li dangerouslySetInnerHTML={{ __html: t.raw("vscodeSetup.step5") }} />
                </ol>

                <p className="mt-6 text-gray-600 text-sm">
                    💡 {t("vscodeSetup.tip")}
                </p>
            </div>


            {/* Nút tiếp theo */}
            <div className="flex justify-end mt-12">
                <Link
                    href={`/${locale}/learn/html/tags`}
                    className="flex items-center gap-2 bg-indigo-600 text-white px-5 py-3 rounded-xl font-medium hover:bg-indigo-700 transition shadow-md"
                >
                    {t("nextLesson")}
                    <ArrowRight className="w-5 h-5" />
                </Link>
            </div>
        </div>
    );
}
