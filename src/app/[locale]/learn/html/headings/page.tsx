import Note from "@/components/Learn/HTML/Tags/Note";
import Section from "@/components/Learn/HTML/Tags/Section";
import { getTranslations } from "next-intl/server";


export default async function HeadingsPage({
    params,
}: {
    params: { locale: string };
}) {
    const { locale } = await params;
    const t = await getTranslations({
        locale: locale,
        namespace: "html.headingTags",
    });

    return (
        <div className="space-y-10">
            {/* --- Phần giới thiệu --- */}
            <Section
                title={t("title")}
                desc={`
                    <p>${t("description")}</p>
                    <ul class="list-disc pl-5 mt-3 space-y-2">
                        <li>${t.raw("point1")}</li>
                        <li>${t("point2")}</li>
                        <li>${t("point3")}</li>
                    </ul>
                `}

            />

            {/* --- Ghi chú 1 --- */}
            <Note content={t.raw("note1")} />

            {/* --- Heading Importance --- */}
            <Section title={t("importanceTitle")} desc={t.raw("importanceText")} example={`<!DOCTYPE html>
<html>
  <body>
    <h1>This is a Heading 1</h1>
    <h2>This is a Heading 2</h2>
    <h3>This is a Heading 3</h3>
  </body>
</html>`} />

            {/* --- Ghi chú 2 --- */}
            <Note content={t.raw("note2")} />

            {/* --- Bigger Headings --- */}
            <Section
                title={t("biggerTitle")}
                desc={t.raw("biggerText")}
                example={`<!DOCTYPE html>
<html>
  <body>
    <h1 style="font-size:60px;">Heading 1</h1>
    <h1 style="font-size:70px;">Heading 1</h1>
  </body>
</html>`}
            />
        </div>
    );
}
