import React, { useState } from 'react';
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { Link, Route, Routes } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

import logo from "../../images/logo.svg"
import linkedin from "../../images/icon-li.png"
import twitter from "../../images/icon-tw.png"
import insta from "../../images/icon-insta.png"

const Header = () => {
    let Links =[
        {name:"Services",link:"/#services"},
        {name:"Mission",link:"/#mission"},
        {name:"About Us",link:"/#aboutus"},
        {name:"Testimonials",link:"/#testimonials"},
        {name:"Portfolio",link:"/#portfolio"},
        {name:"Contact",link:"/#contact"},
      ];
      let [open, setOpen] =useState(false);

    return (
      <div className='bg-slWine pb-[70px]'>
        <div className='shadow-md w-full fixed top-0 left-0 bg-black h-[70px] lg:h-auto z-50 bg-slWine '>
        
           <div className='lg:flex items-center justify-between bg-dark py-4 lg:px-10 px-7 '>

           <HashLink className='lg:hidden' to="/#home">
           <img src={logo} alt="" className='lg:hidden h-[30px] absolute left-5 top-5' />
           </HashLink>
            {/* Menu icon */}
            <div onClick={()=>setOpen(!open)} className='absolute right-8 top-5 cursor-pointer lg:hidden w-7 h-7'>

                {
                    open ? <XMarkIcon className='text-slBeige'/> : <Bars3BottomRightIcon className='text-slBeige' />
                }
            </div>
            {/* link items */}
            <HashLink to="/#home">
            <img src={logo} alt="" className='hidden lg:block h-[46px]' />
            </HashLink>
            <ul className={`lg:flex lg:items-center lg:pb-0 pb-12 absolute lg:static bg-slWine lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-9 lg:mr-[75px] transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>

                {
                    Links.map((link) => (
                    <li className='lg:ml-12 lg:first:ml-0 lg:my-0 my-7 text-slBeige font-montserrat font-normal text-[17px]'>
                        <HashLink to={link.link} className='navbar-link duration-500 font-montserrat font-normal text-[17px] underlineAnim'>{link.name}</HashLink>
                    </li>))
                }
            </ul>
            {/* button */}
            <div className="hidden lg:flex gap-[40px] self-center">
        <a href="https://www.linkedin.com/company/silverlancerloc/" className='social'>
        <img src={linkedin} alt="" />
        </a>
        <a href="https://twitter.com/silverlancerloc" className='social'>
        <img src={twitter} alt="" />
        </a>
        <a href="https://www.instagram.com/silverlancerloc/" className='social'>
        <img src={insta} alt="" />
        </a>
      </div>
           </div>
           
        </div>

        </div>
    );
};

export default Header;
