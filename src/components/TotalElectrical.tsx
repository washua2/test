'use client';
import TotalElectrical from "@/components/echarts/TotalElectrical"
export default function EnergyConsump() {
  const getChildStatus = (val: Object) => {};
  return (
    <div
      className="w-[48rem] h-[36.625rem] px-8 py-10 rounded-2xl box-border mt-3"
      style={{backgroundColor: 'rgba(17, 25, 40, 0.80);'}}
    >
      <div
        className="flex items-center justify-between pl-5 pr-4 box-border
       border-2 border-solid rounded-xl py-[0.9375rem] border-[#4B5563]"
      >
        <div className="flex items-center">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2rem"
              height="2rem"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M10.8802 28L12.0337 19.9252H6.02148L17.0391 4H19.8841L18.7306 13.2283H25.9779L13.6926 28H10.8802Z"
                fill="white"
                flood-opacity="0.3"
              />
            </svg>
          </div>
          <div className="text-[#fff] text-[1.75rem] font-medium font-Inter ml-3">
            Total Electrical Consumption
          </div>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2rem"
            height="2rem"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M16 22.0001L6 12.0001L7.4 10.6001L16 19.2001L24.6 10.6001L26 12.0001L16 22.0001Z"
              fill="#F3F4F6"
            />
          </svg>
        </div>
      </div>
      <div className="mt-12">
        <TotalElectrical></TotalElectrical>
      </div>
    </div>
  );
}
