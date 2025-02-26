import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ClovaLink - Secure File Sharing for Businesses",
  description: "An open-source drive alternative for secure file sharing and management with familiar file organization features.",
  keywords: ["secure file sharing", "business file management", "open source drive", "file organization"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} antialiased bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100`}
      >
        {children}
      </body>
    </html>
  );
}
