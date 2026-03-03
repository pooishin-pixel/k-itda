import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Serif_KR } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MobileNav from "@/components/layout/MobileNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSerif = Noto_Serif_KR({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "KITDA (킷다) | 무형문화재 큐레이션 및 글로벌 체험 플랫폼",
  description: "박물관 유리창 너머의 전통을 일상의 경험으로. 무형문화재 장인의 숨결을 직접 느끼고 체험하는 프리미엄 문화 서비스.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const bodyClassName = `${geistSans.variable} ${geistMono.variable} ${notoSerif.variable} antialiased`;

  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={bodyClassName} suppressHydrationWarning>
        <Navbar />
        {children}
        <MobileNav />
        <Footer />
      </body>
    </html>
  );
}
