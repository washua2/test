'use client';
import RoundCake from '@/components/echarts/RoundCake';

const boxStyle = {
  border: '0.09375rem solid  #4B5563',
  background: 'rgba(107, 114, 128, 0.30)',
};
const numboxStyle = {
  border: '0.09375rem solid  #4B5563',
  background: 'rgba(107, 114, 128, 0.30)',
};
export default function WorkOrderManagement() {
  return (
    <div
      className="w-[47.5rem] h-[31.4375rem] flex items-start flex-col py-10 px-8 box-border self-stretch rounded-2xl font-Inter mt-4"
      style={{
        background: 'rgba(17, 25, 40, 0.80)',
      }}
    >
      <h1
        className="p-0 m-0 text-left text-[#F3F4F6] text-[2rem] font-bold font-Inter"
        style={{textShadow: '0px 0.125rem 0.125rem rgba(0, 0, 0, 0.50)'}}
      >
        Work Order Management
      </h1>
      <div className="w-full flex items-center justify-between mt-8">
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
      <div className="relative w-full flex items-start mt-2">
        {/* 图表 */}
        <div className="mt-6">
          <RoundCake></RoundCake>
        </div>
        <div className="flex justify-center flex-wrap mt-10">
          <div className="flex items-center">
            <div className="w-[2.625rem] h-[4.25rem] text-[var(--Aqua-40)] text-center px-[0.1875rem] font-Inter text-[3.75rem] font-medium leading-[4.25rem] bg-[#374151] rounded-sm">2</div>
            <div className="w-[2.625rem] h-[4.25rem] text-[var(--Aqua-40)] text-center px-[0.1875rem] font-Inter text-[3.75rem] font-medium leading-[4.25rem] bg-[#374151] rounded-sm ml-[0.15rem]">0</div>
            <span className="text-[var(--Aqua-40)] text-center font-Inter text-[3.75rem] font-medium leading-[4.25rem]">:</span>
            <div className="w-[2.625rem] h-[4.25rem] text-[var(--Aqua-40)] text-center px-[0.1875rem] font-Inter text-[3.75rem] font-medium leading-[4.25rem] bg-[#374151] rounded-sm">5</div>
            <div className="w-[2.625rem] h-[4.25rem] text-[var(--Aqua-40)] text-center px-[0.1875rem] font-Inter text-[3.75rem] font-medium leading-[4.25rem] bg-[#374151] rounded-sm ml-[0.15rem]">1</div>
          </div>
          <div className="w-[13.625rem] text-[#D1D5DB] text-center text-[1.625rem] font-medium leading-[125%] tracking-[-0.04875rem] mt-3">Average Completion Time</div>
        </div>
      </div>
    </div>
  );
}
