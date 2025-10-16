"use client";

import { usePathname, useRouter } from "next/navigation";
import { locales } from "@/lib/i18n";

export default function LanguageSwitcher() {
    const router = useRouter();
    const pathname = usePathname();

    // Xác định locale hiện tại (từ segment đầu tiên)
    const currentLocale = pathname?.split("/")[1] || "en";

    const changeLocale = (locale: string) => {
        const segments = pathname.split("/");


        // Nếu URL hiện có locale ở đầu (ví dụ /vi/html/links)
        if (locales.includes(segments[1] as any)) {
            segments[1] = locale; // thay locale cũ bằng locale mới
        } else {
            segments.splice(1, 0, locale); // thêm locale mới nếu chưa có
        }

        // Gộp lại URL
        const newPath = segments.join("/") || "/";
        router.push(newPath);
    };

    return (
        <select
            value={currentLocale}
            onChange={(e) => changeLocale(e.target.value)}
            className="bg-gray-700 text-white rounded px-2 py-1 cursor-pointer"
        >
            {locales.map((loc) => (
                <option key={loc} value={loc}>
                    {loc.toUpperCase()}
                </option>
            ))}
        </select>
    );
}
