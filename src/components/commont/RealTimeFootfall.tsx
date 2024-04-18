'use client';
import React, {useState, MouseEvent, useCallback} from 'react';
import {useEffect} from 'react';

export default function Gauge() {
  let [weekList, setCount] = useState([
    {
      time: '09:00-10:00',
      items: [
        {
          data: '15/03',
          num: 39,
          backgroundColor: '#00E0CA',
        },
        {
          data: '15/03',
          num: 39,
          backgroundColor: '#00E0CA',
        },
        {
          data: '15/03',
          num: 39,
          backgroundColor: '#00E0CA',
        },
        {
          data: '15/03',
          num: 39,
          backgroundColor: '#fff',
        },
        {
          data: '15/03',
          num: 39,
          backgroundColor: '#fff',
        },
        {
          data: '15/03',
          num: 39,
          backgroundColor: '#fff',
        },
        {
          data: '15/03',
          num: 39,
          backgroundColor: '#00E0CA',
        },
      ],
    },
    {
      time: '09:00-10:00',
      items: [
        {
          data: '15/03',
          num: 39,
          backgroundColor: '#00E0CA',
        },
        {
          data: '15/03',
          num: 39,
          backgroundColor: '#00E0CA',
        },
        {
          data: '15/03',
          num: 39,
          backgroundColor: '#00E0CA',
        },
        {
          data: '15/03',
          num: 39,
          backgroundColor: '#00E0CA',
        },
        {
          data: '15/03',
          num: 39,
          backgroundColor: '#00E0CA',
        },
        {
          data: '15/03',
          num: 39,
          backgroundColor: '#00E0CA',
        },
        {
          data: '15/03',
          num: 39,
          backgroundColor: '#00E0CA',
        },
      ],
    },
    {
      time: '09:00-10:00',
      items: [
        {
          data: '15/03',
          num: 39,
          backgroundColor: '#00E0CA',
        },
        {
          data: '15/03',
          num: 39,
          backgroundColor: '#00E0CA',
        },
        {
          data: '15/03',
          num: 39,
          backgroundColor: '#00E0CA',
        },
        {
          data: '15/03',
          num: 39,
          backgroundColor: '#00E0CA',
        },
        {
          data: '15/03',
          num: 39,
          backgroundColor: '#00E0CA',
        },
        {
          data: '15/03',
          num: 39,
          backgroundColor: '#00E0CA',
        },
        {
          data: '15/03',
          num: 39,
          backgroundColor: '#00E0CA',
        },
      ],
    },
    {
      time: '09:00-10:00',
      items: [
        {
          data: '15/03',
          num: 39,
          backgroundColor: '#fff',
        },
        {
          data: '15/03',
          num: 39,
          backgroundColor: '#00E0CA',
        },
        {
          data: '15/03',
          num: 39,
          backgroundColor: '#00E0CA',
        },
        {
          data: '15/03',
          num: 39,
          backgroundColor: '#00E0CA',
        },
        {
          data: '15/03',
          num: 39,
          backgroundColor: '#fff',
        },
        {
          data: '15/03',
          num: 39,
          backgroundColor: '#00E0CA',
        },
        {
          data: '15/03',
          num: 39,
          backgroundColor: '#fff',
        },
      ],
    },
    {
      time: '09:00-10:00',
      items: [
        {
          data: '15/03',
          num: 39,
          backgroundColor: '#00E0CA',
        },
        {
          data: '15/03',
          num: 39,
          backgroundColor: '#00E0CA',
        },
        {
          data: '15/03',
          num: 39,
          backgroundColor: '#00E0CA',
        },
        {
          data: '15/03',
          num: 39,
          backgroundColor: '#00E0CA',
        },
        {
          data: '15/03',
          num: 39,
          backgroundColor: '#00E0CA',
        },
        {
          data: '15/03',
          num: 39,
          backgroundColor: '#00E0CA',
        },
        {
          data: '15/03',
          num: 39,
          backgroundColor: '#00E0CA',
        },
      ],
    },
    {
      time: '09:00-10:00',
      items: [
        {
          data: '15/03',
          num: 39,
          backgroundColor: '#00E0CA',
        },
        {
          data: '15/03',
          num: 39,
          backgroundColor: '#00E0CA',
        },
        {
          data: '15/03',
          num: 39,
          backgroundColor: '#fff',
        },
        {
          data: '15/03',
          num: 39,
          backgroundColor: '#00E0CA',
        },
        {
          data: '15/03',
          num: 39,
          backgroundColor: '#fff',
        },
        {
          data: '15/03',
          num: 39,
          backgroundColor: '#00E0CA',
        },
        {
          data: '15/03',
          num: 39,
          backgroundColor: '#fff',
        },
      ],
    },
  ]);

  return (
    <div className="w-full ">
      {weekList.map((item, index) => {
        return (
          <div key={index}>
            <div className="flex items-center">
              {/* 时间 */}
              <div className="w-[7.5rem] text-[1.1875rem] text-[#9CA3AF] font-Inter font-normal leading-[150%]"  key={index}>
                {item.time}
              </div>
              {/* 方块 */}
              <div className="flex items-center ml-[0.625rem]">
                {item.items.map((v, i) => {
                  return (
                    <div
                      className="w-[4.5rem] h-[4.5rem] ml-[0.625rem] mb-[0.625rem] flex items-center justify-center gap-2 text-right text-[1.375rem] font-normal leading-[150%] font-Inter"
                      style={{background: v.backgroundColor}} key={i}
                    >
                      {v.num}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
      <div className="flex items-center justify-end">
        <div className="w-[35.25rem] flex items-center justify-around box-border">
          {/* 日期 */}
          {weekList[0].items.map((v, i) => {
            return (
              <span className="text-[#9CA3AF] font-Inter text-xl font-medium leading-[150%]" key={i}>
                {v.data}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
