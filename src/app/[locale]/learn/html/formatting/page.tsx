import Section from "@/components/Learn/HTML/Tags/Section";
import Note from "@/components/Learn/HTML/Tags/Note";
import Tip from "@/components/Learn/HTML/Tags/Tip";
import { getTranslations } from "next-intl/server";

export default async function HTMLFormattingPage({ params }: { params: { locale: string } }) {
    const { locale } = await params;

    const t = await getTranslations({ locale: locale, namespace: "html.formattingTags" });

    const content = {
        title: t("title"),
        description: t.raw("description"),
        sections: [
            // Section 1
            { title: t("sub1"), desc: t.raw("sub1_desc"), example: t.raw("example1") },
            { note: t.raw("note1") },

            // Section 2
            { title: t("sub2"), desc: t.raw("sub2_desc"), example: t.raw("example2") },
            { tip: t.raw("tip1") },

            // Section 3
            { title: t("sub3"), desc: t.raw("sub3_desc"), example: t.raw("example3") },
            { note: t.raw("note2") },

            // Section 4
            { title: t("sub4"), desc: t.raw("sub4_desc"), example: t.raw("example4") },
            { tip: t.raw("tip2") },

            // Section 5
            { title: t("sub5"), desc: t.raw("sub5_desc"), example: t.raw("example5") },
            { tip: t.raw("tip3") },

            // Section 6
            { title: t("sub6"), desc: t.raw("sub6_desc"), example: t.raw("example6") },
            { note: t.raw("note3") },
        ],
        summaryTitle: t("summaryTitle"),
        summary: t.raw("summary"),
    };

    return (
        <div>
            {/* Title + Description */}
            <h1 className="text-3xl font-bold mb-4">{content.title}</h1>
            <p
                className="text-gray-300 mb-6"
                dangerouslySetInnerHTML={{ __html: content.description }}
            />

            {/* Dynamic Sections */}
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

            {/* Summary */}
            <h2 className="text-2xl font-semibold mt-10 mb-3">
                {content.summaryTitle}
            </h2>
            <ul
                className="list-disc list-inside text-gray-300"
                dangerouslySetInnerHTML={{ __html: content.summary }}
            />
        </div>
    );
}
