"use client";

import { useState, useRef, useEffect } from "react";
import { Code2, Copy, Play } from "lucide-react";

interface HTMLPlaygroundProps {
    title?: string;
    defaultCode: string;
}

export default function HTMLPlayground({
    title = "Example",
    defaultCode,
}: HTMLPlaygroundProps) {
    const [code, setCode] = useState(defaultCode);
    const [iframeSrc, setIframeSrc] = useState(defaultCode);
    const [copied, setCopied] = useState(false);
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);
    const iframeRef = useRef<HTMLIFrameElement | null>(null);

    // 🧩 Auto resize textarea theo nội dung
    useEffect(() => {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = "auto"; // reset để tính lại
            textarea.style.height = `${textarea.scrollHeight}px`;
        }
    }, [code]);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleRun = () => {
        setIframeSrc(code);
    };

    return (
        <div className="mt-14 bg-gray-900 text-gray-100 rounded-xl p-5">
            <h3 className="text-xl font-semibold flex items-center gap-2 mb-4">
                <Code2 className="w-5 h-5 text-indigo-400" />
                {title}
            </h3>

            <div className="grid md:grid-cols-2 gap-5">
                {/* 🧠 Code Editor */}
                <div className="flex flex-col bg-gray-800 rounded-lg overflow-hidden">
                    <div className="flex justify-between items-center px-3 py-2 bg-gray-700 text-sm">
                        <span>HTML Editor</span>
                        <div className="flex gap-2">
                            <button
                                onClick={handleCopy}
                                className="flex items-center gap-1 px-2 py-1 rounded-md bg-gray-600 hover:bg-gray-500 transition"
                            >
                                <Copy className="w-4 h-4" />
                                {copied ? "Copied!" : "Copy"}
                            </button>
                            <button
                                onClick={handleRun}
                                className="flex items-center gap-1 px-2 py-1 rounded-md bg-green-600 hover:bg-green-700 transition"
                            >
                                <Play className="w-4 h-4" />
                                Run
                            </button>
                        </div>
                    </div>

                    <textarea
                        ref={textareaRef}
                        className="w-full mb-8 p-3 font-mono text-sm bg-gray-900 text-gray-100 outline-none resize-none"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        spellCheck={false}
                    />
                </div>

                {/* 🧱 Output */}
                <div className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-inner">
                    <iframe
                        ref={iframeRef}
                        srcDoc={iframeSrc}
                        className="w-full"
                        style={{
                            height: "auto",
                            minHeight: "100px",
                        }}
                        title="HTML Output"
                        onLoad={(e) => {
                            // Tự điều chỉnh chiều cao iframe dựa vào nội dung
                            const iframe = e.currentTarget;
                            try {
                                const iframeDoc = iframe.contentDocument;
                                if (iframeDoc) {
                                    const height = iframeDoc.documentElement.scrollHeight;
                                    iframe.style.height = `${Math.min(height + 20, 600)}px`; // giới hạn max-height 600px
                                }
                            } catch {
                                // ignore cross-origin
                            }
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
