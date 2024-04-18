import * as echarts from 'echarts';
import {fontSizeRem} from '../utils';
export const initEcharts = () => {
  var chartDom = document.getElementById('Gauge');
  var myChart = echarts.init(chartDom);
  var option;
  let data = [{value: 20}];
  option = {
    series: [
      {
        type: 'gauge',
        radius: "170%",
        startAngle:180,
        //结束角度。
        endAngle: 0,
        center: ['50%', '100%'],
        progress: {
          show: true,
          width: fontSizeRem(10),
        },
        axisLine: {
          color: '#374355',
          lineStyle: {
            width: fontSizeRem(10),
            color: [[1, '#374355']],
          },
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          show: false,
          length: 10,
          lineStyle: {
            width: 2,
            color: '#fff',
          },
        },
        axisLabel: {
          show: false,
          distance: fontSizeRem(25),
          color: '#999',
          fontSize: fontSizeRem(20),
        },
        anchor: {
          show: false,
          showAbove: false,
          size: 25,
          itemStyle: {
            borderWidth: 10,
          },
        },
        title: {
          show: false,
        },
        pointer: {
          show: false,
          //指针长度
          length: '90%',
          width: 0,
        },
        itemStyle: {
          color: '#31C48D',
        },
        //仪表盘详情，用于显示数据。
        detail: {
          show: true,
          offsetCenter: [0, "-10%"],
          formatter(value) {
            // 使用 rich 设置样式
            return `{top|Band1}{end|\n(Normal)}`;
          },
          rich: {
            top: {
              color: '#31C48D',
              align: 'center',
              fontFamily: 'Gill Sans',
              lineHeight:fontSizeRem(0),
              fontSize: fontSizeRem(28),
            },
            end: {
              color: '#D1D5DB',
              align: 'center',
              fontFamily: 'Gill Sans',
              lineHeight:fontSizeRem(70),
              fontSize: fontSizeRem(22),
            },
          },
          textStyle: {
            fontSize: fontSizeRem(30),
            color: '#31e4f4',
          },
        },
        data,
      },
    ],
  };

  option && myChart.setOption(option);

  window.addEventListener('resize', function () {
    // 调用 resize 方法重新渲染图表
    myChart.resize();
  });
};
