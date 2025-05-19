import { cn } from "@/lib/utils";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cn("relative h-full font-sans antialiased", inter.className)}
      >
        <main className="relativ flex flex-col min-h-screen">
          <div className="flex-grow flex-1">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
