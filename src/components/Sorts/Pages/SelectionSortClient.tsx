"use client";

import { useRef } from "react";
import { selectionSort } from "@/algorithms/selectionSort";
import SortingVisualizer from "../SortingVisualizer";
import { HelpCircle } from "lucide-react";
import AlgorithmExplanation from "../AlgorithmExplanation";

interface SelectionSortClientProps {
    title: string;
    description: string;
    common: Record<string, string>;
    explanation: any;
}

export default function SelectionSortClient({
    title,
    description,
    common,
    explanation,
}: SelectionSortClientProps) {
    const explanationRef = useRef<HTMLDivElement>(null);

    const scrollToExplanation = () => {
        explanationRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <main className="p-6 flex flex-col items-center w-full">
            {/* Header + Visualizer */}
            <section className="text-center flex flex-col items-center w-full max-w-4xl">
                <div className="relative mb-4 inline-block">
                    <h1 className="text-3xl font-bold text-blue-700">{title}</h1>
                    <button
                        onClick={scrollToExplanation}
                        aria-label="View explanation"
                        className="absolute hover:cursor-pointer -top-2 -right-5 text-gray-400 hover:text-blue-600 transition-transform hover:scale-110"
                    >
                        <HelpCircle size={18} strokeWidth={2} />
                    </button>
                </div>

                <p className="mb-6 text-gray-600 max-w-2xl">{description}</p>

                <SortingVisualizer
                    title={title}
                    description={description}
                    algorithm={(arr, setArray, setStep) =>
                        selectionSort(arr, setArray, setStep, {
                            comparing: common.comparing,
                            and: common.and,
                            done: common.done,
                        })
                    }
                    sampleData={[5, 1, 4, 2, 8]}
                    labels={{
                        start: common.start,
                        pause: common.pause,
                        resume: common.resume,
                        reset: common.reset,
                        random: common.random,
                        inputError: common.inputError,
                    }}
                />
            </section>

            {/* Explanation Section */}
            <AlgorithmExplanation
                ref={explanationRef}
                explanation={explanation}
            />
        </main>
    );
}
