import type { Metadata } from "next";
import { Geist, Geist_Mono, Monoton, Zen_Antique_Soft } from "next/font/google";
import "./globals.css";
import SettingProvider from "./(states)/SettingState";
import { GoogleAnalytics } from "@next/third-parties/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const monoton = Monoton({
  weight: "400", 
  variable: "--font-monoton",
  subsets: ["latin"],
});

const zenAntiqueSoft = Zen_Antique_Soft({
  weight: "400", 
  variable: "--font-zen-antique-soft",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tradi-Fee - stock trading fee calculator",
  description: "台灣股市交易費用計算機",
  // description: "Taiwan stock trading fee calculator",
  verification: {
    google: "LsS-FX9EimuTmHnP6RB_tJM1N3HoiMVQ-dL7Vhr_5ZE"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <body className={`${geistSans.variable} ${geistMono.variable} 
      ${monoton.variable} ${zenAntiqueSoft.variable} antialiased`}>
        <SettingProvider>
          <div>
            {children}
          </div>
        </SettingProvider>
      </body>
      <GoogleAnalytics gaId="G-SMPS08R910"></GoogleAnalytics>
    </html>
  );
}
