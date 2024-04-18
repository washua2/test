'use client';
import {initEcharts} from "@/utils/echarts/totalElectrical"
import { useEffect } from 'react';
import {setRem} from '../../utils/rem';

export default function TotalElectrical() {
  useEffect(() => {
    setRem()
    initEcharts()
    
  });
  return <div className="w-[44rem] h-[27.125rem]" id="TotalElectrical">

  </div>;
}
