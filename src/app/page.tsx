import { Metadata } from "next";

export const metadata: Metadata = {
  robots: {
    index: false, // 👈 Không cho index
    follow: true, // vẫn cho theo link đến các trang con
  },
};

export default function HomePage() {
  return (
    <main className="p-6 text-center">
    </main>
  );
}
