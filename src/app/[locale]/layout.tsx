// src/app/[locale]/layout.tsx
import { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import Navbar from "@/components/Global/Navbar";
import Footer from "@/components/Global/Footer";
import { ReminderProvider } from "@/context/ReminderContext";
import { Inter } from "next/font/google";
import { SortProvider } from "@/context/SortContext";

const inter = Inter({ subsets: ["latin", "vietnamese"], weight: ["400", "700"], variable: "--font-inter" });

type Props = {
    children: ReactNode;
    params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
    const { locale } = await params; // 👈 phải await khi dùng async

    let messages;
    try {
        messages = (await import(`../../messages/${locale}.json`)).default;
    } catch (error) {
        console.error("Không tìm thấy file messages:", error);
        messages = {};
    }

    return (
        <html lang={locale} className={inter.variable}>
            <body className="font-sans">
                <ReminderProvider>
                    <SortProvider>
                        <NextIntlClientProvider locale={locale} messages={messages}>
                            <Navbar />
                            <main className="flex-1">{children}</main>
                            <Footer />
                        </NextIntlClientProvider>
                    </SortProvider>
                </ReminderProvider>
            </body>
        </html>
    );
}
