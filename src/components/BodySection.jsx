import React, { useState } from "react";
import { motion } from "framer-motion"


const BodySection = () => {
  const [about, setAbout] = useState(true)
  const [education, setEducation] = useState(false)
  const [skills, setSkills] = useState(false)
  const [projects, setProjects] = useState(false)
  const [testimonials, setTestimonial] = useState(false)
  const [cert, setCert] = useState(false)

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
    <div className="transition-all duration-300 ease-in-out grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-1 bg-[#222228]">
      <div className="flex justify-center h-[100%] w-[100%] col-span-1  items-center text-center align-right">
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
            <button className="btn gap-2 m-5 btn-sm text-xs ">
                Preview CV
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>

              </button>
            <div className="w-[100%] flex  m-[3px] justify-center ">
              <div className="w-[80%] text-white flex grid-col-5 h-[70px] m-[3px]">
               
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[100%] w-[100%] flex justify-center col-span-3 items-center align-center">
        <div className=" rounded-md  bg-[#31313a] w-[100%] overflow-x-auto overflow-y-auto gap-1 mr-3 h-[95%] ml-3">
          <div className="tabs flex w-[100%] justify-center items-center align-center mt-5">
            <a className={about ? "tab tab-active tab-lifted " : "tab text-white"} onClick={() => { setActiveTab(1) }} >About me</a>
            <a className={education ? "tab tab-active tab-lifted " : "tab text-white"} onClick={() => { setActiveTab(2) }}>Certification</a>
            <a className={skills ? "tab tab-active tab-lifted " : "tab text-white"} onClick={() => { setActiveTab(3) }}>Skills</a>
            <a className={projects ? "tab tab-active tab-lifted " : "tab text-white"} onClick={() => { setActiveTab(4) }}>Projects</a>
            <a className={testimonials ? "tab tab-active tab-lifted " : "tab text-white"} onClick={() => { setActiveTab(5) }}>Testimonials</a>
          </div>
          {
            about ? <div className="w-[100%] p-[20px]   text-center justify-center flex  flex-col-reverse align-center items-center ">
              <button className="btn gap-2 m-5 btn-sm text-xs ">
                Hire me
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>

              </button>
              <p className="text-white">Nairobi, Kenya</p>
              <p className="text-white">+254712035642</p>
              <p className="text-white">bkimutai2021@gmail.com</p>
              <p className="text-white">
                Building a successful product is a challenge.I am highly
                energetic in user experience design, interfaces and web
                development.
              </p>
            
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
            education ? <div className="w-[100%] p-[20px]  text-center justify-center over flex  flex-col-reverse align-center items-center ">
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
                          I took an hybrid  course in software engineering, I develop  hard and soft abilities. Being a full stack developer is one of the best skills I've acquired. I gained soft skills like leadership, collaboration, and emotional intelligence, among others.

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

            </div> : <div>
            </div>
          } {
            skills ? <div className="w-[100%] p-[20px]  text-center justify-center flex  flex-col-reverse align-center items-center ">
              <div className="w-[100%] ">
                <div className="w-[100%] ">

                  <link href="https://unpkg.com/pattern.css" rel="stylesheet" />

                  <div>
                    <section class="text-gray-200 w-[100%]">
                      <div class="w-[100%] ">
                        {/* <div class="text-center mb-20">
                            <h1 class=" title-font  mb-4 text-4xl font-extrabold leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-6xl">Compétences</h1>
                            <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">L'informatique est vaste et les langages naissent presque à tout moment, je fais tout mon possible pour être à la hauteur afin de répondre au besoin de mes clients et d'apporter de l'aide aux nouveaux développeurs.</p>
                            <div class="flex mt-6 justify-center">
                              <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                            </div>
                          </div> */}
                        <div class="pt-5">

                          <div class="w-[100%] p-4 bg-[#222228]  rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                            <div class="flex items-center justify-between mb-4">
                              <h5 class="text-xl font-bold leading-none text-white dark:text-white">Hard skills</h5>
                              <a href="#" class="text-sm font-medium text-white hover:underline ">
                                View all
                              </a>
                            </div>
                            <div class="flow-root">
                              <ul role="list" class="  ">
                                <li class="py-3 sm:py-4">
                                  <div class="flex items-center space-x-4">
                                    <div class="flex-shrink-0">
                                      <img class="w-10 p-1 h-10 bg-cover" src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1672396319/Portfolio/React-icon.svg_bgcfwg.png" alt="Neil image" />
                                    </div>
                                    <div class="flex-1 min-w-0">
                                      <p class="text-sm font-medium truncate text-white">
                                        React JS
                                      </p>

                                    </div>
                                    <div class="inline-flex items-center text-base font-semibold text-white dark:text-white">
                                      Expert
                                    </div>
                                  </div>
                                </li>
                                <li class="py-3 sm:py-4">
                                  <div class="flex items-center border-none">
                                    <div class="flex-shrink-0">
                                      <img class="w-8 h-8 " src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1672396320/Portfolio/1200px-Ruby_logo.svg_w6kg4w.png" alt="Neil image" />
                                    </div>
                                    <div class="flex-1 min-w-0">
                                      <p class="text-sm font-medium  text-white">
                                       Ruby On Rails
                                      </p>

                                    </div>
                                    <div class="inline-flex items-center text-base font-semibold text-white dark:text-white">
                                      Intermediate
                                    </div>
                                  </div>
                                </li> <li class="py-3 sm:py-4">
                                  <div class="flex items-center border-none">
                                    <div class="flex-shrink-0">
                                      <img class="w-8 h-8 " src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1672396318/Portfolio/Csharp_Logo_b4jx5o.png" alt="Neil image" />
                                    </div>
                                    <div class="flex-1 min-w-0">
                                      <p class="text-sm font-medium  text-white">
                                       C# .NET Framework
                                      </p>

                                    </div>
                                    <div class="inline-flex items-center text-base font-semibold text-white dark:text-white">
                                      Expert
                                    </div>
                                  </div>
                                </li>
                                 <li class="py-3 sm:py-4">
                                  <div class="flex items-center border-none">
                                    <div class="flex-shrink-0">
                                      <img class="w-8 h-8 " src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1672396319/Portfolio/Tailwind_CSS_Logo.svg_mnon60.png" alt="Neil image" />
                                    </div>
                                    <div class="flex-1 min-w-0">
                                      <p class="text-sm font-medium  text-white">
                                       TailwindCSS
                                      </p>

                                    </div>
                                    <div class="inline-flex items-center text-base font-semibold text-white dark:text-white">
                                      Expert
                                    </div>
                                  </div>
                                </li> <li class="py-3 sm:py-4">
                                  <div class="flex items-center border-none">
                                    <div class="flex-shrink-0">
                                      <img class="w-8 h-8 " src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1672396318/Portfolio/732190_stxkuy.png" alt="Neil image" />
                                    </div>
                                    <div class="flex-1 min-w-0">
                                      <p class="text-sm font-medium  text-white">
                                       CSS
                                      </p>

                                    </div>
                                    <div class="inline-flex items-center text-base font-semibold text-white dark:text-white">
                                      Expert
                                    </div>
                                  </div>
                                </li> <li class="py-3 sm:py-4">
                                  <div class="flex items-center border-none">
                                    <div class="flex-shrink-0">
                                      <img class="w-8 h-8 " src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1672396318/Portfolio/732212_ccvyzp.png" alt="Neil image" />
                                    </div>
                                    <div class="flex-1 min-w-0">
                                      <p class="text-sm font-medium  text-white">
                                       HTML
                                      </p>

                                    </div>
                                    <div class="inline-flex items-center text-base font-semibold text-white">
                                      Expert
                                    </div>
                                  </div>
                                </li>
                                

                              </ul>
                            </div>
                          </div>
                          <div class="w-[100%] p-4 mt-4 bg-[#222228]  rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                            <div class="flex items-center justify-between mb-4">
                              <h5 class="text-xl font-bold leading-none text-white dark:text-white">Soft skills</h5>
                             
                            </div>
                            <div class="flow-root">
                              <ul role="list" class="  ">
                                <li class="py-3 sm:py-4">
                                  <div class="flex items-center space-x-4">
                                  <p class="text-sm font-medium truncate text-white">
                                        Communication skills
                                      </p>
                                   
                                  </div>
                                </li>
                                <li class="py-3 sm:py-4">
                                  <div class="flex items-center border-none">
                                    <div class="flex-shrink-0">
                                    <p class="text-sm font-medium truncate text-white">
                                       Self Confidence 
                                    </p>
                                    </div>                                   
                                  </div>
                                </li>
                                 <li class="py-3 sm:py-4">
                                  <div class="flex items-center border-none">
                                    <div class="flex-shrink-0">
                                    <p class="text-sm font-medium truncate text-white">
                                        Communication skills
                                    </p>
                                        </div>
                                    <div class="flex-1 min-w-0">
                                      <p class="text-sm font-medium  text-white">
                                      </p>
                                    </div>
                                  
                                  </div>
                                </li> 
                                <li class="py-3 sm:py-4">
                                  <div class="flex items-center border-none">
                                    <div class="flex-shrink-0">
                                    Leading self
                                     </div>
                                    <div class="flex-1 min-w-0">
                                    
                                    </div>
                                    

                                  </div>
                                </li>
                                

                              </ul>
                            </div>
                          </div>

                        </div></div>
                    </section>

                  </div>
                </div>


              </div>

            </div> : <div>
            </div>
          }
          
          {
            projects ? <div className="w-[100%] p-[20px]  text-center justify-center flex  flex-col-reverse align-center items-center ">
              <div className="w-[100%] ">
                <div className="w-[100%] ">

                  <link href="https://unpkg.com/pattern.css" rel="stylesheet" />

                  <div>
                    <section class="text-gray-200 w-[100%]">
                      <div class="w-[100%] ">
                      <div class="lg:flex mb-4 m-10 rounded mx-auto">

<div class="w-full lg:w-1/3 rounded overflow-hidden shadow-lg m-10 relative flex flex-col">
  <img class="w-full" src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1672560672/Portfolio/Capture_ed9ftc.jpg" alt="Sunset in the mountains"/>
    <div class="px-6 py-4 h-full">
      <div class="font-bold text-xl mb-2">Cedar Gardens and Resort</div>
      <p class="text-white text-base">
      Complete website demonstrating the services offered at Cedar Gardens and resort.
      </p>
    </div>
  <a href="https://cedargardenhotel.co.ke/" class="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
    <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
    <span>Visit</span>
  </a>
</div>

<div class="w-full lg:w-1/3 rounded overflow-hidden shadow-lg m-10">
  <img class="w-full" src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1672560672/Portfolio/Capture2_rvr5ht.jpg" alt="Sunset in the mountains"/>
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">Complete Point of Sale</div>
      <p class="text-gray-700 text-base">
     Comprehensive web-based point of sale system with integrated thermal printers and scanners. 
 </p>
    </div>
  <a href="https://supremesai.co.ke/log_in/Log_in" class="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
    <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
    <span>Load Site</span>
  </a>
</div>

<div class="w-full lg:w-1/3 rounded overflow-hidden shadow-lg m-10">
  <img class="w-full" src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1672560673/Portfolio/Capture1_xqivsd.jpg" alt="Sunset in the mountains"/>
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">Hashtag Technologies Website</div>
      <p class="text-gray-700 text-base">
      Complete website demonstrating the services and goods offered at Hashtag Technologies Limited.   </p>
    </div>
  <a href="http://hashtagtech.co.ke/" class="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
    <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
    <span>Visit Site</span>
  </a>
</div>
<div class="w-full lg:w-1/3 rounded overflow-hidden shadow-lg m-10">
  <img class="w-full" src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1672560674/Portfolio/Capture4_gyt5sw.jpg" alt="Sunset in the mountains"/>
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">My Portfolio</div>
      <p class="text-gray-700 text-base">
      Complete website demonstrating the services and goods offered at Hashtag Technologies Limited.   </p>
    </div>
  <a href="http://hashtagtech.co.ke/" class="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
    <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
    <span>Visit Site</span>
  </a>
</div>

</div>
                      </div></section>
                  </div>
                </div>
              </div>
            </div> : <div></div>}
        </div>
      </div>
    </div>
  );
};

export default BodySection;
