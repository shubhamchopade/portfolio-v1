import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import Banner from "@/components/ui/banner";
import { Toaster } from "@/components/ui/toaster";
import { info } from "@/constants/site";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: info.name,
  description: info.bio,
  keywords: info.siteKeywords,
  authors: [
    {
      name: info.name,
      url: info.twitter,
    },
  ],
  openGraph: {
    type: "website",
    url: info.metadata.og.url,
    title: info.metadata.og.title,
    description: info.bio,
    images: [
      {
        url: info.metadata.og.image,
        width: 526,
        height: 275,
        alt: info.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: info.metadata.twitter.url,
    title: info.metadata.twitter.title,
    description: info.bio,
    images: [
      {
        url: info.metadata.twitter.image,
        width: 526,
        height: 275,
        alt: info.name,
      },
      {
        url: info.metadata.twitter.card,
        alt: info.name,
      },
    ],
    creator: info.metadata.twitter.creator,
  },
};

const isDevelopment = process.env.NODE_ENV === "development";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
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
