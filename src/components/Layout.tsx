import * as React from "react";
import Nav from "./Nav";
import Footer from "./Footer";

type PropsWithChildren={
  children: React.ReactNode
}

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex flex-col">
      {/* nav here */}
      <Nav />

      {/* main here */}
      <main>{children}</main>

      {/* footer here */}
      <Footer />
    </div>
  );
};

export default Layout;
