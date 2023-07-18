import "./globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { FC, PropsWithChildren } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Henry Owens",
  description: "Public website for Henry Owens",
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => (
  <html lang="en">
    <body className={inter.className}>{children}</body>
  </html>
);

export default RootLayout;
