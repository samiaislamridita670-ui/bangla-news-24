
import type { Metadata } from "next";
import { Noto_Serif_Bengali } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Marquee from "./components/marquee";

const NotoSerifBengali = Noto_Serif_Bengali({
  subsets: ["latin", "bengali"],
});

export const metadata: Metadata = {
  title: "Bangla News 24",
  description: "বাংলা নিউজ ২৪ - সর্বশেষ বাংলা সংবাদ",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="bn"
      data-theme="light"
      className={`${NotoSerifBengali.className} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Header />
        <Marquee />

        <main className="mx-auto w-full max-w-7xl flex-1 px-4 sm:px-6 lg:px-8">
          {children}
        </main>

        <footer className="mt-auto text-center">
          Footer
        </footer>
      </body>
    </html>
  );
}
