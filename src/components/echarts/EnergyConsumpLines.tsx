'use client';
import {initEcharts} from "@/utils/echarts/energyConsumpLine"
import { useEffect } from 'react';
import {setRem} from '../../utils/rem';

export default function EnergyConsumpLine() {
  useEffect(() => {
    setRem()
    initEcharts()
    
  });
  return <div className="w-[44rem] h-[27.125rem]" id="EnergyConsumpLines">

  </div>;
}
