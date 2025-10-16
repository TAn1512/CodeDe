"use client";

export default function Note({ content }: { content: string }) {
    return (
        <div className="p-5 my-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-md text-gray-700">
            <span dangerouslySetInnerHTML={{ __html: content }} />
        </div>
    );
}
