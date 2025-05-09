import type { Metadata } from "next";
import { Inter, Cairo} from "next/font/google";
import "./globals.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const inter = Inter({subsets: ["latin"]});
const cairo = Cairo({subsets: ["arabic"]});

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
      <body        className={`${inter.className} ${cairo.className} antialiased`}      >
<Header />
        {children}
<Footer />
      </body>
    </html>
  );
}
