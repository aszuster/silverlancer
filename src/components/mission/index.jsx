import React, { useState } from "react";

import dragon from "../../images/mission/dragon.svg";
import scroll from "../../images/mission/scroll.svg";
import shield from "../../images/mission/shield.svg";
import helmet from "../../images/mission/helmet.svg";
import quill from "../../images/mission/quill.svg";

const Mission = () => {
  return (
    <div className="bg-slBeige overflow-hidden lg:overflow-auto relative" >
      <div id="mission" className="absolute top-[-100px]"></div>
      <section className="lg:h-screen mx-[20px] lg:max-w-[90%] xl:max-w-[80%] lg:mx-auto xxxl:mx-[220px] lg:grid lg:grid-cols-3 gap-y-[50px] xl:gap-y-[0px] xxxl:gap-y-[0px]  gap-x-[170px] xl:gap-x-[90px] xxxl:gap-x-[170px] py-[50px] lg:py-[9%]">
        <h2 className="adelle text-[45px] text-center lg:text-left lg:text-[75px] font-light text-slLightBlue leading-[65px] mb-[50px] lg:mb-0">
          Our Quest
        </h2>
        <div className="flex items-start gap-[20px] mb-[30px] lg:mb-0">
          <img src={scroll} alt="" className="w-[74px]" />
          <div className="pl-[2px]">
          <h4 className="font-montserrat font-medium text-[20px] lg:text-[24px] text-slLightBlue leading-[29px] pb-[5px]">Efficient, quality service</h4>
          <p className="font-montserrat text-slBlack text-[17px] font-light leading-[21px]">
            If you choose SilverLancer to localize your product, you can rest
            assured that you will receive a high quality service from our
            Lancers.
          </p>
          </div>
        </div>
        <div className="flex flex-row-reverse lg:flex-row items-start gap-[20px] mb-[30px] lg:mb-0">
        
          <img src={helmet} alt="" className="w-[74px] px-[10px] lg:px-[10px]" />
     
          <div>
          <h4 className="font-montserrat font-medium text-[20px] lg:text-[24px] text-slLightBlue leading-[29px] pb-[5px]">Translator crediting</h4>
          <p className="font-montserrat text-slBlack text-[17px] font-light leading-[21px]">
            Since all creations come from the mind of our Lancers, why not give
            them the credit they deserve? After all, recognition breeds
            empowerment.
          </p>
         
          </div>
        </div>
        <div className="flex items-start gap-[20px] mb-[30px] lg:mb-0 ">
          <img src={dragon} alt="" className="w-[74px]" />
          <div>
          <h4 className="font-montserrat font-medium text-[20px] lg:text-[24px] text-slLightBlue leading-[29px] pb-[5px]">No machine translation</h4>
          <p className="font-montserrat text-slBlack text-[17px] font-light leading-[21px]">
            While it is true that AI has grown exponentially in recent months,
            here at SilverLancer Localizations, we believe in the power and
            creativity of the human mind. That is why our translations are 100%
            IA-free.
          </p>
          </div>
        </div>
        <div className="flex flex-row-reverse lg:flex-row items-start gap-[20px] mb-[30px] lg:mb-0">
          <img src={shield} alt="" className="w-[74px]" />
          <div>
          <h4 className="font-montserrat font-medium text-[20px] lg:text-[24px] text-slLightBlue leading-[29px] pb-[5px]">Commitment and dedication</h4>
          <p className="font-montserrat text-slBlack text-[17px] font-light leading-[21px]">
            There is nothing more fulfilling and rewarding than to see your
            creation come to life. If your goal is to see that dream translated
            into Spanish, you can count on our Lancers to make it true.
          </p>
          </div>
        </div>
        <div className="flex items-start gap-[20px] ">
          <img src={quill} alt="" className="w-[74px]" />
          <div>
          <h4 className="font-montserrat font-medium text-[20px] lg:text-[24px] text-slLightBlue leading-[29px] pb-[5px]">Professional, constant communication</h4>
          <p className="font-montserrat text-slBlack text-[17px] font-light leading-[21px]">
            A continuous and dedicated rapport is essential for a project to go
            forward. Once you are onboard, we guarantee that our Lancers will
            get in touch with you during every step of the process.
          </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mission;
