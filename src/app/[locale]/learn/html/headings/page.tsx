"use client";

import HTMLPlayground from "@/components/Learn/HTML/HTMLPlayground";
import { useTranslations } from "next-intl";

export default function HeadingsPage() {
    const t = useTranslations("headingTags");

    return (
        <div className="space-y-10">
            {/* Tiêu đề và mô tả */}
            <div>
                <h1 className="text-3xl font-bold mb-4 text-indigo-400">
                    {t("title")}
                </h1>
                <p
                    className="text-gray-300 mb-6 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: t.raw("description") }}
                />

                <ul className="list-disc pl-5 text-gray-400 mb-6 space-y-2">
                    <li
                        dangerouslySetInnerHTML={{ __html: t.raw("point1") }}
                    />
                    <li>{t("point2")}</li>
                    <li>{t("point3")}</li>
                </ul>
            </div>

            {/* Example cơ bản */}
            <HTMLPlayground
                title={t("exampleTitle")}
                defaultCode={`<!DOCTYPE html>
<html>
  <body>
    <h1>This is a Heading 1</h1>
    <h2>This is a Heading 2</h2>
    <h3>This is a Heading 3</h3>
  </body>
</html>`}
            />

            {/* Note */}
            <div className="p-5 bg-yellow-50 border-l-4 border-yellow-400 rounded-md text-gray-700">
                <span
                    dangerouslySetInnerHTML={{ __html: t.raw("note1") }}
                />
            </div>

            {/* Heading Importance */}
            <div>
                <h2 className="text-2xl font-semibold text-indigo-400 mb-3">
                    {t("importanceTitle")}
                </h2>
                <p
                    className="text-gray-300 leading-relaxed mb-4"
                    dangerouslySetInnerHTML={{ __html: t.raw("importanceText") }}
                />
            </div>

            {/* Note */}
            <div className="p-5 bg-yellow-50 border-l-4 border-yellow-400 rounded-md text-gray-700">
                <span
                    dangerouslySetInnerHTML={{ __html: t.raw("note2") }}
                />
            </div>

            {/* Bigger Headings */}
            <div>
                <h2 className="text-2xl font-semibold text-indigo-400 mb-3">
                    {t("biggerTitle")}
                </h2>
                <p
                    className="text-gray-300 mb-4 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: t.raw("biggerText") }}
                />

                <HTMLPlayground
                    title={t("biggerExample")}
                    defaultCode={`<!DOCTYPE html>
<html>
  <body>
    <h1 style="font-size:60px;">Heading 1</h1>
    <h1 style="font-size:70px;">Heading 1</h1>
  </body>
</html>`}
                />
            </div>
        </div>
    );
}
