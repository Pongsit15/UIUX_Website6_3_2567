import type { Metadata } from "next";
import "./globals.css";
import Navber from "@/components/Navber";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title: "สร้างวันที่6/3/67",
  description: "เว็บเเนำตัวอย่างสินค้า",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <Navber/>
      <main className="relative overflow-hidden">
        {children}
      </main>
      <Footer/>
      </body>
    </html>
  );
}
