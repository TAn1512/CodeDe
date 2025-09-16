"use client";
import { useSort } from "@/context/SortContext";

export default function SortNavbar() {
    const { algorithm, setAlgorithm } = useSort();

    const algorithms = [
        { key: "bubble", label: "Bubble Sort" },
        { key: "selection", label: "Selection Sort" },
        { key: "insertion", label: "Insertion Sort" },
    ];

    return (
        <nav className="flex gap-4 bg-gray-100 p-3 shadow-md">
            {algorithms.map((algo) => (
                <button
                    key={algo.key}
                    onClick={() => setAlgorithm(algo.key as any)}
                    className={`px-3 py-1 rounded 
            ${algorithm === algo.key ? "bg-blue-600 text-white" : "bg-white border"}
          `}
                >
                    {algo.label}
                </button>
            ))}
        </nav>
    );
}
