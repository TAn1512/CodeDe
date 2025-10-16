"use client";

export default function Tip({ content }: { content: string }) {
    return (
        <div className="p-5 my-4 bg-blue-50 border-l-4 border-blue-400 rounded-md text-gray-700">
            <span dangerouslySetInnerHTML={{ __html: content }} />
        </div>
    );
}
