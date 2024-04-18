'use client';

export default function Acknowledged() {
  return (
    <div
          className="w-full py-4 px-[1.25rem] flex items-center rounded-lg 
      box-border self-stretch gap-6"
          style={{
            backgroundColor: 'rgba(75, 85, 99, 0.30);',
          }}
        >
          <div className="w-[3.75rem] h-[3.75rem] rounded-full bg-[#1F2A37] flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2.25rem"
              height="2.25rem"
              viewBox="0 0 36 36"
              fill="none"
            >
              <g clip-path="url(#clip0_5128_11494)">
                <path
                  d="M13.0622 33.66C12.832 33.5629 12.6407 33.3918 12.5184 33.1738C12.3962 32.9559 12.35 32.7034 12.3872 32.4563L14.4347 19.125H9.00096C8.82869 19.1297 8.65767 19.0947 8.50107 19.0227C8.34448 18.9508 8.2065 18.8438 8.09779 18.7101C7.98908 18.5764 7.91254 18.4195 7.87408 18.2515C7.83562 18.0836 7.83626 17.909 7.87596 17.7413L11.251 3.11629C11.3103 2.86459 11.4546 2.64104 11.6595 2.48326C11.8644 2.32549 12.1174 2.24312 12.376 2.25004H23.626C23.794 2.24946 23.9601 2.28656 24.1119 2.35859C24.2638 2.43062 24.3976 2.53576 24.5035 2.66629C24.6108 2.79828 24.6869 2.95292 24.7258 3.11855C24.7648 3.28419 24.7657 3.45651 24.7285 3.62254L22.7822 12.375H28.126C28.3368 12.3746 28.5435 12.4335 28.7226 12.5448C28.9016 12.6562 29.0457 12.8157 29.1385 13.005C29.2191 13.1868 29.2501 13.3866 29.2284 13.5842C29.2066 13.7818 29.1329 13.9702 29.0147 14.13L14.3897 33.255C14.2909 33.4016 14.1589 33.5227 14.0045 33.6087C13.8501 33.6947 13.6776 33.7431 13.501 33.75C13.3504 33.7472 13.2017 33.7167 13.0622 33.66ZM19.9697 14.625L22.2197 4.50004H13.276L10.4185 16.875H17.0672L15.2785 28.44L25.876 14.625H19.9697Z"
                  fill="#F3F4F6"
                />
              </g>
              <defs>
                <clipPath id="clip0_5128_11494">
                  <rect width="36" height="36" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="w-[34rem]">
            <div className="flex items-center justify-between">
              <p className="text-[#F3F4F6] text-[1.75rem] font-semibold leading-[125%]">
                Malfunction
              </p>
              <p
                className="h-[1.5625rem] rounded py-1 px-2
             bg-[#4B5563] text-center text-white text-[1.25rem] font-semibold"
              >
                ACKNOWLEDGED
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
  );
}
