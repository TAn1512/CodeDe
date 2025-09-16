"use client";
import { useState, useEffect, useRef } from "react";

export type SortingStep = {
    i: number;
    j: number;
    message?: string;
    [key: string]: any; // mở rộng cho các thuật toán khác
};

export function useSorting(
    algorithm: (
        arr: number[],
        setArray: (a: number[]) => void,
        setStep: (s: SortingStep | null) => void
    ) => AsyncGenerator
) {
    const [array, setArray] = useState<number[]>([5, 1, 4, 2, 8]);
    const [isRunning, setIsRunning] = useState(false);
    const [speed, setSpeed] = useState(1000);
    const [step, setStep] = useState<SortingStep | null>(null);

    const generatorRef = useRef<AsyncGenerator | null>(null);

    // Tạo mảng ngẫu nhiên
    const generateArray = (size: number = 6) => {
        const newArr = Array.from({ length: size }, () =>
            Math.floor(Math.random() * 50) + 1
        );
        setArray(newArr);
        setIsRunning(false);
        generatorRef.current = null;
    };

    // Reset
    const reset = () => {
        setIsRunning(false);
        generatorRef.current = null;
        setStep(null);
    };

    // Start
    const start = async () => {
        if (!generatorRef.current) {
            generatorRef.current = algorithm([...array], setArray, setStep);
        }
        setIsRunning(true);
    };

    // Pause
    const pause = () => setIsRunning(false);

    // Loop
    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (isRunning && generatorRef.current) {
            timer = setInterval(async () => {
                const { done } = await generatorRef.current!.next();
                if (done) {
                    setIsRunning(false);
                    generatorRef.current = null;
                }
            }, speed);
        }
        return () => clearInterval(timer);
    }, [isRunning, speed]);

    return {
        array,
        generateArray,
        start,
        pause,
        reset,
        isRunning,
        speed,
        setSpeed,
        step,
        setArray,
    };
}
