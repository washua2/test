'use client';
import {initEcharts} from "@/utils/echarts/totalCoolingLoad"
import { useEffect } from 'react';
import {setRem} from '../../utils/rem';

export default function TotalCoolingLoad() {
  useEffect(() => {
    setRem()
    initEcharts()
    
  });
  return <div className="w-[44rem] h-[18.875rem]" id="TotalCoolingLoad">

  </div>;
}
