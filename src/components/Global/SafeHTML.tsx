"use client";

export default function SafeHTML({ html }: { html: string }) {
    // Tránh hydration mismatch bằng suppressHydrationWarning
    return (
        <div
            suppressHydrationWarning
            dangerouslySetInnerHTML={{ __html: html }}
        />
    );
}