import React, { useState } from "react";

import ContactForm from "../ContactForm";

import letter from "../../images/contact/letter.svg"

const Contact = () => {
  return( 
    <div className="bg-slBeige pt-[50px] lg:pt-[100px] pb-[200px] overflow-hidden lg:overflow-visible" id="contact">
 <section className="mx-[20px] lg:mx-[230px] ">
  <div className="flex gap-[78px] justify-center mb-[50px] lg:mb-[200px]">
<img src={letter} alt="" className="hidden lg:block w-[500px]"/>
<div>
<h2 className="adelle text-slLightBlue font-light text-[45px] lg:text-[75px]">Send Us A Letter</h2>
<ContactForm/>
</div>
</div>
<div >
<a href=""><p className="font-montserrat text-center underline uppercase font-light text-[24px] lg:text-[30px] text-slLightBlue">Terms Of Service</p></a>
</div>
 </section>
  </div>
  );
};

export default Contact;
