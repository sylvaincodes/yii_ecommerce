"use client";
import React, { useState } from "react";
import Dropmenu from "./Dropmenu";
import Link from "next/link";
import { CiMenuBurger } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";

export default function Nav() {
  const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(false);

  const leftMenu = [
    {
      label: "Acceuil",
      href: "/",
      submenu: [],
    },
    {
      label: "Products",
      href: "/products",
      submenu: [
        {
          label: "t-shirt",
          href: "/products/t-shirt",
        },
        {
          label: "chapeau",
          href: "/products/chapeau",
        },
      ],
    },
  ];

  const rigthMenu = [
    {
      label: "S'inscrire",
      href: "/signup",
    },
    {
      label: "Se connecter",
      href: "/login",
    },
  ];
  return (
    <div
      className="flex flex-row gap-10 py-4 px-4 justify-center items-center
     dark:bg-gray-900 dark:border-gray-700"
    >
      <div
        className={`bg-white absolute min-w-100 p-4 h-screen right-0 ${
          openMobileMenu ? "block" : ""
        }`}
      >
        <div className="flex flex-row justify-end aligns-items">
          <IoCloseOutline />
        </div>
        <ul>
          <li>
            <Link href="/">menu here</Link>
          </li>
        </ul>
      </div>

      {leftMenu.map((item, idx) => {
        return (
          <div key={idx} className="hidden md:block">
            {item.submenu && item.submenu.length > 0 ? (
              <Dropmenu menu={item.label} submenu={item.submenu} key={idx} />
            ) : (
              <Link
                href={item.href}
                key={idx}
                className="text-xl font-normal text-gray-600 hover:text-red-600 dark:text-white"
              >
                {item.label}
              </Link>
            )}
          </div>
        );
      })}

      {/* logo */}
      <div>
        <Link
          href="/"
          className="text-red-500 font-body text-3xl 
          font-extrabold tracking-wider dark:text-red-500"
        >
          shoesy
        </Link>
      </div>

      {rigthMenu.map((item, idx) => {
        return (
          <div key={idx} className="hidden md:block">
            {item.submenu && item.submenu.length > 0 ? (
              <Dropmenu menu={item.label} submenu={item.submenu} key={idx} />
            ) : (
              <Link
                href={item.href}
                key={idx}
                className="text-xl font-normal text-gray-600 hover:text-red-600 dark:text-white"
              >
                {item.label}
              </Link>
            )}
          </div>
        );
      })}

      {/* Mobile menu  */}
      <button
        type="button"
        className="inline-fle x items-center 
      p-4 bg-white md:hidden ms-auto"
        onClick={() => setOpenMobileMenu(!openMobileMenu)}
      >
        <CiMenuBurger />
      </button>
    </div>
  );
}
