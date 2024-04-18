'use client';
import React, {useState, MouseEvent, useCallback} from 'react';
import Link from 'next/link';
// 路由路径
const home = `/`;
const sustainability = `/sustainability`;
const buildingManagement = `/buildingManagement`;
const virtualTour = `/virtualTour`;
const achievements = `/achievements`;

const backgroundLiner = {
  color: '#2AECDA',
  borderBottom: '0.25rem solid var(--Aqua-40)',
  background:
    'linear-gradient(90deg, rgba(28, 28, 28, 0.18) 0%, rgba(17, 25, 40, 0.90) 50%, rgba(28, 28, 28, 0.18) 100%)',
};
const backgroundLinertarget = {
  color: '#fff',
  borderBottom: '0.25rem solid transparent',
  background:
    'linear-gradient(90deg, rgba(28, 28, 28, 0.18) 0%, rgba(17, 25, 40, 0.50) 50%, rgba(28, 28, 28, 0.18) 100%)',
};
const iconBox = {
  background: 'rgba(17, 25, 40, 0.80)',
};
const testShow = {
  textShadow: '0.0625rem 0.0625rem 0.125rem rgba(0, 0, 0, 0.50)',
};
const liner = {
  background:
    'linear-gradient(to right, rgba(255, 255, 255, 0.00) 0%, #FFF 19.79%, #FFF 80.21%, rgba(255, 255, 255, 0.00) 100%)',
  boxShadow: '0.125rem 0.125rem 0.015625rem 0px rgba(0, 0, 0, 0.80)',
};
const hidden = {
  display: 'none',
};
const show = {
  display: 'block',
};

