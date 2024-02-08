"use client"; // This is a client component 👈🏽
import { useState } from "react";
import Link from "next/link";
import { MdKeyboardArrowDown } from "react-icons/md";

export interface IDropmenuProps {
  menu: string;
  submenu: Array<{
    label: string;
    href: string;
  }>;
}

export default function Dropmenu({ menu, submenu }: IDropmenuProps) {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <div className="relative ">
      <button
        name="button"
        className="px-3 py-2 text-xl font-normal text-gray-600 inline-flex items-center gap-4  
        hover:text-red-500 justify-end dark:text-white"
        onClick={() => setOpenMenu(!openMenu)}
      >
        {menu}
        <MdKeyboardArrowDown />
      </button>
      <div
        className={`absolute right-0 shadow-lg rounded-md bg-white w-52 
        mt-2 origin-top-right scale-y-100 transition-all
          ${openMenu ? "" : "hidden"}`}
      >
        <div className="flex flex-col min-w-6 rounded-xl px-4 bg-white">
          {submenu.map((item, idx) => {
            return (
              <Link
                href={item.href}
                key={idx}
                className="px-5 py-6 border-b-2 hover:text-red-600 "
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
