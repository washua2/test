'use client';
import {initEcharts} from "@/utils/echarts/totalWaterConsumption"
import { useEffect } from 'react';
import {setRem} from '../../utils/rem';

export default function TotalWaterConsumption() {
  useEffect(() => {
    setRem()
    initEcharts()
    
  });
  return <div className="w-[44rem] h-[18.875rem]" id="TotalWaterConsumption">

  </div>;
}
