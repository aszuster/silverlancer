import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";


import "swiper/css";
import "swiper/css/pagination";

import chest from "../../images/testimonials/chest.svg";
import star from "../../images/testimonials/star.svg";

const Testimonials = () => {
  return (
    <div className="bg-slBeige py-[50px] lg:py-[100px] overflow-hidden lg:oveflow-visible relative" >
       <div id="testimonials" className="absolute top-[-50px] lg:top-[-40px]"></div>
      <section className="mx-[20px] lg:max-w-[90%] xl:max-w-[80%] lg:mx-auto xxxl:mx-[220px]">
        <h2 className="text-center adelle text-slLightBlue text-[45px] lg:text-[75px] font-light leading-[65px] pb-[10px]">
          Victory!
        </h2>
        <p className="text-center font-montserrat font-light text-slLightBlue text-[20px] lg:text-[30px] uppercase">
          what our clients have to say
        </p>
        {/* Testimonials Desktop */}
        <div className="hidden  lg:grid grid-cols-3 lg:gap-x-[100px] xxl:gap-x-[200px] gap-y-[90px] mt-[95px] testimonial-bg relative">
          <img
            className="hidden lg:block lg:absolute w-[12px] top-[180px] left-[-30px]"
            src={star}
            alt=""
          />
          <img
            className="hidden lg:block lg:absolute w-[12px] top-[130px] left-[35%]"
            src={star}
            alt=""
          />
          <img
            className="hidden lg:block lg:absolute w-[12px] top-[190px] right-[20%]"
            src={star}
            alt=""
          />
          <img
            className="hidden lg:block lg:absolute w-[12px] bottom-[20px] left-[-20px]"
            src={star}
            alt=""
          />
          <img
            className="hidden lg:block lg:absolute w-[14.6px] bottom-[120px] left-[27%]"
            src={star}
            alt=""
          />
          <img
            className="hidden lg:block lg:absolute w-[14.6px] bottom-[60px] right-[40%]"
            src={star}
            alt=""
          />
          <img
            className="hidden lg:block lg:absolute w-[14.6px] bottom-[20px] right-[0]"
            src={star}
            alt=""
          />
          <img
            className="hidden lg:block lg:absolute w-[18.7px] bottom-[-10px] left-[39%]"
            src={star}
            alt=""
          />
          <img
            className="hidden lg:block lg:absolute w-[18.7px] bottom-[35%] right-[26%]"
            src={star}
            alt=""
          />
          <div className="flex flex-col justify-between">
            <p className="text-center text-[24px] font-montserrat font-light text-slBlack leading-[29px] pb-[23px]">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud."
            </p>
            <p className="text-center text-[17px] font-montserrat font-light text-slBlack">
              Finibus Bonorum,
              <span className="italic">minim et Malorum</span>
            </p>
          </div>
          <div className="flex flex-col justify-between">
            <p className="text-center text-[24px] font-montserrat font-light text-slBlack leading-[29px] pb-[23px]">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua."
            </p>
            <p className="text-center text-[17px] font-montserrat font-light text-slBlack">
              <span className="italic">Magma et Malorum</span>
            </p>
          </div>
          <div className="flex flex-col justify-between">
            <p className="text-center text-[24px] font-montserrat font-light text-slBlack leading-[29px] pb-[23px]">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam."
            </p>
            <p className="text-center text-[17px] font-montserrat font-light text-slBlack">
              Bonorum,
              <span className="italic">Malorum</span>
            </p>
          </div>
          <div className="flex flex-col justify-between">
            <p className="text-center text-[24px] font-montserrat font-light text-slBlack leading-[29px] pb-[23px]">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud."
            </p>
            <p className="text-center text-[17px] font-montserrat font-light text-slBlack">
              Finibus Bonorum,
              <span className="italic">minim et Malorum</span>
            </p>
          </div>
          <div className="flex flex-col justify-between">
            <p className="text-center text-[24px] font-montserrat font-light text-slBlack leading-[29px] pb-[23px]">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua."
            </p>
            <p className="text-center text-[17px] font-montserrat font-light text-slBlack">
              <span className="italic">Magma et Malorum</span>
            </p>
          </div>
          <div className="flex flex-col justify-between">
            <p className="text-center text-[24px] font-montserrat font-light text-slBlack leading-[29px] pb-[23px]">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam."
            </p>
            <p className="text-center text-[17px] font-montserrat font-light text-slBlack">
              Bonorum,
              <span className="italic">Malorum</span>
            </p>
          </div>
        </div>
        {/* Testimonials Mobile with Swiper */}
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          pagination={true}
          modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 1800
          }}
          className="lg:hidden mt-[30px] h-[330px] xs:h-[270px]"
        >
          <SwiperSlide>
            <div className="flex flex-col justify-between">
              <p className="text-center text-[24px] font-montserrat font-light text-slBlack leading-[29px] pb-[23px]">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud."
              </p>
              <p className="text-center text-[17px] font-montserrat font-light text-slBlack">
                Finibus Bonorum,
                <span className="italic">minim et Malorum</span>
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col justify-between">
              <p className="text-center text-[24px] font-montserrat font-light text-slBlack leading-[29px] pb-[23px]">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua."
              </p>
              <p className="text-center text-[17px] font-montserrat font-light text-slBlack">
                <span className="italic">Magma et Malorum</span>
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col justify-between">
              <p className="text-center text-[24px] font-montserrat font-light text-slBlack leading-[29px] pb-[23px]">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam."
              </p>
              <p className="text-center text-[17px] font-montserrat font-light text-slBlack">
                Bonorum,
                <span className="italic">Malorum</span>
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col justify-between">
              <p className="text-center text-[24px] font-montserrat font-light text-slBlack leading-[29px] pb-[23px]">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud."
              </p>
              <p className="text-center text-[17px] font-montserrat font-light text-slBlack">
                Finibus Bonorum,
                <span className="italic">minim et Malorum</span>
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col justify-between">
              <p className="text-center text-[24px] font-montserrat font-light text-slBlack leading-[29px] pb-[23px]">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua."
              </p>
              <p className="text-center text-[17px] font-montserrat font-light text-slBlack">
                <span className="italic">Magma et Malorum</span>
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col justify-between">
              <p className="text-center text-[24px] font-montserrat font-light text-slBlack leading-[29px] pb-[23px]">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam."
              </p>
              <p className="text-center text-[17px] font-montserrat font-light text-slBlack">
                Bonorum,
                <span className="italic">Malorum</span>
              </p>
            </div>
          </SwiperSlide>
        </Swiper>

        <img src={chest} alt="" className="w-[144px] mx-auto mt-[20px] lg:mt-[70px]" />
      </section>
    </div>
  );
};

export default Testimonials;
