import { redirect } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
    robots: {
        index: false, // 👈 Không cho index
        follow: true, // vẫn cho theo link đến các trang con
    },
};
export default function SortsIndexPage() {
    redirect("/sorts/bubble");
}
