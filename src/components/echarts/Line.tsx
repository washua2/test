'use client';
import {initEcharts} from "@/utils/echarts/line"
import { useEffect } from 'react';
import {setRem} from '../../utils/rem';

export default function Line() {
  useEffect(() => {
    setRem()
    initEcharts()
    
  });
  return <div className="w-[44rem] h-[30.4375rem]" id="Line">

  </div>;
}
