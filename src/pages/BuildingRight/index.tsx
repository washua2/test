'use client';
import Acknowledged from '@/components/Acknowledged';
import '../../assets/css/buildingRight.css';
import React, {useState, MouseEvent, useCallback} from 'react';
export default function BuildingRight() {
  const roate={
    transform: "rotate(180deg)",
    transformOrigin: "center"
  }
  const not_roate={
    transform: "rotate(0deg)",
    transformOrigin: "center"
  }
  let acknowledgedList = [0, 10, 1, 2, 3, 4];
  let Closed = [0, 10, 1, 2, 3, 4, 10, 1, 2, 3, 4, 10, 1, 2, 3, 4];
  let [isAcknowledged, setIsAcknowledged] = useState(true);
  let [isUrgent, setIsUrgent] = useState(true);
  let [isClose, setIsClose] = useState(true);

  const setAcknowledgedHandle = () => {
    setIsAcknowledged((isAcknowledged = !isAcknowledged));
  };
  const setUrgentHandle = () => {
    setIsUrgent((isUrgent = !isUrgent));
  };
  const setCloseHandle = () => {
    setIsClose((isClose = !isClose));
  };
  return (
    <div
      className="flex flex-col items-start rounded-2xl font-Inter"
      style={{background: ' rgba(17, 25, 40, 0.90)'}}
    >
      <div className="w-[48rem] h-[6rem] py-6 px-8 box-border flex items-center justify-between">
        <div className="text-[#F3F4F6] flex-1 fontInter text-[2rem] font-bold leading-[100%]">
          Alarm Notification
        </div>
        <div className="ml-6 flex items-center">
          <div
            className="w-[3rem] h-[3rem] bg-[#D03801] px-3 box-border flex flex-col
           justify-center items-center gap-[0.625rem] text-white text-[2rem] font-medium leading-[150%]"
          >
            1
          </div>
          <div
            className="w-[3rem] h-[3rem] ml-3 bg-[#FACA15] px-3 box-border flex flex-col
           justify-center items-center gap-[0.625rem] text-[#111928] text-[2rem] font-medium leading-[150%]"
          >
            6
          </div>
        </div>
      </div>
      <div className="w-[48rem] h-[96.25rem] box-border py-4 px-8 buildingScroll">
        {/* Urgent */}
        <div className="py-5 flex items-center justify-between self-stretch gap-4" onClick={setUrgentHandle}>
          <div className="flex items-center">
            <div className="text-[1.75rem] text-[#F3F4F6] font-medium mr-4 leading-[150%]">
              Urgent
            </div>
            <span className="text-[1.75rem] text-[#9CA3AF] font-normal leading-[150%]">
              (1)
            </span>
          </div>
          <div className="ml-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2.5rem"
              height="2.5rem"
              viewBox="0 0 40 40"
              fill="none"
              style={isUrgent?roate:not_roate}
            >
              <path
                d="M20 27.5L7.5 15L9.25 13.25L20 24L30.75 13.25L32.5 15L20 27.5Z"
                fill="#F3F4F6"
              />
            </svg>
          </div>
        </div>
        {isUrgent&&(
          <div
          className="w-full py-4 px-[1.25rem] flex items-center rounded-lg 
      box-border self-stretch gap-6"
          style={{
            borderLeft: '0.375rem solid #D03801;',
            backgroundColor: 'rgba(75, 85, 99, 0.60)',
          }}
        >
          <div className="w-[3.75rem] h-[3.75rem] rounded-full bg-[#D03801] flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2.25rem"
              height="2.25rem"
              viewBox="0 0 36 36"
              fill="none"
            >
              <g clip-path="url(#clip0_5128_11469)">
                <path
                  d="M24.0917 13.5H31.5V11.25H26.3417L31.5006 6.09142L29.9097 4.5L24.75 9.66026V4.5H22.5V11.9103L20.91 13.5H19.125V9H16.875V13.5H15.09L13.5 11.9103V4.5H11.25V9.66026L6.0903 4.5L4.5 6.09142L9.65835 11.25H4.5V13.5H11.9084L13.5 15.0919V16.875H9V19.125H13.5V20.9103L11.91 22.5H4.5V24.75H9.66004L4.5 29.9097L6.09086 31.5006L11.25 26.3419V31.5H13.5V24.0919L15.0917 22.5H16.875V27H19.125V22.5H20.9083L22.5 24.0919V31.5H24.75V26.3419L29.9086 31.5006L31.5 29.9097L26.34 24.75H31.5V22.5H24.09L22.5 20.9103V19.125H27V16.875H22.5V15.0919L24.0917 13.5ZM20.25 20.25H15.75V15.75H20.25V20.25Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_5128_11469">
                  <rect width="36" height="36" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="w-[34rem] ">
            <div className="flex items-center justify-between">
              <p className="text-[#F3F4F6] text-[1.75rem] font-semibold leading-[125%]">
                Malfunction
              </p>
              <p
                className="w-[3rem] h-[1.5625rem] rounded py-1 px-2
             bg-[#D03801] text-center text-white text-[1.25rem] font-bold"
              >
                New
              </p>
            </div>
            <p className="mt-2 mb-3 text-[#F3F4F6] text-[1.75rem] font-normal leading-[125%]">
              Area/building name, L1
            </p>
            <p>
              <span
                className="inline-block mr-4
             text-[#9CA3AF] text-[1.5rem] rounded bg-[#4B5563] py-1 px-2 font-medium leading-[120%]"
              >
                3 days
              </span>
              <span className="text-[#9CA3AF] text-[1.5rem] font-medium leading-[120%]">
                01/25/23 14:02
              </span>
            </p>
          </div>
          <div className="flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1rem"
              height="1.0625rem"
              viewBox="0 0 16 17"
              fill="none"
            >
              <g opacity="0.4">
                <path
                  d="M7.98034 3.83329C8.40465 3.83338 8.81155 3.99699 9.11154 4.28814L15.5115 10.4976C15.6644 10.6408 15.7862 10.8121 15.8701 11.0015C15.954 11.1909 15.9981 11.3946 15.9999 11.6008C16.0018 11.8069 15.9613 12.0113 15.8809 12.2021C15.8004 12.3929 15.6816 12.5662 15.5314 12.7119C15.3811 12.8577 15.2025 12.973 15.0059 13.051C14.8092 13.1291 14.5985 13.1684 14.3861 13.1666C14.1737 13.1648 13.9637 13.122 13.7685 13.0406C13.5733 12.9592 13.3967 12.841 13.2491 12.6927L7.98034 7.58073L2.71154 12.6927C2.40978 12.9755 2.00561 13.132 1.5861 13.1284C1.16658 13.1249 0.765284 12.9616 0.468631 12.6738C0.171977 12.386 0.00370598 11.9966 6.00815e-05 11.5896C-0.00358582 11.1826 0.157686 10.7904 0.449139 10.4976L6.84914 4.28814C7.14913 3.99699 7.55603 3.83338 7.98034 3.83329Z"
                  fill="white"
                />
              </g>
            </svg>
          </div>
        </div>
        )}
        
        <div className="w-full h-[0.0625rem] bg-[#4B5563] my-[1.75rem]"></div>
        {/* Acknowledged */}
        <div
          className="py-5 mb-2 flex items-center justify-between self-stretch box-border
         gap-4"
          onClick={setAcknowledgedHandle}
        >
          <div className="flex items-center">
            <div className="text-[1.75rem] text-[#F3F4F6] font-medium mr-4 leading-[150%]">
              Acknowledged
            </div>
            <span className="text-[1.75rem] text-[#9CA3AF] font-normal leading-[150%]">
              (6)
            </span>
          </div>
          <div className="ml-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2.5rem"
              height="2.5rem"
              viewBox="0 0 40 40"
              fill="none"
              style={isAcknowledged?roate:not_roate}
            >
              <path
                d="M20 27.5L7.5 15L9.25 13.25L20 24L30.75 13.25L32.5 15L20 27.5Z"
                fill="#F3F4F6"
              />
            </svg>
          </div>
        </div>
        {isAcknowledged && (
          <div
            className="mt-2"
            
          >
            {acknowledgedList.map((v,i) => {
              return (
                <div className="mb-2" key={i} style={{
                  backgroundColor: 'rgba(75, 85, 99, 0.30)',
                }}>
                  <Acknowledged></Acknowledged>
                </div>
              );
            })}
          </div>
        )}

        <div className="w-full h-[0.0625rem] bg-[#4B5563] mb-[1.75rem] mt-[2.75rem]"></div>
        {/* Close */}
        <div
          className="py-5 mb-2 flex items-center justify-between self-stretch box-border
         gap-4" onClick={setCloseHandle}
        >
          <div className="flex items-center">
            <div className="text-[1.75rem] text-[#F3F4F6] font-medium mr-4 leading-[150%]">
              Closed
            </div>
            <span className="text-[1.75rem] text-[#9CA3AF] font-normal leading-[150%]">
              (24)
            </span>
          </div>
          <div className="ml-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2.5rem"
              height="2.5rem"
              viewBox="0 0 40 40"
              fill="none"
              style={isClose?roate:not_roate}
            >
              <path
                d="M20 27.5L7.5 15L9.25 13.25L20 24L30.75 13.25L32.5 15L20 27.5Z"
                fill="#F3F4F6"
              />
            </svg>
          </div>
        </div>
        {isClose&&(
           <div className="mt-2">
           {Closed.map((v,i) => {
             return (
               <div className="mb-2" key={i} style={{
                backgroundColor: 'rgba(75, 85, 99, 0.30)',
              }}>
                 <Acknowledged></Acknowledged>
               </div>
             );
           })}
         </div>
        )}
       
      </div>
    </div>
  );
}
