import { getRequestConfig } from "next-intl/server";
import { locales, defaultLocale } from "./src/lib/i18n";

export default getRequestConfig(async ({ locale }) => {
    // Nếu locale không tồn tại thì fallback về defaultLocale
    const currentLocale = locale ?? defaultLocale;

    return {
        locale: currentLocale,
        messages: (await import(`./src/messages/${currentLocale}.json`)).default,
    };
});
