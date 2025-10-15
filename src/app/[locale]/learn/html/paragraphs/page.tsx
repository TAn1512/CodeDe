"use client";

import HTMLPlayground from "@/components/Learn/HTML/HTMLPlayground";
import { useTranslations } from "next-intl";

export default function ParagraphsPage() {
    const t = useTranslations("paragraphTags");

    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">{t("title")}</h1>
            <p
                className="text-gray-300 mb-6"
                dangerouslySetInnerHTML={{ __html: t.raw("description") }}
            />

            <h2 className="text-2xl font-semibold mb-3">{t("sub1")}</h2>
            <p
                className="text-gray-300 mb-4"
                dangerouslySetInnerHTML={{ __html: t.raw("sub1_desc") }}
            />
            <HTMLPlayground defaultCode={t.raw("example1")} />

            <h2 className="text-2xl font-semibold mt-10 mb-3">{t("sub2")}</h2>
            <p
                className="text-gray-300 mb-4"
                dangerouslySetInnerHTML={{ __html: t.raw("sub2_desc") }}
            />
            <HTMLPlayground defaultCode={t.raw("example2")} />

            <h2 className="text-2xl font-semibold mt-10 mb-3">{t("sub3")}</h2>
            <p
                className="text-gray-300 mb-4"
                dangerouslySetInnerHTML={{ __html: t.raw("sub3_desc") }}
            />
            <HTMLPlayground defaultCode={t.raw("example3")} />

            <h2 className="text-2xl font-semibold mt-10 mb-3">{t("sub4")}</h2>
            <p
                className="text-gray-300 mb-4"
                dangerouslySetInnerHTML={{ __html: t.raw("sub4_desc") }}
            />
            <HTMLPlayground defaultCode={t.raw("example4")} />

            <h2 className="text-2xl font-semibold mt-10 mb-3">{t("sub5")}</h2>
            <p
                className="text-gray-300 mb-4"
                dangerouslySetInnerHTML={{ __html: t.raw("sub5_desc") }}
            />
            <HTMLPlayground defaultCode={t.raw("example5")} />
        </div>
    );
}
