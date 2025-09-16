"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type SortType = "bubble" | "selection" | "insertion";

interface SortContextProps {
    algorithm: SortType;
    setAlgorithm: (algo: SortType) => void;
}

const SortContext = createContext<SortContextProps | undefined>(undefined);

export const SortProvider = ({ children }: { children: ReactNode }) => {
    const [algorithm, setAlgorithm] = useState<SortType>("bubble");

    return (
        <SortContext.Provider value={{ algorithm, setAlgorithm }}>
            {children}
        </SortContext.Provider>
    );
};

export const useSort = () => {
    const ctx = useContext(SortContext);
    if (!ctx) throw new Error("useSort must be used within SortProvider");
    return ctx;
};
