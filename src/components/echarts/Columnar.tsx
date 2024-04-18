'use client';
import {initEcharts} from "@/utils/echarts/columnar"
import { useEffect } from 'react';
import {setRem} from '../../utils/rem';

export default function Columnar() {
  useEffect(() => {
    setRem()
    initEcharts()
    
  });
  return <div className="w-[44rem] h-[23.375rem]" id="Columnar">

  </div>;
}
