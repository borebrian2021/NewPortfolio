import React, { useState,useEffect } from "react";
import { motion } from "framer-motion"


const BodySection = () => {
  const [about, setAbout] = useState(true)
  const [education, setEducation] = useState(false)
  const [skills, setSkills] = useState(false)
  const [projects, setProjects] = useState(false)
  const [testimonials, setTestimonial] = useState(false)
  const [cert, setCert] = useState(false)
  const [projects_,setProjects_]=useState([{name:"Hashtag Technologies Website",image:"https://res.cloudinary.com/dqab6gg7d/image/upload/v1672560673/Portfolio/Capture1_xqivsd.jpg",description:"Complete website demonstrating the services and goods offered at Hashtag Technologies Limited.",url:"http://hashtagtech.co.ke/",location:"Nanyuki,Kenya"}])

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
  useEffect(() => {
    console.log(projects_.name)
  }, [projects_])


  return (
    <div className="transition-all duration-300 ease-in-out grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-1 bg-[#222228]">
      <div className="flex justify-center h-[100%] w-[100%] col-span-1  items-center text-center align-right">
        <div className="w-[100%] h-[500px] flex justify-center items-center text-center align-center">
          <div className="w-[90%] h-[85%] rounded-[5px]  bg-[#31313a]  ">
            <div className="w-[100%] relative h-[30%] bg-[#31313a]  bg-url  rounded-md border-tweaks">
              <img
                class="object-cover bg-[#31313a] h-[100%] w-[100%] rounded-t-[3px] "
                src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1670941004/Portfolio/horizon_kz3clw.jpg"
              />
              <img
                className="absolute h-[80px] w-[80px] object-cover border-2 border-[#31313a] rounded-full bottom-[-20%]  left-[35%] "
                src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1670939243/Portfolio/DSC_7989_xdncll.jpg"
              />
            </div>
            <p className="text-white mt-[15%] text-1xl">Brian Koskei</p>
            <p className="text-orange-500 text-[12px] font-sans">Frontend Developer</p>
            <p className="text-white text-[12px] m-3 font-">
              I am a gifted individual.I work hard to improve and even deliver
              the finest possible outcomes for my industry. I chose programming
              to improve my problem-solving abilities and to share my ideas with
              the rest of the world through my never-ending inventiveness. I'm a
              passionate, outspoken, multi-talented individual that learns
              quickly.{" "}
            </p>
            <button className="btn gap-2 m-5 p-1 h-[50px] rounded-[3px] btn-sm text-xs w-[70%] bg-[#d35a2e] border-1 border-[#31313a]">
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
      <div className="h-[100%]  w-[100%] flex justify-center col-span-3 items-center align-center">
        <div className=" rounded-[3px]  bg-[#31313a] w-[100%] overflow-x-auto overflow-y-auto gap-1 mr-3 h-[95%] ml-3">
          <div className="tabs flex w-[100%] justify-center items-center align-center mt-5">
            <a className={about ? "rounded-[3px]  tab tab-active tab-lifted " : "tab text-white"} onClick={() => { setActiveTab(1) }} >About me</a>
            <a className={education ? "tab tab-active rounded-[3px]  tab-lifted " : "tab text-white"} onClick={() => { setActiveTab(2) }}>Certification</a>
            <a className={skills ? "tab tab-active rounded-[3px]  tab-lifted " : "tab text-white"} onClick={() => { setActiveTab(3) }}>Skills</a>
            <a className={projects ? "tab tab-active rounded-[3px]  tab-lifted " : "tab text-white"} onClick={() => { setActiveTab(4) }}>Projects</a>
            <a className={testimonials ? "tab rounded-[3px]  tab-active tab-lifted " : "tab text-white"} onClick={() => { setActiveTab(5) }}>Testimonials</a>
          </div>
          {
            about ? <div className="w-[100%] p-[20px] rounded-[3px]   text-center justify-center flex  flex-col-reverse align-center items-center ">
              <button className="btn gap-2 m-5 rounded-[3px] p-[1] h-[50px] bg-[#d35a2e] btn-sm text-xs ">
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
                    <div class="rounded-[3px] border p-5 shadow-md w-9/12 bg-[#e5e7eb]">
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
                    <div class="rounded-[3px] border p-5 shadow-md w-9/12 bg-[#e5e7eb]">
                      <div class="flex w-full items-center justify-between border-b pb-3">
                        <div class="flex items-center space-x-3">
                          <div class="h-8 w-8 rounded-full bg-slate-400 bg-cover bg-[url('https://netstorage-tuko.akamaized.net/images/192d4a93a09a17e6.png?imwidth=720')]"></div>
                          <div class="text-lg font-bold text-slate-700 custome_font">Moringa Scool</div>
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
            skills ? <div className="w-[100%] p-[20px]  text-center justify-center over flex  flex-col-reverse align-center items-center ">

              <div className="w-[100%] grid lg:grid-cols-2  gap-4 md:grid-col-2 sm:grid-col-2 grid-col-2">
                <div className="bg-[#e5e7eb] p-4 rounded-[3px] text-dark"> <div class="flex items-center justify-between mb-4">
                  <h5 class="text-xl  leading-none text-dark">Hard skills</h5>
                  <a href="#" class="text-xl font-medium  hover:underline ">
                    Experience
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
                            <p class="text-sm font-medium truncate text-dark">
                              React JS
                            </p>

                          </div>
                          <div class="inline-flex items-center text-base  text-dark dark:text-white">
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
                            <p class="text-sm font-medium  text-dark">
                              Ruby On Rails
                            </p>

                          </div>
                          <div class="inline-flex items-center text-base text-dark dark:text-white">
                            Intermediate
                          </div>
                        </div>
                      </li> <li class="py-3 sm:py-4">
                        <div class="flex items-center border-none">
                          <div class="flex-shrink-0">
                            <img class="w-8 h-8 " src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1672396318/Portfolio/Csharp_Logo_b4jx5o.png" alt="Neil image" />
                          </div>
                          <div class="flex-1 min-w-0">
                            <p class="text-sm font-medium  text-dark">
                              C# .NET Framework
                            </p>

                          </div>
                          <div class="inline-flex items-center text-base  text-dark dark:text-white">
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
                            <p class="text-sm font-medium  text-dark">
                              TailwindCSS
                            </p>

                          </div>
                          <div class="inline-flex items-center text-base  text-dark dark:text-white">
                            Expert
                          </div>
                        </div>
                      </li> <li class="py-3 sm:py-4">
                        <div class="flex items-center border-none">
                          <div class="flex-shrink-0">
                            <img class="w-8 h-8 " src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1672396318/Portfolio/732190_stxkuy.png" alt="Neil image" />
                          </div>
                          <div class="flex-1 min-w-0">
                            <p class="text-sm font-medium  text-dark">
                              CSS
                            </p>

                          </div>
                          <div class="inline-flex items-center text-base  text-dark dark:text-white">
                            Expert
                          </div>
                        </div>
                      </li> <li class="py-3 sm:py-4">
                        <div class="flex items-center border-none">
                          <div class="flex-shrink-0">
                            <img class="w-8 h-8 " src="https://res.cloudinary.com/dqab6gg7d/image/upload/v1672396318/Portfolio/732212_ccvyzp.png" alt="Neil image" />
                          </div>
                          <div class="flex-1 min-w-0">
                            <p class="text-sm font-medium  text-dark">
                              HTML
                            </p>

                          </div>
                          <div class="inline-flex items-center text-base  text-white">
                            Expert
                          </div>
                        </div>
                      </li>


                    </ul>
                  </div>
                </div>
                <div class="flow-root p-4 rounded-[3px] bg-[#e5e7eb]">
                  <ul role="list" class="  ">
                    
                    <li class="text-dark">
                      <div class="flex items-center border-none">
                        <div class="flex-shrink-0">
                          <p class="text-xl font-medium truncate text-dark">
                           Soft Skills
                          </p>
                        </div>
                      </div>
                    </li>  <li class="py-3 sm:py-4">
                      <div class="flex items-center border-none">
                        <div class="flex-shrink-0">
                          <p class="text-sm font-medium truncate text-dark">
                            Self Confidence
                          </p>
                        </div>
                      </div>
                    </li>
                    <li class="py-3 sm:py-4">
                      <div class="flex items-center border-none">
                        <div class="flex-shrink-0">
                          <p class="text-sm font-medium truncate text-dark">
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



            </div> : <div>
            </div>
          }

          {
            projects ? <div className="w-[100%] p-[20px]  text-center justify-center flex  flex-col-reverse align-center items-center ">
              <div className="w-[100%] ">
                <div className="w-[100%] ">

                  <link href="https://unpkg.com/pattern.css" rel="stylesheet" />

    <div className="carousel w-full">
     <div id="item1" className="carousel-item w-full flex justify-center">
    <img src={projects_.image} className="w-full custome-shaddow object-cover  max-h-[300px] rounded-[3px]" />
     </div> 
  <div id="item2" className="carousel-item w-full">
    <img src={projects_.image} className="w-full max-h-[300px] object-cover rounded-[3px]" />
  </div> 
  <div id="item3" className="carousel-item w-full">
    <img src={projects_.image} className="w-full max-h-[300px] object-cover rounded-[3px]" />
  </div> 
  <div id="item4" className="carousel-item w-full">
    <img src={projects_.image} className="w-full max-h-[300px] object-cover rounded-[3px]" />
  </div>
</div> 
<div className="flex justify-center w-full py-2 gap-2">

  <a href="#item1" className="btn btn-xs" onClick={()=>{
    setProjects_ ({name:"Cedar Gardens",image:"https://res.cloudinary.com/dqab6gg7d/image/upload/v1672560672/Portfolio/Capture_ed9ftc.jpg",description:"Complete website showcasing the services offered at Cedar Gardens and resort.",url:"https://cedargardenhotel.co.ke/",location:"Meru,Kenya"});
    }
  }
    
    ><img src={projects_.image} className="h-10 w-10 rounded-full object-cover m-3"/></a> 
  <a href="#item2"  onClick={()=>{
    setProjects_ ({name:"Hashtag Technologies Website",image:"https://res.cloudinary.com/dqab6gg7d/image/upload/v1672560673/Portfolio/Capture1_xqivsd.jpg",description:"Complete website demonstrating the services and goods offered at Hashtag Technologies Limited.",url:"http://hashtagtech.co.ke/",location:"Nanyuki,Kenya"});
    } }><img src={projects_.image} className="h-10 w-10 rounded-full object-cover m-3"/></a> 
  <a href="#item3" onClick={()=>{
      setProjects_ ({name:"Complete Web Based Point of Sale",image:"https://res.cloudinary.com/dqab6gg7d/image/upload/v1672560672/Portfolio/Capture2_rvr5ht.jpg",description:" comprehensive web-based point of sale system with integrated thermal printers and scanners.",url:"https://supremesai.co.ke/system_two/Log_in/",location:"Nairobi,Kenya"});
      }} ><img src={projects_.image} className="h-10 w-10 rounded-full object-cover m-3"/></a> 
  <a href="#item4" className="rounded-full h-[10] w-[10] bg-cover" onClick={()=>{
      setProjects_ ({name:"Inventory Management(Invoice,Delivery & Receipt Generator",image:"https://res.cloudinary.com/dqab6gg7d/image/upload/v1672560674/Portfolio/Capture3_yqki9n.jpg",description:"Complete website showcasing the services offered at Cedar Gardens and resort.",url:"hhttps://supremesai.co.ke/log_in/Log_in",location:"Nairobi,Kenya"});
      }} ><img src={projects_.image} className="h-10 w-10 rounded-full object-cover m-3"/></a>
</div>
<div className="w-100% flex flex-col-reverse items-center align-center justify-center text-[]" >
<a target="_blank" rel="noopener noreferrer" href={projects_.url} className="btn  gap-2 m-5 p-1 h-[50px] rounded-[3px] btn-sm text-xs w-[20%] bg-white text-[#222228] border-1 ">
              Visit Link
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </a>
  <h1 className="text-white text-sm" >{projects_.location}</h1>
  <h1 className="text-white text-xs">{projects_.description}</h1>
  <h1 className="text-white text-lg">{projects_.name}</h1>

 
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
