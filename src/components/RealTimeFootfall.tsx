import DropdownRadioButton from '@/components/commont/DropdownRadioButton';
import React, {useEffect} from 'react';
import {initEcharts} from '@/utils/echarts/footfall';
import {setRem} from '@/utils/rem';

const RealTimeFootfall = () => {
  const style = {
    border: 'solid red 0.0625rem',
  };
  const weekly = {
    borderRadius: 'var(--rounded-xl, 0.75rem)',
    border: '0.0625rem solid #A3A3A3',
  };
  useEffect(() => {
    setRem();
    initEcharts();
  });
  // 获取子组件
  const getChildStatus = (val: object) => {
    console.log('子传父', val);
  };
  return (
    <div className="w-[44rem] h-[27.5rem] mt-[2.5rem] font-Inter">
      <div className="w-full h-[4.5rem] flex flex-row justify-between items-center">
        <span className="text-[#F3F4F6] text-[2rem]">Real-time Footfall</span>
        <DropdownRadioButton getStatus={getChildStatus}></DropdownRadioButton>
      </div>
      <div className="w-full h-[23rem]" id="Footfall"></div>
    </div>
  );
};

export default RealTimeFootfall;
