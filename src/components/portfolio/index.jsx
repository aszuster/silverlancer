import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import tokyodeb from "../../images/portfolio/ogp.png";
import teaforsana from "../../images/portfolio/tea-for-sana.jpg";

const Portfolio = () => {
  return (
    <div className=" bg-slBeige py-[50px] lg:py-[100px] overflow-hidden lg:oveflow-visible relative">
      <div id="portfolio" className="absolute top-[-50px] lg:top-[-40px]"></div>
      <section className="mx-[20px] md:max-w-[75%] lg:max-w-[90%] xl:max-w-[80%] md:mx-auto xxxl:mx-[220px]">
        <h2 className="text-center adelle text-slLightBlue text-[45px] lg:text-[75px] font-light leading-[65px] pb-[10px]">
          Portfolio
        </h2>
        <p className="text-center font-montserrat font-light text-slLightBlue text-[20px] lg:text-[30px] uppercase">
          Our Successful Quests!
        </p>
        <p className="text-center font-montserrat font-light text-slLightBlue text-[20px] lg:text-[30px] uppercase"></p>
        {/* Testimonials Desktop */}
        {/* // CHANGE WHEN 3 OR MORE TESTIMONIALS */}
        {/* Change div class for the following: */}
        {/* hidden lg:grid grid-cols-3 lg:gap-x-[100px] gap-y-[90px] mt-[95px] testimonial-bg relative */}
        <div className="hidden lg:grid grid-cols-2 mt-[95px] testimonial-bg relative">
          <div className="flex flex-col justify-between mt-[20px] lg:mt-[70px]">
            {/* Change cards width class (w-[400]) for the following: */}
            {/* w-full */}
            <div className="border-4 border-slGold rounded-3xl w-[400px] h-[200px] mx-auto bg-slBlack bg-[url('images/portfolio/ogp.png')] bg-contain bg-no-repeat bg-center"></div>
            {/* <img
              src={tokyodeb}
              alt=""
              className="border-4 border-slGold rounded-3xl max-w-[333px] md:max-w-[450px] mx-auto "
            /> */}

            <p className="text-center text-[17px] font-montserrat font-light text-slBlack pt-[30px]">
              Tokyo Debunker
            </p>
          </div>
          <div className="flex flex-col justify-between mt-[20px] lg:mt-[70px]">
            <div className="border-4 border-slGold rounded-3xl w-[400px] h-[200px] mx-auto bg-slBlack bg-[url('images/portfolio/tea-for-sana.jpg')] bg-contain bg-no-repeat bg-center"></div>
            {/* <img
              src={teaforsana}
              alt=""
              className="border-4 border-slGold rounded-3xl max-w-[333px] md:max-w-[450px] mx-auto "
            /> */}

            <p className="text-center text-[17px] font-montserrat font-light text-slBlack pt-[30px]">
              Tea for Sana (Steam Page)
            </p>
          </div>
        </div>

        {/* Testimonials Mobile with Swiper */}
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
              slidesPerView: 3,
            },
          }}
          autoplay={{
            delay: 1800,
          }}
          // className="lg:hidden mt-[30px] h-[330px] xs:h-[270px]"
          className="lg:hidden mt-[30px] h-[330px] xs:h-[300px] md:h-[350px] pb-[50px] "
        >
          <SwiperSlide>
            <div className="flex flex-col justify-between">
              {/* <img
                src={tokyodeb}
                alt=""
                className="border-4 border-slGold rounded-3xl max-w-[333px] md:max-w-[450px] mx-auto "
              /> */}
              <div className="border-4 border-slGold rounded-3xl w-full md:max-w-[400px] h-[200px] mx-auto bg-slBlack bg-[url('images/portfolio/ogp.png')] bg-contain bg-no-repeat bg-center"></div>

              <p className="text-center text-[17px] font-montserrat font-light text-slBlack pt-[30px]">
                Tokyo Debunker
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col justify-between">
              <div className="border-4 border-slGold rounded-3xl w-full md:max-w-[400px] h-[200px] mx-auto bg-slBlack bg-[url('images/portfolio/tea-for-sana.jpg')] bg-contain bg-no-repeat bg-center"></div>
              {/* <img
                src={teaforsana}
                alt=""
                className="border-4 border-slGold rounded-3xl max-w-[333px] md:max-w-[450px] mx-auto "
              /> */}

              <p className="text-center text-[17px] font-montserrat font-light text-slBlack pt-[30px]">
              Tea for Sana (Steam Page)
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  );
};

export default Portfolio;
