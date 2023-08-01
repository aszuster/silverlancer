import React, { useState } from "react";

import heroImage from "../../images/hero/hero-img-dsk.png";
import shield from "../../images/hero/shield-moon.svg";

const Hero = () => {
  return (
    <div className="bg-slBeige">
      <section className="relative h-screen">
        <img src={heroImage} alt="" className="w-[100%]" />
        <div className="hero-text absolute flex flex-col items-center">
          <p className="font-montserrat font-light text-[30px] text-center text-slBeige uppercase mb-[41px]">
            Hear ye, hear ye!
          </p>
          <h1 className="max-w-[900px] adelle text-slBeige text-[150px] text-center leading-[140px] mb-[40px]">
            Here come the Lancers!
          </h1>
          <p className="font-montserrat font-light max-w-[910px] text-[24px] text-slBeige text-center leading-[29px]">
            SilverLancer is a professional translation boutique, ready to take
            your product to the Spanish-speaking Latin American audience
          </p>
        </div>
        <div className="shield-text absolute flex flex-row max-w-[700px] center mx-auto gap-[25px] items-center bottom-[3%]">
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
