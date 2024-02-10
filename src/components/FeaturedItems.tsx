import React from "react";
import Container from "@/components/Container";
import TitleSection from "./TitleSection";
import GridItems from "./GridItems";

const listPopulars = [
  {
    image: "/images/products/p_1.jpg",
    title: "Turtle Beach Recon 50",
    sales: 10,
    price: 39,
    category: "hot",
    description:
      "Turtle Beach Recon 50 Gaming Headset for PS5, PS4, PlayStation, Xbox Series X|S, Xbox One, Nintendo Switch, Mobile & PC with 3.5mm - Removable Mic, 40mm Speakers - Black",
  },
  {
    image: "/images/products/p_2.jpg",
    title: "Razer BlackShark V2 X",
    sales: 10,
    price: 27,
    category: "",
    description:
      "Turtle Beach Recon 50 Gaming Headset for PS5, PS4, PlayStation, Xbox Series X|S, Xbox One, Nintendo Switch, Mobile & PC with 3.5mm - Removable Mic, 40mm Speakers - Black",
  },
  {
    image: "/images/products/p_3.jpg",
    title: "Plantronics - Blackwire 3210",
    sales: 10,
    price: 60,
    category: "arrival",
    description:
      "Turtle Beach Recon 50 Gaming Headset for PS5, PS4, PlayStation, Xbox Series X|S, Xbox One, Nintendo Switch, Mobile & PC with 3.5mm - Removable Mic, 40mm Speakers - Black",
  },
  {
    image: "/images/products/p_4.jpg",
    title: "Jabra Evolve 20 UC Wired",
    sales: 10,
    price: 43,
    category: "promo",
    description:
      "Turtle Beach Recon 50 Gaming Headset for PS5, PS4, PlayStation, Xbox Series X|S, Xbox One, Nintendo Switch, Mobile & PC with 3.5mm - Removable Mic, 40mm Speakers - Black",
  },
];

const FeaturedItems = () => {
  return (
    <Container mx="auto">
      <div className="flex flex-col gap-y-10 font-body px-10 dark:text-white mt-20">
        <TitleSection
          dark="white"
          title="les articles populaires"
          description="Une selection particulière de nos meilleurs articles du catalogue préférés par nos plus fidèles clients ."
        />
        <div
          className="grid grid-cols-2 lg:gap-4 lg:grid-cols-4 gap-6"
        >
          {listPopulars &&
            listPopulars.map((single, idx) => {
              return <GridItems data={single} key={idx} />;
            })}
        </div>
      </div>
    </Container>
  );
};

export default FeaturedItems;
