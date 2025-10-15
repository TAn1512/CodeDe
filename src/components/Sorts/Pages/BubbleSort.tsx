import { useTranslations } from "next-intl";

import { bubbleSort } from "@/algorithms/bubbleSort";
import SortingVisualizer from "../SortingVisualizer";

export default function BubbleSortPage() {
    const t = useTranslations("algorithms.BubbleSort");
    const common = useTranslations("algorithms.Common");

    return (
        <SortingVisualizer
            title={t("title")}
            description={t("description")}
            algorithm={(arr, setArray, setStep) =>
                bubbleSort(arr, setArray, setStep, {
                    comparing: common("comparing"),
                    and: common("and"),
                    done: common("done"),
                })
            }
            sampleData={[5, 1, 4, 2, 8]}
            labels={{
                start: common("start"),
                pause: common("pause"),
                resume: common("resume"),
                reset: common("reset"),
                random: common("random"),
                inputError: common("inputError"),
            }}
        />
    );
}
