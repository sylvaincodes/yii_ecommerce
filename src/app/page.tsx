import { NextPage } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Providers } from "./providers";
import { Josefin_Sans } from "next/font/google";
import FeaturedItems from "@/components/FeaturedItems";
import Newsletters from "@/components/Newsletters";
import type { Metadata } from "next";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-josefin-sans",
});

export const metadata: Metadata = {
  title: "Page d'acceuil - Yii",
  description: "Next js 14 - Réact - Ecommerce",
  authors: [{ name: "sylvaincodes", url: "https://github.com/sylvaincodes" }],
  keywords: "nextjs,react,ecommerce, react, musik",

  icons: [
    { rel: "icon", url: "https://yii.vercel.com/icon.svg" },
    {
      rel: "apple-touch-icon",
      url: "https://yii.vercel.com/icon.svg",
    },
  ],
  manifest: "https://yii.vercel.com/manifest.json",
  category: "Next Js 14 Ecommerce",
};

interface Props {}

const Page: NextPage<Props> = () => {
  return (
    <html lang="fr" className={`${josefinSans.variable}`}>
      <body>
        <Providers>
          <div className="flex flex-col h-screen">
            <div
              className="min-h-full bg-cover bg-top
                  bg-[url('/images/bg/bg.jpg')]"
            >
              <Header />
              <Hero />
            </div>
            <main>
              <FeaturedItems />
              <Newsletters />
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
};

export default Page;
