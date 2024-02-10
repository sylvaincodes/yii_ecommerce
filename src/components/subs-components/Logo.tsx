import React from "react";
import Link from "next/link";

interface LogoProps {
  text: string;
}

const Logo = ({ text }: LogoProps) => {
  return (
    <div>
      <Link
        href="/"
        className=" text-primaty-800 md:text-black
        font-body text-4xl 
          font-extrabold tracking-wider dark:text-white
          capitalize"
      >
        {text}
      </Link>
    </div>
  );
};

export default Logo;
