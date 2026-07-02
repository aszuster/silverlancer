import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import flor from "../../images/portfolio/solo/illus/flor.png";
import muri from "../../images/portfolio/solo/illus/muri.png";
import santi from "../../images/portfolio/solo/illus/santi.png";
import mati from "../../images/portfolio/solo/illus/mati.png";

import mariaFlorencia from "../../images/about-us/maria-florencia-elias.png";
import muriel from "../../images/about-us/muriel-farias.png";
import matias from "../../images/about-us/matias-rojo-ruilova.png";
import santiago from "../../images/about-us/santiago-glavina-levis.png";
import helmMariaFlorencia from "../../images/about-us/helm-maria-florencia.svg";
import helmMuriel from "../../images/about-us/helm-muriel.svg";
import helmMatias from "../../images/about-us/helm-matias.svg";
import helmSantiago from "../../images/about-us/helm-santiago.svg";

const SoloMisions = () => {
  return (
    <div className=" bg-slBeige py-[50px] lg:py-[100px] overflow-hidden lg:oveflow-visible relative">
      <div id="solo" className="absolute top-[-50px] lg:top-[-40px]"></div>
      <section className="mx-[20px] md:max-w-[75%] lg:max-w-[90%] xl:max-w-[80%] md:mx-auto xxxl:mx-[220px]">
        <h2 className="text-center adelle text-slLightBlue text-[45px] lg:text-[75px] font-light leading-[65px] pb-[10px]">
          Our Lancer's Solo Dungeons*
        </h2>
        <p className="text-center font-montserrat font-light text-slBlack text-[14px] lg:text-[16px] max-w-[700px] mx-auto pb-[60px]">
          SL is not affiliated to nor partnered with any of the previously
          mentioned localization groups. These are just samples of individual
          portfolios belonging to members of SL, and should not be interpreted
          nor construed as any kind of partnership with the aforementioned
          companies
        </p>
        {/* <div className=" hidden lg:grid grid-cols-3 lg:gap-x-[100px] gap-y-[90px] mt-[95px] testimonial-bg relative">
          <div className="flex flex-col justify-between mt-[20px] lg:mt-[70px]">
            <a
              href="https://store.steampowered.com/app/625960/Stoneshard/"
              target="_blank"
              className="relative border-4 border-slGold hover:border-slLightBlue duration-300 ease-in transform-a rounded-3xl w-full h-[200px] mx-auto bg-slBlack bg-[url('images/portfolio/solo/flor/Stoneshard.jpg')] bg-contain bg-no-repeat bg-center"
            >
              <img
                src={flor}
                alt=""
                className="absolute top-[-30px] left-[-50px] max-w-[100px] md:max-w-[100px] mx-auto "
              />{" "}
            </a>

            <p className="text-center text-[17px] font-montserrat font-light text-slBlack pt-[30px]">
              Stoneshard
            </p>
          </div>
          <div className="flex flex-col justify-between mt-[20px] lg:mt-[70px]">
            <a
              href="https://store.steampowered.com/app/2681030/Outbound/"
              target="_blank"
              className="relative border-4 border-slGold hover:border-slLightBlue duration-300 ease-in rounded-3xl w-full h-[200px] mx-auto bg-slBlack bg-[url('images/portfolio/solo/muri/Outbound.png')] bg-contain bg-no-repeat bg-center"
            >
              <img
                src={muri}
                alt=""
                className="absolute top-[-30px] left-[-50px] max-w-[100px] md:max-w-[100px] mx-auto "
              />{" "}
            </a>

            <p className="text-center text-[17px] font-montserrat font-light text-slBlack pt-[30px]">
              Outbound
            </p>
          </div>
          <div className="flex flex-col justify-between mt-[20px] lg:mt-[70px]">
            <a
              href="https://apps.apple.com/us/app/perchang-world/id6477922353"
              target="_blank"
              className="relative border-4 border-slGold hover:border-slLightBlue duration-300 ease-in rounded-3xl w-full h-[200px] mx-auto bg-slBlack bg-[url('images/portfolio/solo/muri/Perchang_World.jpg')] bg-contain bg-no-repeat bg-center"
            >
              <img
                src={muri}
                alt=""
                className="absolute top-[-30px] left-[-50px] max-w-[100px] md:max-w-[100px] mx-auto "
              />{" "}
            </a>

            <p className="text-center text-[17px] font-montserrat font-light text-slBlack pt-[30px]">
              Perchang World
            </p>
          </div>
          <div className="flex flex-col justify-between mt-[20px] lg:mt-[70px]">
            <a
              href="https://store.steampowered.com/app/2725470/The_Prisoning_Fletchers_Quest/"
              target="_blank"
              className="relative border-4 border-slGold hover:border-slLightBlue duration-300 ease-in rounded-3xl w-full h-[200px] mx-auto bg-slBlack bg-[url('images/portfolio/solo/muri/The_Prisoning_Fletchers_Quest.jpg')] bg-contain bg-no-repeat bg-center"
            >
              <img
                src={muri}
                alt=""
                className="absolute top-[-30px] left-[-50px] max-w-[100px] md:max-w-[100px] mx-auto "
              />{" "}
            </a>

            <p className="text-center text-[17px] font-montserrat font-light text-slBlack pt-[30px]">
              The Prisoning Fletcher's Quest
            </p>
          </div>
          <div className="flex flex-col justify-between mt-[20px] lg:mt-[70px]">
            <a
              href="https://store.steampowered.com/app/2183900/Warhammer_40000_Space_Marine_2/"
              target="_blank"
              className="relative border-4 border-slGold hover:border-slLightBlue duration-300 ease-in rounded-3xl w-full h-[200px] mx-auto bg-slBlack bg-[url('images/portfolio/solo/muri/Warhammer_40000_Space_Marine_2.jpg')] bg-contain bg-no-repeat bg-center"
            >
              <img
                src={muri}
                alt=""
                className="absolute top-[-30px] left-[-50px] max-w-[100px] md:max-w-[100px] mx-auto "
              />{" "}
            </a>

            <p className="text-center text-[17px] font-montserrat font-light text-slBlack pt-[30px]">
              Warhammer 40 000 Space Marine 2
            </p>
          </div>
          <div className="flex flex-col justify-between mt-[20px] lg:mt-[70px]">
            <a
              href="https://worldofwarcraft.blizzard.com/es-es/midnight"
              target="_blank"
              className="relative border-4 border-slGold hover:border-slLightBlue duration-300 ease-in rounded-3xl w-full h-[200px] mx-auto bg-slBlack bg-[url('images/portfolio/solo/muri/WoW_Midnight.avif')] bg-contain bg-no-repeat bg-center"
            >
              <img
                src={muri}
                alt=""
                className="absolute top-[-30px] left-[-50px] max-w-[100px] md:max-w-[100px] mx-auto "
              />{" "}
            </a>

            <p className="text-center text-[17px] font-montserrat font-light text-slBlack pt-[30px]">
              World of Warcraft: Midnight
            </p>
          </div>
          <div className="flex flex-col justify-between mt-[20px] lg:mt-[70px]">
            <a
              href="https://store.steampowered.com/app/427410/Abiotic_Factor/"
              target="_blank"
              className="relative border-4 border-slGold hover:border-slLightBlue duration-300 ease-in rounded-3xl w-full h-[200px] mx-auto bg-slBlack bg-[url('images/portfolio/solo/santi/Abiotic_Factor.jpg')] bg-contain bg-no-repeat bg-center"
            >
              <img
                src={santi}
                alt=""
                className="absolute top-[-30px] left-[-50px] max-w-[100px] md:max-w-[100px] mx-auto "
              />{" "}
            </a>

            <p className="text-center text-[17px] font-montserrat font-light text-slBlack pt-[30px]">
              Abiotic Factor
            </p>
          </div>
          <div className="flex flex-col justify-between mt-[20px] lg:mt-[70px]">
            <a
              href="https://store.steampowered.com/app/1836560/Aether__Iron/"
              target="_blank"
              className="relative border-4 border-slGold hover:border-slLightBlue duration-300 ease-in rounded-3xl w-full h-[200px] mx-auto bg-slBlack bg-[url('images/portfolio/solo/santi/Aether_Iron.jpg')] bg-contain bg-no-repeat bg-center"
            >
              <img
                src={santi}
                alt=""
                className="absolute top-[-30px] left-[-50px] max-w-[100px] md:max-w-[100px] mx-auto "
              />{" "}
            </a>

            <p className="text-center text-[17px] font-montserrat font-light text-slBlack pt-[30px]">
              Aether & Iron
            </p>
          </div>
          <div className="flex flex-col justify-between mt-[20px] lg:mt-[70px]">
            <a
              href="https://store.steampowered.com/app/619540/Darkwater/"
              target="_blank"
              className="relative border-4 border-slGold hover:border-slLightBlue duration-300 ease-in rounded-3xl w-full h-[200px] mx-auto bg-slBlack bg-[url('images/portfolio/solo/santi/Darkwater.jpg')] bg-contain bg-no-repeat bg-center"
            >
              <img
                src={santi}
                alt=""
                className="absolute top-[-30px] left-[-50px] max-w-[100px] md:max-w-[100px] mx-auto "
              />{" "}
            </a>

            <p className="text-center text-[17px] font-montserrat font-light text-slBlack pt-[30px]">
              Darkwater
            </p>
          </div>
          <div className="flex flex-col justify-between mt-[20px] lg:mt-[70px]">
            <a
              href="https://store.steampowered.com/app/1430190/Killing_Floor_3/"
              target="_blank"
              className="relative border-4 border-slGold hover:border-slLightBlue duration-300 ease-in rounded-3xl w-full h-[200px] mx-auto bg-slBlack bg-[url('images/portfolio/solo/santi/Killing_Floor_3.jpg')] bg-contain bg-no-repeat bg-center"
            >
              <img
                src={santi}
                alt=""
                className="absolute top-[-30px] left-[-50px] max-w-[100px] md:max-w-[100px] mx-auto "
              />{" "}
            </a>

            <p className="text-center text-[17px] font-montserrat font-light text-slBlack pt-[30px]">
              Killing Floor 3
            </p>
          </div>
          <div className="flex flex-col justify-between mt-[20px] lg:mt-[70px]">
            <a
              href="https://store.steampowered.com/app/625960/Stoneshard/"
              target="_blank"
              className="relative border-4 border-slGold hover:border-slLightBlue duration-300 ease-in rounded-3xl w-full h-[200px] mx-auto bg-slBlack bg-[url('images/portfolio/solo/santi/Stoneshard.jpg')] bg-contain bg-no-repeat bg-center"
            >
              <img
                src={santi}
                alt=""
                className="absolute top-[-30px] left-[-50px] max-w-[100px] md:max-w-[100px] mx-auto "
              />{" "}
            </a>

            <p className="text-center text-[17px] font-montserrat font-light text-slBlack pt-[30px]">
              Stoneshard
            </p>
          </div>
        </div> */}
        <div className="flex flex-col gap-[50px]">
          <div className="flex flex-col lg:flex-row lg:items-center gap-[20px] lg:gap-[50px]">
            <div className="flex flex-col items-center w-full lg:w-auto">
              <div className="w-[140px] lg:w-[204px] relative mx-auto lg:ml-0">
                <img
                  src={helmMariaFlorencia}
                  alt=""
                  className="absolute top-[30px] right-[-22px] w-[50px] lg:w-auto"
                />
                <img
                  src={mariaFlorencia}
                  alt=""
                  className="rounded-3xl border-2 border-slBlack"
                />
              </div>
              <h4 className="text-slLightBlue font-montserrat font-medium text-[20px] pb-[5px] mx-auto lg:ml-0 pt-[10px]">
                María Florencia Elias
              </h4>
            </div>
            <div className="flex flex-col pb-[25px] lg:pb-0">
              <a
                href="https://store.steampowered.com/app/427410/Abiotic_Factor/"
                target="_blank"
                className="relative border-4 border-slGold hover:border-slLightBlue duration-300 ease-in rounded-3xl w-[300px] h-[180px] lg:w-[350px] lg:h-[200px] mx-auto bg-slBlack bg-[url('images/portfolio/solo/santi/Abiotic_Factor.jpg')] bg-contain bg-no-repeat bg-center"
              >
                {/* <img
                src={santi}
                alt=""
                className="absolute top-[-30px] left-[-50px] max-w-[100px] md:max-w-[100px] mx-auto "
              />{" "} */}
              </a>

              <p className="text-center text-[17px] font-montserrat font-light text-slBlack pt-[15px]">
                Abiotic Factor
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row  lg:items-center  w-full  gap-[20px] lg:gap-0">
            <div className="flex flex-col items-center w-full lg:w-auto">
              <div className="w-[150px] lg:w-[204px] shrink-0 relative mx-auto lg:ml-0">
                <img
                  src={helmMuriel}
                  alt=""
                  className="absolute top-[30px] right-[-30px] w-[60px] lg:w-auto"
                />
                <img
                  src={muriel}
                  alt=""
                  className="rounded-3xl border-2 border-slLightBlue"
                />
              </div>
              <h4 className="text-slLightBlue font-montserrat font-medium text-[20px] pb-[5px] mx-auto pt-[10px]">
                Muriel Farías
              </h4>
            </div>
            <div className="overflow-hidden w-full lg:ml-[50px] pt-[25px]">
              <Swiper
                spaceBetween={20}
                slidesPerView={1}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
                pagination={true}
                modules={[Pagination, Autoplay]}
                breakpoints={{
                  800: {
                    slidesPerView: 2,
                  },
                  1440: {
                    slidesPerView: 3.2,
                  },
                }}
                // className="lg:hidden mt-[30px] h-[330px] xs:h-[270px]"
                className="overflow-visible   h-[270px] lg:h-[280px] "
              >
                <SwiperSlide>
                  <div className="flex flex-col">
                    <a
                      href="https://store.steampowered.com/app/2681030/Outbound/"
                      target="_blank"
                      className="relative border-4 border-slGold hover:border-slLightBlue duration-300 ease-in rounded-3xl w-[300px] h-[180px] lg:w-[350px] lg:h-[200px] mx-auto bg-slBlack bg-[url('images/portfolio/solo/muri/Outbound.png')] bg-contain bg-no-repeat bg-center"
                    >
                      {/* <img
                src={muri}
                alt=""
                className="absolute top-[-30px] left-[-50px] max-w-[100px] md:max-w-[100px] mx-auto "
              />{" "} */}
                    </a>

                    <p className="text-center text-[17px] font-montserrat font-light text-slBlack pt-[15px]">
                      Outbound
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex flex-col">
                    <a
                      href="https://apps.apple.com/us/app/perchang-world/id6477922353"
                      target="_blank"
                      className="relative border-4 border-slGold hover:border-slLightBlue duration-300 ease-in rounded-3xl w-[300px] h-[180px] lg:w-[350px] lg:h-[200px] mx-auto bg-slBlack bg-[url('images/portfolio/solo/muri/Perchang_World.jpg')] bg-contain bg-no-repeat bg-center"
                    >
                      {/* <img
                src={muri}
                alt=""
                className="absolute top-[-30px] left-[-50px] max-w-[100px] md:max-w-[100px] mx-auto "
              />{" "} */}
                    </a>

                    <p className="text-center text-[17px] font-montserrat font-light text-slBlack pt-[15px]">
                      Perchang World
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex flex-col">
                    <a
                      href="https://store.steampowered.com/app/2725470/The_Prisoning_Fletchers_Quest/"
                      target="_blank"
                      className="relative border-4 border-slGold hover:border-slLightBlue duration-300 ease-in rounded-3xl w-[300px] h-[180px] lg:w-[350px] lg:h-[200px] mx-auto bg-slBlack bg-[url('images/portfolio/solo/muri/The_Prisoning_Fletchers_Quest.jpg')] bg-contain bg-no-repeat bg-center"
                    >
                      {/* <img
                src={muri}
                alt=""
                className="absolute top-[-30px] left-[-50px] max-w-[100px] md:max-w-[100px] mx-auto "
              />{" "} */}
                    </a>

                    <p className="text-center text-[17px] font-montserrat font-light text-slBlack pt-[15px]">
                      The Prisoning Fletcher's Quest
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex flex-col">
                    <a
                      href="https://store.steampowered.com/app/2183900/Warhammer_40000_Space_Marine_2/"
                      target="_blank"
                      className="relative border-4 border-slGold hover:border-slLightBlue duration-300 ease-in rounded-3xl w-[300px] h-[180px] lg:w-[350px] lg:h-[200px] mx-auto bg-slBlack bg-[url('images/portfolio/solo/muri/Warhammer_40000_Space_Marine_2.jpg')] bg-contain bg-no-repeat bg-center"
                    >
                      {/* <img
                src={muri}
                alt=""
                className="absolute top-[-30px] left-[-50px] max-w-[100px] md:max-w-[100px] mx-auto "
              />{" "} */}
                    </a>

                    <p className="text-center text-[17px] font-montserrat font-light text-slBlack pt-[15px]">
                      Warhammer 40 000 Space Marine 2
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex flex-col">
                    <a
                      href="https://worldofwarcraft.blizzard.com/es-es/midnight"
                      target="_blank"
                      className="relative border-4 border-slGold hover:border-slLightBlue duration-300 ease-in rounded-3xl w-[300px] h-[180px] lg:w-[350px] lg:h-[200px] mx-auto bg-slBlack bg-[url('images/portfolio/solo/muri/WoW_Midnight.avif')] bg-contain bg-no-repeat bg-center"
                    >
                      {/* <img
                src={muri}
                alt=""
                className="absolute top-[-30px] left-[-50px] max-w-[100px] md:max-w-[100px] mx-auto "
              />{" "} */}
                    </a>

                    <p className="text-center text-[17px] font-montserrat font-light text-slBlack pt-[15px]">
                      World of Warcraft: Midnight
                    </p>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center  w-full gap-[20px] lg:gap-0">
            <div className="flex flex-col items-center w-full lg:w-auto">
              <div className="w-[150px] lg:w-[204px] shrink-0 relative mx-auto lg:ml-0 lg:pb-0">
                <img
                  src={helmSantiago}
                  alt=""
                  className="absolute top-[50px] left-[-45px] w-[90px] lg:w-auto"
                />
                <img
                  src={santiago}
                  alt=""
                  className="rounded-3xl border-2 border-slWine"
                />
              </div>
              <h4 className="text-slLightBlue font-montserrat font-medium text-center text-[20px] pb-[5px] mx-auto pt-[10px]">
                Santiago Glavina Levis
              </h4>
            </div>
            <div className="overflow-hidden w-full lg:ml-[50px]">
              <Swiper
                spaceBetween={20}
                slidesPerView={1}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
                pagination={true}
                modules={[Pagination, Autoplay]}
                breakpoints={{
                  800: {
                    slidesPerView: 2,
                  },
                  1440: {
                    slidesPerView: 3.2,
                  },
                }}
                // className="lg:hidden mt-[30px] h-[330px] xs:h-[270px]"
                className="overflow-visible  h-[270px] lg:h-[280px] "
              >
                <SwiperSlide>
                  <div className="flex flex-col">
                    <a
                      href="https://store.steampowered.com/app/427410/Abiotic_Factor/"
                      target="_blank"
                      className="relative border-4 border-slGold hover:border-slLightBlue duration-300 ease-in rounded-3xl w-[300px] h-[180px] lg:w-[350px] lg:h-[200px] mx-auto bg-slBlack bg-[url('images/portfolio/solo/santi/Abiotic_Factor.jpg')] bg-contain bg-no-repeat bg-center"
                    >
                      {/* <img
                src={santi}
                alt=""
                className="absolute top-[-30px] left-[-50px] max-w-[100px] md:max-w-[100px] mx-auto "
              />{" "} */}
                    </a>

                    <p className="text-center text-[17px] font-montserrat font-light text-slBlack pt-[15px]">
                      Abiotic Factor
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex flex-col">
                    <a
                      href="https://store.steampowered.com/app/1836560/Aether__Iron/"
                      target="_blank"
                      className="relative border-4 border-slGold hover:border-slLightBlue duration-300 ease-in rounded-3xl w-[300px] h-[180px] lg:w-[350px] lg:h-[200px] mx-auto bg-slBlack bg-[url('images/portfolio/solo/santi/Aether_Iron.jpg')] bg-contain bg-no-repeat bg-center"
                    >
                      {/* <img
                src={santi}
                alt=""
                className="absolute top-[-30px] left-[-50px] max-w-[100px] md:max-w-[100px] mx-auto "
              />{" "} */}
                    </a>

                    <p className="text-center text-[17px] font-montserrat font-light text-slBlack pt-[15px]">
                      Aether & Iron
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex flex-col">
                    <a
                      href="https://store.steampowered.com/app/619540/Darkwater/"
                      target="_blank"
                      className="relative border-4 border-slGold hover:border-slLightBlue duration-300 ease-in rounded-3xl w-[300px] h-[180px] lg:w-[350px] lg:h-[200px] mx-auto bg-slBlack bg-[url('images/portfolio/solo/santi/Darkwater.jpg')] bg-contain bg-no-repeat bg-center"
                    >
                      {/* <img
                src={santi}
                alt=""
                className="absolute top-[-30px] left-[-50px] max-w-[100px] md:max-w-[100px] mx-auto "
              />{" "} */}
                    </a>

                    <p className="text-center text-[17px] font-montserrat font-light text-slBlack pt-[15px]">
                      Darkwater
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex flex-col">
                    <a
                      href="https://store.steampowered.com/app/1430190/Killing_Floor_3/"
                      target="_blank"
                      className="relative border-4 border-slGold hover:border-slLightBlue duration-300 ease-in rounded-3xl w-[300px] h-[180px] lg:w-[350px] lg:h-[200px] mx-auto bg-slBlack bg-[url('images/portfolio/solo/santi/Killing_Floor_3.jpg')] bg-contain bg-no-repeat bg-center"
                    >
                      {/* <img
                src={santi}
                alt=""
                className="absolute top-[-30px] left-[-50px] max-w-[100px] md:max-w-[100px] mx-auto "
              />{" "} */}
                    </a>

                    <p className="text-center text-[17px] font-montserrat font-light text-slBlack pt-[15px]">
                      Killing Floor 3
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex flex-col">
                    <a
                      href="https://store.steampowered.com/app/625960/Stoneshard/"
                      target="_blank"
                      className="relative border-4 border-slGold hover:border-slLightBlue duration-300 ease-in rounded-3xl w-[300px] h-[180px] lg:w-[350px] lg:h-[200px] mx-auto bg-slBlack bg-[url('images/portfolio/solo/santi/Stoneshard.jpg')] bg-contain bg-no-repeat bg-center"
                    >
                      {/* <img
                src={santi}
                alt=""
                className="absolute top-[-30px] left-[-50px] max-w-[100px] md:max-w-[100px] mx-auto "
              />{" "} */}
                    </a>

                    <p className="text-center text-[17px] font-montserrat font-light text-slBlack pt-[15px]">
                      Stoneshard
                    </p>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>

        {/* Testimonials Mobile with Swiper */}
        {/* <Swiper
          spaceBetween={20}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          pagination={true}
          modules={[Pagination, Autoplay]}
          breakpoints={{
            800: {
              slidesPerView: 2,
            },
            1440: {
              slidesPerView: 3,
            },
          }}
          autoplay={{
            delay: 1800,
          }}
          // className="lg:hidden mt-[30px] h-[330px] xs:h-[270px]"
          className="overflow-visible lg:hidden mt-[30px] h-[330px] xs:h-[300px] md:h-[350px] pb-[50px] "
        >
          <SwiperSlide>
            <div className="flex flex-col justify-between">
              <a
                href="https://store.steampowered.com/app/625960/Stoneshard/"
                target="_blank"
                className="relative overflow border-4 border-slGold rounded-3xl w-full md:max-w-[400px] h-[200px] mx-auto bg-slBlack bg-[url('images/portfolio/solo/flor/Stoneshard.jpg')] bg-contain bg-no-repeat bg-center"
              >
                <img
                  src={flor}
                  alt=""
                  className="absolute top-[-30px] left-[-30px] max-w-[100px] md:max-w-[100px] mx-auto "
                />{" "}
              </a>

              <p className="text-center text-[17px] font-montserrat font-light text-slBlack pt-[30px]">
                Stoneshard
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col justify-between">
              <a
                href="https://store.steampowered.com/app/2681030/Outbound/"
                target="_blank"
                className="relative overflow border-4 border-slGold rounded-3xl w-full md:max-w-[400px] h-[200px] mx-auto bg-slBlack bg-[url('images/portfolio/solo/muri/Outbound.png')] bg-contain bg-no-repeat bg-center"
              >
                <img
                  src={muri}
                  alt=""
                  className="absolute top-[-30px] left-[-30px] max-w-[100px] md:max-w-[100px] mx-auto "
                />{" "}
              </a>

              <p className="text-center text-[17px] font-montserrat font-light text-slBlack pt-[30px]">
                Outbound
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col justify-between">
              <a
                href="https://apps.apple.com/us/app/perchang-world/id6477922353"
                target="_blank"
                className="relative overflow border-4 border-slGold rounded-3xl w-full md:max-w-[400px] h-[200px] mx-auto bg-slBlack bg-[url('images/portfolio/solo/muri/Perchang_World.jpg')] bg-contain bg-no-repeat bg-center"
              >
                <img
                  src={muri}
                  alt=""
                  className="absolute top-[-30px] left-[-30px] max-w-[100px] md:max-w-[100px] mx-auto "
                />{" "}
              </a>

              <p className="text-center text-[17px] font-montserrat font-light text-slBlack pt-[30px]">
                Perchang World
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col justify-between">
              <a
                href="https://store.steampowered.com/app/2725470/The_Prisoning_Fletchers_Quest/"
                target="_blank"
                className="relative overflow border-4 border-slGold rounded-3xl w-full md:max-w-[400px] h-[200px] mx-auto bg-slBlack bg-[url('images/portfolio/solo/muri/The_Prisoning_Fletchers_Quest.jpg')] bg-contain bg-no-repeat bg-center"
              >
                <img
                  src={muri}
                  alt=""
                  className="absolute top-[-30px] left-[-30px] max-w-[100px] md:max-w-[100px] mx-auto "
                />{" "}
              </a>

              <p className="text-center text-[17px] font-montserrat font-light text-slBlack pt-[30px]">
                The Prisoning Fletcher's Quest
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col justify-between">
              <a
                href="https://store.steampowered.com/app/2183900/Warhammer_40000_Space_Marine_2/"
                target="_blank"
                className="relative overflow border-4 border-slGold rounded-3xl w-full md:max-w-[400px] h-[200px] mx-auto bg-slBlack bg-[url('images/portfolio/solo/muri/Warhammer_40000_Space_Marine_2.jpg')] bg-contain bg-no-repeat bg-center"
              >
                <img
                  src={muri}
                  alt=""
                  className="absolute top-[-30px] left-[-30px] max-w-[100px] md:max-w-[100px] mx-auto "
                />{" "}
              </a>

              <p className="text-center text-[17px] font-montserrat font-light text-slBlack pt-[30px]">
                Warhammer 40 000 Space Marine 2
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col justify-between">
              <a
                href="https://worldofwarcraft.blizzard.com/es-es/midnight"
                target="_blank"
                className="relative overflow border-4 border-slGold rounded-3xl w-full md:max-w-[400px] h-[200px] mx-auto bg-slBlack bg-[url('images/portfolio/solo/muri/WoW_Midnight.avif')] bg-contain bg-no-repeat bg-center"
              >
                <img
                  src={muri}
                  alt=""
                  className="absolute top-[-30px] left-[-30px] max-w-[100px] md:max-w-[100px] mx-auto "
                />{" "}
              </a>

              <p className="text-center text-[17px] font-montserrat font-light text-slBlack pt-[30px]">
                World of Warcraft: Midnight
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col justify-between">
              <a
                href="https://store.steampowered.com/app/427410/Abiotic_Factor/"
                target="_blank"
                className="relative overflow border-4 border-slGold rounded-3xl w-full md:max-w-[400px] h-[200px] mx-auto bg-slBlack bg-[url('images/portfolio/solo/santi/Abiotic_Factor.jpg')] bg-contain bg-no-repeat bg-center"
              >
                <img
                  src={santi}
                  alt=""
                  className="absolute top-[-30px] left-[-30px] max-w-[100px] md:max-w-[100px] mx-auto "
                />{" "}
              </a>

              <p className="text-center text-[17px] font-montserrat font-light text-slBlack pt-[30px]">
                Abiotic Factor
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col justify-between">
              <a
                href="https://store.steampowered.com/app/1836560/Aether__Iron/"
                target="_blank"
                className="relative overflow border-4 border-slGold rounded-3xl w-full md:max-w-[400px] h-[200px] mx-auto bg-slBlack bg-[url('images/portfolio/solo/santi/Aether_Iron.jpg')] bg-contain bg-no-repeat bg-center"
              >
                <img
                  src={santi}
                  alt=""
                  className="absolute top-[-30px] left-[-30px] max-w-[100px] md:max-w-[100px] mx-auto "
                />{" "}
              </a>

              <p className="text-center text-[17px] font-montserrat font-light text-slBlack pt-[30px]">
                Aether & Iron
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col justify-between">
              <a
                href="https://store.steampowered.com/app/619540/Darkwater/"
                target="_blank"
                className="relative overflow border-4 border-slGold rounded-3xl w-full md:max-w-[400px] h-[200px] mx-auto bg-slBlack bg-[url('images/portfolio/solo/santi/Darkwater.jpg')] bg-contain bg-no-repeat bg-center"
              >
                <img
                  src={santi}
                  alt=""
                  className="absolute top-[-30px] left-[-30px] max-w-[100px] md:max-w-[100px] mx-auto "
                />{" "}
              </a>

              <p className="text-center text-[17px] font-montserrat font-light text-slBlack pt-[30px]">
                Darkwater
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col justify-between">
              <a
                href="https://store.steampowered.com/app/1430190/Killing_Floor_3/"
                target="_blank"
                className="relative overflow border-4 border-slGold rounded-3xl w-full md:max-w-[400px] h-[200px] mx-auto bg-slBlack bg-[url('images/portfolio/solo/santi/Killing_Floor_3.jpg')] bg-contain bg-no-repeat bg-center"
              >
                <img
                  src={santi}
                  alt=""
                  className="absolute top-[-30px] left-[-30px] max-w-[100px] md:max-w-[100px] mx-auto "
                />{" "}
              </a>

              <p className="text-center text-[17px] font-montserrat font-light text-slBlack pt-[30px]">
                Killing Floor 3
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col justify-between">
              <a
                href="https://store.steampowered.com/app/625960/Stoneshard/"
                target="_blank"
                className="relative overflow border-4 border-slGold rounded-3xl w-full md:max-w-[400px] h-[200px] mx-auto bg-slBlack bg-[url('images/portfolio/solo/santi/Stoneshard.jpg')] bg-contain bg-no-repeat bg-center"
              >
                <img
                  src={santi}
                  alt=""
                  className="absolute top-[-30px] left-[-30px] max-w-[100px] md:max-w-[100px] mx-auto "
                />{" "}
              </a>

              <p className="text-center text-[17px] font-montserrat font-light text-slBlack pt-[30px]">
                Stoneshard
              </p>
            </div>
          </SwiperSlide>
        </Swiper> */}
      </section>
    </div>
  );
};

export default SoloMisions;
