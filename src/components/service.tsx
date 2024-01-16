import Image from "next/image";
import React from "react";
import leaf from "../../public/images/leaf.jpg";

const Service = () => {
  return (
    <div className="w-full h-[800px] mx-auto md:mt-10">
      <div className="w-[80%] mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="md:w-[45%] h-[600px] gap-y-10 lg:gap-y-5 flex flex-col justify-center items-start">
          <div>
            <h1 className="text-[#b4beac]">About us</h1>
          </div>
          <div>
            <p className="text-[#536942] text-2xl">
              Tell website visitors who you are and why they should choose your
              business.
            </p>
          </div>

          <div>
            <p className="text-[#b4beac]">
              Because when a visitor first lands on your website, you’re a
              stranger to them. They have to get to know you in order to want to
              read your blog posts, subscribe to your email newsletter, or buy
              what you’re selling.
            </p>
          </div>
          <div>
            <button className="text-[#b4beac] border p-3">Find Out more</button>
          </div>
        </div>
        <div className="md:w-[45%] h-[600px]">
          <div className=" flex flex-col justify-center items-center h-[600px] ">
            <Image
              src={leaf}
              alt="leaf"
              width={300}
              height={300}
              className="w-[500px] h-[500px] object-cover object-bottom"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
