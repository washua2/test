'use client';
import Columnar from '@/components/echarts/Columnar';
import DropdownButton from '@/components/commont/DropdownButton';

export default function BuildingRadar() {
  // 获取子组件
  const getChildStatus = (val: object) => {
    console.log('子传父', val);
  };
  return (
    <div>
      <div className="w-full flex items-center justify-between box-border">
        <h1 className="text-[2rem] text-[#F3F4F6] font-bold leading-normal font-Inter p-0 m-0">
        Distribution of WO
        </h1>
        <DropdownButton getStatus={getChildStatus}></DropdownButton>
      </div>
      <div className="w-full h-[23.375rem] mt-8">
        <Columnar></Columnar>
      </div>
    </div>
  );
}
