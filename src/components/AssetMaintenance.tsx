'use client';
import Histogram from "@/components/echarts/Histogram"

const boxStyle = {
  border: '0.09375rem solid  #4B5563',
  background: 'rgba(107, 114, 128, 0.30)',
};

export default function AssetMaintenance() {
  return (
    <div
      className="w-[47.5rem] h-[41.25rem] flex items-start flex-col py-10 px-8 box-border self-stretch rounded-2xl font-Inter mt-4"
      style={{
        background: 'rgba(17, 25, 40, 0.80)',
      }}
    >
      <h1
        className="p-0 m-0 text-left text-[#F3F4F6] text-[2rem] font-bold font-Inter"
        style={{textShadow: '0px 0.125rem 0.125rem rgba(0, 0, 0, 0.50)'}}
      >
        Asset Maintenance
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
            1174
          </p>
        </div>
        <div
          className="w-[33%] h-[10rem] rounded-2xl p-5 mx-5 box-border"
          style={boxStyle}
        >
          <p className="text-[#D1D5DB] p-0 m-0  font-medium text-[1.625rem] leading-[125%] font-Inter">
            No.of Online
          </p>
          <p className="mt-[2.125rem] text-[#F3F4F6] p-0 m-0 text-[3.75rem] leading-[100%] font-medium font-Inter">
            380
          </p>
        </div>
        <div
          className="w-[33%] h-[10rem] rounded-2xl p-5 box-border"
          style={boxStyle}
        >
          <p className="text-[#D1D5DB] p-0 m-0  font-medium text-[1.625rem] leading-[125%] font-Inter">
            No.of Repairs
          </p>
          <p className="mt-[2.125rem] text-[#F3F4F6] p-0 m-0 text-[3.75rem] leading-[100%] font-medium font-Inter">
            380
          </p>
        </div>
      </div>
      {/*标题*/}
      <div className="h-[3.0625rem] w-full flex py-2 px-4 items-center justify-between rounded bg-[#374151] mt-8 box-border">
        <div className="flex items-center">
          <h1 className="w-[12.75rem] text-[#D1D5DB] text-[1.375rem] font-semibold uppercase leading-[150%]">
            Assets
          </h1>
          <h1 className="w-[12.75rem] text-[#D1D5DB] text-[1.375rem] font-semibold uppercase leading-[150%] ml-6">
            No. of Repairs
          </h1>
        </div>
        <h1 className="text-[#D1D5DB] text-[1.375rem] font-semibold uppercase leading-[150%]">
          Alerts
        </h1>
      </div>
      {/* 图表 */}
      <Histogram></Histogram>
    </div>
  );
}
