"use client";

import { useEffect, useState } from "react";
import { useReminder } from "@/context/ReminderContext";


export default function LanguageReminder() {
    const { showRemind, dismiss } = useReminder();



    if (!showRemind) return null;

    return (
        <div className="absolute right-0 mr-10 mt-20 transform translate-y-10 z-50 ">
            <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-3 w-64 relative">
                <div className="absolute -top-2 right-6 w-4 h-4 bg-white border-l border-t border-gray-300 rotate-45"></div>
                <p className="text-gray-700 text-sm mb-2">
                    👉 Please choose your language before continuing.
                </p>
                <button
                    onClick={dismiss}
                    className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700"
                >
                    Got it
                </button>
            </div>
        </div>
    );
}
