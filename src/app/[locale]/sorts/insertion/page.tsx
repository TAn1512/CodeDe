import { getTranslations } from "next-intl/server";
import { Metadata } from "next";
import InsertionSortClient from "@/components/Sorts/Pages/InsertionSortClient";
import { getSortMetadata } from "@/lib/getSortMetadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    return getSortMetadata({
        locale,
        algorithm: "InsertionSort",
    });
}

export default async function InsertionSortPage(props: { params: Promise<{ locale: string }> }) {
    const params = await props.params;

    const t = await getTranslations({ locale: params.locale, namespace: "algorithms.algorithmsPage.InsertionSort" });
    const common = await getTranslations({ locale: params.locale, namespace: "algorithms.algorithmsPage.Common" });
    const explanation = await getTranslations({ locale: params.locale, namespace: "algorithms.insertionExplanation" });

    // ✅ Chuyển toàn bộ string từ i18n thành object thuần
    const explanationData = {
        heading: explanation("heading"),
        description: explanation("description"),
        complexity: {
            best: explanation("complexity.best"),
            average: explanation("complexity.average"),
            worst: explanation("complexity.worst"),
            space: explanation("complexity.space"),
            stable: explanation("complexity.stable"),
        },
        advantages: [
            explanation("advantages.0"),
            explanation("advantages.1"),
            explanation("advantages.2"),
        ],
        disadvantages: [
            explanation("disadvantages.0"),
            explanation("disadvantages.1"),
            explanation("disadvantages.2"),
        ],
        pseudoCode: [
            explanation("pseudoCode.0"),
            explanation("pseudoCode.1"),
            explanation("pseudoCode.2"),
            explanation("pseudoCode.3"),
            explanation("pseudoCode.4"),
        ],
        labels: {
            complexityTitle: explanation("labels.complexityTitle"),
            best: explanation("labels.best"),
            average: explanation("labels.average"),
            worst: explanation("labels.worst"),
            space: explanation("labels.space"),
            stable: explanation("labels.stable"),
            yes: explanation("labels.yes"),
            no: explanation("labels.no"),
            advantages: explanation("labels.advantages"),
            disadvantages: explanation("labels.disadvantages"),
            pseudoCode: explanation("labels.pseudoCode"),
        },
    };

    return (
        <InsertionSortClient
            title={t("title")}
            description={t("description")}
            common={{
                start: common("start"),
                pause: common("pause"),
                resume: common("resume"),
                reset: common("reset"),
                random: common("random"),
                inputError: common("inputError"),
                comparing: common("comparing"),
                and: common("and"),
                done: common("done"),
                pickKey: common("pickKey"),
                shifting: common("shifting"),
                inserting: common("inserting"),
            }}
            explanation={explanationData} // ✅ Không còn lỗi truyền function
        />
    );
}
