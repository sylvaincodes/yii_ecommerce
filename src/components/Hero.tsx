import React from "react";
import Container from "./Container";
import Buttonstyle from "./subs-components/ButtonStyle";
import "animate.css";

export default function Hero() {
  return (
    <Container>
      <div
        className="h-full flex flex-col justify-start items-center 
      md:items-start px-10 pt-0 gap-10 mt-40 mx-auto bg-left"
      >
        <h1
          className="animate__animated animate__flipInX 
          text-center uppercase
          font-extrabold text-black sm:text-black 
          text-4xl sm:text-5xl lg:text-6xl xl:text-7xl"
        >
          le son compte
        </h1>
        <p
          className="animate__animated animate__flipInX 
          animate__delay-1s text-center 
          capitalize font-normal text-black sm:text-black 
          text-xl sm:text-2xl lg:text-3xl xl:text-4xl
        "
        >
          écoute la musique différemment
        </p>

        <div className="animate__animated animate__flipInX animate__delay-2s">
          <Buttonstyle text="acheter" />
        </div>
      </div>
    </Container>
  );
}
