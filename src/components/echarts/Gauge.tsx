'use client';
import {initEcharts} from "@/utils/echarts/gauge"
import { useEffect } from 'react';
import {setRem} from '../../utils/rem';

export default function Gauge() {
  useEffect(() => {
    setRem()
    initEcharts()
    
  });
  return <div className="w-[22.125rem] h-[12.0625rem]" id="Gauge">

  </div>;
}
