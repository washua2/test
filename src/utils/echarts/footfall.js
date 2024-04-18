import * as echarts from 'echarts';
import {fontSizeRem} from '@/utils/utils';
export const initEcharts = () => {
  var chartDom = document.getElementById('Footfall');
  var myChart = echarts.init(chartDom);
  var option;
  const pieData = [
    { value: 1745, name: "Male" },
    { value: 1320, name: "Female" },
    { value: 40, name: "Preffer not to say" },
  ]
  option = {
    color: ["#2AECDA", "#1C64F2", "#FF8A4C"],
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)",
    },
    toolbox: {
      show: true,
    },
    legend: {
      orient: "vertical",
      icon: "circle",
      itemGap: fontSizeRem(20),
      itemWidth: fontSizeRem(40),
      itemHeight: fontSizeRem(20),
      right: '0%',
      top: '35%',
      formatter(name) {
        const item = pieData.filter((item) => item.name === name)[0];
        return `{name|${name}}{value| ${item.value} (56%)}`;
      },
      textStyle: {
        lineHeight: fontSizeRem(30),
        rich: {
          name: {
            color: "#E5E7EB",
            fontSize: fontSizeRem(22),
            width: fontSizeRem(230),
            fontWeight: 600,
          },
          value: {
            width: fontSizeRem(100),
            color: "#E5E7EB",
            fontSize: fontSizeRem(22),
            fontWeight: 600,
            align: 'right',
          },
        },
      },
    },
    series: [
      {
        name: "Real-time Footfall",
        type: "pie",
        radius: ['0', '65%'],
        center: ["20%", "58%"],
        label: {
          normal: {
            show: false,
            position: "inside",
            formatter: "{b}",
            textStyle: {
              align: "center",
              baseline: "middle",
              fontSize: fontSizeRem(22),
              fontWeight: "100",
              color: "#fff",
            },
          },
        },
        labelLine: {
          show: true,
        },
        data: pieData,
      },
      {
        type: 'gauge',
        startAngle: 90,
        endAngle: -270,
        radius: '85%',
        center: ["20%", "58%"],
        pointer: {
          show: false,
        },
        axisLine: {
          show: false,
          lineStyle: {
            width: fontSizeRem(10),
            color: [[1, '#6B7280']],
          },
        },
        splitLine: {
          show: false,
          distance: 0,
          length: 2,
        },
        axisLabel: {
          show: false,
          distance: 10,
        },
        axisTick: {
          distance: 0,
          length: fontSizeRem(2),
          splitNumber: 20,
          lineStyle: {
            width: 1,
            color: 'auto',
            // cap: 'round',
          },
        },
      },
    ],
  };

  option && myChart.setOption(option);

  window.addEventListener('resize', function () {
    myChart.resize();
  });
};
