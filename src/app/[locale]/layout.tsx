import { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import Navbar from "@/components/Global/Navbar";
import Footer from "@/components/Global/Footer";
import { ReminderProvider } from "@/context/ReminderContext";
import { SortProvider } from "@/context/SortContext";
import { Inter } from "next/font/google";
import { defaultLocale, locales, Locale } from "@/lib/i18n";
import enMessages from "@/messages/en";
import viMessages from "@/messages/vi";

const inter = Inter({
    subsets: ["latin", "vietnamese"],
    weight: ["400", "700"],
    variable: "--font-inter",
});

type Props = {
    children: ReactNode;
    params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

const allMessages = {
    en: enMessages,
    vi: viMessages,
};

export default async function LocaleLayout({ children, params }: Props) {
    const { locale } = await params;
    const currentLocale = (locale === "en" || locale === "vi" ? locale : defaultLocale) as Locale;

    const messages = allMessages[currentLocale];

    return (
        <html lang={currentLocale} className={inter.variable}>
            <body className="font-sans min-h-screen flex flex-col">
                <ReminderProvider>
                    <SortProvider>
                        <NextIntlClientProvider locale={currentLocale} messages={messages}>
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
