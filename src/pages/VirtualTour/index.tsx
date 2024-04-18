import React from 'react';
import  './index.css';
import RealTimeFootfall from '@/components/RealTimeFootfall';
import AgeDistribution from '@/components/AgeDistribution';
import Gauge from '@/components/echarts/Gauge';
const VirtualTour = () => {
  const style = {
    border: 'solid red 0.0625rem'
  }
  return (
    <div className="font-Inter">
      <div className="w-[48rem] h-[5.75rem] flex flex-row items-center placeTop">
        <div className="text-white text-[2rem] ml-[2rem]">
          <span>Place: </span><span className="font-[700]">Student Activity Centre</span>
        </div>
        <svg className="ml-auto mr-[1.625rem]" xmlns="http://www.w3.org/2000/svg" width="2.5rem" height="2.5rem" viewBox="0 0 40 40" fill="none">
          <path d="M20 27.5L7.5 15L9.25 13.25L20 24L30.75 13.25L32.5 15L20 27.5Z" fill="white" />
        </svg>
      </div>
      <div className="w-[48rem] h-[90rem] mt-[1rem] flex flex-col items-center RealTime" >
        <div className="w-[44rem] h-[5.5rem] mt-[2.5rem] text-[1.75rem] flex flex-row items-center Analysis">
          <span className="text-[#9CA3AF] ml-[1.5rem]">View：</span><span className="font-[500] text-[#F3F4F6]">Demographic Analysis</span>
          <svg className="ml-auto mr-[1.625rem]" xmlns="http://www.w3.org/2000/svg" width="2.5rem" height="2.5rem"
               viewBox="0 0 40 40" fill="none">
            <path d="M20 27.5L7.5 15L9.25 13.25L20 24L30.75 13.25L32.5 15L20 27.5Z" fill="white" />
          </svg>
        </div>
        <RealTimeFootfall />
        <div className="w-[45.125rem] h-[0.0625rem] bg-[#4B5563] mt-[2.5rem]"></div>
        <AgeDistribution />
      </div>
    </div>
  );
};

export default VirtualTour;