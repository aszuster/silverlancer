import React, { useState } from "react";

import Button from "../buttons/Button"
import ToTop from "../buttons/ButtonToTop";

import swords from "../../images/services/swords.svg";
import coins from "../../images/services/coins.svg"
import diamond from "../../images/services/diamond.svg"

const Services = () => {
  return (
    <div className="bg-slBeige pb-[100px] lg:py-[100px]" id="services">
      <section className="lg:h-screen mx-[20px] lg:max-w-[90%] xl:max-w-[80%] lg:mx-auto xxxl:mx-[220px] flex flex-col justify-center">
        <div className="flex flex-col items-center justify-between">
          <img src={swords} alt="" className="max-w-[100px] lg:max-w-[142px]" />
          <h2 className="text-slLightBlue adelle text-[45px] leading-[45px] lg:text-[75px] text-center py-[15px] lg:py-[30px]">
            Our Swords Are Yours
          </h2>
          <p className="font-montserrat font-light text-[18px] lg:text-[24px] text-center max-w-[900px] color-slBlack leading-[21px] lg:leading-[29px]">
            If you would like to bring your product to a wider audience, our
            Lancers offer you an all-encompassing localization service 
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-[20px] justify-center my-[50px] lg:my-[95px]">
          <div className="max-w-[100%] lg:max-w-[212px] py-[19px] px-[15px] rounded-3xl border-slGold border-2 relative">
            <img src={diamond} alt="" className="absolute top-[22px] left-[-11px]" />
            <p className="font-montserrat text-slLightBlue text-[18px] font-medium">Translation</p>
           
            <p className="font-montserrat text-slBlack text-[17px] font-light leading-[21px]">
              Adapting a text from one language to another, following
              Latin-American Spanish conventions.
            </p>
          </div>
          <div className="max-w-[100%] lg:max-w-[352px] py-[19px] px-[15px] rounded-3xl border-slGold border-2 relative">
          <img src={diamond} alt="" className="absolute top-[22px] left-[-11px]" />
            <p className="font-montserrat text-slLightBlue text-[18px] font-medium ">Transcreation</p>
           
            <p className="font-montserrat text-slBlack text-[17px] font-light leading-[21px]">
              Designing new, more catchy text from scratch, but always following
              the source material. Ideal for texts where creativity is
              paramount, such as the marketing content for your product.
            </p>
          </div>
          <div className="max-w-[100%] lg:max-w-[338px] py-[19px] px-[15px] rounded-3xl border-slGold border-2 relative">
          <img src={diamond} alt="" className="absolute top-[22px] left-[-11px]" />
            <p className="font-montserrat text-slLightBlue text-[18px] font-medium">Editing</p>
           
            <p className="font-montserrat text-slBlack text-[17px] font-light leading-[21px]">
              Correcting a text based on style guides, glossaries, and client’s
              recommendations, in order to make sure that the end product meets
              the expected quality standards.
            </p>
          </div>
          <div className="max-w-[100%] lg:max-w-[270px] py-[19px] px-[15px] rounded-3xl border-slGold border-2 relative">
          <img src={diamond} alt="" className="absolute top-[22px] left-[-11px]" />
            <p className="font-montserrat text-slLightBlue text-[18px] font-medium">Desktop Publishing (DTP)</p>
      
            <p className="font-montserrat text-slBlack text-[17px] font-light leading-[21px]">
              Redesigning of a document, both for processing correctly into a
              CAT tool and achieving the final “look” of the product.
            </p>
          </div>
          <div className="max-w-[100%] lg:max-w-[195px] py-[19px] px-[15px] rounded-3xl border-slGold border-2 relative">
          <img src={diamond} alt="" className="absolute top-[22px] left-[-11px]" />
            <p className="font-montserrat text-slLightBlue text-[18px] font-medium">Linguistic Quality Assurance (LQA)</p>
      
            <p className="font-montserrat text-slBlack text-[17px] font-light leading-[21px]">
              Reviewing the text in context to do a final check of the whole
              product.
            </p>
          </div>
          
        </div>
        <div className="mx-auto">
          <p className="text-center max-w-[446px] font-montserrat font-light text-[17px] text-slBlack leading-[21px] pb-[20px]">To know more about how these processes apply to your product, feel free to contact us</p>
<div className="mx-auto text-center relative">
<button className="btn-anim bg-slLightBlue py-[10px] lg:py-[24px] px-[24px] lg:px-[48px] text-slBeige font-montserrat font-semibold text-[18px] lg:text-[24px] rounded-[46px] shadow-[0_2px_5px_2px_rgba(29,30,22,0.2)]">
  Quote Your Project
</button>
<img src={coins} alt="" className="w-[65px] lg:w-[88px] absolute top-[50px] lg:top-[85px] left-1/2 transform -translate-x-1/2 -translate-y-1/2"/>
</div>
        </div>
 <ToTop/>
      </section>
    
    </div>
  );
};

export default Services;
