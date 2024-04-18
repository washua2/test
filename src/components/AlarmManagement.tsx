'use client';
import Radar from "@/components/echarts/Radar"
const boxStyle = {
  border: '0.09375rem solid  #4B5563',
  background: 'rgba(107, 114, 128, 0.30)',
};
export default function AlarmManagement() {
  return (
    <div
      className="w-[47.5rem] h-[38.0625rem] flex items-start flex-col py-10 px-8 box-border self-stretch rounded-2xl font-Inter"
      style={{
        background: 'rgba(17, 25, 40, 0.80)',
      }}
    >
      <h1
        className="p-0 m-0 text-left text-[#F3F4F6] text-[2rem] font-bold font-Inter"
        style={{textShadow: '0px 0.125rem 0.125rem rgba(0, 0, 0, 0.50)'}}
      >
        Alarm Managemen
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
            194
          </p>
        </div>
        <div
          className="w-[33%] h-[10rem] rounded-2xl p-5 mx-5 box-border"
          style={boxStyle}
        >
          <p className="text-[#D1D5DB] p-0 m-0  font-medium text-[1.625rem] leading-[125%] font-Inter">
            Handled
          </p>
          <p className="mt-[2.125rem] text-[#F3F4F6] p-0 m-0 text-[3.75rem] leading-[100%] font-medium font-Inter">
            174
          </p>
        </div>
        <div
          className="w-[33%] h-[10rem] rounded-2xl p-5 box-border"
          style={boxStyle}
        >
          <p className="text-[#D1D5DB] p-0 m-0  font-medium text-[1.625rem] leading-[125%] font-Inter">
            Unprocessed
          </p>
          <p className="mt-[2.125rem] text-[#F98080] p-0 m-0 text-[3.75rem] leading-[100%] font-medium font-Inter">
            23
          </p>
        </div>
      </div>
      <div className="relative w-full">
        {/* 图表 */}
        <div className="mt-2">
        <Radar></Radar>
        </div>
        <div className=" absolute right-0 top-[2.34375rem]">
            <div className="w-[17.5rem] flex items-center justify-between">
              <p className="w-[12.75rem] text-left text-[#D1D5DB] font-Inter p-0 m-0 text-[1.75rem] font-normal leading-[125%] tracking-[-0.0525rem]">Intrusion</p>
              <span className="text-[#F9FAFB] text-[1.75rem] font-medium leading-[125%] tracking-[-0.0525rem]">23</span>
            </div>
            <div className="w-[17.5rem] flex items-center justify-between mt-5">
              <p className="w-[12.75rem] text-left text-[#D1D5DB] font-Inter p-0 m-0 text-[1.75rem] font-normal leading-[125%] tracking-[-0.0525rem]">Fire</p>
              <span className="text-[#F9FAFB] text-[1.75rem] font-medium leading-[125%] tracking-[-0.0525rem]">37</span>
            </div>
            <div className="w-[17.5rem] flex items-center justify-between mt-5">
              <p className="w-[12.75rem] text-left text-[#D1D5DB] font-Inter p-0 m-0 text-[1.75rem] font-normal leading-[125%] tracking-[-0.0525rem]">Access Control</p>
              <span className="text-[#F9FAFB] text-[1.75rem] font-medium leading-[125%] tracking-[-0.0525rem]">50</span>
            </div>
            <div className="w-[17.5rem] flex items-center justify-between mt-5">
              <p className="w-[12.75rem] text-left text-[#D1D5DB] font-Inter p-0 m-0 text-[1.75rem] font-normal leading-[125%] tracking-[-0.0525rem]">Monitoring</p>
              <span className="text-[#F9FAFB] text-[1.75rem] font-medium leading-[125%] tracking-[-0.0525rem]">52</span>
            </div>
            <div className="w-[17.5rem] flex items-center justify-between mt-5">
              <p className="w-[12.75rem] text-left text-[#D1D5DB] font-Inter p-0 m-0 text-[1.75rem] font-normal leading-[125%] tracking-[-0.0525rem]">Emergency</p>
              <span className="text-[#F9FAFB] text-[1.75rem] font-medium leading-[125%] tracking-[-0.0525rem]">31</span>
            </div>
        </div>
      </div>
    </div>
  );
}
