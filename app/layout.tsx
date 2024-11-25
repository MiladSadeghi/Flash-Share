import type { Metadata } from "next";
import {ReactNode} from "react";
import {Figtree} from "next/font/google"
import "./globals.css";

const figtree = Figtree({
    display: 'swap',
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700', '800', '900'],
    variable: '--font-figtree',
});

export const metadata: Metadata = {
  title: "Flash Share",
  description: "FlashShare lets you share text, links, or notes instantly with a unique URL. Set a duration for the link, share it, and let others access it effortlessly. Perfect for quick, secure, and temporary sharing. No clutter, just simplicity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
    <body
        className={`${figtree.variable}`}
    >
    <div className={"h-dvh bg-black w-full "}>
        <div className={"container mx-auto h-full"}>
            {children}
        </div>
    </div>
    </body>
    </html>
);
}
