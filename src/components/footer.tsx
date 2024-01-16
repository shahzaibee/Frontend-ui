import React from "react";
import Navlogo from "../../public/images/logo-white.svg";
import Image from "next/image";
const footer = () => {
  return (
    <div className=" w-[90%] h-[420px] md:h-24 mx-auto flex flex-col md:flex-row justify-evenly items-center mt-10 md:mt-0 overflow-x-hidden">
      <div>
        <u className="flex flex-col md:flex-row gap-x-10 list-none no-underline gap-y-3 md:gap-y-0">
          <li>Home</li>
          <li>About</li>
          <li>Service</li>
          <li>Contact</li>
        </u>
      </div>
      <div className="bg-gray-500 rounded-full mt-4 md:mt-0">
        <Image
          src={Navlogo}
          alt="navlogo"
          width={300}
          height={300}
          className="w-20 h-20"
        />
      </div>
      <div className="mt-2 md:mt-0">
        <h1 className="bg-yellow-500 px-4 ">Love Nature by Shahzaib</h1>
      </div>
    </div>
  );
};

export default footer;
