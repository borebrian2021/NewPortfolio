import React from "react";

const BodySection = () => {
  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 bg-[#222228]">
      <div className=" flex justify-center w-[90%]  items-center text-center align-right">
        <div className="w-[100%] h-[550px] flex justify-center items-center text-center align-center">
          <div className="w-[90%] h-[90%] rounded-md  bg-[#31313a]  ">
            <div className="w-[100%] relative h-[40%] bg-[#31313a]  bg-url  rounded-md border-tweaks">
              <img
                class="object-cover bg-[#31313a] h-[100%] w-[100%] rounded-t-md "
                src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1670941004/Portfolio/horizon_kz3clw.jpg"
              />
              <img
                className="absolute h-[140px] w-[140px] object-cover border-4 border-[#31313a] rounded-full bottom-[-30%]  left-[38%] "
                src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1670939243/Portfolio/DSC_7989_xdncll.jpg"
              />
            </div>
            <p className="text-white mt-[15%] text-3xl">Brian Koskei</p>
            <p className="text-orange-500">Frontend Developer</p>
            <div className="w-[100%] flex  m-[3px] justify-center ">
              <div className="w-[80%] text-white flex grid-col-5 h-[70px] m-[3px] bg-gray-700">
                <div className="w-[100%]  m-[0.2%] bg-[#31313a]"></div>
                <div className="w-[100%]  m-[0.2%] bg-[#31313a]"></div>
                <div className="w-[100%]  m-[0.2%] bg-[#31313a]"></div>
                <div className="w-[100%]  m-[0.2%] bg-[#31313a]"></div>
                <div className="w-[100%]  m-[0.2%] bg-[#31313a]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="tabs mt-[10%]">
          <a className="tab tab-lifted text-white">About me</a>
          <a className="tab tab-lifted   tab-active">Education</a>
          <a className="tab tab-lifted  text-white">Skills</a>
          <a className="tab tab-lifted  text-white">Projects</a>
          <a className="tab tab-lifted  text-white">Projects</a>


        </div>
      </div>
    </div>
  );
};

export default BodySection;
