import React, { useState } from "react";
import { motion } from "framer-motion"

const menuVariants = {
  open: {
    opacity: 1,
    x: 0,
  },
  closed: {
    opacity: 0,
    x: '-100%',
  },
}
const BodySection = () => {
  const [about, setAbout] = useState(true)
  const [education, setEducation] = useState(false)
  const [skills, setSkills] = useState(false)
  const [projects, setProjects] = useState(false)
  const [testimonials, setTestimonial] = useState(false)
  const [cert, setCert] = useState(false)


  const setActiveTab = (id) => {
    switch (id) {
      case 1:
        setAbout(true)
        setEducation(false)
        setSkills(false)
        setProjects(false)
        setTestimonial(false)
        setCert(false)

        break;
      case 2:
        setAbout(false)
        setEducation(true)
        setSkills(false)
        setProjects(false)
        setTestimonial(false)
        setCert(false)
        break;
      case 3:
        setAbout(false)
        setEducation(false)
        setSkills(true)
        setProjects(false)
        setTestimonial(false)
        setCert(false)
        break;
      case 4:
        setAbout(false)
        setEducation(false)
        setSkills(false)
        setProjects(true)
        setTestimonial(false)
        setCert(false)
        break;
      case 5:
        setAbout(false)
        setEducation(false)
        setSkills(false)
        setProjects(false)
        setTestimonial(true)
        setCert(false)
        break;
      case 6:
        setAbout(false)
        setEducation(false)
        setSkills(false)
        setProjects(false)
        setTestimonial(false)
        setCert(true)
        break;

    }
  }



  return (
    <div className= {about ? "bg-[#222228] transition-all duration-300 ease-in-out" : "transition-all duration-300 ease-in-out grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-1 bg-[#222228]"}>
      <div className={ about ?"hidden":"flex justify-center h-[100%] w-[100%] col-span-1  items-center text-center align-right"}>
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
            <a className={about ? "tab tab-active tab-lifted " : "tab text-white"} onClick={() => { setActiveTab(1) }} >About me</a>
            <a className={education ? "tab tab-active tab-lifted " : "tab text-white"} onClick={() => { setActiveTab(2) }}>Certification</a>
            <a className={skills ? "tab tab-active tab-lifted " : "tab text-white"} onClick={() => { setActiveTab(3) }}>Skills</a>
            <a className={projects ? "tab tab-active tab-lifted " : "tab text-white"} onClick={() => { setActiveTab(4) }}>Projects</a>
            <a className={testimonials ? "tab tab-active tab-lifted " : "tab text-white"} onClick={() => { setActiveTab(5) }}>Testimonials</a>
          </div>
          {
            about ? <div className="w-[100%] p-[20px]  text-center justify-center flex  flex-col-reverse align-center items-center ">
              <p className="text-white">
                Building a successful product is a challenge. I am highly
                energetic in user experience design, interfaces and web
                development.
              </p>{" "}
              <div className=" grid lg:grid-cols-3 md:grid-col-3 sm:grid-col-2 grid-col-2 w-[100%]">
                <div className="w-[100%] grid lg:grid-cols-2 md:grid-col-2 sm:grid-col-2 grid-col-2">
                  <div className="text-left flex atems-left">  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg></div>
                  <div className="text-right flex atems-right">Nairobi, Kenya</div>
                </div>


              </div>
              <img
                src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1671186857/Portfolio/aboutme_e0vvlj.gif"
                className="h-[160px] align-center"
              />
            </div> : <div>
            </div>
          }
          {
            education ? <div className="w-[100%] p-[20px]  text-center justify-center flex  flex-col-reverse align-center items-center ">
             
              <div className=" ">
                <div className="w-[100%] grid lg:grid-cols-2 md:grid-col-2 sm:grid-col-2 grid-col-2">

                <div class='flex items-center justify-center '>  
                  <div class="rounded-xl border p-5 shadow-md w-9/12 bg-[#e5e7eb]">
                    <div class="flex w-full items-center justify-between border-b pb-3">
                      <div class="flex items-center space-x-3">
                        <div class="h-8 w-8 rounded-full bg-slate-400 bg-cover bg-[url('https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/295453090_479863670806352_4369703827020652282_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGckKzLjo7LcY8-8cqQcuFJDrot8yY8B4QOui3zJjwHhFT5RxP9rMlV2zkGL0yQdUJ42_LH0a3_3m4Ox9ueIE86&_nc_ohc=6Iga3vyEUkoAX-hzTQh&_nc_ht=scontent.fnbo10-1.fna&oh=00_AfAv0XAW2_8ptluJkG0QEd7uQK8dyQJbcn0nVAOaSMLX1A&oe=63B2098E')]"></div>
                        <div class="text-lg font-bold text-slate-700">University Of Kabianga</div>
                      </div>
                     
                    </div>

                    <div class="mt-4 mb-6">
                     
                      <div class="text-sm text-neutral-600">I completed four years of technical software development training where I honed my time management, team-building, and ability to design Web applications. I also acquired entrepreneurial abilities, such as business management abilities.</div>
                    </div>

                    <div>
                      <div class="flex items-center justify-between text-slate-500">
                        <div class="flex space-x-4 md:space-x-8">
                          <div class="flex cursor-pointer items-center transition hover:text-slate-600">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
</svg>

                            <span>2017-2021</span>
                          </div>
                         
                        </div>
                      </div>
                    </div>
                  </div>
                  </div><div class='flex items-center justify-center '>  
                  <div class="rounded-xl border p-5 shadow-md w-9/12 bg-[#e5e7eb]">
                    <div class="flex w-full items-center justify-between border-b pb-3">
                      <div class="flex items-center space-x-3">
                        <div class="h-8 w-8 rounded-full bg-slate-400 bg-cover bg-[url('https://netstorage-tuko.akamaized.net/images/192d4a93a09a17e6.png?imwidth=720')]"></div>
                        <div class="text-lg font-bold text-slate-700">Moringa Scool</div>
                      </div>
                     
                    </div>

                    <div class="mt-4 mb-6">
                     
                      <div class="text-sm text-neutral-600">
                      I took a 6-month hybrid intense course in software engineering, which pushed me to develop both hard and soft abilities. Being a full stack developer is one of the best skills I've acquired. I gained soft skills like leadership, collaboration, and emotional intelligence, among others. Additionally, I am familiar with the github version control system.

                      </div>
                    </div>

                    <div>
                      <div class="flex items-center justify-between text-slate-500">
                        <div class="flex space-x-4 md:space-x-8">
                          <div class="flex cursor-pointer items-center transition hover:text-slate-600">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
</svg>

                            <span>April,2022- November,2022</span>
                          </div>
                         
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                 
                  <div className="text-right flex atems-right">Nairobi, Kenya</div>
                </div>


              </div>
              <img
                src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1672211775/Portfolio/animation_300_lc7bo2dh_uvjux4.gif"
                className="h-[160px] align-center"
              />
            </div> : <div>
            </div>
          }
         
        </div>
      </div>
    </div>
  );
};

export default BodySection;
