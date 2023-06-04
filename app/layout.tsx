import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import Banner from "@/components/ui/banner";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shubham Chopade",
  description:
    "Shubham is a software engineer based in New York. He a software engineer based in New York experienced in building web applications, mobile applications and backend services. He completed Masters degree in Computer Science from Syracuse University.",
  images: [{ url: "/banner.jpeg", width: 800, height: 600 }],
};

const isDevelopment = process.env.NODE_ENV === "development";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <meta property="og:image" content="/banner.jpeg" />
      <meta property="og:image:type" content="jpeg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="400" />
      <body
        className={`antialiased min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 ${inter.className}`}
      >
        {!isDevelopment && (
          <script
            async
            src={process.env.NEXT_PUBLIC_UMAMI_URL}
            data-website-id={process.env.NEXT_PUBLIC_UMAMI_ID}
          ></script>
        )}
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Banner />
          <div className="">
            <Header />
            <main>{children}</main>
            <Toaster />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
