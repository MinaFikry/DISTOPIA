import type { Metadata } from "next";
import { SquadaOneFont, JungeFont } from "../../utils/fonts";
import "./globals.css";


export const metadata: Metadata = {
  title: "DISTOPIA",
  description: "DISTOPIA GAMING ONLINE SHOP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${SquadaOneFont} ${JungeFont} antialiased`}>{children}</body>
    </html>
  );
}
