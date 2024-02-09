import React from "react";
import Container from "./Container";
import Buttonstyle from "./subs-components/ButtonStyle";
import "animate.css";

export default function Hero() {
  return (
    <Container>
      <div
        className="h-full flex flex-col justify-start items-center 
      md:items-start px-10 pt-10 gap-10 mt-40 mx-auto bg-left"
      >
        <h1
          className="animate__animated animate__flipInX text-center text-2xl md:text-3xl  tracking-widest 
        font-extrabold text-black uppercase"
        >
          le son compte
        </h1>
        <p
          className="animate__animated animate__flipInX animate__delay-1s text-center text-xl capitalize font-lighter text-black
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
