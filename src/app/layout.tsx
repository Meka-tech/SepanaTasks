import { store } from "@/reduxApp/store";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "../reduxApp/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sepana fronted task",
  description: "Front end task"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Providers>
        <body className={inter.className}>{children}</body>
      </Providers>
    </html>
  );
}
