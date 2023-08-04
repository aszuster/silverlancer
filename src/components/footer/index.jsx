import React, { useState } from "react";

import logo from "../../images/logo.svg"
import linkedin from "../../images/icon-li.svg"
import twitter from "../../images/icon-tw.svg"
import insta from "../../images/icon-insta.svg"

const Footer = () => {
  return (
  <>
  <section className="bg-slWine px-[44px] py-[35px]">
    <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-0">
      <img src={logo} alt="" className="order-1 h-[46px]" />
      <p className="text-slBeige text-center text-[13px] font-light font-montserrat self-end order-3 lg:order-2">© 2023 - SilverLancer Localizations  /  All Rights Reserved  /  Design by Bar Tramunt</p>
      <div className="flex gap-[40px] self-center order-2 lg:order-3">
        <a href="">
        <img src={linkedin} alt="" />
        </a>
        <a href="">
        <img src={twitter} alt="" />
        </a>
        <a href="">
        <img src={insta} alt="" />
        </a>
      </div>
    </div>

  </section>
  </>
  );
};

export default Footer;
