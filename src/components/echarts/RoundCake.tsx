'use client';
import {initEcharts} from "@/utils/echarts/roundCake"
import { useEffect } from 'react';
import {setRem} from '../../utils/rem';

export default function RoundCake() {
  useEffect(() => {
    setRem()
    initEcharts()
  });
  return <div className="w-[27.5rem] h-[10rem]" id="RoundCake">

  </div>;
}
