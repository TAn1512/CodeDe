// middleware.ts
import createMiddleware from "next-intl/middleware";
import { locales, defaultLocale } from "./lib/i18n";

export default createMiddleware({
    locales,
    defaultLocale,
    localePrefix: "as-needed", // 👉 tránh /en/ ở URL nếu là default
});

export const config = {
    // 👉 tránh match file tĩnh, API routes, favicon, assets...
    matcher: ["/((?!api|_next|.*\\..*).*)"],
};
