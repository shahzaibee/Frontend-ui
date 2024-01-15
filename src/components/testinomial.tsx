import React from "react";
import testiPic from "../../public/images/quotes.svg";
import avatar from "../../public/images/avatar_on_home.png";
import Image from "next/image";

const Testinomial = () => {
  return (
    <div className="md:h-[350px] h-[350px] w-full bg-[#f6f8f5] mt-[1300px] md:mt-0">
      <div className="flex flex-col justify-center gap-y-4 lg:py-4 items-center mx-auto md:p-10 h-[350px] w-[400px] md:w-[500px]">
        <div className="text-[#c5cdbf] flex flex-col justify-center items-center gap-y-5">
          <Image src={testiPic} alt="test" width={50} height={50} />
        </div>
        <div className="flex flex-col justify-center items-center mx-auto md:p-0 md:text-xl p-8">
          <h1>
            “Original and with an innate understanding of their customer’s
            needs, the team at Love Nature are always a pleasure to work with.”
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center md:mt-5">
          <Image src={avatar} alt="test" width={50} height={50} />
          <h1 className="text-base text-[#536942]">Shahzaib</h1>
        </div>
      </div>
    </div>
  );
};

export default Testinomial;
