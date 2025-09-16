"use client";

import { useState, useRef } from "react";
import { useTranslations } from "next-intl";
import { useSorting } from "@/hooks/useSorting";
import D3Visualizer from "./D3Visualizer";

type AlgoFn = (
    arr: number[],
    setArray: (a: number[]) => void,
    setStep: (s: { i: number; j: number; message?: string }) => void
) => AsyncGenerator;

export default function SortPageTemplate({
    title,
    description,
    algorithm,
    sampleData = [5, 1, 4, 2, 8],
}: {
    title: string;
    description: string;
    algorithm: AlgoFn;
    sampleData?: number[];
}) {
    const t = useTranslations("Algorithms.Common");

    const [error, setError] = useState("");
    const pauseRef = useRef(false);

    const { array, generateArray, start, pause, reset, isRunning, step } =
        useSorting(algorithm);

    // init
    useState(() => {
        generateArray(sampleData.length);
        return undefined;
    });

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (isRunning) return;
        const values = e.target.value
            .split(",")
            .map((v) => parseInt(v.trim()))
            .filter((v) => !isNaN(v));

        if (values.some((v) => v < 1 || v > 50)) {
            setError(t("inputError"));
            return;
        }
        setError("");
    };

    const handleRandom = () => {
        if (isRunning) return;
        generateArray(sampleData.length);
        setError("");
    };

    const handlePauseResume = () => {
        pauseRef.current = !pauseRef.current;
        if (pauseRef.current) pause();
        else start();
    };

    const handleReset = () => {
        reset();
        setError("");
    };

    return (
        <main className="p-6 text-center">
            <h1 className="text-2xl font-bold mb-4">{title}</h1>
            <p className="mb-4 text-gray-600">{description}</p>

            <input
                type="text"
                placeholder="Enter numbers e.g. 5,1,4,2,8"
                onChange={handleInput}
                disabled={isRunning}
                className="border px-2 py-1 mb-2 w-80 text-center rounded"
            />
            {error && <p className="text-red-500 mb-2">{error}</p>}

            <div className="flex justify-center gap-4 mb-6">
                {!isRunning ? (
                    <>
                        <button
                            onClick={start}
                            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                        >
                            {t("start")}
                        </button>
                        <button
                            onClick={handleRandom}
                            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                        >
                            {t("random")}
                        </button>
                    </>
                ) : (
                    <>
                        <button
                            onClick={handlePauseResume}
                            className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                        >
                            {pauseRef.current ? t("resume") : t("pause")}
                        </button>
                        <button
                            onClick={handleReset}
                            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                        >
                            {t("reset")}
                        </button>
                    </>
                )}
            </div>

            <D3Visualizer array={array} step={step ?? undefined} />

            {step?.message && <p className="text-lg font-semibold">{step.message}</p>}
        </main>
    );
}
