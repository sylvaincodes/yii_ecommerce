import React from "react";
import Link from "next/link";
import Container from "@/components/Container";
import ThemeSwitch from "./ThemeSwitch";

export default function Footer() {
  return (
    <Container>
      <div
        className={`border-0 border-gray-200 
        py-20 mt-0 mx-auto`}
      >
        <div className="flex flex-col gap-2 items-center">
          <p className="body-font dark:text-white text-normal text-gray-500 ">
            Copyright © 2024 Yii. Tous les droits réservés.
          </p>
          <p>
            <Link
              href="https://github.com/sylvaincodes"
              target="_blank"
              className="text-gray-600 dark:text-white font-semibold hover:text-primary-700"
            >
              Créer par sylvaincodes
            </Link>
          </p>
        </div>

        <div className="flex flex-row justify-center mt-10">
          <ThemeSwitch />
        </div>
      </div>
    </Container>
  );
}
