'use client';
import DropdownButton from '@/components/commont/DropdownButton';
import TotalCoolingLoad from '@/components/echarts/totalCoolingLoad';
import TotalElectricalConsumption from '@/components/echarts/TotalElectricalConsumption';
import TotalWaterConsumption from '@/components/echarts/TotalWaterConsumption';

export default function SystemsOverview() {
  const border = {
    borderTop: '0.09375rem solid  #4B5563',
    borderBottom: '0.09375rem solid  #4B5563',
  };
  const getChildStatus = (val: Object) => {};
  return (
    <div className="w-[44rem]">
      <div className="py-9" style={border}>
        <div className="w-full flex items-center justify-between box-border">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2.5rem"
              height="2.5rem"
              viewBox="0 0 40 40"
              fill="none"
            >
              <g clip-path="url(#clip0_5109_14607)">
                <path
                  d="M26.7685 15H35V12.5H29.2685L35.0006 6.76825L33.233 5L27.5 10.7336V5H25V13.2336L23.2334 15H21.25V10H18.75V15H16.7666L15 13.2336V5H12.5V10.7336L6.767 5L5 6.76825L10.7315 12.5H5V15H13.2315L15 16.7688V18.75H10V21.25H15V23.2336L13.2334 25H5V27.5H10.7334L5 33.233L6.76763 35.0006L12.5 29.2688V35H15V26.7688L16.7685 25H18.75V30H21.25V25H23.2315L25 26.7688V35H27.5V29.2688L33.2318 35.0006L35 33.233L29.2666 27.5H35V25H26.7666L25 23.2336V21.25H30V18.75H25V16.7688L26.7685 15ZM22.5 22.5H17.5V17.5H22.5V22.5Z"
                  fill="#F3F4F6"
                />
              </g>
              <defs>
                <clipPath id="clip0_5109_14607">
                  <rect width="40" height="40" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <h1 className="text-[2rem] text-[#F3F4F6] font-bold leading-normal font-Inter p-0 m-0 ml-[0.125rem]">
              Total Cooling Load
            </h1>
          </div>

          <DropdownButton getStatus={getChildStatus}></DropdownButton>
        </div>
        <div className="w-full h-[18.875rem] mt-8">
          <TotalCoolingLoad></TotalCoolingLoad>
        </div>
      </div>
      <div
        className="pb-9 mt-9"
        style={{borderBottom: '0.09375rem solid  #4B5563'}}
      >
        <div className="w-full flex items-center justify-between box-border">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2.5rem"
              height="2.5rem"
              viewBox="0 0 40 40"
              fill="none"
            >
              <g clip-path="url(#clip0_5109_14650)">
                <path
                  d="M14.5129 37.4C14.2571 37.292 14.0445 37.1019 13.9087 36.8597C13.7729 36.6175 13.7216 36.337 13.7629 36.0625L16.0379 21.25H10.0004C9.80901 21.2551 9.61898 21.2162 9.44498 21.1363C9.27099 21.0564 9.11768 20.9375 8.9969 20.7889C8.87611 20.6404 8.79106 20.466 8.74833 20.2794C8.70559 20.0928 8.70631 19.8988 8.75042 19.7125L12.5004 3.46246C12.5664 3.1828 12.7267 2.93441 12.9544 2.7591C13.1821 2.5838 13.4632 2.49228 13.7504 2.49996H26.2504C26.4372 2.49932 26.6217 2.54054 26.7904 2.62057C26.9591 2.70061 27.1078 2.81743 27.2254 2.96246C27.3447 3.10912 27.4292 3.28094 27.4725 3.46498C27.5158 3.64902 27.5168 3.84048 27.4754 4.02496L25.3129 13.75H31.2504C31.4847 13.7495 31.7144 13.8149 31.9133 13.9386C32.1122 14.0624 32.2723 14.2396 32.3754 14.45C32.465 14.6519 32.4995 14.8739 32.4753 15.0935C32.4512 15.3131 32.3692 15.5223 32.2379 15.7L15.9879 36.95C15.8781 37.1128 15.7315 37.2474 15.5599 37.343C15.3883 37.4385 15.1966 37.4923 15.0004 37.5C14.8332 37.4968 14.6679 37.4629 14.5129 37.4ZM22.1879 16.25L24.6879 4.99996H14.7504L11.5754 18.75H18.9629L16.9754 31.6L28.7504 16.25H22.1879Z"
                  fill="#F3F4F6"
                />
              </g>
              <defs>
                <clipPath id="clip0_5109_14650">
                  <rect width="40" height="40" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <h1 className="text-[2rem] text-[#F3F4F6] font-bold leading-normal font-Inter p-0 m-0 ml-[0.125rem]">
              Total Electrical Consumption
            </h1>
          </div>

          <DropdownButton getStatus={getChildStatus}></DropdownButton>
        </div>
        <div className="w-full h-[18.875rem] mt-8">
          <TotalElectricalConsumption></TotalElectricalConsumption>
        </div>
      </div>
      <div className="my-9">
        <div className="w-full flex items-center justify-between box-border">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2.5rem"
              height="2.5rem"
              viewBox="0 0 40 40"
              fill="none"
            >
              <g clip-path="url(#clip0_5109_14693)">
                <path
                  d="M30 12.5C29.0111 12.5 28.0444 12.2068 27.2222 11.6574C26.3999 11.1079 25.759 10.327 25.3806 9.41342C25.0022 8.49979 24.9031 7.49446 25.0961 6.52455C25.289 5.55465 25.7652 4.66373 26.4645 3.96447C27.1637 3.26521 28.0546 2.789 29.0246 2.59608C29.9945 2.40315 30.9998 2.50217 31.9134 2.8806C32.827 3.25904 33.6079 3.89991 34.1574 4.72215C34.7068 5.5444 35 6.5111 35 7.5C34.9985 8.82563 34.4713 10.0965 33.5339 11.0339C32.5965 11.9713 31.3256 12.4985 30 12.5ZM30 5C29.5055 5 29.0222 5.14662 28.6111 5.42133C28.2 5.69603 27.8795 6.08648 27.6903 6.54329C27.5011 7.00011 27.4516 7.50278 27.548 7.98773C27.6445 8.47268 27.8826 8.91814 28.2322 9.26777C28.5819 9.6174 29.0273 9.8555 29.5123 9.95197C29.9972 10.0484 30.4999 9.99892 30.9567 9.8097C31.4135 9.62048 31.804 9.30005 32.0787 8.88893C32.3534 8.4778 32.5 7.99446 32.5 7.5C32.4993 6.83717 32.2357 6.20169 31.767 5.733C31.2983 5.26431 30.6628 5.0007 30 5Z"
                  fill="#F3F4F6"
                />
                <path
                  d="M18.125 37.5001C16.3056 37.5014 14.5599 36.7809 13.2711 35.4967C11.9822 34.2125 11.2554 32.4695 11.25 30.6501C11.25 26.3469 16.6802 4.38249 16.9116 3.45012C16.9787 3.17904 17.1347 2.93824 17.3546 2.76612C17.5745 2.594 17.8457 2.50049 18.125 2.50049C18.4043 2.50049 18.6755 2.594 18.8954 2.76612C19.1153 2.93824 19.2713 3.17904 19.3384 3.45012C19.5698 4.38249 25 26.3469 25 30.6501C24.9946 32.4695 24.2678 34.2125 22.9789 35.4967C21.6901 36.7809 19.9444 37.5014 18.125 37.5001ZM18.125 9.05499C16.2989 16.7251 13.75 28.0112 13.75 30.6501C13.75 31.8104 14.2109 32.9232 15.0314 33.7437C15.8519 34.5642 16.9647 35.0251 18.125 35.0251C19.2853 35.0251 20.3981 34.5642 21.2186 33.7437C22.0391 32.9232 22.5 31.8104 22.5 30.6501C22.5 28.0112 19.9511 16.7251 18.125 9.05499Z"
                  fill="#F3F4F6"
                />
              </g>
              <defs>
                <clipPath id="clip0_5109_14693">
                  <rect width="40" height="40" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <h1 className="text-[2rem] text-[#F3F4F6] font-bold leading-normal font-Inter p-0 m-0 ml-[0.125rem]">
              Total Water Consumption
            </h1>
          </div>

          <DropdownButton getStatus={getChildStatus}></DropdownButton>
        </div>
        <div className="w-full h-[18.875rem] mt-8">
          <TotalWaterConsumption></TotalWaterConsumption>
        </div>
      </div>
    </div>
  );
}
