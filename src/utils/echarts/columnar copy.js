import * as echarts from 'echarts';
import {fontSizeRem} from '../utils';
export const initEcharts = () => {
  var chartDom = document.getElementById('Columnar');
  var myChart = echarts.init(chartDom);
  var option;

  option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    grid: {
      top:"3%",
      left: '0%',
      right: '0%',
      bottom: '0%',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        data: [
          'BLK A',
          'BLK B',
          'BLK C',
          'BLK D',
          'BLK E',
          'BLK F',
          'BLK G',
          'BLK H',
        ],
        axisTick: {
          show: false, // 不显示坐标轴刻度线
        },
        axisLine: {
          show: false, // 不显示坐标轴线
        },
        axisLabel: {
          // 控制标签是否显示
          show: true,
          align: 'left',
          position: '-10',
          interval:0,
          color: '#9CA3AF',
          fontSize: fontSizeRem(22),
          fontWeight: '500',
          fontFamily: 'Inter',
          padding: [0, 0, 0, fontSizeRem(-35)],
          margin: fontSizeRem(25),
        },
      },
    ],
    yAxis: [
      {
        type: 'value',
        minInterval:1,
        splitLine: {
          show: false,
          // 坐标轴在 grid 区域中的分隔线
          lineStyle: {
            // 分隔线
            type: 'dashed', // 线的类型
            color: '#4B5563', // 分隔线颜色
          },
        },
        axisLabel: {
          // 控制标签是否显示
          show: true,
          // align:'left',
          position: '0',
          color: '#A1A7B3',
          fontSize: fontSizeRem(22),
          fontWeight: '500',
          fontFamily: 'Inter',
          margin: fontSizeRem(0),
        },
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
      },
    ],
    series: [
      {
        name: 'Direct',
        type: 'bar',
        barWidth: '30%',
        itemStyle: {
          normal: {
            color: '#2AECDA',
          },
        },
        data: [10, 52, 200, 334, 400, 330, 220, 220],
      },
    ],
  };

  option && myChart.setOption(option);

  window.addEventListener('resize', function () {
    // 调用 resize 方法重新渲染图表
    myChart.resize();
  });
};
