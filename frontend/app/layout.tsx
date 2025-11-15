import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { headers } from "next/headers"; // added
import ContextProvider from "../context";
import Header from "../components/Header";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PiggySavfe",
  description: "Decentralized savings platform on Celo",
};

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {

  const headersObj = await headers();
  const cookies = headersObj.get('cookie')

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ContextProvider cookies={cookies}>
          <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
            <Header />

            {/* Main Content */}
            <main className="flex-1">
              {children}
            </main>

            <Footer />
          </div>
        </ContextProvider>
      </body>
    </html>
  );
}
