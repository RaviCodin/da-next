import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/app/Header";
import Footer from "./Footer";
import { Providers } from "./redux/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Digital Technology Solutions | IT Consulting Services | Creative Solutions | Design Avenue",
  description: "Design Avenue , Web development",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Header />

      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>

      </body>
      <Footer />

    </html>
  );
}
