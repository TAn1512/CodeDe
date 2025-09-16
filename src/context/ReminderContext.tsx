"use client";

import { createContext, useContext, useEffect, useState } from "react";

type ReminderContextType = {
    showRemind: boolean;
    dismiss: () => void;
};

const ReminderContext = createContext<ReminderContextType | undefined>(undefined);

export function ReminderProvider({ children }: { children: React.ReactNode }) {
    const [showRemind, setShowRemind] = useState(true);

    useEffect(() => {
        const saved = localStorage.getItem("reminderDismissed");
        if (saved === "true") {
            setShowRemind(false);
        }
    }, []);

    const dismiss = () => {
        setShowRemind(false);
        localStorage.setItem("reminderDismissed", "true");
    };

    return (
        <ReminderContext.Provider value={{ showRemind, dismiss }}>
            {children}
        </ReminderContext.Provider>
    );
}

export function useReminder() {
    const ctx = useContext(ReminderContext);
    if (!ctx) throw new Error("useReminder must be used inside ReminderProvider");
    return ctx;
}
