"use client";
import React from "react";
import { CheckCircle2 } from "lucide-react";

export default function Summary({
  summaryTitle,
  summary,
}: {
  summaryTitle: string;
  summary: string;
}) {
  return (
    <section className="mt-12 p-6 rounded-2xl bg-gradient-to-br from-gray-800/70 to-gray-900/80 border border-gray-700 shadow-lg">
      <h2 className="text-2xl font-bold text-white mb-5 border-b border-gray-600 pb-3 flex items-center gap-2">
        <CheckCircle2 className="w-6 h-6 text-indigo-400" />
        {summaryTitle}
      </h2>

      <div
        className="space-y-3"
        dangerouslySetInnerHTML={{
          __html: summary.replaceAll(
            "<li>",
            `<li class='flex items-center gap-3 text-gray-300 leading-relaxed'>
              <span class="w-2.5 h-2.5 bg-indigo-400 rounded-full flex-shrink-0"></span>`
          ),
        }}
      />
    </section>
  );
}
