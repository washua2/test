'use client';
import RadarRangings from '@/components/echarts/RadarRangings';
import DropdownButton from '@/components/commont/DropdownButton';


export default function BuildingRadar() {
    // 获取子组件
    const getChildStatus = (val: object) => {
      console.log('子传父', val);
    };
  return(
    <div>
    <div className="w-full py-[1.03125rem] flex items-center justify-between box-border mt-4">
          <h1 className="text-[2rem] text-[#F3F4F6] font-bold leading-normal font-Inter p-0 m-0">
            Total Work Orders
          </h1>
          <DropdownButton getStatus={getChildStatus}></DropdownButton>
        </div>
  <div className="relative w-full">
  {/* 图表 */}
  <div className="mt-2">
    <RadarRangings></RadarRangings>
  </div>
  <div className=" absolute right-0 top-0">
    <div className="mb-8">
      <div className="w-[20.1875rem] flex items-center justify-between">
        <p className="w-[12.75rem] text-left text-[#D1D5DB] font-Inter p-0 m-0 text-[1.75rem] font-normal leading-[125%] tracking-[-0.0525rem]">
          Alert
        </p>
        <span className="text-[#F9FAFB] text-[1.75rem] font-medium text-right leading-[125%] tracking-[-0.0525rem]">
          0,000
        </span>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-left text-[#9CA3AF] font-Inter p-0 m-0 text-[1.75rem] font-normal leading-[125%] tracking-[-0.0525rem] mr-5">
          Average time
        </p>
        <span className="text-[#9CA3AF] text-[1.75rem] font-medium text-right leading-[125%] tracking-[-0.0525rem]">
          hh:mm:ss
        </span>
      </div>
    </div>
    <div className="mb-8">
      <div className="w-[20.1875rem] flex items-center justify-between">
        <p className="w-[12.75rem] text-left text-[#D1D5DB] font-Inter p-0 m-0 text-[1.75rem] font-normal leading-[125%] tracking-[-0.0525rem]">
        Inspection
        </p>
        <span className="text-[#F9FAFB] text-[1.75rem] font-medium text-right leading-[125%] tracking-[-0.0525rem]">
          0,000
        </span>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-left text-[#9CA3AF] font-Inter p-0 m-0 text-[1.75rem] font-normal leading-[125%] tracking-[-0.0525rem] mr-5">
          Average time
        </p>
        <span className="text-[#9CA3AF] text-[1.75rem] font-medium text-right leading-[125%] tracking-[-0.0525rem]">
          hh:mm:ss
        </span>
      </div>
    </div>
    <div className="mb-8">
      <div className="w-[20.1875rem] flex items-center justify-between">
        <p className="w-[12.75rem] text-left text-[#D1D5DB] font-Inter p-0 m-0 text-[1.75rem] font-normal leading-[125%] tracking-[-0.0525rem]">
        Maintenance
        </p>
        <span className="text-[#F9FAFB] text-[1.75rem] font-medium text-right leading-[125%] tracking-[-0.0525rem]">
          0,000
        </span>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-left text-[#9CA3AF] font-Inter p-0 m-0 text-[1.75rem] font-normal leading-[125%] tracking-[-0.0525rem] mr-5">
          Average time
        </p>
        <span className="text-[#9CA3AF] text-[1.75rem] font-medium text-right leading-[125%] tracking-[-0.0525rem]">
          hh:mm:ss
        </span>
      </div>
    </div>
    <div className="">
      <div className="w-[20.1875rem] flex items-center justify-between">
        <p className="w-[12.75rem] text-left text-[#D1D5DB] font-Inter p-0 m-0 text-[1.75rem] font-normal leading-[125%] tracking-[-0.0525rem]">
        Security
        </p>
        <span className="text-[#F9FAFB] text-[1.75rem] font-medium text-right leading-[125%] tracking-[-0.0525rem]">
        0,000
        </span>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-left text-[#9CA3AF] font-Inter p-0 m-0 text-[1.75rem] font-normal leading-[125%] tracking-[-0.0525rem] mr-5">
          Average time
        </p>
        <span className="text-[#9CA3AF] text-[1.75rem] font-medium text-right leading-[125%] tracking-[-0.0525rem]">
          hh:mm:ss
        </span>
      </div>
    </div>
  </div>
</div>
</div>
  )
 
}
  