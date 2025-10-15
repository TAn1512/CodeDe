import { insertionSort } from "@/algorithms/insertionSort";
import { useTranslations } from "next-intl";
import SortingVisualizer from "../SortingVisualizer";

export default function InsertionSort() {
    const t = useTranslations("algorithms.InsertionSort");
    const common = useTranslations("algorithms.Common");

    return (
        <SortingVisualizer
            title={t("title")}
            description={t("description")}
            algorithm={(arr, setArray, setStep) =>
                insertionSort(arr, setArray, setStep, {
                    comparing: common("comparing"),
                    and: common("and"),
                    done: common("done"),
                    pickKey: common("pickKey"),
                    shifting: common("shifting"),
                    inserting: common("inserting"),
                })
            }
            sampleData={[12, 11, 13, 5, 6]}
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
