import Section from "@/components/Learn/HTML/Tags/Section";
import { getTranslations } from "next-intl/server";

export default async function HTMLIntroductionPage({
    params,
}: {
    params: { locale: string };
}) {
    const { locale } = await params;
    const t = await getTranslations({
        locale: locale,
        namespace: "html.introduction",
    });

    const content = {
        title: t("title"),
        description: t.raw("description"),
        sections: [
            {
                title: t("sections.0.heading"),
                desc: t.raw("sections.0.content"),
            },
            {
                title: t("sections.1.heading"),
                desc: t.raw("sections.1.content"),
            },
            {
                title: t("elementExplanation.title"),
                desc: `
                    <p>${t("elementExplanation.intro")}</p>
                    <br></br>
                    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto"> <code> &lt;<span className="text-green-400">h1</span>&gt; <span className="text-yellow-300">Hello World!</span> &lt;/<span className="text-green-400">h1</span>&gt; </code> </pre>
                    <br></br>
                    <ul class="list-disc pl-6 space-y-2">
                        <li>🟢 <strong>${t("elementExplanation.openingTag.title")}</strong>: ${t.raw("elementExplanation.openingTag.desc")}</li>
                        <li>🟡 <strong>${t("elementExplanation.content.title")}</strong>: ${t("elementExplanation.content.desc")}</li>
                        <li>🔴 <strong>${t("elementExplanation.closingTag.title")}</strong>: ${t.raw("elementExplanation.closingTag.desc")}</li>
                        <li>🔷 <strong>${t("elementExplanation.fullElement.title")}</strong>: ${t("elementExplanation.fullElement.desc")}</li>
                    </ul>
                `,
                example: t.raw("exampleCode"),
            },
            {
                title: t("simpleDoc.explainedTitle"),
                desc: `
                    <ul class="list-disc pl-6 space-y-2">
                        <li><code>&lt;!DOCTYPE html&gt;</code> ${t("simpleDoc.explained.doctype")}</li>
                        <li><code>&lt;html&gt;</code> ${t("simpleDoc.explained.html")}</li>
                        <li><code>&lt;head&gt;</code> ${t("simpleDoc.explained.head")}</li>
                        <li><code>&lt;title&gt;</code> ${t("simpleDoc.explained.title")}</li>
                        <li><code>&lt;body&gt;</code> ${t("simpleDoc.explained.body")}</li>
                        <li><code>&lt;h1&gt;</code> ${t("simpleDoc.explained.h1")}</li>
                        <li><code>&lt;p&gt;</code> ${t("simpleDoc.explained.p")}</li>
                    </ul>
                `,
            },
            {
                title: t("attributes.title"),
                desc: `
                    <p>${t("attributes.intro")}</p>
                    <ul class="list-disc pl-6 space-y-2 mt-4">
                        <li>🔹 <strong>href</strong> — ${t("attributes.href")}</li>
                        <li>🔹 <strong>src</strong> — ${t("attributes.src")}</li>
                        <li>🔹 <strong>alt</strong> — ${t("attributes.alt")}</li>
                        <li>🔹 <strong>type</strong> — ${t("attributes.type")}</li>
                        <li>🔹 <strong>style</strong> — ${t("attributes.style")}</li>
                    </ul>
                `,
                example: `<!DOCTYPE html>
<html>
<body>
  <a href="https://codede.vercel.app/" target="_blank">Visit CodeDe</a><br><br>
  <img src="https://firebasestorage.googleapis.com/v0/b/annt-project.appspot.com/o/images%2Flogo.png?alt=media&token=5c5e6f18-9c4a-4c97-8450-1932d90d71a9" alt="Example image" width="150"><br><br>
  <input type="text" placeholder="Enter your name"><br><br>
  <button style="background-color: teal; color: white; border: none; padding: 6px 12px; border-radius: 6px;">Click Me</button>
</body>
</html>`,
            },
            {
                title: t("vscodeSetup.title"),
                desc: `
                    <p>${t("vscodeSetup.intro")}</p>
                    <ol class="list-decimal pl-6 space-y-2 mt-4">
                        <li>${t.raw("vscodeSetup.step1")}</li>
                        <li>${t.raw("vscodeSetup.step2")}</li>
                        <li>${t.raw("vscodeSetup.step3")}</li>
                        <li>${t.raw("vscodeSetup.step4")}</li>
                        <li>${t.raw("vscodeSetup.step5")}</li>
                    </ol>
                    <p class="mt-4 text-sm text-gray-400">💡 ${t("vscodeSetup.tip")}</p>
                `,
            },
        ],
    };

    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">{content.title}</h1>
            <p
                className="text-gray-300 mb-6"
                dangerouslySetInnerHTML={{ __html: content.description }}
            />

            {content.sections.map((sec, i) => (
                <div key={i}>
                    <Section title={sec.title} desc={sec.desc} example={sec.example} />
                </div>
            ))}
        </div>
    );
}
