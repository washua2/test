'use client';
import Line from '@/components/echarts/Line';
import RealTimeFootfall from '@/components/commont/RealTimeFootfall';
import DropdownRadioButton from '@/components/commont/DropdownRadioButton';
import React, {useState, MouseEvent, useCallback} from 'react';

const hidden = {
  display: 'none',
};
const show = {
  display: 'block',
};

export default function AirQualityIndex() {
  let [isModel, setCount] = useState(false);
  // 切换状态
  // const targetClick = useCallback(() => {
  //   return (event: MouseEvent<HTMLDivElement>) => {
  //     setCount((isModel = !isModel));
  //     console.log(isModel)
  //   };
  // }, []);
  const targetClick = useCallback(() => {
    setCount((isModel = !isModel));
    console.log(isModel);
  }, []);
  // 获取子组件
  const getChildStatus=(val:object)=>{
      console.log("子传父",val)
  }
  return (
    <div>
      <div className="w-[48rem] h-[5.75rem] p-8 shrink-0 bg-[var(--theme-bg)] rounded-2xl box-border flex items-center justify-between">
        <div>
          <span className="text-right text-[2rem] font-normal font-Inter text-white">
            Place:
          </span>
          <span className="text-right text-[2rem] font-bold font-Inter text-white">
            Tree of Wisdom
          </span>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2.5rem"
          height="2.5rem"
          viewBox="0 0 40 40"
          fill="none"
        >
          <path
            d="M20 27.5L7.5 15L9.25 13.25L20 24L30.75 13.25L32.5 15L20 27.5Z"
            fill="white"
          />
        </svg>
      </div>
      <div className="w-[48rem] h-[93.1875rem] bg-[var(--theme-bg)] rounded-2xl py-10 px-8 flex-col items-center gap-8 box-border mt-4">
        <div className="w-full p-6 self-stretch bg-[#374151] rounded-xl box-border flex items-center justify-between border-solid border-[#4B5563] border-[0.0625rem]">
          <div>
            <span className="text-right text-[2rem] font-normal font-Inter text-[#9CA3AF]">
              View:
            </span>
            <span className="text-right text-[2rem] font-bold font-Inter text-white">
              Footfall Analysis
            </span>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2.5rem"
            height="2.5rem"
            viewBox="0 0 40 40"
            fill="none"
          >
            <path
              d="M20 27.5L7.5 15L9.25 13.25L20 24L30.75 13.25L32.5 15L20 27.5Z"
              fill="white"
            />
          </svg>
        </div>
        {/*  Real-time Footfal*/}
        <div className="w-full py-[1.03125rem] flex items-center justify-between box-border mt-4">
          <h1 className="text-[2rem] text-[#F3F4F6] font-bold leading-normal font-Inter p-0 m-0">
            Real-time Footfal
          </h1>
          <DropdownRadioButton getStatus={getChildStatus}></DropdownRadioButton>
        </div>
        {/* 图表 */}
        <div className="mt-8">
          <RealTimeFootfall></RealTimeFootfall>
        </div>
        <div className="w-full justify-center my-8">
          <div className="w-[45.125rem] h-[0.0625rem] bg-[#4B5563]"></div>
        </div>
        {/* Footfall Trend Analysis */}
        <div className="w-full py-[1.03125rem] flex items-center justify-between box-border">
          <h1 className="text-[2rem] text-[#F3F4F6] font-bold leading-normal font-Inter">
            Footfall Trend Analysis
          </h1>
          <DropdownRadioButton getStatus={getChildStatus}></DropdownRadioButton>
        </div>
        {/* 图表 */}
        <div className="mt-5 relative">
          <Line></Line>
          <div className="flex items-center absolute right-0 top-[1%]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2.25rem"
              height="1.5rem"
              viewBox="0 0 36 24"
              fill="none"
            >
              <path d="M18 0L35.3205 24H0.679491L18 0Z" fill="#2AECDA" />
            </svg>
            <span className="text-[var(--Aqua-40)] text-right text-[1.75rem] font-semibold font-Inter ml-4">
              12%
            </span>
          </div>
          <div
            className="absolute top-[0.25rem] left-[10.25rem]"
            id="addEchart"
          >
            <div className="relative">
              <div
                className="w-[2.5rem] h-[2rem] text-[#E5E7EB] font-light font-Inter flex items-center justify-center bg-[#374151]  cursor-pointer"
                onClick={targetClick}
              >
                <span className="text-2xl">+</span>
              </div>
              <div
                className="w-[20rem] h-[11.375rem] p-6 box-border flex flex-col justify-center items-start gap-4 bg-[#374151] rounded-xl absolute mt-4"
                style={isModel ? show : hidden}
              >
                <p
                  className="text-white font-Inter text-[1.75rem] font-normal"
                  id="blue"
                >
                  Activity Zone
                </p>
                <p className="text-white font-Inter text-[1.75rem] font-normal my-4">
                  Co-working Space
                </p>
                <p className="text-white font-Inter text-[1.75rem] font-normal">
                  Display Experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
