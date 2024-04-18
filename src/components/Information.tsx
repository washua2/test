'use client';
const boxStyle = {
  border: '0.09375rem solid  #4B5563',
  background: 'rgba(107, 114, 128, 0.30)',
};
const fontStyle = {
  background: 'linear-gradient(97deg, #9DEDFF 1.45%, #46FFED 116.82%)',
  backgroundClip: 'text',
};
const co2 = {
  background: 'linear-gradient(97deg, #9DEDFF 1.45%, #46FFED 116.82%)',
  backgroundClip: 'text',
};
export default function Information() {
  return (
    <div
      className="w-[47.5rem] h-[35.6875rem] flex items-start flex-col py-10 px-8 box-border self-stretch rounded-2xl font-Inter"
      style={{
        background: 'rgba(17, 25, 40, 0.80)',
      }}
    >
      <h1
        className="p-0 m-0 text-left text-[#F3F4F6] text-[2rem] font-bold font-Inter"
        style={{textShadow: '0px 0.125rem 0.125rem rgba(0, 0, 0, 0.50)'}}
      >
        Basic Campus Information
      </h1>
      <div className="w-[44rem] h-[26.25rem] flex justify-between items-start flex-wrap box-border mt-8">
        <div className="mb-5 flex flex-col justify-between items-start">
          <div
            className="w-[21.375rem] h-[12.5rem] rounded-2xl p-5 box-border"
            style={boxStyle}
          >
            <p className="w-[9rem] h-[4.125rem] text-[#D1D5DB] p-0 m-0  font-medium text-[1.625rem] leading-[125%] font-Inter">
              Current Admissions
            </p>
            <p
              className="mt-[2.125rem] text-[#9DEDFF] p-0 m-0 text-[3.75rem] leading-[100%] font-medium font-Inter"
              style={fontStyle}
            >
              5000
            </p>
          </div>
        </div>
        <div className="mb-5 flex flex-col justify-between items-start">
          <div
            className="w-[21.375rem] h-[12.5rem] rounded-2xl p-5 box-border"
            style={boxStyle}
          >
            <p className="w-[9rem] h-[4.125rem] text-[#D1D5DB] p-0 m-0  font-medium text-[1.625rem] leading-[125%] font-Inter">
              Remaining Spaces
            </p>
            <p
              className="mt-[2.125rem] text-[#9DEDFF] p-0 m-0 text-[3.75rem] leading-[100%] font-medium font-Inter"
              style={fontStyle}
            >
              200
            </p>
          </div>
        </div>
        <div className="mb-5 flex flex-col justify-between items-start">
          <div
            className="w-[21.375rem] h-[12.5rem] rounded-2xl p-5 box-border"
            style={boxStyle}
          >
            <p className="w-[12.75rem] h-[4.125rem] text-[#D1D5DB] p-0 m-0  font-medium text-[1.625rem] leading-[125%] font-Inter">
              Total Emission Reduction
            </p>
            <p
              className="mt-[2.125rem] text-[#9DEDFF] p-0 m-0 text-[3.75rem] leading-[100%] font-medium font-Inter"
              style={fontStyle}
            >
              1.5{' '}
              <span className="text-2xl font-normal leading-[100%]" style={co2}>
                CO2
              </span>
            </p>
          </div>
        </div>
        <div className="mb-5 flex flex-col justify-between items-start">
          <div
            className="w-[21.375rem] h-[12.5rem] rounded-2xl p-5 box-border"
            style={boxStyle}
          >
            <p className="w-[12.75rem] h-[4.125rem] text-[#D1D5DB] p-0 m-0  font-medium text-[1.625rem] leading-[125%] font-Inter">
              Total Emission Reduction
            </p>
            <p
              className="mt-[2.125rem] text-[#9DEDFF] p-0 m-0 text-[3.75rem] leading-[100%] font-medium font-Inter"
              style={fontStyle}
            >
              358{' '}
              <span className="text-2xl font-normal leading-[100%] font-Inter" style={co2}>
                {' '}
                kWh/m2{' '}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
