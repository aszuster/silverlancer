import React, { useState } from "react";

import heroImage from "../../images/hero/hero-img-dsk.png";
import heroImageMb from "../../images/hero/hero-img-mb.png"
import shield from "../../images/hero/shield-moon.svg";

const Hero = () => {
  return (
    <>
    <section className="bg-slBeige pb-[70px] lg:pb-[0px]">
  
    <div className="hero-bg h-[500px] lg:h-[700px] xxl:h-[800px] xxxl:h-[900px]">
      <div className="py-[30px] xs:py-[30px] lg:py-[40px] xxl:py-[50px]">
<p className="font-montserrat font-light text-[20px] lg:text-[30px] text-center text-slBeige uppercase mb-[30px] lg:mb-[20px] xxl:mb-[41px]">Hear ye, hear ye!</p>
<h1 className="max-w-[300px] xs:max-w-[350px] lg:max-w-[845px] mx-auto adelle text-slBeige text-[65px] xs:text-[75px] lg:text-[90px] xl:text-[120px] xxxl:text-[150px] text-center leading-[68px] xs:leading-[70px] lg:leading-[90px] xl:leading-[120px] xxxl:leading-[140px] mb-[100px] lg:mb-[10px] xxxl:mb-[40px]">Here 
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
    <p className="font-montserrat text-slBlack lg:text-slBeige font-normal text-[18px] leading-[22px] text-center max-w-[300px] mx-auto mt-[-50px] xs:mt-[0px] lg:max-w-[700px] xl:max-w-[910px] lg:text-[24px] leading-[22px] lg:hidden">SilverLancer is a professional translation boutique, ready to take your product to the Spanish-speaking Latin American audience</p>
    <div className="lg:hidden text-center mx-[20px] mt-[50px] ">
      <p className="text-slLightBlue font-montserrat font-normal">We are a team of professional translators specialized in board games, video games, webcomics, and related content.</p>
      <img src={shield} alt="" className="mx-auto my-[30px]"/>
      <p className="text-slLightBlue font-montserrat font-normal">We take pride in offering 100%
human translations.
Our Lancers are at your service.</p>
    </div>
    </section>
    </>
    // <div className="bg-slBeige h-[1060px] lg:h-auto">
    //   <section className="relative">
    //     <div className="bg-slWine w-[100%]"></div>
    //     <img src={heroImage} alt="" className="hidden lg:block w-[100%]" />
    //     <img src={heroImageMb} alt="" className="w-[100%] lg:hidden" />
    //     <div className="hero-text absolute flex flex-col items-center px-[36px] lg:px-auto">
    //       <p className="font-montserrat font-light text-[20px] lg:text-[30px] text-center text-slBeige uppercase mb-[41px] lg:mb-[20px] xxl:mb-[41px]">
    //         Hear ye, hear ye!
    //       </p>
    //       <h1 className="max-w-[900px] adelle text-slBeige text-[75px] lg:text-[90px] xl:text-[120px] xxl:text-[150px] text-center leading-[70px] lg:leading-[90px] xl:leading-[120px] xxl:leading-[140px] mb-[100px] lg:mb-[10px] xxl:mb-[40px]">
    //         Here come the Lancers!
    //       </h1>
    //       <p className="font-montserrat font-normal lg:font-light lg:max-w-[700px] xl:max-w-[910px] text-[18px] lg:text-[24px] text-slBlack lg:text-slBeige text-center leading-[22px] lg:leading-[29px] pt-[50px] lg:pt-0">
    //         SilverLancer is a professional translation boutique, ready to take
    //         your product to the Spanish-speaking Latin American audience
    //       </p>
    //     </div>
    //     <div className="shield-text absolute flex flex-col lg:flex-row max-w-[700px] center mx-auto gap-[25px] items-center bottom-0">
    //       <p className="text-slLightBlue font-montserrat font-normal text-center max-w-[266px]">
    //         We are a team of professional translators specialized in board
    //         games, video games, webcomics, and related content.
    //       </p>
    //       <img src={shield} alt="" className="w-[119px]" />
    //       <p className="text-slLightBlue font-montserrat font-normal text-center">
    //         We take pride in offering 100% human translations.
    //         <br />
    //         <br />
    //         Our Lancers are at your service.
    //       </p>
    //     </div>
    //   </section>
    // </div>
  );
};

export default Hero;
