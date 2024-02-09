"use client";
import React from "react";
import { IoIosClose } from "react-icons/io";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

import Link from "next/link";

interface MobileMenuProps{
  menu: string;
  openMobileMenu: boolean;
  setOpenMobileMenu: any
}

const MobileMenu = ({ menu, openMobileMenu, setOpenMobileMenu }: MobileMenuProps) => {
  return (
    <div
      className={`bg-white fixed right-0 top-0 w-80 p-4 h-screen 
       transition ease-out duration-200 dark:text-black
  min-w-80 shadow- divide-y divide-dashed z-[9] ${
    openMobileMenu ? "translate-x-0" : "translate-x-full"
  }`}
    >
      <button className="flex flex-row justify-end aligns-items py-4 me-auto">
        <IoIosClose
          className="text-3xl"
          onClick={() => setOpenMobileMenu(!openMobileMenu)}
        />
      </button>
      <div className="pt-3">
        {menu.map((item, idx) => {
          return (
            <div
              key={idx}
              className="group py-4 flex items-center gap-x-10 bg-white
          hover:bg-gray-50 rounded-lg hover:cursor-pointer 
          px-4 transition-all"
            >
              <div
                className="rounded-lg bg-gray-50
           group-hover:bg-white p-3"
              >
                <MdOutlineKeyboardArrowRight className="group-hover:text-primary-600 text-lg" />
              </div>
              <div>
                <Link href="/" className="font-normal ">
                  {item.label}
                </Link>
                <p className="text-sm font-light">{item.content}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MobileMenu;
