"use client";
import React, { useState } from "react";
import Dropmenu from "./Dropmenu";
import Link from "next/link";
import { CiMenuBurger } from "react-icons/ci";
import MobileMenu from "./MobileMenu";
import Logo from "./subs-components/Logo";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function Nav() {
  const pathname = usePathname();
  const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(false);

  const leftMenu = [
    {
      label: "Acceuil",
      href: "/",
      content: "aller à la  page d'acceuil",
      submenu: [],
    },
    {
      label: "Products",
      href: "/products",
      content: "consulter le catalogue",
      icon: "CiCircleList ",
      submenu: [
        {
          label: "t-shirt",
          href: "/products/t-shirt",
          content: "consulter le catalogue",
          icon: "CiCircleList ",
        },
        {
          label: "chapeau",
          href: "/products/chapeau",
          content: "consulter le catalogue",
          icon: "CiCircleList ",
        },
      ],
    },
  ];

  const rigthMenu = [
    {
      label: "S'inscrire",
      href: "/signup",
      content: "créer un compte",
      icon: "CiImport   ",
      submenu: [],
    },
    {
      label: "Se connecter",
      href: "/login",
      content: "s'authentifier sur le iste",
      icon: "CiLogin  ",
      submenu: [],
    },
  ];

  const mobilemenu = [...leftMenu, ...rigthMenu];

  return (
    <div
      className="flex flex-row gap-10 py-4 px-4 justify-center 
      items-center
     dark:bg-gray-900"
    >
      {leftMenu.map((item, idx) => {
        return (
          <div key={idx} className="hidden md:block">
            {item.submenu && item.submenu.length > 0 ? (
              <Dropmenu menu={item.label} submenu={item.submenu} key={idx} />
            ) : (
              <Link
                href={item.href}
                key={idx}
                className={clsx(
                  "text-xl font-normal text-gray-600 hover:text-primary-500 dark:text-white dark:hover:text-primary-500",
                  {
                    "border-b-2 border-w border-primary-900":
                      pathname === item.href,
                  }
                )}
              >
                {item.label}
              </Link>
            )}
          </div>
        );
      })}

      {/* logo */}
      <Logo text="Yii" />

      {rigthMenu.map((item, idx) => {
        return (
          <div key={idx} className="hidden md:block">
            {item.submenu && item.submenu.length > 0 ? (
              <Dropmenu menu={item.label} submenu={item.submenu} key={idx} />
            ) : (
              <Link
                href={item.href}
                key={idx}
                className="text-xl font-normal text-gray-600 hover:text-primary-600 dark:text-white dark:hover:text-primary-500"
              >
                {item.label}
              </Link>
            )}
          </div>
        );
      })}

      {/* Mobile menu  */}
      <button
        role="button"
        type="button"
        className="inline-fle x items-center dark:text-black
      p-4 bg-white md:hidden ms-auto"
        onClick={() => setOpenMobileMenu(!openMobileMenu)}
      >
        <CiMenuBurger />
      </button>
      <MobileMenu
        menu={mobilemenu}
        openMobileMenu={openMobileMenu}
        setOpenMobileMenu={setOpenMobileMenu}
      />
    </div>
  );
}
