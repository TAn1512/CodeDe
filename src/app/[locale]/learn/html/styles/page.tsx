import Note from "@/components/Learn/HTML/Tags/Note";
import Tip from "@/components/Learn/HTML/Tags/Tip";
import Section from "@/components/Learn/HTML/Tags/Section";
import { getTranslations } from "next-intl/server";

export default async function StylesPage({
    params,
}: {
    params: { locale: string };
}) {
    const { locale } = await params;
    const t = await getTranslations({
        locale: locale,
        namespace: "htmlStylesTags",
    });

    return (
        <div className="space-y-10">
            {/* --- Giới thiệu --- */}
            <Section title={t("title")} desc={t.raw("description")} />

            {/* --- 1. Background Color --- */}
            <Section
                title={t("sub1")}
                desc={t.raw("sub1_desc")}
                example={t.raw("example1")}
            />
            <Note content={t.raw("note1")} />

            {/* --- 2. Text Color --- */}
            <Section
                title={t("sub2")}
                desc={t.raw("sub2_desc")}
                example={t.raw("example2")}
            />
            <Tip content={t.raw("tip1")} />

            {/* --- 3. Font Family --- */}
            <Section
                title={t("sub3")}
                desc={t.raw("sub3_desc")}
                example={t.raw("example3")}
            />
            <Note content={t.raw("note2")} />

            {/* --- 4. Font Size --- */}
            <Section
                title={t("sub4")}
                desc={t.raw("sub4_desc")}
                example={t.raw("example4")}
            />
            <Tip content={t.raw("tip2")} />

            {/* --- 5. Text Alignment --- */}
            <Section
                title={t("sub5")}
                desc={t.raw("sub5_desc")}
                example={t.raw("example5")}
            />
            <Note content={t.raw("note3")} />

            {/* --- Summary --- */}
            <Section
                title={t("summaryTitle")}
                desc={`<ul class="list-disc pl-5 space-y-1">${t.raw("summary")}</ul>`}
            />
        </div>
    );
}
