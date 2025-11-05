import Section from "@/components/Learn/HTML/Tags/Section";
import Note from "@/components/Learn/HTML/Tags/Note";
import Tip from "@/components/Learn/HTML/Tags/Tip";
import { getTranslations } from "next-intl/server";
import Header from "@/components/Learn/HTML/Tags/Header";
import Summary from "@/components/Learn/HTML/Tags/Summary";
import { getPageMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    return getPageMetadata({
        locale,
        namespace: "html.linkTags",
        slug: "learn/html/links",
    });
}

export default async function HTMLLinksPage({
    params,
}: {
    params: { locale: string };
}) {
    const { locale } = await params;
    const t = await getTranslations({ locale: locale, namespace: "html.linkTags" });

    const content = {
        title: t("title"),
        description: t.raw("description"),
        sections: [
            { title: t("sub1"), desc: t.raw("sub1_desc") },
            { note: t.raw("note1") },
            { title: t("sub2"), desc: t.raw("sub2_desc"), example: t.raw("example1") },
            { title: t("sub3"), desc: t.raw("sub3_desc"), example: t.raw("example3") },
            { tip: t.raw("tip1") },
            { title: t("sub4"), desc: t.raw("sub4_desc"), example: t.raw("example4") },
            { note: t.raw("note2") },
            { title: t("sub5"), desc: t.raw("sub5_desc"), example: t.raw("example5") },
            { title: t("sub6"), desc: t.raw("sub6_desc"), example: t.raw("example6") },
            { title: t("sub7"), desc: t.raw("sub7_desc"), example: t.raw("example7") },
            { title: t("sub8"), desc: t.raw("sub8_desc"), example: t.raw("example8") },
        ],
        summaryTitle: t("summaryTitle"),
        summary: t.raw("summary"),
    };

    return (
        <div>
            <Header title={content.title} description={content.description} />
            {content.sections.map((sec, i) => (
                <div key={i}>
                    {sec.title && (
                        <Section
                            title={sec.title}
                            desc={sec.desc}
                            example={sec.example}
                        />
                    )}
                    {sec.note && <Note content={sec.note} />}
                    {sec.tip && <Tip content={sec.tip} />}
                </div>
            ))}

            <Summary summaryTitle={content.summaryTitle} summary={content.summary} />
        </div>
    );
}
