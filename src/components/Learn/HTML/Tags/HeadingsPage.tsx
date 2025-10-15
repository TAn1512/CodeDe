"use client";

import { useTranslations } from "next-intl";
import HTMLPlayground from "../HTMLPlayground";

export default function HeadingsPage() {
    const t = useTranslations("headings");

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">{t("title")}</h1>
            <p className="text-gray-300 mb-6">{t("description")}</p>

            <ul className="list-disc pl-5 text-gray-400 mb-6 space-y-2">
                <li>{t("h1toh6")}</li>
                <li>{t("importance")}</li>
                <li>{t("stylingNote")}</li>
            </ul>

            <HTMLPlayground
                defaultCode={`<!DOCTYPE html>
<html>
  <body>
    <h1>This is a Heading 1</h1>
    <h2>This is a Heading 2</h2>
    <h3>This is a Heading 3</h3>
  </body>
</html>`}
            />
        </div>
    );
}
