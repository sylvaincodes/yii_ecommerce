import { NextPage } from "next";
import Nav from "@/components/Header";
import Layout from "@/components/Layout";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <html lang="fr">
      <body className="font-body" data-mode="light">
        <div className="flex flex-col h-screen">
          <div
            className="min-h-full 
            bg-cover
            bg-center 
            bg-no-repeat 
            bg-[url('https://unsplash.com/fr/photos/non-appaire-rouge-air-jordan-12-_fOL6ebfECQ')] bg-gray-700 
            bg-blend-multiply"
          >
            <Header />
            <Hero />
          </div>
        </div>
      </body>
    </html>
  );
};

export default Page;
