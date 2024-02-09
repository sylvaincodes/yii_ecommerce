import Container from "./Container";
import TitleSection from "./TitleSection";
import React from "react";
import Input from "./subs-components/Forms/Input";

const Newsletters = () => {
  return (
    <Container>
      <div className="mt-20 flex flex-col bg-gray-50 py-10">
        <TitleSection
          title="Newsletter"
          description="Abonne toi pour recevoir les bonnes offres dans ta boîte"
        />
        <div className="flex flex-row justify-center items-center w-full my-10">
          <Input btn="abonne-toi" />
        </div>
      </div>
    </Container>
  );
};

export default Newsletters;
