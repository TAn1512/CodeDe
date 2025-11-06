"use client";

import SortNavbar from "@/components/Sorts/SortNavbar";


export default function SortLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col h-full">
            <SortNavbar />
            <div className="flex-1 mt-10 flex justify-center items-center p-5">
                {children}
            </div>
        </div>
    );
}
