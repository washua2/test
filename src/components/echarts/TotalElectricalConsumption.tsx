'use client';
import {initEcharts} from "@/utils/echarts/totalElectricalConsumption"
import { useEffect } from 'react';
import {setRem} from '../../utils/rem';

export default function TotalElectricalConsumption() {
  useEffect(() => {
    setRem()
    initEcharts()
    
  });
  return <div className="w-[44rem] h-[18.875rem]" id="TotalElectricalConsumption">

  </div>;
}
