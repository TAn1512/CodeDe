import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";

interface SortMetaOptions {
    locale: string;
    algorithm: string; // ví dụ: "bubble" hoặc "selection"
}

/**
 * 🧩 Generate metadata cho trang Sorting Algorithm
 * Tự động lấy title & description từ file dịch (ví dụ: algorithms.algorithmsPage.BubbleSort.title)
 */
export async function getSortMetadata({
    locale,
    algorithm,
}: SortMetaOptions): Promise<Metadata> {
    const t = await getTranslations({
        locale,
        namespace: `algorithms.algorithmsPage.${algorithm}`,
    });

    const title = t("title");
    const description = t.raw("description");
    const baseUrl = "https://codede.vercel.app";

    const canonicalUrl = `${baseUrl}/${locale}/sorts/${algorithm}`;

    return {
        title: `${title} | CodeDe Sorting Visualizer`,
        description,
        alternates: {
            canonical: canonicalUrl,
            languages: {
                en: `${baseUrl}/en/sorts/${algorithm}`,
                vi: `${baseUrl}/vi/sorts/${algorithm}`,
            },
        },
        openGraph: {
            title: `${title} | CodeDe Sorting Visualizer`,
            description,
            url: canonicalUrl,
            siteName: "CodeDe",
            locale,
            type: "article",
        },
        twitter: {
            card: "summary_large_image",
            title: `${title} | CodeDe Sorting Visualizer`,
            description,
        },
    };
}
