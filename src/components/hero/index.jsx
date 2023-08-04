import React, { useState } from "react";

import heroImage from "../../images/hero/hero-img-dsk.png";
import heroImageMb from "../../images/hero/hero-img-mb.png"
import shield from "../../images/hero/shield-moon.svg";

const Hero = () => {
  return (
    <div className="bg-slBeige overflow-hidden h-[1060px] lg:h-auto">
      <section className="relative mb-[60px]">
        <div className="bg-slWine w-[100%]"></div>
        <img src={heroImage} alt="" className="hidden lg:block w-[100%]" />
        <img src={heroImageMb} alt="" className="w-[100%] lg:hidden" />
        <div className="hero-text absolute flex flex-col items-center px-[36px] lg:px-auto">
          <p className="font-montserrat font-light text-[20px] lg:text-[30px] text-center text-slBeige uppercase mb-[41px]">
            Hear ye, hear ye!
          </p>
          <h1 className="max-w-[900px] adelle text-slBeige text-[75px] lg:text-[150px] text-center leading-[70px] lg:leading-[140px] mb-[100px] lg:mb-[40px]">
            Here come the Lancers!
          </h1>
          <p className="font-montserrat font-normal lg:font-light lg:max-w-[910px] text-[18px] lg:text-[24px] text-slBlack lg:text-slBeige text-center leading-[22px] lg:leading-[29px] pt-[50px] lg:pt-0">
            SilverLancer is a professional translation boutique, ready to take
            your product to the Spanish-speaking Latin American audience
          </p>
        </div>
        <div className="shield-text absolute flex flex-col lg:flex-row max-w-[700px] center mx-auto gap-[25px] items-center bottom-0">
          <p className="text-slLightBlue font-montserrat font-normal text-center max-w-[275px]">
            We are a team of professional translators specialized in board
            games, video games, webcomics, and related content.
          </p>
          <img src={shield} alt="" className="w-[119px]" />
          <p className="text-slLightBlue font-montserrat font-normal text-center">
            We take pride in offering 100% human translations.
            <br />
            <br />
            Our Lancers are at your service.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Hero;
