'use client';
import {initEcharts} from "@/utils/echarts/activeWorkOrders"
import { useEffect } from 'react';
import {setRem} from '../../utils/rem';

export default function ActiveWorkOrder() {
  useEffect(() => {
    setRem()
    initEcharts()
    
  });
  return <div className="w-[44rem] h-[27.125rem]" id="ActiveWorkOrder">

  </div>;
}
