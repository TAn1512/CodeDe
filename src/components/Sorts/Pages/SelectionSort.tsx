import { useTranslations } from "next-intl";

import SortingVisualizer from "../SortingVisualizer";
import { selectionSort } from "@/algorithms/selectionSort";

export default function BubbleSortPage() {
    const t = useTranslations("Algorithms.SelectionSort");
    const common = useTranslations("Algorithms.Common");

    return (
        <SortingVisualizer
            title={t("title")}
            description={t("description")}
            algorithm={(arr, setArray, setStep) =>
                selectionSort(arr, setArray, setStep, {
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
