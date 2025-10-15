import { getRequestConfig } from "next-intl/server";
import { locales, defaultLocale } from "./src/lib/i18n";
import fs from "fs";
import path from "path";

async function loadMessages(locale: string) {
    const dir = path.join(process.cwd(), "src", "messages", locale);
    const messages: Record<string, any> = {};

    if (!fs.existsSync(dir)) return messages;

    const files = fs.readdirSync(dir);
    for (const file of files) {
        if (file.endsWith(".json")) {
            const name = file.replace(".json", "");
            const content = JSON.parse(fs.readFileSync(path.join(dir, file), "utf8"));
            messages[name] = content;
        }
    }

    return messages;
}

export default getRequestConfig(async ({ locale }) => {
    const currentLocale = locale ?? defaultLocale;

    return {
        locale: currentLocale,
        messages: await loadMessages(currentLocale),
    };
});
