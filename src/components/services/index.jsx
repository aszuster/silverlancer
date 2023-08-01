import React, { useState } from "react";

// import Button from "../buttons/Button"

import swords from "../../images/services/swords.svg";
import coins from "../../images/services/coins.svg"

const Services = () => {
  return (
    <div className="bg-slBeige">
      <section className="h-screen mx-[150px] flex flex-col justify-center">
        <div className="flex flex-col items-center">
          <img src={swords} alt="" className="max-w-[142px]" />
          <h2 className="text-slLightBlue adelle text-[75px] text-center">
            Our Swords Are Yours
          </h2>
          <p className="font-montserrat font-light text-[24px] text-center max-w-[900px] color-slBlack">
            If you would like to bring your product to a wider audience, our
            Lancers offer you an all-encompassing localization service
          </p>
        </div>
        <div className="flex flex-row gap-[22px]">
          <div className="max-w-[212px] py-[19px] py-[15px]">
            <p className="font-montserrat text-slLightBlue text-[18px] font-medium">Translation</p>
           
            <p className="font-montserrat text-slBlack text-[17px] font-light">
              Adapting a text from one language to another, following
              Latin-American Spanish conventions.
            </p>
          </div>
          <div className="max-w-[357px] py-[19px] py-[15px]">
            <p className="font-montserrat text-slLightBlue text-[18px] font-medium">Transcreation</p>
           
            <p className="font-montserrat text-slBlack text-[17px] font-light">
              Designing new, more catchy text from scratch, but always following
              the source material. Ideal for texts where creativity is
              paramount, such as the marketing content for your product.
            </p>
          </div>
          <div className="max-w-[342px] py-[19px] px-[15px]">
            <p className="font-montserrat text-slLightBlue text-[18px] font-medium">Editing</p>
           
            <p className="font-montserrat text-slBlack text-[17px] font-light">
              Correcting a text based on style guides, glossaries, and client’s
              recommendations, in order to make sure that the end product meets
              the expected quality standards.
            </p>
          </div>
          <div className="max-w-[269px] py-[19px] py-[15px]">
            <p className="font-montserrat text-slLightBlue text-[18px] font-medium">Desktop Publishing (DTP)</p>
      
            <p className="font-montserrat text-slBlack text-[17px] font-light">
              Redesigning of a document, both for processing correctly into a
              CAT tool and achieving the final “look” of the product.
            </p>
          </div>
          <div className="max-w-[191px] py-[19px] py-[15px]">
            <p className="font-montserrat text-slLightBlue text-[18px] font-medium">Linguistic Quality Assurance (LQA)</p>
      
            <p className="font-montserrat text-slBlack text-[17px] font-light">
              Reviewing the text in context to do a final check of the whole
              product.
            </p>
          </div>
          
        </div>
        <div className="mx-auto">
          <p className="text-center max-w-[446px] font-montserrat font-light text-[17px] text-slBlack">To know more about how these processes apply to your product, feel free to contact us</p>
{/* <Button text="Quote Your Project"> <img src="" alt="" />
</Button> */}
        </div>
      </section>
    </div>
  );
};

export default Services;
