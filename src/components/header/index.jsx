import React, { useState } from 'react';
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'

import logo from "../../images/logo.svg"
import linkedin from "../../images/icon-li.svg"
import twitter from "../../images/icon-tw.svg"
import insta from "../../images/icon-insta.svg"

const Header = () => {
    let Links =[
        {name:"Services",link:"#services"},
        {name:"Mission",link:"#mission"},
        {name:"About Us",link:"#aboutus"},
        {name:"Testimonials",link:"#testimonials"},
        {name:"Contact",link:"#contact"},
      ];
      let [open, setOpen] =useState(false);

    return (
      <div className='bg-slWine pb-[100px]'>
        <div className='shadow-md w-full fixed top-0 left-0 bg-black h-[70px] lg:h-auto z-50 bg-slWine '>
        
           <div className='md:flex items-center justify-between bg-dark py-4 md:px-10 px-7 '>

            
           <img src={logo} alt="" className='lg:hidden h-[30px] absolute left-5 top-5' />
            {/* Menu icon */}
            <div onClick={()=>setOpen(!open)} className='absolute right-8 top-5 cursor-pointer md:hidden w-7 h-7'>

                {
                    open ? <XMarkIcon className='text-slBeige'/> : <Bars3BottomRightIcon className='text-slBeige' />
                }
            </div>
            {/* link items */}
            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-slWine md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
            <img src={logo} alt="" className='hidden lg:block h-[46px]' />
                {
                    Links.map((link) => (
                    <li className='md:ml-12 md:my-0 my-7 text-slBeige font-montserrat font-normal text-[17px]'>
                        <a href={link.link} className='navbar-link duration-500 font-montserrat font-normal text-[17px]'>{link.name}</a>
                    </li>))
                }
            </ul>
            {/* button */}
            <div className="hidden md:flex gap-[40px] self-center">
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
           
        </div>

        </div>
    );
};

export default Header;
