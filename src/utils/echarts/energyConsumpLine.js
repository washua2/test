import * as echarts from 'echarts';
import {fontSizeRem} from '../utils';
export const initEcharts = () => {
  var chartDom = document.getElementById('EnergyConsumpLines');
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
      data: [
        { name: "Cooling", textStyle: { color: "#E5E7EB",fontSize: fontSizeRem(22) ,fontWeight: 500,padding: [0, 10],} },
        { name: "Electricity", textStyle: { color: "#E5E7EB",fontSize: fontSizeRem(22) ,fontWeight: 500,padding: [0, 10],} },
        { name: "Heating", textStyle: { color: "#E5E7EB",fontSize: fontSizeRem(22) ,fontWeight: 500,padding: [0, 10],} },
        { name: "Water", textStyle: { color: "#E5E7EB",fontSize: fontSizeRem(22) ,fontWeight: 500,padding: [0, 10],} },
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
      top:"18%",
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
      boundaryGap: false,
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',"Aug"],
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
          color: '#1C64F2',
          borderWidth: 3,
        },
      },
      {
        name: 'Electricity',
        type: 'line',
        stack: 'Total',
        smooth: true,
        showSymbol: false,
        data: [20, 12, 191, 24, 90, 30, 10, 90],
        itemStyle: {
          color: '#2AECDA',
          borderWidth: 5,
        },
      },
      {
        name: 'Heating',
        type: 'line',
        stack: 'Total',
        smooth: true,
        showSymbol: false,
        data: [150, 232, 201, 154, 190, 130, 210, 90],
        itemStyle: {
          color: '#FF8A4C',
          borderWidth: 5,
        },
      },
      {
        name: 'Water',
        type: 'line',
        stack: 'Total',
        smooth: true,
        showSymbol: false,
        data: [120, 232, 101, 234, 220, 130, 120, 90],
        itemStyle: {
          color: '#F8B4D9',
          borderWidth: 5,
        },
      }
    ],
  };

  option && myChart.setOption(option);

  window.addEventListener('resize', function () {
    // 调用 resize 方法重新渲染图表
    myChart.resize();
  });
};
