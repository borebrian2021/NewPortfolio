import React from "react";

const BodySection = () => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-1 bg-[#222228]">
      <div className=" flex justify-center h-[100%] w-[100%] col-span-1  items-center text-center align-right">
        <div className="w-[100%] h-[500px] flex justify-center items-center text-center align-center">
          <div className="w-[90%] h-[85%] rounded-md  bg-[#31313a]  ">
            <div className="w-[100%] relative h-[30%] bg-[#31313a]  bg-url  rounded-md border-tweaks">
              <img
                class="object-cover bg-[#31313a] h-[100%] w-[100%] rounded-t-md "
                src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1670941004/Portfolio/horizon_kz3clw.jpg"
              />
              <img
                className="absolute h-[80px] w-[80px] object-cover border-2 border-[#31313a] rounded-full bottom-[-20%]  left-[35%] "
                src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1670939243/Portfolio/DSC_7989_xdncll.jpg"
              />
            </div>
            <p className="text-white mt-[15%] text-1xl">Brian Koskei</p>
            <p className="text-orange-500 text-[12px]">Frontend Developer</p>
            <p className="text-white text-[12px] m-3">
              I am a gifted individual.I work hard to improve and even deliver
              the finest possible outcomes for my industry. I chose programming
              to improve my problem-solving abilities and to share my ideas with
              the rest of the world through my never-ending inventiveness. I'm a
              passionate, outspoken, multi-talented individual that learns
              quickly.{" "}
            </p>

            <div className="w-[100%] flex  m-[3px] justify-center ">
              <div className="w-[80%] text-white flex grid-col-5 h-[70px] m-[3px]">
                <div className="w-[30px] h-[30px] rounded-full m-3  m-[0.2%] bg-[#222228] text-white flex justify-center align-center items-center">
                  <a>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      class="w-5 h-5"
                    >
                      <path
                        fill="currentColor"
                        d="M94.12 315.1c0 25.9-21.16 47.06-47.06 47.06S0 341 0 315.1c0-25.9 21.16-47.06 47.06-47.06h47.06v47.06zm23.72 0c0-25.9 21.16-47.06 47.06-47.06s47.06 21.16 47.06 47.06v117.84c0 25.9-21.16 47.06-47.06 47.06s-47.06-21.16-47.06-47.06V315.1zm47.06-188.98c-25.9 0-47.06-21.16-47.06-47.06S139 32 164.9 32s47.06 21.16 47.06 47.06v47.06H164.9zm0 23.72c25.9 0 47.06 21.16 47.06 47.06s-21.16 47.06-47.06 47.06H47.06C21.16 243.96 0 222.8 0 196.9s21.16-47.06 47.06-47.06H164.9zm188.98 47.06c0-25.9 21.16-47.06 47.06-47.06 25.9 0 47.06 21.16 47.06 47.06s-21.16 47.06-47.06 47.06h-47.06V196.9zm-23.72 0c0 25.9-21.16 47.06-47.06 47.06-25.9 0-47.06-21.16-47.06-47.06V79.06c0-25.9 21.16-47.06 47.06-47.06 25.9 0 47.06 21.16 47.06 47.06V196.9zM283.1 385.88c25.9 0 47.06 21.16 47.06 47.06 0 25.9-21.16 47.06-47.06 47.06-25.9 0-47.06-21.16-47.06-47.06v-47.06h47.06zm0-23.72c-25.9 0-47.06-21.16-47.06-47.06 0-25.9 21.16-47.06 47.06-47.06h117.84c25.9 0 47.06 21.16 47.06 47.06 0 25.9-21.16 47.06-47.06 47.06H283.1z"
                      />
                    </svg>
                  </a>
                </div>
                <div className="w-[30px] h-[30px] rounded-full m-3  m-[0.2%] bg-[#222228] text-white flex justify-center align-center items-center">
                  <a>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      class="w-5 h-5"
                    >
                      <path
                        fill="currentColor"
                        d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
                      />
                    </svg>
                  </a>
                </div>{" "}
                <div className="w-[30px] h-[30px] rounded-full m-3  m-[0.2%] bg-[#222228] text-white flex justify-center align-center items-center">
                  <a>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      class="w-5 h-5"
                    >
                      <path
                        fill="currentColor"
                        d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                      />
                    </svg>
                  </a>
                </div>{" "}
                <div className="w-[30px] h-[30px] rounded-full m-3  m-[0.2%] bg-[#222228] text-white flex justify-center align-center items-center">
                  <a>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 496 512"
                      class="w-5 h-5"
                    >
                      <path
                        fill="currentColor"
                        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[100%] w-[100%] flex justify-center col-span-3 items-center align-center">
        <div className=" rounded-md  bg-[#31313a] w-[100%] gap-1 mr-3 h-[95%] ml-3">
          <div className="tabs flex w-[100%] justify-center items-center align-center mt-5">
            <a className="tab tab-lifted  tab-active">About me</a>
            <a className="tab   text-white">Education</a>
            <a className="tab  text-white">Skills</a>
            <a className="tab   text-white">Projects</a>
            <a className="tab    text-white">Projects</a>
            <a className="tab    text-white">Testimonials</a>
            <a className="tab first-letter: text-white">Certification</a>
          </div>
          <div className="w-[100%] p-[20px] flex flex-row-reverse justify-center align-center items-center">
            <p className="text-white">
              Building a successful product is a challenge. I am highly
              energetic in user experience design, interfaces and web
              development.
            </p>
          
          </div>
          <div className="w-[100%] p-[20px] flex flex-row-reverse justify-center align-center items-center">
       

            <button class="bg-orange-500 hover:bg-orange-400 btn-sm text-white font-bold  px-4 border-b-4 border-orange-700 hover:border-orange-500 rounded-full">
  Download CV
</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodySection;
