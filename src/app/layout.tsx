import type { Metadata } from "next";
import { Inter, Great_Vibes } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomFooter from "@/components/BottomFooter";

// Initialize fonts
const inter = Inter({ subsets: ["latin"] });
const greatVibes = Great_Vibes({
  subsets: ["latin"], // Subsets of the font you need
  weight: "400",      // Great Vibes comes in only one weight
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Set Inter as the default font */}
      <body className={inter.className}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        <BottomFooter />
      </body>
    </html>
  );
}
