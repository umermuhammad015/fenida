import "./globals.css";
import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import Header from "./header";
// import Footer from "./footer";
import localFont from 'next/font/local'
import { ThemeProvider } from "./ThemeProvider";
import { Toaster } from "@/components/ui/sonner";

const Switzer_Font = localFont({ src: '../fonts/Switzer_Complete/Fonts/WEB/fonts/Switzer-Regular.woff2' })
// const Switzer_Font = localFont({ src: '../fonts' })

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fenida",
  description: "Fenida AI",
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <body className={inter.className}> */}
      <body className={`bg-gray-100 dark:bg-muted ` + Switzer_Font.className}>
        {/* <NextProgressClient /> */}
        <ThemeProvider attribute="class">
          <Header />

          <main className="container mx-auto">
            <NuqsAdapter>
              {children}
            </NuqsAdapter>
          </main>

          <Toaster position="bottom-right" />
        </ThemeProvider>



        {/* <Footer /> */}
      </body>
    </html>
  );
}
