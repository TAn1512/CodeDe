import { getRequestConfig } from "next-intl/server";
import en from "./src/messages/en";
import vi from "./src/messages/vi";
import { locales, defaultLocale } from "./src/lib/i18n";

export default getRequestConfig(async ({ locale }) => {
    const messages = locale === "vi" ? vi : en;

    return {
        locale: locale ?? defaultLocale,
        messages,
    };
});
