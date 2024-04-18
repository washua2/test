import * as echarts from 'echarts';
import {fontSizeRem} from '../utils';

export const initEcharts = () => {
  var chartDom = document.getElementById('RoundCake');
  var myChart = echarts.init(chartDom);
  var colorList=["#1c64f2","#ff8a4c","#5df5e7"]
  const inspectData = [
    {value: 21, name: 'In Process', color: '#1c64f2'},
    {value: 55, name: 'Incomplete', color: '#ff8a4c'},
    {value: 189, name: 'Completed', color: '#5df5e7'},
  ];
  var option;
  option = {
    tooltip: {
      show: false,
      trigger: 'item',
    },
    legend: {
      data: inspectData,
      itemWidth: fontSizeRem(20),
      itemHeight: fontSizeRem(20),
      icon: 'circle',
      textStyle: {
        color: 'auto',
        align: 'right',
        rich: {
          name: {
            fontSize: fontSizeRem(28),
            fontWeight: 500,
            width: fontSizeRem(50),
            padding: [0, fontSizeRem(130), 0, fontSizeRem(5)],
            color: '#D1D5DB', // 图例文字颜色
            fontFamily: 'Inter',
          },
          value: {
            fontSize: fontSizeRem(28),
            fontWeight: 500,
            color: '#F9FAFB',
            align: 'left',
            fontFamily: 'Inter',
          },
        },
      },
      itemStyle: {
        // 这里设置legend的边框样式
        borderColor: '#ccc', // 边框颜色
        borderWidth: 0, // 边框宽度
        borderType: 'solid', // 边框类型（实线）
      },
      right: '0',
      orient: 'vertical',
      bottom: "-5%",
      itemGap: fontSizeRem(28),
      formatter: (name) => {
        const item = inspectData.find((item) => item.name === name);
        return `{name|${name}}{value| ${item?.value}}`;
      },
    },
    series: [
      {
        name: 'pie',
        type: 'pie',
        center: ['16.5%', '55%'],
        radius: ['0%', '90%'],
        avoidLabelOverlap: false,
        emphasis: {
          label: {
            show: true,
            fontSize: fontSizeRem(12),
            fontWeight: 'bold',
          },
        },
        labelLine: {
          show: true,
        },
        label: {
          show: false,
          position: 'center',
          emphasis: {
            show: true,
            textStyle: {
              fontSize: fontSizeRem(30),
              fontWeight: 'bold',
            },
          },
        },
        itemStyle: {
          normal: {
            borderWidth: fontSizeRem(3),
            borderColor: '#000',
            // 设置饼图的颜色
            color: function (val) {
               return colorList[val.dataIndex];
            },
          },
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
        data: inspectData,
      },
    ],
  };

  option && myChart.setOption(option);
  window.addEventListener('resize', function () {
    // 调用 resize 方法重新渲染图表
    myChart.resize();
  });
};
