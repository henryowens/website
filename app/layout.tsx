import "./globals.scss";
import type { Metadata } from "next";
import { Josefin_Sans, Space_Mono } from "next/font/google";
import Link from "next/link";
import { FC, PropsWithChildren } from "react";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  variable: "--heading-font",
});
const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--body-font",
});

export const metadata: Metadata = {
  title: "Henry Owens",
  description: "Public website for Henry Owens",
};

const navLinks = [
  {
    href: "/posts",
    label: "posts",
  },
  {
    href: "/projects",
    label: "projects",
  },
  {
    href: "/packages",
    label: "packages",
  },
];

const RootLayout: FC<PropsWithChildren> = ({ children }) => (
  <html lang="en" className={`${josefinSans.variable} ${spaceMono.variable}`}>
    <body className="min-h-screen flex flex-col">
      {/* <nav className="pb-4 flex justify-between items-center">
        <Link href="/" className="font-display">
          HENRY OWENS
        </Link>
        <div className="flex gap-3">
          {navLinks.map(({ href, label }, i) => (
            <Link
              key={i}
              href={href}
              className="text-charcoal-200 text-xs hover:underline"
            >
              {label}
            </Link>
          ))}
        </div>
      </nav> */}
      {children}
    </body>
  </html>
);

export default RootLayout;
