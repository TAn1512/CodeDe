// src/app/[locale]/layout.tsx
import { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import Navbar from "@/components/Global/Navbar";
import Footer from "@/components/Global/Footer";
import { ReminderProvider } from "@/context/ReminderContext";
import { SortProvider } from "@/context/SortContext";
import { Inter } from "next/font/google";
import fs from "fs";
import path from "path";

const inter = Inter({
    subsets: ["latin", "vietnamese"],
    weight: ["400", "700"],
    variable: "--font-inter",
});

type Props = {
    children: ReactNode;
    params: Promise<{ locale: string }>;
};

// ✅ Hàm tự động đọc toàn bộ JSON trong thư mục messages/[locale]
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
export function generateStaticParams() {
    return [{ locale: "en" }, { locale: "vi" }];
}

export default async function LocaleLayout({ children, params }: Props) {
    const { locale } = await params;

    let messages = {};
    try {
        messages = await loadMessages(locale);
    } catch (error) {
        console.error("❌ Lỗi load messages:", error);
    }

    return (
        <html lang={locale} className={inter.variable}>
            <body className="font-sans min-h-screen flex flex-col">
                <ReminderProvider>
                    <SortProvider>
                        {/* ✅ Bây giờ messages có { home, navbar, footer, algorithms } */}
                        <NextIntlClientProvider locale={locale} messages={messages}>
                            <Navbar />
                            <main className="flex-1 pt-15">{children}</main>
                            <Footer />
                        </NextIntlClientProvider>
                    </SortProvider>
                </ReminderProvider>
            </body>
        </html>
    );
}
