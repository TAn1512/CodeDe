import Header from "@/components/Learn/HTML/Tags/Header";
import Note from "@/components/Learn/HTML/Tags/Note";
import Section from "@/components/Learn/HTML/Tags/Section";
import Summary from "@/components/Learn/HTML/Tags/Summary";
import { getPageMetadata } from "@/lib/metadata";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    return getPageMetadata({
        locale,
        namespace: "html.paragraphTags",
        slug: "learn/html/paragraphs",
    });
}

export default async function ParagraphsPage({
    params,
}: {
    params: { locale: string };
}) {
    const { locale } = await params;
    const t = await getTranslations({
        locale: locale,
        namespace: "html.paragraphTags",
    });

    return (
        <div className="space-y-10">
            {/* --- Giới thiệu --- */}
            <Header
                title={t("title")}
                description={t.raw("description")}
            />

            {/* --- Đoạn văn cơ bản --- */}
            <Section
                title={t("sub1")}
                desc={t.raw("sub1_desc")}
                example={t.raw("example1")}
            />

            {/* --- Ngắt dòng --- */}
            <Section
                title={t("sub2")}
                desc={t.raw("sub2_desc")}
                example={t.raw("example2")}
            />

            {/* --- Thẻ <pre> --- */}
            <Section
                title={t("sub3")}
                desc={t.raw("sub3_desc")}
                example={t.raw("example3")}
            />

            {/* --- Khoảng trắng --- */}
            <Section
                title={t("sub4")}
                desc={t.raw("sub4_desc")}
                example={t.raw("example4")}
            />

            {/* --- Ghi chú --- */}
            <Note content={t.raw("note1")} />

            {/* --- Tóm tắt --- */}
            <Section
                title={t("sub5")}
                desc={t.raw("sub5_desc")}
                example={t.raw("example5")}
            />

            {/* --- Tóm tắt chương --- */}
            <Summary summaryTitle={t("summaryTitle")} summary={t.raw("summary")} />
        </div>
    );
}
