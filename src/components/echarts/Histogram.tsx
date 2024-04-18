'use client';
import {initEcharts} from "@/utils/echarts/histogram"
import { useEffect } from 'react';
import {setRem} from '../../utils/rem';
export default function Histogram() {
  useEffect(() => {
    setRem()
    initEcharts()
  });
  return <div className="w-[46rem] h-[18.75rem]" id="Histogram">

  </div>;
}
