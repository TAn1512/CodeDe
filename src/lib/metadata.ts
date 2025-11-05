import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";

interface MetaOptions {
    locale: string;
    namespace: string;
    slug: string; // ví dụ: "learn/html/form-attributes"
}

export async function getPageMetadata({
    locale,
    namespace,
    slug,
}: MetaOptions): Promise<Metadata> {
    const t = await getTranslations({ locale, namespace });

    const title = t("title");
    const description = t.raw("description");
    const baseUrl = "https://codede.vercel.app";

    return {
        title: `${title} | CodeDe`,
        description,
        alternates: {
            canonical: `${baseUrl}/${locale}/${slug}`,
            languages: {
                en: `${baseUrl}/learn/html/${slug.split("/").slice(2).join("/")}`,
                vi: `${baseUrl}/vi/learn/html/${slug.split("/").slice(2).join("/")}`,
            },
        },
        openGraph: {
            title: `${title} | CodeDe`,
            description,
            url: `${baseUrl}/${locale}/${slug}`,
            siteName: "CodeDe",
            locale,
            type: "article",
        },
        twitter: {
            card: "summary_large_image",
            title: `${title} | CodeDe`,
            description,
        },
    };
}
