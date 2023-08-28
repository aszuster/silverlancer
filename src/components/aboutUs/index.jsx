import React, { useState } from "react";

import mariaFlorencia from "../../images/about-us/maria-florencia-elias.png"
import muriel from "../../images/about-us/muriel-farias.png"
import matias from "../../images/about-us/matias-rojo-ruilova.png"
import santiago from "../../images/about-us/santiago-glavina-levis.png"
import helmMariaFlorencia from "../../images/about-us/helm-maria-florencia.svg"
import helmMuriel from "../../images/about-us/helm-muriel.svg"
import helmMatias from "../../images/about-us/helm-matias.svg"
import helmSantiago from "../../images/about-us/helm-santiago.svg"

const AboutUs = () => {
  return (
    <div className="bg-slBeige overflow-hidden lg:overflow-visible py-[100px] lg:py-0" id="aboutus">
      <section className="mx-[20px] lg:max-w-[90%] xl:max-w-[80%] lg:mx-auto xxxl:mx-[220px]">
        <h2 className="adelle text-[45px] leading-[45px] lg:text-[75px] text-slLightBlue leading-[45px] lg:leading-[65px] font-light text-center mb-[50px] lg:mb-[100px]">Meet The Lancers</h2>
        <div className="lg:grid lg:grid-cols-2 gap-x-[100px] gap-y-[75px] mb-[90px] lg:px-[100px] xl:px-0 xxxl:px-[100px]">
          <div className="lg:flex gap-[50px] pb-[50px] lg:pb-0">
            <div className="w-[204px] relative mx-auto pb-[20px] lg:pb-0">
              <img src={helmMariaFlorencia} alt="" className="absolute top-[30px] right-[-30px]" />
              <img src={mariaFlorencia} alt="" className="rounded-3xl border-2 border-slBlack" />
            </div>
            <div className="w-[300px] text-center mx-auto lg:text-left lg:mx-0">
            <h4 className="text-slLightBlue font-montserrat font-medium text-[24px] pb-[5px]">
            María Florencia Elias
            </h4>
            <p className="font-montserrat text-slBlack leading-[21px] text-[17px] font-light">María Florencia Elias is a certified English to Latin-American Spanish translator. The peppiest of the Lancers, she focuses most of her energy into the translation of sports and sales texts. When she needs to recharge her batteries, her artistic side flourishes by reading (... and making lists of the books she reads), painting, singing, and, of course, playing board games.</p>
            </div>
          </div>
          <div className="lg:flex gap-[50px] pb-[50px] lg:pb-0">
            <div className="w-[204px] relative mx-auto pb-[20px] lg:pb-0">
              <img src={helmMuriel} alt="" className="absolute top-[30px] right-[-30px]" />
              <img src={muriel} alt="" className="rounded-3xl border-2 border-slLightBlue" />
            </div>
            <div className="w-[300px] text-center mx-auto lg:text-left lg:mx-0">
            <h4 className="text-slLightBlue font-montserrat font-medium text-[24px] pb-[5px]">Muriel Farías
            </h4>
            <p className="font-montserrat text-slBlack leading-[21px] text-[17px] font-light">Muriel Farías is an English to Latin-American Spanish translator specialized in video games and webcomics. She has played video games of different genres from a very young age and hasn’t stopped since. She has many linguistic victories under her belt, having translated  hundreds of thousands of words. Furthermore, she is passionate about languages: she has been studying Mandarin Chinese for several years and has recently begun learning Korean.</p>
            </div>
          </div>
          <div className="lg:flex gap-[50px] pb-[50px] lg:pb-0">
            <div className="w-[204px] relative mx-auto pb-[20px] lg:pb-0">
              <img src={helmMatias} alt="" className="absolute top-[30px] left-[-30px]" />
              <img src={matias} alt="" className="rounded-3xl border-2 border-slGold"/>
            </div>
            <div className="w-[300px] text-center mx-auto lg:text-left lg:mx-0">
            <h4 className="text-slLightBlue font-montserrat font-medium text-[24px] pb-[5px]">Matías Rojo Ruilova
            </h4>
            <p className="font-montserrat text-slBlack leading-[21px] text-[17px] font-light">Matías Rojo Ruilova, the eldest of the Lancers, is an English to Latin-American Spanish translator specialized in marketing, transcreation, and copywriting. When he’s not working behind a keyboard, you may find him crunching ideas for his next book, vanquishing the forces of evil in some RPG or another, or just chilling and playing with his cat, Milanesa.</p>
            </div>
          </div>
          <div className="lg:flex gap-[50px]">
            <div className="w-[204px] relative mx-auto pb-[20px] lg:pb-0">
            <img src={helmSantiago} alt="" className="absolute top-[50px] left-[-55px]" />
              <img src={santiago} alt="" className="rounded-3xl border-2 border-slWine"/>
            </div >
            <div className="w-[300px] text-center mx-auto lg:text-left lg:mx-0">
            <h4 className="text-slLightBlue font-montserrat font-medium text-[24px] pb-[5px]">Santiago Glavina Levis
            </h4>
            <p className="font-montserrat text-slBlack leading-[21px] text-[17px] font-light">The youngest of the Lancers, Santiago Glavina Levis is an English to Latin-American Spanish translator specialized in video games and webcomics localization. Avid fantasy reader, gamer, board game enthusiast and Dungeon Master. Worked independently for many renowned developers.</p>
            </div>
          </div>
        </div>
        <div className="lg:pb-[100px]">
          <h4 className="text-slLightBlue font-montserrat text-[30px] uppercase font-light mb-[20px]">Why SilverLancer?</h4>
          <div className="lg:flex gap-[20px]">
          <p className="text-slBlack font-montserrat text-[17px] font-light leading-[21px]">In the Middle Ages, there was a group of knights that swore no allegiance to any specific lord, but offered their services to the highest bidder (don’t worry: we are not that greedy). They were called “freelancers.”</p>
          <br className="lg:hidden"/>
          <p className="text-slBlack font-montserrat text-[17px] font-light leading-[21px]">Over time, this word evolved and, nowadays, it refers to any self-employed person. And what about “Silver”? Just a little homage to our hometown: Mar del Plata (“Silver Sea,” if you will), on the East coast of Argentina.</p>
          </div>
        </div>
      </section>
  </div>
  );
};

export default AboutUs;
