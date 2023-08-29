import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";

import ContactForm from "../ContactForm";


import letter from "../../images/contact/letter.svg"

const Contact = () => {
  return( 
    <div className="bg-slBeige pt-[50px] lg:pt-[100px] pb-[200px] overflow-hidden lg:overflow-visible relative" >
     
      <div id="contact" className="absolute top-[-100px]"></div>
 <section className="mx-[20px] lg:max-w-[90%] xl:max-w-[80%] lg:mx-auto xxxl:mx-[220px] ">
  <div className="flex gap-[78px] justify-center mb-[50px] lg:mb-[200px]">
<img src={letter} alt="" className="hidden lg:block w-[500px]"/>
<div>
<h2 className="adelle text-slLightBlue font-light text-[45px] lg:text-[75px]">Send Us A Letter</h2>
<ContactForm/>
</div>
</div>
<div >
<Link to="/terms-and-services"><p className="font-montserrat text-center underline uppercase font-light text-[24px] lg:text-[30px] text-slLightBlue termslink">Terms Of Service</p></Link>
</div>
 </section>
  </div>
  );
};

export default Contact;
