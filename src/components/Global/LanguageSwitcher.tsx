"use client";

import { usePathname, useRouter } from "next/navigation";
import { locales } from "@/lib/i18n";

export default function LanguageSwitcher() {
    const router = useRouter();
    const pathname = usePathname();

    const currentLocale = pathname?.split("/")[1] || "en";

    const changeLocale = (locale: string) => {
        const segments = pathname.split("/");

        if (locales.includes(segments[1] as any)) {
            segments[1] = locale;
        } else {
            segments.splice(1, 0, locale);
        }

        const newPath = segments.join("/") || "/";
        router.push(newPath, { scroll: false });
    };

    return (
        <div className="relative inline-block">
            {/* ✅ Label ẩn cho accessibility */}
            <label htmlFor="language-switcher" className="sr-only">
                Select language
            </label>

            <select
                id="language-switcher"
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
        </div>
    );
}
