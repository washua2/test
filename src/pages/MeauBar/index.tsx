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
  background: 'rgba(17, 25, 40, 0.80)',
  borderRadius: '1rem',
  textShadow: '0.0625rem 0.0625rem 0.125rem rgba(0, 0, 0, 0.50)',
};
const backgroundLinertarget = {
  color: '#fff',
  background: 'rgba(17, 25, 40, 0.80)',
  borderRadius: '1rem',
  textShadow: '0.0625rem 0.0625rem 0.125rem rgba(0, 0, 0, 0.50)',
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
type selfProps = {
  callCount: Function;
};
let isShowList = [0, 1, 2];
const NavBar: React.FC<selfProps> = (props: any) => {
  const {callCount} = props;
  //
  let [count, setCount] = useState(-1);
  //点击高亮
  const targetClick = useCallback((num: number) => {
    return (event: MouseEvent<HTMLDivElement>) => {
      if (count == num) {
        let chr = isShowList.filter((v: number) => v == num);
        setCount((count = -1));
        if (!chr.length) return;
        callCount(count);
        return;
      }
      setCount((count = num));
      callCount(count);
    };
  }, []);
  return (
    <nav>
      {/* 左边菜单 */}
      <div className="w-[8.75rem] flex flex-wrap flex-col items-start relative z-10">
        <div
          className="flex items-center justify-center flex-wrap py-4 px-6 w-[8.75rem] h-[8.75rem] mb-3 box-border cursor-pointer relative"
          style={count == 7 ? backgroundLiner : backgroundLinertarget}
          onClick={targetClick(7)}
        >
          <svg
            width="3rem"
            height="3rem"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Virtual Tour 1">
              <g id="Group">
                <path
                  id="Vector"
                  d="M24 36C30.6149 36 36 30.6149 36 24C36 17.3851 30.6149 12 24 12C17.3851 12 12 17.3851 12 24C12 30.6149 17.3851 36 24 36ZM24 15C28.9651 15 33 19.035 33 24C33 28.965 28.965 33 24 33C19.035 33 15 28.965 15 24C15 19.035 19.035 15 24 15Z"
                  fill="#F3F4F6"
                />
                <path
                  id="Vector_2"
                  d="M24 9C24.825 9 25.5 8.32502 25.5 7.5V4.5C25.5 3.67498 24.825 3 24 3C23.175 3 22.5 3.67498 22.5 4.5V7.5C22.5 8.32502 23.175 9 24 9Z"
                  fill="#F3F4F6"
                />
                <path
                  id="Vector_3"
                  d="M22.5 40.5V43.5C22.5 44.325 23.175 45 24 45C24.825 45 25.5 44.325 25.5 43.5V40.5C25.5 39.675 24.825 39 24 39C23.175 39 22.5 39.675 22.5 40.5Z"
                  fill="#F3F4F6"
                />
                <path
                  id="Vector_4"
                  d="M43.5 22.5H40.5C39.675 22.5 39 23.175 39 24C39 24.825 39.675 25.5 40.5 25.5H43.5C44.325 25.5 45 24.825 45 24C45 23.175 44.325 22.5 43.5 22.5Z"
                  fill="#F3F4F6"
                />
                <path
                  id="Vector_5"
                  d="M4.5 25.5H7.5C8.32502 25.5 9 24.825 9 24C9 23.175 8.32502 22.5 7.5 22.5H4.5C3.67498 22.5 3 23.175 3 24C3 24.825 3.67498 25.5 4.5 25.5Z"
                  fill="#F3F4F6"
                />
                <path
                  id="Vector_6"
                  d="M35.6699 13.83C36.0599 13.83 36.4349 13.68 36.7349 13.395L38.8499 11.28C39.4349 10.695 39.4349 9.74998 38.8499 9.16501C38.2648 8.58003 37.3199 8.57998 36.7349 9.16501L34.6199 11.28C34.0349 11.865 34.0349 12.81 34.6199 13.395C34.9049 13.68 35.2799 13.83 35.6699 13.83Z"
                  fill="#F3F4F6"
                />
                <path
                  id="Vector_7"
                  d="M11.2652 34.6051L9.15019 36.7351C8.56517 37.3201 8.56517 38.2651 9.15019 38.85C9.45019 39.15 9.82517 39.285 10.2152 39.285C10.6053 39.285 10.9802 39.135 11.2802 38.85L13.3952 36.7351C13.9802 36.15 13.9802 35.2051 13.3952 34.6201C12.8102 34.0351 11.8652 34.0201 11.2652 34.6051Z"
                  fill="#F3F4F6"
                />
                <path
                  id="Vector_8"
                  d="M34.6048 34.605C34.0198 35.1901 34.0198 36.135 34.6048 36.72L36.7198 38.835C37.0198 39.135 37.3947 39.27 37.7848 39.27C38.1748 39.27 38.5498 39.12 38.8498 38.835C39.4348 38.25 39.4348 37.305 38.8498 36.72L36.7348 34.605C36.1348 34.02 35.1898 34.02 34.6048 34.605Z"
                  fill="#F3F4F6"
                />
                <path
                  id="Vector_9"
                  d="M11.2651 13.395C11.5651 13.695 11.9401 13.83 12.3301 13.83C12.7202 13.83 13.0952 13.68 13.3952 13.395C13.9802 12.81 13.9802 11.865 13.3952 11.28L11.2652 9.15001C10.6801 8.56499 9.73515 8.56499 9.15018 9.15001C8.5652 9.73503 8.56515 10.68 9.15018 11.265L11.2651 13.395Z"
                  fill="#F3F4F6"
                />
              </g>
            </g>
          </svg>

          <div
            className=" font-Inter text-center font-[600] text-[1.125rem] tracking-[-0.03rem] leading-5"
            style={testShow}
          >
            Weather
          </div>
          <div className="absolute left-[0.8125rem] bottom-[0.8125rem]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="0.75rem"
              height="0.75rem"
              viewBox="0 0 12 12"
              fill="none"
            >
              <path d="M0 12V6V0L6 6L12 12H6H0Z" fill="white" />
            </svg>
          </div>
        </div>
        <div
          className="flex items-start justify-center flex-wrap px-6 w-[8.75rem] box-border mb-3 cursor-pointer py-10"
          style={backgroundLinertarget}
        >
          <div className="mb-[0.875rem] w-[8.75rem] flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5625rem"
              height="1.5625rem"
              viewBox="0 0 25 25"
              fill="none"
            >
              <path
                d="M12.5052 19.6233C16.4429 19.6233 19.635 16.4213 19.635 12.4715C19.635 8.52176 16.4429 5.31982 12.5052 5.31982C8.56758 5.31982 5.37549 8.52176 5.37549 12.4715C5.37549 16.4213 8.56758 19.6233 12.5052 19.6233Z"
                fill="white"
              />
              <path
                d="M12.5043 3.97966C12.675 3.97966 12.8387 3.91166 12.9594 3.79062C13.08 3.66957 13.1479 3.5054 13.1479 3.33422V1.34411C13.1482 1.26167 13.1313 1.18007 13.0984 1.10454C13.0655 1.02901 13.0172 0.961221 12.9566 0.905515C12.896 0.849809 12.8245 0.807419 12.7466 0.781061C12.6688 0.754702 12.5862 0.744955 12.5043 0.75245C12.3479 0.75245 12.1978 0.814789 12.0872 0.925746C11.9766 1.0367 11.9146 1.18719 11.9146 1.34411V3.33422C11.914 3.49648 11.9744 3.653 12.0837 3.77261C12.193 3.89222 12.3431 3.96614 12.5043 3.97966Z"
                fill="white"
              />
              <path
                d="M12.5043 20.9668C12.3431 20.9803 12.193 21.0542 12.0837 21.1739C11.9744 21.2935 11.914 21.45 11.9146 21.6122V23.6023C11.9146 23.7593 11.9766 23.9098 12.0872 24.0207C12.1978 24.1317 12.3479 24.194 12.5043 24.194C12.5862 24.2015 12.6688 24.1918 12.7466 24.1654C12.8245 24.139 12.896 24.0966 12.9566 24.0409C13.0172 23.9852 13.0655 23.9174 13.0984 23.8419C13.1313 23.7664 13.1482 23.6848 13.1479 23.6023V21.6122C13.1479 21.4411 13.08 21.2769 12.9594 21.1558C12.8387 21.0348 12.675 20.9668 12.5043 20.9668Z"
                fill="white"
              />
              <path
                d="M3.39258 11.8358H1.46228C1.29163 11.8358 1.1279 11.9038 1.00723 12.0249C0.886558 12.1459 0.818848 12.3101 0.818848 12.4813C0.818848 12.6524 0.886558 12.8166 1.00723 12.9377C1.1279 13.0587 1.29163 13.1267 1.46228 13.1267H3.39258C3.56324 13.1267 3.72696 13.0587 3.84763 12.9377C3.9683 12.8166 4.03615 12.6524 4.03615 12.4813C4.03615 12.3101 3.9683 12.1459 3.84763 12.0249C3.72696 11.9038 3.56324 11.8358 3.39258 11.8358Z"
                fill="white"
              />
              <path
                d="M23.5997 11.8358H21.6693C21.4987 11.8358 21.3349 11.9038 21.2143 12.0249C21.0936 12.1459 21.0259 12.3101 21.0259 12.4813C21.0259 12.6524 21.0936 12.8166 21.2143 12.9377C21.3349 13.0587 21.4987 13.1267 21.6693 13.1267H23.5997C23.7704 13.1267 23.934 13.0587 24.0547 12.9377C24.1753 12.8166 24.2432 12.6524 24.2432 12.4813C24.2432 12.3101 24.1753 12.1459 24.0547 12.0249C23.934 11.9038 23.7704 11.8358 23.5997 11.8358Z"
                fill="white"
              />
              <path
                d="M5.64527 18.5002L4.25106 19.8986C4.18446 19.9487 4.1304 20.0137 4.09318 20.0884C4.05595 20.1631 4.03662 20.2454 4.03662 20.3289C4.03662 20.4124 4.05595 20.4948 4.09318 20.5695C4.1304 20.6441 4.18446 20.7091 4.25106 20.7592C4.31083 20.8194 4.38191 20.8671 4.46012 20.8997C4.53834 20.9323 4.6222 20.949 4.70689 20.949C4.79158 20.949 4.87545 20.9323 4.95366 20.8997C5.03187 20.8671 5.10282 20.8194 5.1626 20.7592L6.55681 19.4145C6.65683 19.2832 6.71103 19.1226 6.71103 18.9574C6.71103 18.7921 6.65683 18.6315 6.55681 18.5002C6.50148 18.4326 6.43192 18.3782 6.35311 18.3408C6.2743 18.3034 6.18815 18.2841 6.10098 18.2841C6.0138 18.2841 5.92778 18.3034 5.84897 18.3408C5.77016 18.3782 5.7006 18.4326 5.64527 18.5002Z"
                fill="white"
              />
              <path
                d="M19.9023 4.20168L18.5082 5.54635C18.4082 5.67765 18.354 5.8383 18.354 6.00354C18.354 6.16878 18.4082 6.32943 18.5082 6.46073C18.568 6.5209 18.6389 6.56864 18.7172 6.60122C18.7954 6.6338 18.8792 6.65057 18.9639 6.65057C19.0486 6.65057 19.1325 6.6338 19.2107 6.60122C19.2889 6.56864 19.36 6.5209 19.4198 6.46073L20.8138 5.06227C20.8804 5.01217 20.9345 4.9472 20.9717 4.87252C21.009 4.79783 21.0284 4.71548 21.0284 4.63198C21.0284 4.54848 21.009 4.46612 20.9717 4.39143C20.9345 4.31675 20.8804 4.25178 20.8138 4.20168C20.7541 4.14151 20.6831 4.09377 20.6049 4.06119C20.5267 4.02861 20.4428 4.01184 20.3581 4.01184C20.2735 4.01184 20.1896 4.02861 20.1114 4.06119C20.0332 4.09377 19.9621 4.14151 19.9023 4.20168Z"
                fill="white"
              />
              <path
                d="M19.4198 18.49C19.36 18.4298 19.2889 18.3821 19.2107 18.3495C19.1325 18.3169 19.0486 18.3002 18.9639 18.3002C18.8792 18.3002 18.7954 18.3169 18.7172 18.3495C18.6389 18.3821 18.568 18.4298 18.5082 18.49C18.4082 18.6213 18.354 18.782 18.354 18.9472C18.354 19.1124 18.4082 19.2731 18.5082 19.4044L19.9023 20.7491C19.9621 20.8092 20.0332 20.857 20.1114 20.8895C20.1896 20.9221 20.2735 20.9389 20.3581 20.9389C20.4428 20.9389 20.5267 20.9221 20.6049 20.8895C20.6831 20.857 20.7541 20.8092 20.8138 20.7491C20.8804 20.699 20.9345 20.634 20.9717 20.5593C21.009 20.4846 21.0284 20.4023 21.0284 20.3188C21.0284 20.2353 21.009 20.1529 20.9717 20.0782C20.9345 20.0035 20.8804 19.9386 20.8138 19.8885L19.4198 18.49Z"
                fill="white"
              />
              <path
                d="M5.64478 6.46073C5.70011 6.5283 5.76967 6.58272 5.84848 6.62009C5.92729 6.65746 6.01332 6.67684 6.10049 6.67684C6.18766 6.67684 6.27381 6.65746 6.35262 6.62009C6.43143 6.58272 6.50099 6.5283 6.55632 6.46073C6.65634 6.32943 6.71054 6.16878 6.71054 6.00354C6.71054 5.8383 6.65634 5.67765 6.55632 5.54635L5.16211 4.20168C5.10233 4.14151 5.03139 4.09377 4.95317 4.06119C4.87496 4.02861 4.79109 4.01184 4.7064 4.01184C4.62172 4.01184 4.53785 4.02861 4.45963 4.06119C4.38142 4.09377 4.31035 4.14151 4.25057 4.20168C4.18397 4.25178 4.12992 4.31675 4.09269 4.39143C4.05546 4.46612 4.03613 4.54848 4.03613 4.63198C4.03613 4.71548 4.05546 4.79783 4.09269 4.87252C4.12992 4.9472 4.18397 5.01217 4.25057 5.06227L5.64478 6.46073Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="w-[8.75rem] flex justify-center">
            <div
              className="w-[0.292813rem] h-[20.144938rem] relative"
              style={{
                background:
                  'linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #FFF 19.79%, #FFF 80.21%, rgba(255, 255, 255, 0.00) 100%)',
              }}
            >
              <svg
                className="absolute top-[50%] left-[50%]"
                style={{transform: 'translate(-50%, -50%)'}}
                xmlns="http://www.w3.org/2000/svg"
                width="3rem"
                height="3rem"
                viewBox="0 0 48 48"
                fill="none"
              >
                <ellipse
                  cx="24"
                  cy="23.8981"
                  rx="23.4244"
                  ry="23.4243"
                  transform="rotate(-180 24 23.8981)"
                  fill="white"
                />
              </svg>
            </div>
          </div>

          <div className="mt-[0.875rem] w-[8.75rem] flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.375rem"
              height="1.5rem"
              viewBox="0 0 22 24"
              fill="none"
            >
              <path
                d="M9.61933 7.56435C9.61561 4.80481 10.6012 2.13327 12.4009 0.0241699C5.92526 0.10072 0.693848 5.31159 0.693848 11.7363C0.693848 18.1611 5.99716 23.4485 12.5392 23.4485C14.2678 23.4501 15.9758 23.0768 17.5427 22.3551C19.1097 21.6333 20.4975 20.5806 21.6085 19.271H21.4647C14.9226 19.271 9.61933 14.0274 9.61933 7.55888V7.56435Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
        <div
          className="flex items-center justify-center flex-wrap py-4 px-6 w-[8.75rem] h-[8.75rem] box-border mb-3 cursor-pointer"
          style={count == 0 ? backgroundLiner : backgroundLinertarget}
          onClick={targetClick(0)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="3.125rem"
            height="3rem"
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
            className=" font-Inter text-[1.125rem] w-[8.75rem] text-center tracking-[-0.03rem] leading-5"
            style={testShow}
          >
            Home
          </div>
        </div>
        <div
          className="flex items-center justify-center flex-wrap py-4 px-6 w-[8.75rem] h-[8.75rem] box-border mb-3 cursor-pointer"
          style={count == 1 ? backgroundLiner : backgroundLinertarget}
          onClick={targetClick(1)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="3.125rem"
            height="3rem"
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
            className=" font-Inter text-center font-[600] text-[1.125rem] tracking-[-0.03rem] leading-5"
            style={testShow}
          >
            Sustainability
          </div>
        </div>
        <div
          className="flex items-center justify-center flex-wrap py-4 px-6 w-[8.75rem] h-[8.75rem] box-border mb-3 cursor-pointer"
          style={count == 2 ? backgroundLiner : backgroundLinertarget}
          onClick={targetClick(2)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="3.125rem"
            height="3rem"
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
            className=" font-Inter text-center font-[600] text-[1.125rem]  tracking-[-0.03rem] leading-5"
            style={testShow}
          >
            Building Management
          </div>
        </div>
        <div style={backgroundLinertarget}>
          <div
            className="flex rounded-none items-center justify-center flex-wrap py-4 px-6 w-[8.75rem] h-[8.75rem] box-border cursor-pointer"
            style={{color: count == 5 ? '#2AECDA' : '#fff'}}
            onClick={targetClick(5)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="3rem"
              height="3.0625rem"
              viewBox="0 0 48 49"
              fill={count == 5 ? '#F3F4F6' : '#fff'}
            >
              <path
                d="M21.4801 3.19824V21.6783H3V26.7183H21.4801V45.1984H26.5201V26.7183H45V21.6783H26.5201V3.19824H21.4801Z"
                fill={count == 5 ? '#F3F4F6' : '#fff'}
              />
            </svg>
            <div
              className=" font-Inter text-center font-[600] text-[1.125rem] tracking-[-0.03rem] leading-5"
              style={testShow}
            >
              Zoom In
            </div>
          </div>
          <div
            className="flex rounded-none items-center justify-center flex-wrap py-4 px-6 w-[8.75rem] h-[8.75rem] box-border cursor-pointer"
            style={{color: count == 6 ? '#2AECDA' : '#fff'}}
            onClick={targetClick(6)}
          >
            <svg
              width="3rem"
              height="3.0625rem"
              viewBox="0 0 48 49"
              fill={count == 6 ? '#F3F4F6' : '#fff'}
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Virtual Tour 1">
                <path
                  id="Zoom Out"
                  d="M45 21.1982H3V26.4482H45V21.1982Z"
                  fill={count == 6 ? '#F3F4F6' : '#fff'}
                />
              </g>
            </svg>

            <div
              className=" font-Inter text-center font-[600] text-[1.125rem] tracking-[-0.03rem] leading-5"
              style={testShow}
            >
              Zoom Out
            </div>
          </div>
        </div>
        <div
          className="flex items-center justify-center flex-wrap py-4 px-6 mt-[0.875rem] w-[8.75rem] h-[8.75rem] box-border mb-3 cursor-pointer"
          style={count == 9 ? backgroundLiner : backgroundLinertarget}
          onClick={targetClick(9)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="3rem"
            height="3.0625rem"
            viewBox="0 0 48 49"
            fill="none"
          >
            <path
              d="M34.4874 24.3087C34.2666 24.2203 34.0016 24.1762 33.6924 24.132C35.7681 21.9238 37.0489 18.9206 37.0489 15.6525C37.0047 8.80708 31.4401 3.19824 24.5505 3.19824C17.6609 3.19824 12.0962 8.80707 12.0962 15.6967C12.0962 18.9648 13.377 21.9238 15.4527 24.1762C15.1435 24.2203 14.8785 24.3087 14.6577 24.3528C8.65142 26.1635 4.5 31.8607 4.5 38.1762V42.9017C4.5 44.1383 5.51577 45.1982 6.79653 45.1982C8.07729 45.1982 9.09306 44.1825 9.09306 42.9017V38.1762C9.09306 33.8481 11.9637 29.9175 16.0268 28.6809C18.3675 27.9743 30.9543 27.9743 33.2508 28.6809C37.3139 29.9175 40.1845 33.8039 40.1845 38.1762V42.9017C40.1845 44.1383 41.2003 45.1982 42.4811 45.1982C43.7177 45.1982 44.7776 44.1825 44.7776 42.9017V38.1762C44.6451 31.8165 40.4937 26.1194 34.4874 24.3087ZM16.6451 15.6967C16.6451 11.3244 20.1782 7.7913 24.5505 7.7913C28.9227 7.7913 32.4558 11.3244 32.4558 15.6967C32.4558 20.0689 28.9227 23.602 24.5505 23.602C24.5063 23.602 24.5063 23.602 24.4621 23.602C20.1782 23.5579 16.6451 20.0247 16.6451 15.6967Z"
              fill="#F3F4F6"
            />
          </svg>
          <div
            className=" font-Inter text-[1.125rem] w-[8.75rem] text-center tracking-[-0.03rem] leading-5"
            style={testShow}
          >
            Avatar
          </div>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
