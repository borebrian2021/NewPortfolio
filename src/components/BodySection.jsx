import React from 'react';

const BodySection = () => {
    return (
        <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 '>
            <div className='w-[100%] h-[550px]  flex justify-center items-center text-center align-right '>
            <div className='w-[90%] h-[90%] rounded-md justify-center items-center text-center align-center  '>
            <div className='w-[100%] relative h-[50%]  bg-url  rounded-md'  >

            <img class="object-cover h-[100%] w-[100%] rounded-t-md " src='https://res.cloudinary.com/dqab6gg7d/image/upload/v1670941004/Portfolio/horizon_kz3clw.jpg'/>
           <img className="absolute h-[140px] w-[140px] object-cover border-4 border-white rounded-full bottom-[-30%]  left-[38%]" src='https://res.cloudinary.com/dqab6gg7d/image/upload/v1670939243/Portfolio/DSC_7989_xdncll.jpg'/>
           
            </div>

           
            </div>
            </div>
            
        </div>
    );
}

export default BodySection;
