import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import chest from "../../images/testimonials/chest.svg";
import star from "../../images/testimonials/star.svg";

const Testimonials = () => {
  return (
    <div className=" bg-slBeige py-[50px] lg:py-[100px] overflow-hidden lg:oveflow-visible relative">
      <div
        id="testimonials"
        className="absolute top-[-50px] lg:top-[-40px]"
      ></div>
      <section className="mx-[20px] md:max-w-[75%] lg:max-w-[90%] xl:max-w-[80%] md:mx-auto xxxl:mx-[220px]">
        <h2 className="text-center adelle text-slLightBlue text-[45px] lg:text-[75px] font-light leading-[65px] pb-[10px]">
          Victory!
        </h2>
        <p className="text-center font-montserrat font-light text-slLightBlue text-[20px] lg:text-[30px] uppercase">
          what our clients have to say
        </p>
        {/* Testimonials Desktop */}
        {/* // CHANGE WHEN MORE THAN 2 TESTIMONIALS */}
        {/* <div className="hidden  lg:grid grid-cols-3 lg:gap-x-[100px] xxl:gap-x-[200px] gap-y-[90px] mt-[95px] testimonial-bg relative"> */}
        <div className="hidden lg:grid grid-cols-2 lg:justify-items-center gap-y-[90px] mt-[95px] testimonial-bg relative ">  
          <img
            className="hidden lg:block lg:absolute w-[12px] top-[180px] left-[-30px]"
            src={star}
            alt=""
          />
            {/* // ADD IN REPLACE OF BELOW ONE WHEN MORE THAN 2 TESTIMONIALS */}
          {/* <img
            className="hidden lg:block lg:absolute w-[12px] top-[130px] left-[35%]"
            src={star}
            alt=""
          /> */}
                    <img
            className="hidden lg:block lg:absolute w-[12px] top-[130px] left-[45%]"
            src={star}
            alt=""
          />
              {/* // ADD IN REPLACE OF BELOW ONE WHEN MORE THAN 2 TESTIMONIALS */}
          {/* <img
            className="hidden lg:block lg:absolute w-[12px] top-[190px] right-[20%]"
            src={star}
            alt=""
          /> */}
                    <img
            className="hidden lg:block lg:absolute w-[12px] top-[190px] right-[6%]"
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
            {/* // ADD IN REPLACE OF BELOW ONE WHEN MORE THAN 2 TESTIMONIALS */}
          {/* <img
            className="hidden lg:block lg:absolute w-[18.7px] bottom-[35%] right-[26%]"
            src={star}
            alt=""
          /> */}
                    <img
            className="hidden lg:block lg:absolute w-[18.7px] bottom-[35%] right-[43%]"
            src={star}
            alt=""
          />
           {/* // CHANGE WHEN MORE THAN 2 TESTIMONIALS */}
          {/* <div className="flex flex-col justify-between"> */}
          <div className="flex flex-col max-w-[450px]">
            <p className="text-center text-[24px] font-montserrat font-light text-slBlack leading-[29px] pb-[23px]">
              "SilverLancer has provided us with top-notch English to Spanish
              translation and proofreading services. They are thorough,
              flexible, and quick to respond to inquiries, and have even offered
              valuable input that has helped us streamline our localization
              process. Most importantly, they really care about creating quality
              content, and that dedication is evident in every interaction we
              have with them. Thanks to the SilverLancer team, the Spanish
              version of our game has received high praise from our players."
            </p>
            <p className="text-center text-[20px] font-montserrat font-bold text-slBlack">
              ZigZaGame Inc.
            </p>
          </div>
                {/* // CHANGE WHEN MORE THAN 2 TESTIMONIALS */}
          {/* <div className="flex flex-col justify-between"> */}
          <div className="flex flex-col max-w-[450px]">
            <p className="text-center text-[24px] font-montserrat font-light text-slBlack leading-[29px] pb-[23px]">
            "I have been working with Matías and Florencia for quite some
                time and couldn’t be happier with their translations. They are
                very responsive, thorough, and timely. Their friendliness and
                attention to detail is like no other. They are truly a partner
                in every project, as they strive for perfection and meeting the
                end-client’s specific needs and style no matter how tight the
                deadline may be. I am always confident in handing off requests
                to them knowing I won’t have to ‘chase’ them for delivery or
                drill them with questions as they always provide detailed
                explanations of nuances with their deliveries. I couldn’t be
                happier working with this awesome team!"
            </p>
            <p className="text-center text-[20px] font-montserrat font-bold text-slBlack">
              <span className="italic">~Viki G.</span>
            </p>
          </div>
          {/* <div className="flex flex-col justify-between">
            <p className="text-center text-[24px] font-montserrat font-light text-slBlack leading-[29px] pb-[23px]">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam."
            </p>
            <p className="text-center text-[17px] font-montserrat font-light text-slBlack">
              Bonorum,
              <span className="italic">Malorum</span>
            </p>
          </div> */}
          {/* <div className="flex flex-col justify-between">
            <p className="text-center text-[24px] font-montserrat font-light text-slBlack leading-[29px] pb-[23px]">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud."
            </p>
            <p className="text-center text-[17px] font-montserrat font-light text-slBlack">
              Finibus Bonorum,
              <span className="italic">minim et Malorum</span>
            </p>
          </div> */}
          {/* <div className="flex flex-col justify-between">
            <p className="text-center text-[24px] font-montserrat font-light text-slBlack leading-[29px] pb-[23px]">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua."
            </p>
            <p className="text-center text-[17px] font-montserrat font-light text-slBlack">
              <span className="italic">Magma et Malorum</span>
            </p>
          </div> */}
          {/* <div className="flex flex-col justify-between">
            <p className="text-center text-[24px] font-montserrat font-light text-slBlack leading-[29px] pb-[23px]">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam."
            </p>
            <p className="text-center text-[17px] font-montserrat font-light text-slBlack">
              Bonorum,
              <span className="italic">Malorum</span>
            </p>
          </div> */}
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
            delay: 1800,
          }}
          // className="lg:hidden mt-[30px] h-[330px] xs:h-[270px]"
          className="lg:hidden mt-[30px] h-full pb-[50px]"
        >
          <SwiperSlide>
            <div className="flex flex-col justify-between">
              <p className="text-center text-[17px] font-montserrat font-light text-slBlack leading-auto pb-[23px]">
                "SilverLancer has provided us with top-notch English to Spanish
                translation and proofreading services. They are thorough,
                flexible, and quick to respond to inquiries, and have even
                offered valuable input that has helped us streamline our
                localization process. Most importantly, they really care about
                creating quality content, and that dedication is evident in
                every interaction we have with them. Thanks to the SilverLancer
                team, the Spanish version of our game has received high praise
                from our players."
              </p>
              <p className="text-center text-[20px] font-montserrat font-bold text-slBlack">
                <span className="italic">ZigZaGame Inc.</span>
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col justify-between">
              <p className="text-center text-[17px] font-montserrat font-light text-slBlack leading-auto pb-[23px]">
                "I have been working with Matías and Florencia for quite some
                time and couldn’t be happier with their translations. They are
                very responsive, thorough, and timely. Their friendliness and
                attention to detail is like no other. They are truly a partner
                in every project, as they strive for perfection and meeting the
                end-client’s specific needs and style no matter how tight the
                deadline may be. I am always confident in handing off requests
                to them knowing I won’t have to ‘chase’ them for delivery or
                drill them with questions as they always provide detailed
                explanations of nuances with their deliveries. I couldn’t be
                happier working with this awesome team!"
              </p>
              <p className="text-center text-[20px] font-montserrat font-bold text-slBlack">
                <span className="italic">~Viki G.</span>
              </p>
            </div>
          </SwiperSlide>
          {/* <SwiperSlide>
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
          </SwiperSlide> */}
          {/* <SwiperSlide>
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
          </SwiperSlide> */}
          {/* <SwiperSlide>
            <div className="flex flex-col justify-between">
              <p className="text-center text-[24px] font-montserrat font-light text-slBlack leading-[29px] pb-[23px]">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua."
              </p>
              <p className="text-center text-[17px] font-montserrat font-light text-slBlack">
                <span className="italic">Magma et Malorum</span>
              </p>
            </div>
          </SwiperSlide> */}
          {/* <SwiperSlide>
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
          </SwiperSlide> */}
        </Swiper>

        <img
          src={chest}
          alt=""
          className="w-[144px] mx-auto mt-[20px] lg:mt-[70px]"
        />
      </section>
    </div>
  );
};

export default Testimonials;
