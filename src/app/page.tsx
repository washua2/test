'use client';
import UE4 from '@/pages/UE4/index';
import ScreenLeft from '@/pages/ScreenLeft';
import ScreenRight from '@/pages/ScreenRight';
import MeauBar from '@/pages/MeauBar';
import StadiumLeft from '@/pages/StadiumLeft/index';

import BuildingLeft from '@/pages/BuildingLeft/index';
import BuildingRight from '@/pages/BuildingRight/index';
import "../assets/js/ue4"
import "../assets/js/text"


import React, {
  useState,
  MouseEvent,
  useCallback,
  useRef,
  useEffect,
} from 'react';

export default function Home() {
  let [isLeft, setLeftStatus] = useState(false);
  let [isRight, setRightStatus] = useState(false);
  let [showCount, setShowCount] = useState(-1);
  const leftDom1 = useRef<HTMLDivElement>(null);
  const leftDom11 = useRef<HTMLDivElement>(null);
  const leftDom2 = useRef<HTMLDivElement>(null);
  const leftDom3 = useRef<HTMLDivElement>(null);
  const leftDom33 = useRef<HTMLDivElement>(null);

  let isShowList = [-1, 0, 1, 2];

  const setLeft = () => {
    setLeftStatus((isLeft = !isLeft));
  };
  const setRight = () => {
    setRightStatus((isRight = !isRight));
  };
  const getCallCount = (val: any) => {
    let chr = isShowList.filter((v: number) => v == val);
    if (!chr.length) return;
    if (val == -1) {
      setLeftStatus((isLeft = false));
      setRightStatus((isRight = false));
    } else {
      setLeftStatus((isLeft = true));
      setRightStatus((isRight = true));
    }
    setShowCount((showCount = val));
    handledAnimation(val);
  };
  // 处理延迟动画
  const handledAnimation = (val: number) => {
    console.log('val==>', val);
    switch (val) {
      case -1:
        setTimeout(() => {
          if (leftDom1.current) leftDom1.current.style.display = 'none';
        }, 500);
        setTimeout(() => {
          if (leftDom11.current) leftDom11.current.style.display = 'none';
        }, 500);
        setTimeout(() => {
          if (leftDom2.current) leftDom2.current.style.display = 'none';
        }, 500);
        setTimeout(() => {
          if (leftDom3.current) leftDom3.current.style.display = 'none';
        }, 500);
        setTimeout(() => {
          if (leftDom33.current) leftDom33.current.style.display = 'none';
        }, 500);
        break;
      case 0:
        if (leftDom1.current) leftDom1.current.style.display = 'block';
        if (leftDom11.current) leftDom11.current.style.display = 'block';
        if (leftDom3.current) leftDom3.current.style.display = 'none';
        if (leftDom33.current) leftDom33.current.style.display = 'none';
        if (leftDom2.current) leftDom2.current.style.display = 'none';
        break;
      case 1:
        if (leftDom1.current) leftDom1.current.style.display = 'none';
        if (leftDom11.current) leftDom11.current.style.display = 'none';
        if (leftDom3.current) leftDom3.current.style.display = 'none';
        if (leftDom33.current) leftDom33.current.style.display = 'none';
        if (leftDom2.current) leftDom2.current.style.display = 'block';
        break;
      case 2:
        if (leftDom1.current) leftDom1.current.style.display = 'none';
        if (leftDom11.current) leftDom11.current.style.display = 'none';
        if (leftDom2.current) leftDom2.current.style.display = 'none';
        if (leftDom3.current) leftDom3.current.style.display = 'block';
        if (leftDom33.current) leftDom33.current.style.display = 'block';
        break;
    }
  };
  useEffect(()=>{
  // demo()
    console.log()
  })
  return (
    <main className="flex items-start justify-between ml-[4.5rem] mr-[4.5rem]">
      {/* UE4 MODEL */}
      <UE4></UE4>
      <div className="relative w-[47.5rem]">
        <div
          className="absolute left-0 transition-[left] duration-500 ease-linear flex items-center"
          style={{left: isLeft ? '0' : '-52.5rem'}}
        >
          <div ref={leftDom1} className="hidden">
            <ScreenLeft></ScreenLeft>
          </div>
          <div ref={leftDom2} className="hidden">
            <StadiumLeft></StadiumLeft>
          </div>
          <div ref={leftDom3} className="hidden">
            <BuildingLeft></BuildingLeft>
          </div>
          <div
            className="ml-4 cursor-pointer origin-center"
            onClick={setLeft}
            style={{transform: isLeft ? 'rotate(0deg)' : 'rotate(-180deg)'}}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="4.3125rem"
              height="6.25rem"
              viewBox="0 0 69 100"
              fill="none"
            >
              <g filter="url(#filter0_d_5223_963)">
                <path
                  d="M48.75 20L40 20L20 50L40 80L48.75 80L28.75 50L48.75 20Z"
                  fill="white"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_5223_963"
                  x="0"
                  y="0"
                  width="68.75"
                  height="100"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="10" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.164706 0 0 0 0 0.92549 0 0 0 0 0.854902 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_5223_963"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_5223_963"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <div className="flex items-start justify-start">
        <div
          className="flex-auto fixed right-[58.3125rem] transition-[right] duration-500 ease-linear"
          style={{
            right:
              isRight && (showCount == 0 || showCount == 2)
                ? '58.3125rem'
                : '5.75rem',
          }}
        >
          <MeauBar callCount={getCallCount}></MeauBar>
        </div>
        <div
          className="flex-auto fixed right-[5.75rem] transition-[right] duration-500 ease-linear"
          style={{right: isRight&& (showCount == 0 || showCount == 2) ? '5.75rem' : '-47.125rem'}}
        >
          <div className="flex items-center">
            <div
              className="mr-0 cursor-pointer origin-center"
              onClick={setRight}
              style={{
                transform: isRight ? 'rotate(0deg)' : 'rotate(-180deg)',
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="4.3125rem"
                height="6.25rem"
                viewBox="0 0 69 100"
                fill="none"
              >
                <g filter="url(#filter0_d_5223_964)">
                  <path
                    d="M20 80L28.75 80L48.75 50L28.75 20L20 20L40 50L20 80Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_5223_964"
                    x="0"
                    y="0"
                    width="68.75"
                    height="100"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="10" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.164706 0 0 0 0 0.92549 0 0 0 0 0.854902 0 0 0 1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_5223_964"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_5223_964"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
            <div ref={leftDom11} className="hidden">
              <ScreenRight></ScreenRight>
            </div>
            <div ref={leftDom33} className="hidden">
              <BuildingRight></BuildingRight>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
