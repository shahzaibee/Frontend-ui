import Image from "next/image";
import Navlogo from "../../public/images/logo-white.svg";
import { Button } from "@/components/ui/button";
import { GiHamburgerMenu } from "react-icons/gi";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { GiFullPizza } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className="custom-img h-[500px] md:h-[650px]">
      <div className="relative top-0 max-w-full h-[5rem] mx-auto px-6 md:px-10 flex md:flex justify-between items-center">
        <div>
          <Image
            src={Navlogo}
            alt="navlogo"
            className="w-16 h-16 rounded-xl"
            width={300}
            height={300}
          />
        </div>
        {/* <ul className="hidden md:flex justify-between items-center gap-x-10 text-red-900 font-semibold">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
          <li>202-555-0188</li>
        </ul> */}
        <div className="block ">
          <Sheet>
            <SheetTrigger asChild>
              <Button className=" bg-orange-400 px-4 py-2 rounded-full hover:bg-orange-400 hover:text-white">
                <GiHamburgerMenu className="text-xl text-white" />
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-white border-none">
              <div className="list-none flex flex-col justify-center gap-y-10 text-black text-3xl pt-20">
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
                <li>202-555-0188</li>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      {/* center text*/}
      <div className="flex relative text-[#ffffff] flex-col justify-center items-center h-[500px] space-y-4 md:space-y-5 mt-2 md:mt-5">
        <h1 className="text-5xl md:text-7xl font-bold">we all love</h1>
        <p className=" text-4xl font-bold  md:text-9xl">nature</p>
        <p className="text-lg  md:text-xl font-extrabold md:pt-0 pt-7">
          Look deep into nature, and you will <br /> understand everything
          better.
        </p>
        <div>
          <button className="bg-yellow-400 text-black border border-none rounded-lg px-4 py-3 hover:bg-yellow-500 transition duration-200">
            Get Started
          </button>
        </div>
        {/* Button div */}
        <div className="flex justify-between fixed top-[35%] right-6  md:top-[44%] md:-right-[2px]  items-center gap-2 bg-[#ffffff] group text-black  px-3 py-2 rounded-md md:hover:bg-blue-500 md:hover:text-white">
          <div className="flex gap-2 md:gap-3">
            <div>
              <GiFullPizza className="text-xl text-blue-700 group-hover:text-white" />
            </div>
            <div>
              <h1>Customize</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
