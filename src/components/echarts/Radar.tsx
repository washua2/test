'use client';
import {initEcharts} from "@/utils/echarts/radar"
import { useEffect } from 'react';
import {setRem} from '../../utils/rem';
export default function Radar() {
  useEffect(() => {
    setRem()
    initEcharts()
  });
  return <div className="w-[26.25rem] h-[21.25rem]" id="Radar">

  </div>;
}
