import React, { useState } from "react";

import heroImage from "../../images/hero/hero-img-dsk.png";
import heroImageMb from "../../images/hero/hero-img-mb.png"
import shield from "../../images/hero/shield-moon.svg";

const Hero = () => {
  return (
    <>
    <section className="bg-slBeige pb-[70px] lg:pb-[0px] top-[-100px] lg:top-[0px] xxxl:top-[0px]">
    <div id="home" className="home absolute top-[-45px] lg:top-[-20px] xxl:top-[-100px]"></div>
    <div className="hero-bg h-[500px] md:h-[400px] lg:h-[700px] xxl:h-[800px] xxxl:h-[900px]">
      <div className="py-[30px] xs:py-[30px] lg:py-[40px] xxl:py-[50px]">
<p className="font-montserrat font-light text-[20px] lg:text-[30px] text-center text-slBeige uppercase mb-[30px] lg:mb-[20px] xxl:mb-[41px]">Hear ye, hear ye!</p>
<h1 className="max-w-[300px] xs:max-w-[350px] md:max-w-[430px] lg:max-w-[845px] mx-auto adelle text-slBeige text-[65px] xs:text-[75px] lg:text-[90px] xl:text-[120px] xxxl:text-[150px] text-center leading-[68px] xs:leading-[70px] lg:leading-[90px] xl:leading-[120px] xxxl:leading-[140px] mb-[100px] lg:mb-[10px] xxxl:mb-[40px]">Here 
come the
Lancers!</h1>
<p className="hidden lg:block font-montserrat text-slBlack lg:text-slBeige font-light text-[18px] leading-[22px] text-center max-w-[300px] pt-[10px] mx-auto lg:max-w-[700px] xl:max-w-[910px] lg:text-[24px] leading-[22px] lg:leading-[29px]">SilverLancer is a professional translation boutique, ready to take your product to the Spanish-speaking Latin American audience</p>
    <div className="hidden lg:flex text-center mx-auto lg:mt-[100px] xxl:mt-[150px] xxxl:mt-[200px] max-w-[700px] gap-[25px] items-center">
      <p className="text-slLightBlue font-montserrat font-normal max-w-[264px] ">We are a team of professional translators specialized in board games, video games, webcomics, and related content.</p>
      <img src={shield} alt="" className="mx-auto my-[30px]"/>
      <p className="text-slLightBlue font-montserrat font-normal">We take pride in offering 100%<br/><br/>
human translations.
Our Lancers are at your service.</p>
    </div>
</div>

    </div>
    <p className="font-montserrat text-slBlack md:absolute md:max-w-[500px]  md:left-[50%] md:-translate-x-1/2 md:-translate-y-[4.25rem] lg:text-slBeige font-normal text-[18px] leading-[22px] text-center max-w-[300px] mx-auto mt-[-50px] xs:mt-[0px] lg:max-w-[700px] xl:max-w-[910px] lg:text-[24px] leading-[22px] lg:hidden">SilverLancer is a professional translation boutique, ready to take your product to the Spanish-speaking Latin American audience</p>
    <div className="lg:hidden text-center mx-[20px] mt-[50px] md:mx-[200px]">
      <p className="text-slLightBlue font-montserrat font-normal">We are a team of professional translators specialized in board games, video games, webcomics, and related content.</p>
      <img src={shield} alt="" className="mx-auto my-[30px]"/>
      <p className="text-slLightBlue font-montserrat font-normal">We take pride in offering 100%
human translations.
Our Lancers are at your service.</p>
    </div>
    </section>
    </>
  );
};

export default Hero;
