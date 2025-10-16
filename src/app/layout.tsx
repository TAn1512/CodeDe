import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CodeDe",
  description: "Visual tool for data structures and algorithms learning.",
};



export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
