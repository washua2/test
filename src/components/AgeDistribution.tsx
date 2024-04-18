import DropdownRadioButton from '@/components/commont/DropdownRadioButton';
import React, {useEffect, useState} from 'react';
import {initEcharts} from '@/utils/echarts/ageDistribution';
import {setRem} from '@/utils/rem';
import './index.css';

const AgeDistribution = () => {
  const style = {
    border: 'solid red 0.0625rem',
  };
  const weekly = {
    borderRadius: 'var(--rounded-xl, 0.75rem)',
    border: '0.0625rem solid #A3A3A3',
  };
  const AgeGroup = {
    borderRadius: 'var(--rounded-lg, 0.5rem)',
    background: 'var(--gray-700, #374151)',
  };
  const [isChecked, setIsChecked] = useState<boolean>(false);
  // @ts-ignore
  useEffect(() => {
    setRem();
    initEcharts(false);
  }, []);

  const checkChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // setIsChecked(event.target.checked);
    setIsChecked((prev) => {
      setRem();
      initEcharts(!prev);
      return !prev;
    });
  };
  // 获取子组件
  const getChildStatus = (val: object) => {
    console.log('子传父', val);
  };
  return (
    <div className="w-[44rem] h-[43.375rem] mt-[2.5rem] flex flex-col font-Inter">
      <div className="w-full h-[4.5rem] flex flex-row justify-between items-center">
        <span className="text-[#F3F4F6] text-[2rem]">Age Distribution</span>
        <DropdownRadioButton getStatus={getChildStatus}></DropdownRadioButton>
      </div>
      <div className="mt-[2rem] text-[1.75rem] text-[#F3F4F6]">
        Dominant Age Group
      </div>
      <div className="text-[1.375rem] text-[#F3F4F6] mt-[0.5rem] relative">
        <span className="text-[3rem] text-[#4CD9CF] mr-[0.5rem]">26-30</span>36%
        <div
          className="w-[15rem] h-[3.5rem] ml-auto mt-[2rem] flex flex-row items-center justify-center absolute top-[3rem] right-0 z-[999!important]"
          style={AgeGroup}
        >
          {/*<input type="checkbox" className="text-[2rem] w-[2rem] h-[2rem] bg-[#262B31] rounded-[0.25rem] p-0 m-0"*/}
          {/*       checked={isChecked} onChange={checkChange} />*/}
          <label className="cont">
            <input checked={isChecked} onChange={checkChange} type="checkbox" />
            <span></span>
          </label>
          <span className="text-[1.125rem] text-[#D1D5DB] ml-[1rem]">
            GenderBreakdown
          </span>
        </div>
      </div>
      <div className="w-full h-[28rem] mt-[2rem]" id="AgeDistribution"></div>
    </div>
  );
};

export default AgeDistribution;
