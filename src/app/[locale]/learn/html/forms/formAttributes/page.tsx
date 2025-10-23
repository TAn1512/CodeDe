import Section from "@/components/Learn/HTML/Tags/Section";
import Note from "@/components/Learn/HTML/Tags/Note";
import { getTranslations } from "next-intl/server";
import Header from "@/components/Learn/HTML/Tags/Header";
import Summary from "@/components/Learn/HTML/Tags/Summary";

export default async function HTMLFormAttributesPage({ params }: { params: { locale: string } }) {
    const { locale } = await params;
    const t = await getTranslations({ locale: locale, namespace: "html.formTags.formAttributes" });

    const content = {
        title: t("title"),
        description: t.raw("description"),
        sections: [
            { title: t("sub1"), desc: t.raw("sub1_desc"), example: t.raw("example1") },
            { title: t("sub2"), desc: t.raw("sub2_desc"), example: t.raw("example2") },
            { note: t.raw("note1") },
            { title: t("sub3"), desc: t.raw("sub3_desc"), example: t.raw("example3") },
            { note: t.raw("note2") },
        ],
        summaryTitle: t("summaryTitle"),
        summary: t.raw("summary"),
    };

    return (
        <div>
            <Header title={content.title} description={content.description} />
            {content.sections.map((sec, i) => (
                <div key={i}>
                    {sec.title && <Section title={sec.title} desc={sec.desc} example={sec.example} />}
                    {sec.note && <Note content={sec.note} />}
                </div>
            ))}
            <Summary summaryTitle={content.summaryTitle} summary={content.summary} />
        </div>
    );
}
