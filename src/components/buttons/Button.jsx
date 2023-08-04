import React, { useState } from "react";



const Button = (text) => {

const insideText = text.text

  return (
<button className="bg-slLightBlue py-[9px] px-[25px] text-slBeige font-montserrat font-semibold text-[18px] rounded-[46px]">
{insideText}
</button>
  );
};

export default Button;
