import React from "react";

const Question = () => {
  return ( 
    <div className="custom-image h-[400px] md:mt-0 mt-[400px] overflow-x-hidden">
      <div className="flex justify-center items-center">
        <div className="w-[460px] md:p-2 p-4 md:gap-y-10 gap-y-2  h-[400px] flex flex-col justify-center items-center">
          <h1 className="text-black font-extrabold  text-2xl md:text-6xl">
            QUESTIONS?
          </h1>
          <div className="flex flex-col justify-center items-center  px-2">
            <p className="text-black  text-sm md:text-base pt-3 md:pt-0 font-medium ">
              Whether you’re curious about features, a free trial, or even
              press, we’re here to answer any questions.
            </p>
          </div>
          <div className="pt-4 md:pt-0">
            <button className="bg-yellow-400 pt-4 md:pt-0 text-black border border-none rounded-md p-2 hover:bg-yellow-500 transition duration-200">
              Lets Talk Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
