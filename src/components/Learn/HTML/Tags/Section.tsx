import SafeHTML from "@/components/Global/SafeHTML";
import HTMLPlaygroundClient from "./HTMLPlaygroundClient";

export default function Section({
    title,
    desc,
    example,
}: {
    title: string;
    desc: string;
    example?: string;
}) {
    return (
        <section className="mt-10">
            <h2 className="text-2xl font-semibold mb-3">{title}</h2>
            <div className="text-gray-300 mb-4">
                <SafeHTML html={desc} />
            </div>
            {example && <HTMLPlaygroundClient defaultCode={example} />}
        </section>
    );
}