export default function NavBar() {
  //
 var [count, setCount] = useState(0);
  //点击高亮
  const targetClick = useCallback((num: number) => {
    return (event: MouseEvent<HTMLDivElement>) => {
      if (count == num) {
        return;
      }
      setCount((count = num));
      console.log(count);
    };
  }, []);
  return (
    <nav>
      <div className="mt-[7.25rem] flex items-center justify-between relative z-10">
        {/* 左边 */}
        <div className="pl-[4.5rem] flex items-center self-start">
          <Link className="no-underline" href={home}>
            <div
              className="flex items-center justify-center py-4 px-6 w-[9.9375rem] box-border mr-10 cursor-pointer"
              style={count == 0 ? backgroundLiner : backgroundLinertarget}
              onClick={targetClick(0)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2rem"
                height="2rem"
                viewBox="0 0 32 32"
                fill="none"
              >
                <g clipPath="url(#clip0_3175_196)">
                  <g filter="url(#filter0_d_3175_196)">
                    <path
                      d="M16.6123 2.21374C16.4348 2.07523 16.2161 2 15.9909 2C15.7658 2 15.5471 2.07523 15.3696 2.21374L1 13.4193L2.2427 14.991L4 13.6208V25.9999C4.00108 26.53 4.21215 27.0381 4.58698 27.413C4.96182 27.7878 5.4699 27.9989 6 27.9999H26C26.5301 27.999 27.0383 27.7879 27.4131 27.4131C27.788 27.0382 27.999 26.5301 28 25.9999V13.6299L29.7573 14.9999L31 13.4281L16.6123 2.21374ZM18 25.9999H14V17.9999H18V25.9999ZM20 25.9999V17.9999C19.9994 17.4697 19.7885 16.9613 19.4135 16.5864C19.0386 16.2115 18.5302 16.0006 18 15.9999H14C13.4697 16.0005 12.9613 16.2114 12.5864 16.5863C12.2114 16.9613 12.0005 17.4697 12 17.9999V25.9999H6V12.0614L16 4.27144L26 12.0719V25.9999H20Z"
                      fill={count == 0 ? '#2AECDA' : '#fff'}
                    />
                  </g>
                </g>
                <defs>
                  <filter
                    id="filter0_d_3175_196"
                    x="0"
                    y="1"
                    width="34"
                    height="30"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="1" dy="1" />
                    <feGaussianBlur stdDeviation="1" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_3175_196"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_3175_196"
                      result="shape"
                    />
                  </filter>
                  <clipPath id="clip0_3175_196">
                    <rect width="32" height="32" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <div
                className=" font-Inter text-2xl font-semibold tracking-[-0.03rem] leading-5 ml-3"
                style={testShow}
              >
                Home
              </div>
            </div>
          </Link>
          <Link className="no-underline" href={sustainability}>
            <div
              className="flex items-center justify-center py-4 px-6 w-[15.25rem] box-border mr-10 cursor-pointer"
              style={count == 1 ? backgroundLiner : backgroundLinertarget}
              onClick={targetClick(1)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2rem"
                height="2rem"
                viewBox="0 0 32 32"
                fill="none"
              >
                <g clipPath="url(#clip0_3175_201)">
                  <g filter="url(#filter0_d_3175_201)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16 1.99976C23.7196 1.99976 30 8.28016 30 15.9998C30 19.4884 28.7248 22.7627 26.4146 25.333H29.0667V27.1997H23.4667V21.5997H25.3334V23.7534C27.1468 21.5801 28.1334 18.8699 28.1334 15.9997C28.1334 9.30953 22.6904 3.86633 16 3.86633C14.1803 3.86633 12.431 4.25917 10.8006 5.03346L9.99946 3.3473C11.8823 2.45317 13.901 1.99976 16 1.99976ZM21.1994 26.9663C19.5691 27.7406 17.8197 28.1335 16 28.1335C9.30968 28.1335 3.86667 22.6903 3.86667 16.0001C3.86667 13.1299 4.85329 10.4197 6.66667 8.24637V10.4001H8.53333V4.80013H2.93333V6.6668H5.58549C3.27521 9.23711 2 12.5115 2 16.0001C2 23.7197 8.2804 30.0001 16 30.0001C18.0991 30.0001 20.1178 29.5467 22.0006 28.6526L21.1994 26.9663ZM20.6665 9.46649C17.717 9.46649 15.2984 11.7597 15.0872 14.6563C14.0928 13.7549 12.7782 13.1998 11.3331 13.1998H7.59981V16.9332C7.59981 20.0212 10.1121 22.5332 13.1998 22.5332H15.0665V26.2665H16.9331V18.7994L18.7998 18.7998C21.8876 18.7998 24.3998 16.2878 24.3998 13.1998V9.46649H20.6665ZM13.1998 20.6665C11.1413 20.6665 9.46648 18.9917 9.46648 16.9332V15.0665H11.3331C13.3917 15.0665 15.0665 16.7413 15.0665 18.7998V19.3467L12.9263 17.2065L11.6065 18.5264L13.7467 20.6665H13.1998ZM22.5331 13.1998C22.5331 15.2584 20.8584 16.9332 18.7998 16.9332H18.253L20.3931 14.793L19.0733 13.4732L16.9331 15.6133V15.0665C16.9331 13.0079 18.6079 11.3332 20.6665 11.3332H22.5331V13.1998Z"
                      fill={count == 1 ? '#2AECDA' : '#fff'}
                    />
                  </g>
                </g>
                <defs>
                  <filter
                    id="filter0_d_3175_201"
                    x="1"
                    y="0.999756"
                    width="32"
                    height="32.0004"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="1" dy="1" />
                    <feGaussianBlur stdDeviation="1" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_3175_201"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_3175_201"
                      result="shape"
                    />
                  </filter>
                  <clipPath id="clip0_3175_201">
                    <rect width="32" height="32" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <div
                className=" font-Inter text-2xl font-semibold tracking-[-0.03rem] leading-5 ml-3"
                style={testShow}
              >
                Sustainability
              </div>
            </div>
          </Link>
          <Link className="no-underline" href={buildingManagement}>
            <div
              className="flex items-center justify-center py-4 px-6 w-[21rem] box-border mr-10 cursor-pointer"
              style={count == 2 ? backgroundLiner : backgroundLinertarget}
              onClick={targetClick(2)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2rem"
                height="2rem"
                viewBox="0 0 32 32"
                fill={count == 2 ? '#2AECDA' : '#fff'}
              >
                <g clipPath="url(#clip0_3175_42)">
                  <g filter="url(#filter0_d_3175_42)">
                    <path
                      d="M28 2H16C15.4697 2.00053 14.9613 2.21141 14.5864 2.58637C14.2114 2.96133 14.0005 3.46973 14 4V14H4C3.46973 14.0005 2.96133 14.2114 2.58637 14.5864C2.21141 14.9613 2.00053 15.4697 2 16V30H30V4C29.9994 3.46975 29.7885 2.9614 29.4135 2.58646C29.0386 2.21152 28.5302 2.00061 28 2ZM9 28V21H13V28H9ZM28 28H15V20C15 19.7348 14.8946 19.4804 14.7071 19.2929C14.5196 19.1054 14.2652 19 14 19H8C7.73478 19 7.48043 19.1054 7.29289 19.2929C7.10536 19.4804 7 19.7348 7 20V28H4V16H16V4H28V28Z"
                      fill={count == 2 ? '#2AECDA' : '#fff'}
                    />
                  </g>
                  <g filter="url(#filter1_d_3175_42)">
                    <path d="M20 8H18V10H20V8Z" fill="#F3F4F6" />
                  </g>
                  <g filter="url(#filter2_d_3175_42)">
                    <path d="M26 8H24V10H26V8Z" fill="#F3F4F6" />
                  </g>
                  <path d="M20 14H18V16H20V14Z" fill="#F3F4F6" />
                  <path d="M26 14H24V16H26V14Z" fill="#F3F4F6" />
                  <path d="M20 19.9996H18V21.9996H20V19.9996Z" fill="#F3F4F6" />
                  <path d="M26 19.9996H24V21.9996H26V19.9996Z" fill="#F3F4F6" />
                  <path d="M7 10.0002H2V11.9997H7V10.0002Z" fill="#F3F4F6" />
                  <path d="M12 2H10V7H12V2Z" fill="#F3F4F6" />
                  <path
                    d="M5.41407 3.99999L4 5.41406L7.58595 9.00001L9.00002 7.58594L5.41407 3.99999Z"
                    fill="#F3F4F6"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_3175_42"
                    x="1"
                    y="1"
                    width="32"
                    height="32"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="1" dy="1" />
                    <feGaussianBlur stdDeviation="1" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_3175_42"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_3175_42"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter1_d_3175_42"
                    x="17"
                    y="7"
                    width="6"
                    height="6"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="1" dy="1" />
                    <feGaussianBlur stdDeviation="1" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_3175_42"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_3175_42"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter2_d_3175_42"
                    x="23"
                    y="7"
                    width="6"
                    height="6"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="1" dy="1" />
                    <feGaussianBlur stdDeviation="1" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_3175_42"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_3175_42"
                      result="shape"
                    />
                  </filter>
                  <clipPath id="clip0_3175_42">
                    <rect width="32" height="32" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <div
                className=" font-Inter text-2xl font-semibold tracking-[-0.03rem] leading-5 ml-3"
                style={testShow}
              >
                Building Management
              </div>
            </div>
          </Link>
          <Link className="no-underline" href={virtualTour}>
            <div
              className="flex items-center justify-center py-4 px-6 w-[13.9375rem] box-border mr-10 cursor-pointer"
              style={count == 3 ? backgroundLiner : backgroundLinertarget}
              onClick={targetClick(3)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.9375rem"
                height="1.9375rem"
                viewBox="0 0 31 31"
                fill={count == 3 ? '#F3F4F6' : '#fff'}
              >
                <g filter="url(#filter0_d_3175_211)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.79333 19.6937C2.83333 19.6671 6.74 17.1671 15 17.1671C23.1297 17.1671 27.0165 19.5759 27.2007 19.69L27.2067 19.6937L28.5 20.5537V1.90039L27.44 2.20039C27.3933 2.21372 22.7667 3.50039 15 3.50039C7.23333 3.50039 2.60667 2.21372 2.56 2.20039L1.5 1.90039V20.5471L2.79333 19.7004V19.6937ZM15 15.5004C10.26 15.5004 6.88 16.2804 4.73333 17.0137C6.32 14.5137 7.7 13.3804 8.08667 13.5004C8.34 13.5804 8.58 13.7937 8.83333 14.0271L8.83639 14.0298C9.20921 14.3694 9.67515 14.7937 10.34 14.7937C11.4467 14.7937 12.5 13.7071 13.72 12.4471C14.5133 11.6271 15.3333 10.7804 16.12 10.2937C16.2154 10.2365 16.3074 10.1758 16.4009 10.1142L16.4009 10.1141C16.4381 10.0897 16.4754 10.065 16.5133 10.0404C16.9733 9.74039 17.4533 9.43372 17.9133 9.26706C19.3933 8.74706 20.8 9.40706 22.36 11.3537C23.6533 12.9671 25.2533 15.7004 26.18 17.3471C24.14 16.5337 20.48 15.5004 15.0067 15.5004H15ZM15 5.16706C9.09388 5.16706 4.99667 4.45546 3.17333 4.06183V16.3737C4.53333 14.1471 6.69333 11.3271 8.58667 11.9204C9.18075 12.1032 9.59582 12.4778 9.93207 12.7812L9.95333 12.8004L9.99931 12.8419C10.129 12.9594 10.2954 13.11 10.3667 13.1337C10.7272 13.1337 11.8097 12.0186 12.4796 11.3285L12.4796 11.3285L12.5133 11.2937C13.38 10.4004 14.2733 9.48039 15.2267 8.88039C15.29 8.84039 15.3517 8.80039 15.4133 8.76039C15.475 8.72039 15.5367 8.68039 15.6 8.64039C16.1133 8.30039 16.7 7.92039 17.3533 7.69372C19.5333 6.92706 21.6533 7.80706 23.6533 10.3137C24.7 11.6204 25.9 13.5604 26.8333 15.1537V4.06039C25.0133 4.45372 20.9133 5.16706 15 5.16706ZM9.66667 11.1673C10.86 11.1673 11.8333 10.194 11.8333 9.00065C11.8333 7.80732 10.86 6.83398 9.66667 6.83398C8.47333 6.83398 7.5 7.80732 7.5 9.00065C7.5 10.194 8.47333 11.1673 9.66667 11.1673ZM9.66667 8.50065C9.94 8.50065 10.1667 8.72732 10.1667 9.00065C10.1667 9.27398 9.94 9.50065 9.66667 9.50065C9.39333 9.50065 9.16667 9.27398 9.16667 9.00065C9.16667 8.72732 9.39333 8.50065 9.66667 8.50065ZM1.5 23.0005C1.5 20.1405 8.5 18.8338 15 18.8338V18.8271C21.5 18.8271 28.5 20.1338 28.5 22.9938C28.5 25.3405 24.04 26.3538 21 26.7738V28.3871L16.3333 25.6938L21 23.0005V25.0938C25.3733 24.4605 26.8333 23.3405 26.8333 23.0005C26.8333 22.2538 22.8067 20.5005 15 20.5005C7.19333 20.5005 3.16667 22.2538 3.16667 23.0005C3.16667 23.3538 4.69333 24.3938 9.66667 25.0005V27.0005C6.65333 26.6338 1.5 25.4938 1.5 23.0005Z"
                    fill={count == 3 ? '#F3F4F6' : '#fff'}
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_3175_211"
                    x="0.5"
                    y="0.900391"
                    width="30.4868"
                    height="30.4868"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="1" dy="1" />
                    <feGaussianBlur stdDeviation="1" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_3175_211"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_3175_211"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
              <div
                className=" font-Inter text-2xl font-semibold tracking-[-0.03rem] leading-5 ml-3"
                style={testShow}
              >
                Virtual Tour
              </div>
            </div>
          </Link>
          <Link className="no-underline" href={achievements}>
            <div
              className="flex items-center justify-center py-4 px-6 w-[15.8125rem] box-border cursor-pointer"
              style={count == 4 ? backgroundLiner : backgroundLinertarget}
              onClick={targetClick(4)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2rem"
                height="2rem"
                viewBox="0 0 32 32"
                fill={count == 4 ? '#F3F4F6' : '#fff'}
              >
                <g clipPath="url(#clip0_3175_218)">
                  <path
                    d="M23 2L24.593 5L28 5.414L25.5 7.667L26 11L23 9.125L20 11L20.5 7.667L18 5.414L21.5 5L23 2Z"
                    fill={count == 4 ? '#F3F4F6' : '#fff'}
                  />
                  <path
                    d="M22.7169 13.249L20.7794 12.751C20.4321 14.0893 19.6959 15.2946 18.6638 16.2147C17.6318 17.1348 16.3502 17.7283 14.981 17.9204C13.6118 18.1124 12.2164 17.8944 10.971 17.2937C9.72567 16.6931 8.68629 15.7368 7.98417 14.5457C7.28206 13.3547 6.94872 11.9822 7.02626 10.6017C7.1038 9.22129 7.58875 7.89479 8.41983 6.78983C9.25092 5.68486 10.3909 4.85101 11.6956 4.39361C13.0004 3.93621 14.4115 3.87579 15.7506 4.21997L16.2496 2.28348C14.2979 1.77656 12.2325 1.94048 10.3853 2.74889C8.53801 3.55731 7.01616 4.96328 6.06428 6.74086C5.1124 8.51845 4.78576 10.5644 5.13684 12.55C5.48793 14.5356 6.49635 16.3456 8.00007 17.689V30L14.0001 26L20.0001 30V17.7078C21.3281 16.5241 22.2739 14.9719 22.7169 13.249ZM18.0001 26.2627L14.0001 23.5962L10.0001 26.2627V19.05C11.2411 19.6735 12.6105 19.9987 13.9993 19.9998C15.3882 20.0008 16.7581 19.6777 18.0001 19.0562V26.2627Z"
                    fill={count == 4 ? '#F3F4F6' : '#fff'}
                  />
                </g>
                <defs>
                  <clipPath id="clip0_3175_218">
                    <rect width="32" height="32" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <div
                className=" font-Inter text-2xl font-semibold tracking-[-0.03rem] leading-5 ml-3"
                style={testShow}
              >
                Achievements
              </div>
            </div>
          </Link>
        </div>
        {/* 右边 */}
        <div style={count == 0 ? show : hidden}>
          <div className="pr-[4.5rem] flex items-center">
            <div
              className="rounded-2xl w-[6.25rem] h-[6.25rem] flex shrink-0 flex-col justify-center items-center"
              style={iconBox}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="5rem"
                height="5rem"
                viewBox="0 0 80 80"
                fill="none"
              >
                <g filter="url(#filter0_d_3140_11592)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M40.0718 18.2116C40.4584 18.2116 40.8294 18.0584 41.1028 17.7858C41.3761 17.5131 41.5298 17.1433 41.5298 16.7578V12.2752C41.5306 12.0895 41.4924 11.9057 41.4177 11.7356C41.3431 11.5655 41.2338 11.4128 41.0965 11.2873C40.9593 11.1618 40.7972 11.0663 40.6208 11.007C40.4444 10.9476 40.2572 10.9256 40.0718 10.9425C39.7174 10.9425 39.3775 11.0829 39.1269 11.3329C38.8763 11.5828 38.7357 11.9218 38.7357 12.2752V16.7578C38.7344 17.1232 38.8712 17.4758 39.1189 17.7452C39.3665 18.0146 39.7066 18.1811 40.0718 18.2116ZM40.077 56.1043C49.0005 56.1043 56.2343 48.8902 56.2343 39.9912C56.2343 31.0923 49.0005 23.8782 40.077 23.8782C31.1536 23.8782 23.9197 31.0923 23.9197 39.9912C23.9197 48.8902 31.1536 56.1043 40.077 56.1043ZM39.1188 62.2548C39.3664 61.9854 39.7065 61.8189 40.0717 61.7884C40.4584 61.7884 40.8293 61.9416 41.1027 62.2142C41.3761 62.4869 41.5298 62.8566 41.5298 63.2422V67.7248C41.5306 67.9105 41.4923 68.0943 41.4177 68.2644C41.3431 68.4345 41.2337 68.5872 41.0965 68.7127C40.9592 68.8382 40.7972 68.9336 40.6207 68.993C40.4443 69.0524 40.2572 69.0743 40.0717 69.0575C39.7173 69.0575 39.3774 68.917 39.1268 68.6671C38.8762 68.4172 38.7356 68.0782 38.7356 67.7248V63.2422C38.7343 62.8767 38.8712 62.5242 39.1188 62.2548ZM16.7692 38.5333H12.396C12.0093 38.5333 11.6384 38.6864 11.365 38.9591C11.0916 39.2317 10.9382 39.6015 10.9382 39.9871C10.9382 40.3727 11.0916 40.7424 11.365 41.0151C11.6384 41.2877 12.0093 41.4409 12.396 41.4409H16.7692C17.1558 41.4409 17.5268 41.2877 17.8002 41.0151C18.0736 40.7424 18.2273 40.3727 18.2273 39.9871C18.2273 39.6015 18.0736 39.2317 17.8002 38.9591C17.5268 38.6864 17.1558 38.5333 16.7692 38.5333ZM63.511 38.5333H67.8845C68.2711 38.5333 68.6418 38.6864 68.9152 38.9591C69.1885 39.2317 69.3422 39.6015 69.3422 39.9871C69.3422 40.3727 69.1885 40.7424 68.9152 41.0151C68.6418 41.2877 68.2711 41.4409 67.8845 41.4409H63.511C63.1243 41.4409 62.7534 41.2877 62.48 41.0151C62.2066 40.7424 62.0532 40.3727 62.0532 39.9871C62.0532 39.6015 62.2066 39.2317 62.48 38.9591C62.7534 38.6864 63.1243 38.5333 63.511 38.5333ZM21.8699 56.2071L18.7112 59.357C18.5603 59.4698 18.4378 59.6162 18.3535 59.7844C18.2691 59.9526 18.2253 60.1381 18.2253 60.3262C18.2253 60.5143 18.2691 60.6998 18.3535 60.868C18.4378 61.0362 18.5603 61.1826 18.7112 61.2954C18.8466 61.4309 19.0076 61.5385 19.1848 61.6119C19.362 61.6852 19.552 61.723 19.7439 61.723C19.9358 61.723 20.1258 61.6852 20.303 61.6119C20.4802 61.5385 20.6409 61.4309 20.7763 61.2954L23.935 58.2666C24.1616 57.9709 24.2844 57.609 24.2844 57.2368C24.2844 56.8647 24.1616 56.5028 23.935 56.2071C23.8097 56.0549 23.6521 55.9323 23.4735 55.8481C23.295 55.7639 23.0998 55.7203 22.9023 55.7203C22.7048 55.7203 22.5099 55.7639 22.3314 55.8481C22.1528 55.9323 21.9952 56.0549 21.8699 56.2071ZM56.3369 21.7197L59.4953 18.691C59.6308 18.5554 59.7918 18.4479 59.969 18.3745C60.1462 18.3011 60.3362 18.2634 60.5281 18.2634C60.7199 18.2634 60.9099 18.3011 61.0871 18.3745C61.2643 18.4479 61.4251 18.5554 61.5605 18.691C61.7114 18.8038 61.8338 18.9501 61.9182 19.1184C62.0025 19.2866 62.0466 19.4721 62.0466 19.6602C62.0466 19.8482 62.0025 20.0337 61.9182 20.202C61.8338 20.3702 61.7114 20.5165 61.5605 20.6294L58.4021 23.7793C58.2667 23.9148 58.1056 24.0224 57.9284 24.0957C57.7512 24.1691 57.5612 24.2069 57.3694 24.2069C57.1775 24.2069 56.9875 24.1691 56.8103 24.0957C56.6331 24.0224 56.4724 23.9148 56.3369 23.7793C56.1103 23.4835 55.9875 23.1217 55.9875 22.7495C55.9875 22.3773 56.1103 22.0155 56.3369 21.7197ZM58.4021 56.2142C58.2667 56.0786 58.1056 55.9711 57.9284 55.8977C57.7512 55.8243 57.5612 55.7866 57.3694 55.7866C57.1775 55.7866 56.9875 55.8243 56.8103 55.8977C56.6331 55.9711 56.4724 56.0786 56.3369 56.2142C56.1103 56.5099 55.9875 56.8718 55.9875 57.2439C55.9875 57.6161 56.1103 57.978 56.3369 58.2737L59.4953 61.3025C59.6308 61.438 59.7918 61.5456 59.969 61.6189C60.1462 61.6923 60.3362 61.7301 60.5281 61.7301C60.7199 61.7301 60.9099 61.6923 61.0871 61.6189C61.2643 61.5456 61.4251 61.438 61.5605 61.3025C61.7114 61.1897 61.8338 61.0433 61.9182 60.8751C62.0025 60.7069 62.0466 60.5214 62.0466 60.3333C62.0466 60.1452 62.0025 59.9597 61.9182 59.7915C61.8338 59.6233 61.7114 59.4769 61.5605 59.3641L58.4021 56.2142ZM22.3314 24.1382C22.1528 24.0541 21.9952 23.9315 21.8699 23.7793L18.7112 20.6294C18.5603 20.5165 18.4378 20.3702 18.3535 20.202C18.2691 20.0337 18.2253 19.8482 18.2253 19.6602C18.2253 19.4721 18.2691 19.2866 18.3535 19.1184C18.4378 18.9501 18.5603 18.8038 18.7112 18.691C18.8466 18.5554 19.0076 18.4479 19.1848 18.3745C19.362 18.3011 19.552 18.2634 19.7439 18.2634C19.9358 18.2634 20.1258 18.3011 20.303 18.3745C20.4802 18.4479 20.6409 18.5554 20.7763 18.691L23.935 21.7197C24.1616 22.0155 24.2844 22.3773 24.2844 22.7495C24.2844 23.1217 24.1616 23.4835 23.935 23.7793C23.8097 23.9315 23.6521 24.0541 23.4735 24.1382C23.295 24.2224 23.0998 24.2661 22.9023 24.2661C22.7048 24.2661 22.5099 24.2224 22.3314 24.1382Z"
                    fill="white"
                  />
                </g>
                <path
                  d="M0 80V74.0557V68.1115L6 74.0557L12 80H6H0Z"
                  fill="white"
                />
                <defs>
                  <filter
                    id="filter0_d_3140_11592"
                    x="8.93823"
                    y="8.93701"
                    width="66.4041"
                    height="66.126"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="2" dy="2" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.8 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_3140_11592"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_3140_11592"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
            <div
              className="rounded-2xl w-[6.25rem] h-[6.25rem] flex shrink-0 flex-col justify-center items-center ml-8"
              style={iconBox}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6.25rem"
                height="6.25rem"
                viewBox="0 0 100 100"
                fill="none"
              >
                <g filter="url(#filter0_d_3140_11607)">
                  <path
                    d="M46.6976 41.0948C46.6895 35.2044 48.8158 29.5019 52.6987 25C38.7279 25.1634 27.4414 36.2862 27.4414 50C27.4414 63.7138 38.883 75 52.997 75C56.7264 75.0033 60.4113 74.2066 63.7919 72.666C67.1725 71.1254 70.1666 68.8783 72.5634 66.0831H72.2532C58.1391 66.0831 46.6976 54.8903 46.6976 41.0831V41.0948Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_3140_11607"
                    x="25.4414"
                    y="23"
                    width="53.1219"
                    height="58"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="2" dy="2" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.8 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_3140_11607"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_3140_11607"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
            {/* 滑动条 */}
            <div
              className="rounded-2xl w-[26.25rem] h-[6.25rem] flex shrink-0 flex-col justify-center items-center ml-2 px-5 box-border"
              style={iconBox}
            >
              <div className="w-full h-[0.5rem] relative" style={liner}>
                <div
                  className="absolute top-[50%] left-[50%] flex items-center justify-center cursor-pointer"
                  style={{transform: 'translate(-50%,-50%)'}}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="3.0625rem"
                    height="3rem"
                    viewBox="0 0 49 48"
                    fill="none"
                  >
                    <g filter="url(#filter0_d_3140_11613)">
                      <circle
                        cx="22.3767"
                        cy="22"
                        r="20"
                        transform="rotate(-90 22.3767 22)"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_3140_11613"
                        x="0.376709"
                        y="0"
                        width="48"
                        height="49"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dx="2" dy="2" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.8 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_3140_11613"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_3140_11613"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
            <div
              className="rounded-2xl w-[6.25rem] h-[6.25rem] flex shrink-0 flex-col justify-center items-center ml-2"
              style={iconBox}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="4rem"
                height="4rem"
                viewBox="0 0 64 64"
                fill="none"
              >
                <g filter="url(#filter0_d_3140_11615)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M29.9365 9.38189C30.3002 9.38189 30.6492 9.23695 30.9064 8.97895C31.1636 8.72095 31.3082 8.37103 31.3082 8.00617V3.76436C31.3089 3.58864 31.2729 3.41471 31.2027 3.25373C31.1325 3.09274 31.0297 2.94825 30.9005 2.82952C30.7714 2.71078 30.619 2.62043 30.453 2.56425C30.287 2.50807 30.1109 2.48729 29.9365 2.50327C29.6031 2.50327 29.2833 2.63614 29.0475 2.87264C28.8117 3.10914 28.6795 3.4299 28.6795 3.76436V8.00617C28.6783 8.35201 28.807 8.68563 29.04 8.94057C29.2729 9.19551 29.5929 9.35307 29.9365 9.38189ZM29.9398 45.2393C38.3349 45.2393 45.1405 38.4128 45.1405 29.9917C45.1405 21.5707 38.3349 14.7441 29.9398 14.7441C21.5446 14.7441 14.739 21.5707 14.739 29.9917C14.739 38.4128 21.5446 45.2393 29.9398 45.2393ZM29.04 51.0595C29.2729 50.8046 29.5929 50.647 29.9365 50.6182C30.3002 50.6182 30.6492 50.7631 30.9064 51.0211C31.1636 51.2791 31.3082 51.629 31.3082 51.9939V56.2357C31.3089 56.4114 31.2729 56.5853 31.2027 56.7463C31.1325 56.9073 31.0297 57.0518 30.9005 57.1705C30.7714 57.2893 30.619 57.3796 30.453 57.4358C30.287 57.492 30.1109 57.5128 29.9365 57.4968C29.6031 57.4968 29.2833 57.3639 29.0475 57.1274C28.8117 56.8909 28.6795 56.5702 28.6795 56.2357V51.9939C28.6783 51.648 28.807 51.3144 29.04 51.0595ZM8.01286 28.6113H3.89854C3.5348 28.6113 3.18583 28.7563 2.92863 29.0143C2.67142 29.2723 2.5271 29.6222 2.5271 29.987C2.5271 30.3519 2.67142 30.7018 2.92863 30.9598C3.18583 31.2178 3.5348 31.3628 3.89854 31.3628H8.01286C8.37661 31.3628 8.72557 31.2178 8.98278 30.9598C9.23998 30.7018 9.38458 30.3519 9.38458 29.987C9.38458 29.6222 9.23998 29.2723 8.98278 29.0143C8.72557 28.7563 8.37661 28.6113 8.01286 28.6113ZM51.9869 28.6113H56.1015C56.4653 28.6113 56.814 28.7563 57.0712 29.0143C57.3284 29.2723 57.473 29.6222 57.473 29.987C57.473 30.3519 57.3284 30.7018 57.0712 30.9598C56.814 31.2178 56.4653 31.3628 56.1015 31.3628H51.9869C51.6232 31.3628 51.2742 31.2178 51.017 30.9598C50.7598 30.7018 50.6155 30.3519 50.6155 29.987C50.6155 29.6222 50.7598 29.2723 51.017 29.0143C51.2742 28.7563 51.6232 28.6113 51.9869 28.6113ZM12.8113 45.3366L9.83962 48.3173C9.69768 48.4241 9.58246 48.5626 9.50311 48.7218C9.42376 48.881 9.38257 49.0565 9.38257 49.2345C9.38257 49.4125 9.42376 49.588 9.50311 49.7472C9.58246 49.9064 9.69768 50.0448 9.83962 50.1516C9.96704 50.2799 10.1185 50.3817 10.2852 50.4511C10.4519 50.5205 10.6307 50.5563 10.8112 50.5563C10.9917 50.5563 11.1705 50.5205 11.3372 50.4511C11.5039 50.3817 11.6551 50.2799 11.7825 50.1516L14.7542 47.2855C14.9674 47.0057 15.0829 46.6633 15.0829 46.3111C15.0829 45.9589 14.9674 45.6164 14.7542 45.3366C14.6363 45.1926 14.488 45.0766 14.32 44.9969C14.1521 44.9173 13.9684 44.876 13.7826 44.876C13.5968 44.876 13.4135 44.9173 13.2455 44.9969C13.0775 45.0766 12.9292 45.1926 12.8113 45.3366ZM45.2386 12.7024L48.21 9.83628C48.3374 9.70802 48.4889 9.60626 48.6556 9.53683C48.8223 9.46739 49.0011 9.43164 49.1816 9.43164C49.3621 9.43164 49.5409 9.46739 49.7076 9.53683C49.8743 9.60626 50.0255 9.70802 50.1529 9.83628C50.2949 9.94306 50.4101 10.0815 50.4894 10.2407C50.5688 10.3999 50.6103 10.5755 50.6103 10.7534C50.6103 10.9314 50.5688 11.1069 50.4894 11.2661C50.4101 11.4253 50.2949 11.5638 50.1529 11.6706L47.1815 14.6513C47.0541 14.7796 46.9026 14.8813 46.7359 14.9508C46.5692 15.0202 46.3904 15.0559 46.2099 15.0559C46.0294 15.0559 45.8507 15.0202 45.6839 14.9508C45.5172 14.8813 45.366 14.7796 45.2386 14.6513C45.0254 14.3715 44.9099 14.029 44.9099 13.6768C44.9099 13.3246 45.0254 12.9822 45.2386 12.7024ZM47.1815 45.3441C47.0541 45.2158 46.9026 45.1141 46.7359 45.0446C46.5692 44.9752 46.3904 44.9395 46.2099 44.9395C46.0294 44.9395 45.8507 44.9752 45.6839 45.0446C45.5172 45.1141 45.366 45.2158 45.2386 45.3441C45.0254 45.6239 44.9099 45.9664 44.9099 46.3186C44.9099 46.6707 45.0254 47.0132 45.2386 47.293L48.21 50.1591C48.3374 50.2874 48.4889 50.3891 48.6556 50.4586C48.8223 50.528 49.0011 50.5637 49.1816 50.5637C49.3621 50.5637 49.5409 50.528 49.7076 50.4586C49.8743 50.3891 50.0255 50.2874 50.1529 50.1591C50.2949 50.0523 50.4101 49.9138 50.4894 49.7547C50.5688 49.5955 50.6103 49.4199 50.6103 49.242C50.6103 49.064 50.5688 48.8884 50.4894 48.7293C50.4101 48.5701 50.2949 48.4316 50.1529 48.3248L47.1815 45.3441ZM13.2455 14.991C13.0775 14.9113 12.9292 14.7953 12.8113 14.6513L9.83962 11.6706C9.69768 11.5638 9.58246 11.4253 9.50311 11.2661C9.42376 11.1069 9.38257 10.9314 9.38257 10.7534C9.38257 10.5755 9.42376 10.3999 9.50311 10.2407C9.58246 10.0815 9.69768 9.94306 9.83962 9.83628C9.96704 9.70802 10.1185 9.60626 10.2852 9.53683C10.4519 9.46739 10.6307 9.43164 10.8112 9.43164C10.9917 9.43164 11.1705 9.46739 11.3372 9.53683C11.5039 9.60626 11.6551 9.70802 11.7825 9.83628L14.7542 12.7024C14.9674 12.9822 15.0829 13.3246 15.0829 13.6768C15.0829 14.029 14.9674 14.3715 14.7542 14.6513C14.6363 14.7953 14.488 14.9113 14.32 14.991C14.1521 15.0706 13.9684 15.1119 13.7826 15.1119C13.5968 15.1119 13.4135 15.0706 13.2455 14.991Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_3140_11615"
                    x="0.5271"
                    y="0.498047"
                    width="62.9459"
                    height="63.0039"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="2" dy="2" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.8 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_3140_11615"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_3140_11615"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
