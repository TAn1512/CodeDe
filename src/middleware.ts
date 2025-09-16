// middleware.ts
import createMiddleware from "next-intl/middleware";
import { locales, defaultLocale } from "./lib/i18n";
export default createMiddleware({
    locales,
    defaultLocale
});

export const config = {
    // áp dụng middleware cho tất cả route, trừ static files & API
    matcher: ["/((?!_next|.*\\..*|api).*)"]
};
