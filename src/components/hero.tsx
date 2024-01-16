import Image from "next/image";
import React from "react";

import ServicePic1 from "../../public/images/service-1.jpg";
import ServicePic2 from "../../public/images/service-2.jpg";
import ServicePic3 from "../../public/images/service-3.jpg";

const Hero = () => {
  return (
    <div className="w-full h-[2000px]  md:h-[850px] mx-auto overflow-x-hidden">
      {/* text */}
      <div className="flex flex-col justify-center py-6 md:py-14 items-center space-y-4 h-[150px]">
        <h1 className="text-5xl font-bold text-[#181e0d]">Our Services</h1>
        <span className="border border-b-[#ffd936] w-52"></span>
      </div>
      {/* Images section */}
      <div className=" w-[90%] md:w-[80%] mx-auto h-auto">
        <div className="grid grid-cols-1 md:grid-cols-3  gap-y-6 md:gap-y-0 md:gap-x-6 shadow shadow-white">
          <div className="w-full shadow-xl shadow-white rounded-xl overflow-hidden">
            <Image
              src={ServicePic1}
              alt="service1"
              width={300}
              height={300}
              className="w-[26rem] h-[28rem]"
            />
            <div className="flex flex-col p-6 md:p-4 space-y-5 oy-4">
              <h1>Web Design</h1>
              <p className="text-[15px]">
                Focus on how you can help and benefit <br /> your user. Use
                simple words so that you <br /> dont confuse people.
              </p>
            </div>
          </div>
          <div className=" w-full shadow-xl shadow-white rounded-xl overflow-hidden">
            <Image
              src={ServicePic2}
              alt="service1"
              width={300}
              height={300}
              className="object-cover w-[26rem] h-[28rem]"
            />
            <div className="flex flex-col p-6 md:p-4 space-y-5 oy-4">
              <h1>Web Design</h1>
              <p className="text-[15px]">
                Focus on how you can help and benefit <br /> your user. Use
                simple words so that you <br /> dont confuse people.
              </p>
            </div>
          </div>
          <div className=" w-full shadow-xl shadow-white rounded-xl overflow-hidden">
            <Image
              src={ServicePic3}
              alt="service1"
              width={300}
              height={300}
              className="object-cover w-[26rem] h-[28rem]"
            />
            <div className="flex flex-col p-6 md:p-4 space-y-5 oy-4">
              <h1>Web Design</h1>
              <p className="text-[15px]">
                Focus on how you can help and benefit <br /> your user. Use
                simple words so that you <br /> dont confuse people.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
