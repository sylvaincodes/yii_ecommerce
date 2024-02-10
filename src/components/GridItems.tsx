import React from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

type Object = {
  image: string;
  title: string;
  sales: number;
  price: number;
  category: string;
};
interface GridItemsProps {
  data: Object;
}

const GridItems = ({ data }: GridItemsProps) => {
  return (
    <Link
      href="/"
      className="flex flex-col gap-4 group
          "
    >
      <div
        className="relative overflow-hidden
             dark:bg-gray-800 rounded-lg"
      >
        <Image
          src={data.image}
          alt="product"
          width={200}
          height={200}
          className="bg-gray-100 w-full z-[1] 
                object-cover h-full
                transition-all dark:rounded-lg group-hover:scale-110"
        />
        <div className="absolute top-4 left-6 group z-[9]">
          <span
            className={clsx(
              "text-white capitalize rounded-circle px-4 py-1 text-sm",
              {
                "bg-primary-800": data.category === "hot",
                "bg-blue-600": data.category === "arrival",
                "bg-secondary-700": data.category === "promo",
              }
            )}
          >
            {data.category}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 auto-cols-max p-2">
        <div className="col-span-1">
          <h1 className="font-bold text-xs md:text-xl">{data.title}</h1>
          <span className="font-lighter text-sm">({data.sales}) ventes</span>
        </div>
        <div
          className="ms-auto text-primary-600 text-xs md:text-2xl font-semibold 
        dark:text-white"
        >
          $ {data.price}
        </div>
      </div>
    </Link>
  );
};

export default GridItems;
