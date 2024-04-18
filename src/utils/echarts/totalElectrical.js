import * as echarts from 'echarts';
import {fontSizeRem} from '../utils';
export const initEcharts = () => {
  var chartDom = document.getElementById('TotalElectrical');
  var myChart = echarts.init(chartDom);
  var option;

  option = {
    title: {
      show:false,
      text: 'Stacked Line',
    },
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      show:false,
      data: [
        { name: "Cooling", textStyle: { color: "#E5E7EB",fontSize: fontSizeRem(22) ,fontWeight: 500,padding: [0, 10],} },
      ],
      icon: 'roundRect',
      itemWidth: fontSizeRem(40),
      itemHeight: fontSizeRem(10),
      fontSize: fontSizeRem(22),
      orient: 'horizontal',
      left: "0%",
      top: "-1%",
      bottom:"3%",
      x: 'left',
      y: 'top',
      itemGap: fontSizeRem(40),
    },
    grid: {
      top:"3%",
      left: '0%',
      right: '0%',
      bottom: '6%',
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
        show: true,
        align: 'left',
        position: '-10',
        color: '#9CA3AF',
        fontSize: fontSizeRem(22),
        fontWeight: '500',
        fontFamily: 'Inter',
        padding: [0, 0, 0, fontSizeRem(-35)],
        margin: fontSizeRem(25),
      },
      // boundaryGap: false,
      data: ['Value1', 'Value2', 'Value3', 'Value4', 'Value5', 'Value6',],
    },
    yAxis: [
      {
        type: 'value',
        min: 0,
        // scale:true,
        splitLine: {
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
        name: 'Cooling',
        type: 'line',
        stack: 'Total',
        smooth: true,
        showSymbol: false,
        data: [10, 32, 101, 134, 90, 30, 10, 90],
        itemStyle: {
          color: '#5DF5E7',
          borderWidth: 3,
        },
        itemStyle: {
          color: '#5DF5E7',
          borderWidth: 6,
        },
        tooltip: {
          show: true,
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
                  color: '#5DF5E7',
                },
                {
                  offset: 0.5,
                  color: '#377c7d',
                },
                {
                  offset: 1,
                  color: '#222e39',
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
