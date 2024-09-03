"use client";

// Next
import { Nunito } from "next/font/google";
// Components
import { NavBar } from "@/components";
// Styles
import "@/styles/global.css";

const nunito = Nunito({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`w-full flex flex-col ${nunito.className} antialiased`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
