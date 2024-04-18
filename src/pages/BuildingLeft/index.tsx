'use client';
import "../../assets/css/buildingRight.css"
import BuildingRadar from '@/components/BuildingRadar';
import BuildingColumnar from '@/components/BuildingColumnar';
//
import SystemsOverview from '@/components/SystemsOverview';
import ActiveWorkOrders from '@/components/ActiveWorkOrders';

import React, {useCallback, useState, MouseEvent} from 'react';

export default function BuildingLeft() {
  const bg = {
    backgroundColor: 'rgba(17, 25, 40, 0.90)',
  };
  const active = {
    color: '#F3F4F6',
    textShadow: ' 0.0625rem 0.0625rem 0.125rem rgba(0, 0, 0, 0.50)',
    fontWeight: 600,
    borderBottom: '0.25rem solid  #2AECDA',
  };
  const not_active = {
    color: '#9CA3AF',
    textShadow: ' 0.0625rem 0.0625rem 0.125rem rgba(0, 0, 0, 0.50)',
    fontWeight: 400,
    borderBottom: '0.25rem solid  transparent',
  };
  const boxStyle = {
    border: '0.09375rem solid  #4B5563',
    background: 'rgba(107, 114, 128, 0.30)',
  };
  const border = {
    borderTop: '0.09375rem solid  #4B5563',
    borderBottom: '0.09375rem solid  #4B5563',
  };
  let [count, setCount] = useState<any>(0);
  const targetTabble = useCallback((index?: number) => {
    return (event: MouseEvent<HTMLDivElement>) => {
      if (index == count) {
        return;
      }
      setCount((count = index));
    };
  }, [count]);

  return (
    <div>
      <div className="w-[48rem] p-8 shrink-0 bg-[var(--theme-bg)] rounded-2xl box-border flex items-center justify-between">
        <div>
          <span className="text-right text-[2rem] font-normal font-Inter text-white">
            Place:
          </span>
          <span className="text-right text-[2rem] font-bold font-Inter text-white">
            Area name
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
      <div
        className="w-[48rem] h-[97.9375rem] p-8 mt-4 rounded-2xl box-border"
        style={bg}
      >
        {/* nav */}
        <div className="flex items-center justify-between">
          <div
            className="w-[37%] h-[3.75rem] pt-4 pr-3 pb-4 pl-3 
          flex items-center justify-center gap-10 text-[1.625rem] font-Inter
          text-center tracking-[-0.0325rem]"
           style={count==0 ?active:not_active}  onClick={targetTabble(0)}
          >
            Systems Overview
          </div>
          <div
            className="w-[32.5%] h-[3.75rem] pt-4 pr-3 pb-4 pl-3 flex items-center justify-center gap-10 text-[1.625rem] font-Inter
            text-center tracking-[-0.0325rem]"
            style={count==1 ?active:not_active} onClick={targetTabble(1)}
          >
            WO Trends
          </div>
          <div className="w-[32.5%] h-[3.75rem] pt-4 pr-3 pb-4 pl-3 flex items-center justify-center 
          gap-10 text-[1.625rem] font-Inter
          text-center tracking-[-0.0325rem]"
          style={count==2 ?active:not_active} onClick={targetTabble(2)}>
            CCTV
          </div>
        </div>
        {/*  */}
        <div style={{display: count == 0 ? 'inline-block' : 'none'}}>
          <SystemsOverview></SystemsOverview>
        </div>
        <div className="w-full h-[81.4375rem] buildingScroll" style={{display: count == 1 ? 'inline-block' : 'none'}}>
          <div
            className="w-full flex items-center justify-between py-9"
            style={border}
          >
            <div
              className="w-[33%] h-[10rem] rounded-2xl p-5 box-border"
              style={boxStyle}
            >
              <p className="text-[#D1D5DB] p-0 m-0  font-medium text-[1.625rem] leading-[125%] font-Inter">
                Total
              </p>
              <p className="mt-[2.125rem] text-[#F3F4F6] p-0 m-0 text-[3.75rem] leading-[100%] font-medium font-Inter">
                265
              </p>
            </div>
            <div
              className="w-[33%] h-[10rem] rounded-2xl p-5 mx-5 box-border"
              style={boxStyle}
            >
              <p className="text-[#D1D5DB] p-0 m-0  font-medium text-[1.625rem] leading-[125%] font-Inter">
                Active
              </p>
              <p className="mt-[2.125rem] text-[#F3F4F6] p-0 m-0 text-[3.75rem] leading-[100%] font-medium font-Inter">
                76
              </p>
            </div>
            <div
              className="w-[33%] h-[10rem] rounded-2xl p-5 box-border"
              style={boxStyle}
            >
              <p className="text-[#D1D5DB] p-0 m-0  font-medium text-[1.625rem] leading-[125%] font-Inter">
                Completed
              </p>
              <p className="mt-[2.125rem] text-[#F3F4F6] p-0 m-0 text-[3.75rem] leading-[100%] font-medium font-Inter">
                189
              </p>
            </div>
          </div>
          <div className="mb-[2.25rem]">
            <BuildingRadar></BuildingRadar>
          </div>
          <div className="w-[44rem] h-[29.875rem] py-9" style={border}>
            <BuildingColumnar></BuildingColumnar>
          </div>
          <div className="w-[44rem] h-[29.875rem] py-9" style={border}>
            <ActiveWorkOrders></ActiveWorkOrders>
          </div>
          {/* <div className="w-[44rem] h-[29.875rem] py-9" style={border}>
          <BuildingColumnar></BuildingColumnar>
        </div> */}
        </div>
      </div>
    </div>
  );
}
