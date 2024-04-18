'use client';
import DropdownButton from '@/components/commont/DropdownButton';
import ActiveWorkOrder from "@/components/echarts/ActiveWorkOrder"
export default function EnergyConsump() {
  const getChildStatus = (val: Object) => {};
  return (
    <div
      className="w-[48rem] h-[36.625rem] px-8 py-10 rounded-2xl mt-3 box-border"
      style={{backgroundColor: 'rgba(17, 25, 40, 0.80);'}}
    >
      <div className="flex items-center justify-between">
        <div
          className="font-Inter text-[2rem] font-bold text-[#F3F4F6]"
          style={{textShadow: '0px 0.125rem 0.125rem rgba(0, 0, 0, 0.50);'}}
        >
          Total Emissions
        </div>
        <div>
          <DropdownButton getStatus={getChildStatus}></DropdownButton>
        </div>
      </div>
      <div className="mt-8">
        <ActiveWorkOrder></ActiveWorkOrder>
      </div>
    
    </div>
  );
}
