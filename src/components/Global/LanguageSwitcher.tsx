"use client";

import { usePathname, useRouter } from "next/navigation";
import { locales } from "@/lib/i18n";

export default function LanguageSwitcher() {
    const router = useRouter();
    const pathname = usePathname();

    // Lấy locale hiện tại từ URL (/en/... hoặc /vi/...)
    const currentLocale = pathname?.split("/")[1] || "en";

    const changeLocale = (locale: string) => {
        const newPath = "/" + locale + pathname.substring(3);
        router.push(newPath);
    };

    return (
        <select
            value={currentLocale} // ✅ giữ option hiện tại
            onChange={(e) => changeLocale(e.target.value)}
            className="bg-gray-700 text-white rounded px-2 py-1"
        >
            {locales.map((loc) => (
                <option key={loc} value={loc}>
                    {loc.toUpperCase()}
                </option>
            ))}
        </select>
    );
}
