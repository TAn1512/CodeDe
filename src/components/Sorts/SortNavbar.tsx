"use client";

import { useRouter, usePathname } from "next/navigation";

export default function SortNavbar() {
    const router = useRouter();
    const pathname = usePathname();

    const algorithms = [
        { key: "bubble", label: "Bubble Sort" },
        { key: "selection", label: "Selection Sort" },
        { key: "insertion", label: "Insertion Sort" },
    ];

    return (
        <nav
            className="fixed top-[64px] left-0 w-full z-40 flex justify-start gap-4 
                       bg-gray-100/95 backdrop-blur-sm border-b border-gray-300 
                       p-3 shadow-sm"
        >
            {algorithms.map((algo) => {
                const active = pathname.endsWith(algo.key);
                return (
                    <button
                        key={algo.key}
                        onClick={() => router.push(`/sorts/${algo.key}`)}
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${active
                            ? "bg-blue-600 text-white shadow"
                            : "bg-white text-gray-700 border hover:bg-gray-100"
                            }`}
                    >
                        {algo.label}
                    </button>
                );
            })}
        </nav>
    );
}
