"use client";

import BubbleSort from "@/components/Sorts/Pages/BubbleSort";
import InsertionSort from "@/components/Sorts/Pages/InsertionSort";
import SelectionSort from "@/components/Sorts/Pages/SelectionSort";
import SortNavbar from "@/components/Sorts/SortNavbar";
import { useSort } from "@/context/SortContext";

export default function SortPage() {
    const { algorithm } = useSort();

    return (
        <div className="flex flex-col h-full">
            <SortNavbar />
            <div className="flex-1 flex justify-center items-center p-5">
                {algorithm === "bubble" && <BubbleSort />}
                {algorithm === "selection" && <SelectionSort />}
                {algorithm === "insertion" && <InsertionSort />}
            </div>
        </div>
    );
}
