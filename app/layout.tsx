import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  title: "グループホーム朝日 | 障害者施設グループホーム",
  description: "グループホーム朝日は、石川県七尾市にある障害のある方の自立した生活をサポートするグループホームです。24時間体制のサポートと個別支援計画により、一人ひとりに合わせた生活を提供します。",
  keywords: "グループホーム,障害者施設,共同生活援助,七尾市,石川県",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={notoSansJP.variable}>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
