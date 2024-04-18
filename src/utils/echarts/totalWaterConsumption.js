import * as echarts from 'echarts';
import {fontSizeRem} from '../utils';
export const initEcharts = () => {
  var chartDom = document.getElementById('TotalWaterConsumption');
  var myChart = echarts.init(chartDom);
  var option;

  option = {
    title: {
      show: false,
      text: 'Stacked Line',
    },
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      data: [
        {
          name: 'Total Water',
          textStyle: {
            color: '#E5E7EB',
            fontSize: fontSizeRem(22),
            fontWeight: 500,
            padding: [0, 10],
          },
        },
        {
          name: 'Water',
          textStyle: {
            color: '#E5E7EB',
            fontSize: fontSizeRem(22),
            fontWeight: 500,
            padding: [0, 10],
          },
        },
        {
          name: 'New Water',
          textStyle: {
            color: '#E5E7EB',
            fontSize: fontSizeRem(22),
            fontWeight: 500,
            padding: [0, 10],
          },
        },
      ],
      icon: 'roundRect',
      itemWidth: fontSizeRem(40),
      itemHeight: fontSizeRem(10),
      fontSize: fontSizeRem(22),
      orient: 'horizontal',
      left: '0%',
      top: '-1%',
      bottom: '3%',
      x: 'left',
      y: 'top',
      itemGap: fontSizeRem(40),
    },
    grid: {
      top: '22%',
      left: '0%',
      right: '0%',
      bottom: '7%',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      axisTick: {
        show: false, // 不显示坐标轴刻度线
      },
      axisLine: {
        show: false, // 不显示坐标轴线
      },
      axisLabel: {
        // 控制标签是否显示
        show: false,
        align: 'left',
        position: '-10',
        color: '#9CA3AF',
        fontSize: fontSizeRem(22),
        fontWeight: '500',
        fontFamily: 'Inter',
        padding: [0, 0, 0, fontSizeRem(-35)],
        margin: fontSizeRem(25),
      },
      boundaryGap: false,
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
    },
    yAxis: [
      {
        type: 'value',
        min: 500,
        max: 2000,
        // scale:true,
        splitLine: {
          // 坐标轴在 grid 区域中的分隔线
          lineStyle: {
            // 分隔线
            type: 'dashed', // 线的类型
            color: '#4B5563', // 分隔线颜色
          },
        },
        interval:500,
        axisLabel: {
          // 控制标签是否显示
          show: true,
          // align:'left',
          position: '0',
          color: '#9CA3AF',
          fontSize: fontSizeRem(22),
          fontWeight: '500',
          fontFamily: 'Inter',
          margin: fontSizeRem(24),
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
        name: 'Total Water',
        type: 'line',
        smooth: true,
        showSymbol: false,
        data: [500, 1000, 1500, 500, 1000, 1500, 1800, 500],
        itemStyle: {
          color: '#2AECDA',
          borderWidth: 5,
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: '#2AECDA',
                },
                {
                  offset: 0.5,
                  color: '#2a5f65',
                },
                {
                  offset: 1,
                  color: 'transparent',
                },
              ],
              false,
            ),
          },
        },
      },
      {
        name: 'Water',
        type: 'line',
        smooth: true,
        showSymbol: false,
        data: [500, 1000, 1500, 1800, 1500, 500, 1000, 500],
        itemStyle: {
          color: '#1C64F2',
          borderWidth: 5,
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: '#1C64F2',
                },
                {
                  offset: 0.5,
                  color: '#1e5dd1',
                },
                {
                  offset: 1,
                  color: 'transparent',
                },
              ],
              false,
            ),
          },
        },
      },
      {
        name: 'New Water',
        type: 'line',
        smooth: true,
        showSymbol: false,
        data: [500, 1000, 1800, 1000, 1800, 1000, 1500, 100, 500, 400],
        itemStyle: {
          color: '#AC94FA',
          borderWidth: 5,
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0.3,
                  color: '#AC94FA',
                },
                {
                  offset: 0.5,
                  color: 'transparent',
                },
                {
                  offset: 1,
                  color: 'transparent',
                },
              ],
              false,
            ),
          },
        },
      },
    ],
  };

  option && myChart.setOption(option);

  window.addEventListener('resize', function () {
    // 调用 resize 方法重新渲染图表
    myChart.resize();
  });
};
