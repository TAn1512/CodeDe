"use client";

import { useState } from "react";
import { useSorting } from "@/hooks/useSorting";
import D3Visualizer from "./D3Visualizer";

type Step = { i: number; j: number; message?: string };

interface SortingVisualizerProps {
    title: string;
    description: string;
    algorithm: (
        arr: number[],
        setArray: (a: number[]) => void,
        setStep: (s: Step) => void
    ) => AsyncGenerator<void, void, unknown>;
    sampleData: number[];
    labels: {
        start: string;
        pause: string;
        resume: string;
        reset: string;
        random: string;
        inputError: string;
    };
}

export default function SortingVisualizer({
    title,
    description,
    algorithm,
    sampleData,
    labels,
}: SortingVisualizerProps) {
    const [inputValue, setInputValue] = useState(sampleData.join(","));
    const [error, setError] = useState("");
    const [paused, setPaused] = useState(false);

    const {
        array,
        setArray,
        start,
        pause,
        reset,
        isRunning,
        step,
    } = useSorting(algorithm);

    // Input handler
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (isRunning) return;
        const raw = e.target.value;
        setInputValue(raw);

        const values = raw
            .split(",")
            .map((v) => parseInt(v.trim()))
            .filter((v) => !isNaN(v));

        if (values.length > 0) {
            setArray(values);
        }

        if (values.some((v) => v < 1 || v > 50)) {
            setError(labels.inputError);
        } else {
            setError("");
        }
    };

    const handleRandom = () => {
        if (isRunning) return;
        const newArr = Array.from({ length: 6 }, () =>
            Math.floor(Math.random() * 50) + 1 // 👈 random 1 50
        );
        setArray(newArr);
        setInputValue(newArr.join(","));
        setError("");
    };

    const handleStart = () => {
        // kiểm tra lần cuối
        if (array.some((v) => v < 1 || v > 50)) {
            setError(labels.inputError);
            return;
        }
        setError("");
        start();
    };

    const handlePause = () => {
        pause();
        setPaused(true);
    };

    const handleResume = () => {
        start();
        setPaused(false);
    };

    const handleReset = () => {
        reset();
        setArray(sampleData);
        setInputValue(sampleData.join(","));
        setError("");
        setPaused(false);
    };

    return (
        <main className="p-6 text-center">
            <h1 className="text-2xl font-bold mb-4">{title}</h1>
            <p className="mb-4 text-gray-600">{description}</p>

            <input
                type="text"
                value={inputValue}
                placeholder="Enter numbers e.g. 5,1,4,2,8"
                onChange={handleInput}
                disabled={isRunning}
                className="border px-2 py-1 mb-2 w-80 text-center rounded"
            />
            {error && <p className="text-red-500 mb-2">{error}</p>}

            <div className="flex justify-center gap-4 mb-6">
                {!isRunning && !paused && (
                    <>
                        <button
                            onClick={handleStart}
                            disabled={array.some((v) => v < 1 || v > 50)}
                            className={`px-4 py-2 rounded text-white ${array.some((v) => v < 1 || v > 50)
                                ? "bg-gray-400 cursor-not-allowed"
                                : "bg-blue-600 hover:bg-blue-700"
                                }`}
                        >
                            {labels.start}
                        </button>
                        <button
                            onClick={handleRandom}
                            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                        >
                            {labels.random}
                        </button>
                    </>
                )}

                {isRunning && !paused && (
                    <>
                        <button
                            onClick={handlePause}
                            className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                        >
                            {labels.pause}
                        </button>
                        <button
                            onClick={handleReset}
                            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                        >
                            {labels.reset}
                        </button>
                    </>
                )}

                {paused && (
                    <>
                        <button
                            onClick={handleResume}
                            className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                        >
                            {labels.resume}
                        </button>
                        <button
                            onClick={handleReset}
                            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                        >
                            {labels.reset}
                        </button>
                    </>
                )}
            </div>

            <D3Visualizer array={array} step={step ?? undefined} />

            {step?.message && <p className="text-lg font-semibold">{step.message}</p>}
        </main>
    );
}
