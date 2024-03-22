import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactQueryClientProvider } from "@/components/ReactQueryClientProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Are We Jobbing?",
  description: "Jon Openshaw's adventures in job hunting.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryClientProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ReactQueryClientProvider>
  );
}
