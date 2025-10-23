import Sidebar from "@/components/Learn/HTML/Tags/Sidebar";
import { htmlLessons } from "@/lessons/htmlLessons";

export default function HTMLTagsLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col md:flex-row gap-6 p-6 bg-gray-950 min-h-screen">
            {/* Sidebar cố định bên trái */}
            <Sidebar lessons={htmlLessons} basePath="/learn/html" />

            {/* Nội dung thay đổi */}
            <main className="flex-1 bg-gray-900 text-gray-100 rounded-xl p-6 shadow-lg">
                {children}
            </main>
        </div>
    );
}
