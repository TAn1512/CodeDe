"use client";
import SafeHTML from '@/components/Global/SafeHTML';
import React from 'react'

export default function Header({ title, description }: { title: string, description: string }) {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">{title}</h1>
            <div className="text-gray-300 mb-4">
                <SafeHTML html={description} />
            </div>
        </div>
    )
}
