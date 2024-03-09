import "@/styles/globals.css";

import { Inter } from "next/font/google";

import { TRPCReactProvider } from "@/trpc/react";
import { Header } from "@/app/_components/header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Mellow",
  description: "DALL-E Image and prompts Bulk Download",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <TRPCReactProvider>
          <Header />
          {children}
        </TRPCReactProvider>
      </body>
    </html>
  );
}
