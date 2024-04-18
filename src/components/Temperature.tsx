import React, {useEffect} from 'react';
import {setRem} from '@/utils/rem';
import {initEcharts} from '@/utils/echarts/temperature';
import {initEcharts as initEcharts2} from '@/utils/echarts/humidity';

const Temperature = () => {
  const style = {
    border: 'solid red 0.0625rem'
  }
  const weekly = {
    borderRadius: 'var(--rounded-xl, 0.75rem)',
    border: '0.0625rem solid #A3A3A3',
  }
  useEffect(() => {
    setRem()
    initEcharts()
    initEcharts2()
  });
  return (
    <div className="w-[44rem] h-[62rem] mt-[2.5rem] ml-[0.625rem] font-Inter">
      <div className="w-full h-[4.5rem] flex flex-row justify-between items-center">
        <span className="text-[#F3F4F6] text-[2rem]">Temperature & Humidity</span>
        <div className="w-[18.125rem] h-full flex flex-row items-center">
          <span className="text-[#D1D5DB] text-[1.625rem] ml-[1.25rem]">View：<span
            className="text-[#F3F4F6]">Weekly</span></span>
          <svg className="m-auto mr-[1.25rem]" xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem"
               viewBox="0 0 32 32" fill="none">
            <path d="M16 22L6 12L7.4 10.6L16 19.2L24.6 10.6L26 12L16 22Z" fill="#F3F4F6" />
          </svg>
        </div>
      </div>
      <div className="mt-[2rem] w-full flex flex-row justify-between items-center text-[#F3F4F6] font-Inter">
        <span className="text-[2rem]">Temperature</span>
        <span className="text-[2.25rem]">19℃</span>
      </div>
      <div className="w-full h-[24rem]" id="Temperature"></div>
      <div className="mt-[2rem] w-full flex flex-row justify-between items-center text-[#F3F4F6] font-Inter">
        <span className="text-[2rem]">Humidity</span>
        <span className="text-[2.25rem]">19℃</span>
      </div>
      <div className="w-full h-[24rem]" id="Humidity"></div>
    </div>
  );
};

export default Temperature;