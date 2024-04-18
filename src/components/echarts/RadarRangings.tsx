'use client';
import {initEcharts} from "@/utils/echarts/radarRanging"
import { useEffect } from 'react';
import {setRem} from '../../utils/rem';
export default function RadarRanging() {
  useEffect(() => {
    setRem()
    initEcharts()
  });
  return <div className="w-[21rem] h-[23.5rem]" id="RadarRanging">

  </div>;
}
