import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@/components/analytics";
import { ModeToggle } from "@/components/mode-toggle";
import Header from "@/components/header";
import Breakpoint from "@/components/ui/breakpoint";
import Banner from "@/components/ui/banner";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shubham Chopade",
  description:
    "Shubham is a software engineer based in New York. He a software engineer based in New York experienced in building web applications, mobile applications and backend services. He completed Masters degree in Computer Science from Syracuse University.",
  images: [
    { url: "https://shubhamchopade.com/banner.jpeg", width: 800, height: 600 },
  ],
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`antialiased min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 ${inter.className}`}
      >
        <script
          async
          src="https://analytics.umami.is/script.js"
          data-website-id={process.env.NEXT_PUBLIC_UMAMI_ID}
        ></script>
        {/* <script
          async
          src="https://stats.minurl.app/shubham"
          data-website-id="feedd63e-21bd-45fb-a133-d751c919ed1b"
        ></script> */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Banner />
          <div className="">
            <Header />
            <main>{children}</main>
            <Toaster />
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
