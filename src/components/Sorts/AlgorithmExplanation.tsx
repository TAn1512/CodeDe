"use client";

import { forwardRef } from "react";

interface ExplanationLabels {
    complexityTitle: string;
    best: string;
    average: string;
    worst: string;
    space: string;
    stable: string;
    yes: string;
    no: string;
    advantages: string;
    disadvantages: string;
    pseudoCode: string;
}

interface AlgorithmExplanationProps {
    explanation: {
        heading: string;
        description: string;
        complexity: {
            best: string;
            average: string;
            worst: string;
            space: string;
            stable: string;
        };
        advantages: string[];
        disadvantages: string[];
        pseudoCode: string[];
        labels: ExplanationLabels; // ✅ thêm labels vào chung object để dùng trực tiếp
    };
}

const AlgorithmExplanation = forwardRef<HTMLDivElement, AlgorithmExplanationProps>(
    ({ explanation }, ref) => {
        const { heading, description, complexity, advantages, disadvantages, pseudoCode, labels } =
            explanation;

        return (
            <section
                ref={ref}
                className="mt-20 w-full max-w-5xl text-left border-t border-gray-300 pt-12 px-6"
            >
                <h2 className="text-3xl font-semibold mb-6 text-blue-600">{heading}</h2>

                <p className="text-gray-700 mb-8 leading-relaxed whitespace-pre-line text-lg">
                    {description.trim()}
                </p>

                {/* Complexity */}
                <h3 className="text-2xl font-medium mb-3 text-gray-800">
                    {labels.complexityTitle}
                </h3>
                <ul className="mb-8 text-gray-700 leading-relaxed list-disc list-inside text-base">
                    <li>
                        {labels.best}: <b>{complexity.best}</b>
                    </li>
                    <li>
                        {labels.average}: <b>{complexity.average}</b>
                    </li>
                    <li>
                        {labels.worst}: <b>{complexity.worst}</b>
                    </li>
                    <li>
                        {labels.space}: <b>{complexity.space}</b>
                    </li>
                    <li>
                        {labels.stable}:{" "}
                        <b>{complexity.stable === "true" ? labels.yes : labels.no}</b>
                    </li>
                </ul>

                {/* Advantages */}
                <h3 className="text-2xl font-medium mb-3 text-gray-800">{labels.advantages}</h3>
                <ul className="mb-8 text-gray-700 leading-relaxed list-disc list-inside text-base">
                    {advantages.map((adv, idx) => (
                        <li key={idx}>{adv}</li>
                    ))}
                </ul>

                {/* Disadvantages */}
                <h3 className="text-2xl font-medium mb-3 text-gray-800">{labels.disadvantages}</h3>
                <ul className="mb-8 text-gray-700 leading-relaxed list-disc list-inside text-base">
                    {disadvantages.map((dis, idx) => (
                        <li key={idx}>{dis}</li>
                    ))}
                </ul>

                {/* Pseudo Code */}
                <h3 className="text-2xl font-medium mb-3 text-gray-800">{labels.pseudoCode}</h3>
                <pre className="bg-gray-50 p-5 rounded-lg text-left text-sm font-mono text-gray-800 shadow-sm border">
                    {pseudoCode.join("\n")}
                </pre>
            </section>
        );
    }
);

AlgorithmExplanation.displayName = "AlgorithmExplanation";
export default AlgorithmExplanation;
