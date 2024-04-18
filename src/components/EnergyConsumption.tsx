'use client';
const boxStyle = {
  border: '0.09375rem solid  #4B5563',
  background: 'rgba(107, 114, 128, 0.30)',
};
const fontStyle = {
  background: 'linear-gradient(97deg, #9DEDFF 1.45%, #46FFED 116.82%)',
  backgroundClip: 'text',
  WebkitTextFillColor: 'transparenttext',
};
const co2 = {
  background: 'linear-gradient(97deg, #9DEDFF 1.45%, #46FFED 116.82%)',
  backgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
};
export default function EnergyConsumption() {
  return (
    <div
      className="w-[47.5rem] h-[30.6875rem] flex items-start flex-col py-10 px-8 box-border self-stretch rounded-2xl font-Inter mt-4"
      style={{
        background: 'rgba(17, 25, 40, 0.80)',
      }}
    >
      <h1
        className="p-0 m-0 text-left text-[#F3F4F6] text-[2rem] font-bold font-Inter"
        style={{textShadow: '0px 0.125rem 0.125rem rgba(0, 0, 0, 0.50)'}}
      >
        Energy Consumption
      </h1>
      <div className="w-[44rem] h-[26.25rem] flex justify-between items-start flex-wrap box-border mt-8">
        <div
          className="w-[21.375rem] h-[10rem] rounded-2xl p-5 box-border mb-5"
          style={boxStyle}
        >
          <p className="w-[12.75rem] h-[4.125rem] text-[#D1D5DB] p-0 m-0  font-medium text-[1.625rem] leading-[125%] font-Inter">
            Water
          </p>
          <div className="flex justify-between items-center">
            <p
              className="text-[#9DEDFF] p-0 m-0 text-[3.75rem] leading-[100%] font-medium font-Inter"
              style={fontStyle}
            >
              6{' '}
              <span className="text-2xl font-normal leading-[100%]" style={co2}>
                tonnes
              </span>
            </p>
            <p className="flex items-center self-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2.1875rem"
                height="1.5rem"
                viewBox="0 0 35 24"
                fill="none"
              >
                <path d="M17.6795 0L35 24H0.359009L17.6795 0Z" fill="#2AECDA" />
              </svg>
              <span className="text-[var(--Aqua-40)] text-[1.75rem] text-right font-Inter font-semibold leading-normal ml-1">
                12%
              </span>
            </p>
          </div>
        </div>
        <div
          className="w-[21.375rem] h-[10rem] rounded-2xl p-5 box-border mb-5 "
          style={boxStyle}
        >
          <p className="w-[12.75rem] h-[2.0625rem] text-[#D1D5DB] p-0 m-0  font-medium text-[1.625rem] leading-[125%] font-Inter">
            Electricity
          </p>
          <div className="flex justify-between items-center flex-wrap">
            <p
              className="w-full text-[#9DEDFF] p-0 mt-0 text-[3.75rem] leading-[100%] font-medium font-Inter flex"
              style={fontStyle}
            >
              500
            </p>
            <p className="text-2xl font-normal leading-[100%] self-start mr-1 mb-2 ml-1" style={co2}>kWh/㎡</p>
            <p className="flex items-start ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2.1875rem"
                height="1.5rem"
                viewBox="0 0 35 24"
                fill="none"
              >
                <path d="M17.6795 0L35 24H0.359009L17.6795 0Z" fill="#2AECDA" />
              </svg>
              <span className="text-[var(--Aqua-40)] text-[1.75rem] text-right font-Inter font-semibold ml-1 self-start leading-[100%]">
                12%
              </span>
            </p>
          </div>
        </div>
        <div
          className="w-[21.375rem] h-[10rem] rounded-2xl p-5 box-border mb-5 "
          style={boxStyle}
        >
          <p className="w-[12.75rem] h-[2.0625rem] text-[#D1D5DB] p-0 m-0  font-medium text-[1.625rem] leading-[125%] font-Inter">
            Cooling
          </p>
          <div className="flex justify-between items-center flex-wrap">
            <p
              className="w-full text-[#9DEDFF] p-0 mt-0 text-[3.75rem] leading-[100%] font-medium font-Inter flex"
              style={fontStyle}
            >
              200
            </p>
            <p className="text-2xl font-normal leading-[100%] self-start mr-1 mb-2 ml-1" style={co2}>kWh/㎡</p>
            <p className="flex items-start ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2.1875rem"
                height="1.5rem"
                viewBox="0 0 35 24"
                fill="none"
              >
                <path d="M17.6795 0L35 24H0.359009L17.6795 0Z" fill="#2AECDA" />
              </svg>
              <span className="text-[var(--Aqua-40)] text-[1.75rem] text-right font-Inter font-semibold ml-1 self-start leading-[100%]">
                12%
              </span>
            </p>
          </div>
        </div>
        <div
          className="w-[21.375rem] h-[10rem] rounded-2xl p-5 box-border mb-5 "
          style={boxStyle}
        >
          <p className="w-[12.75rem] h-[2.0625rem] text-[#D1D5DB] p-0 m-0  font-medium text-[1.625rem] leading-[125%] font-Inter">
            Heat
          </p>
          <div className="flex justify-between items-center flex-wrap">
            <p
              className="w-full text-[#9DEDFF] p-0 mt-0 text-[3.75rem] leading-[100%] font-medium font-Inter flex"
              style={fontStyle}
            >
              100
            </p>
            <p className="text-2xl font-normal leading-[100%] self-start mr-1 mb-2 ml-1" style={co2}>kWh/㎡</p>
            <p className="flex items-start ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2.1875rem"
                height="1.5rem"
                viewBox="0 0 35 24"
                fill="none"
              >
                <path d="M17.6795 0L35 24H0.359009L17.6795 0Z" fill="#2AECDA" />
              </svg>
              <span className="text-[var(--Aqua-40)] text-[1.75rem] text-right font-Inter font-semibold ml-1 self-start leading-[100%]">
                12%
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
