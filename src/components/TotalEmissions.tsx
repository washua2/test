'use client';
import DropdownButton from '@/components/commont/DropdownButton';
export default function TotalEmissions() {
  const getChildStatus = (val: Object) => {};
  return (
    <div
      className="w-[48rem] h-[31rem] px-8 py-10 rounded-2xl box-border"
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
      <div
        className="flex items-end justify-between my-[2.8125rem] pb-[2.8125rem]"
        style={{borderBottom: '0.125rem solid #4B5563'}}
      >
        <div className="flex items-end">
          <div className="text-[#F3F4F6] text-[3.75rem] font-Inter font-medium mr-4">
            2,045,768
          </div>
          <span className="text-[#F3F4F6] text-[1.5rem] font-normal font-Inter">
            CO2
          </span>
        </div>
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.75rem"
            height="1rem"
            viewBox="0 0 28 16"
            fill="none"
          >
            <path
              d="M28.0008 16H20.0008V13.7143H24.1037L15.4294 5.04L10.5266 9.95429C10.4203 10.0614 10.2939 10.1464 10.1546 10.2044C10.0154 10.2625 9.86599 10.2923 9.71512 10.2923C9.56425 10.2923 9.41487 10.2625 9.27561 10.2044C9.13634 10.1464 9.00994 10.0614 8.90369 9.95429L0.572266 1.61143L2.18369 0L9.71512 7.53143L14.618 2.61714C14.7242 2.51003 14.8506 2.425 14.9899 2.36698C15.1292 2.30896 15.2785 2.27909 15.4294 2.27909C15.5803 2.27909 15.7297 2.30896 15.8689 2.36698C16.0082 2.425 16.1346 2.51003 16.2408 2.61714L25.7151 12.1029V8H28.0008V16Z"
              fill="#31C48D"
            />
          </svg>
          <div className="text-[#31C48D] font-Inter text-[2rem] font-bold leading-[100%] ml-3 self-end">
            13
          </div>
          <div className="text-[#31C48D] font-Inter text-[1.5rem] font-bold leading-[100%]">
            %
          </div>
        </div>
      </div>
    </div>
  );
}
