import * as React from "react";
import Header from "./Header";
import Footer from "./Footer";
import RootLayout from "@/app/layout";

type PropsWithChildren = {
  children: React.ReactNode;
};

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <RootLayout>
      <div className="flex flex-col">
        {/* Header here */}
        <Header />

        {/* main here */}
        <main>{children}</main>

        {/* footer here */}
        <Footer />
      </div>
    </RootLayout>
  );
};

export default Layout;
