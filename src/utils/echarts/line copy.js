import * as echarts from 'echarts';
import {fontSizeRem} from '../utils';
export const initEcharts = () => {
  var chartDom = document.getElementById('Line');
  var myChart = echarts.init(chartDom);
  var option;
  let data = [{value: 20}];
  option = {
    title: {
      text: 'Compare',
      padding: [fontSizeRem(10), 0, 0, 0],
      textStyle: {
        color: '#9CA3AF',
        fontStyle: 'normal',
        fontWeight: '400',
        fontFamily: 'Inter',
        fontSize: fontSizeRem(24),
      },
    },
    tooltip: {
      trigger: 'axis',
      icon: 'roundRect',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985',
        },
      },
      transitionDuration: 0,
      axisPointer: {
        type: 'line',
        lineStyle: {
          color: 'rgba(50, 216, 205, 1)',
        },
      },
    },
    legend: {
      data: ['Email','Emails'],
      icon: 'roundRect',
      itemWidth:fontSizeRem(40),
      itemHeight:fontSizeRem(40),
      orient: 'horizontal',
      left:fontSizeRem(120),
      top:fontSizeRem(-5),
      x: 'left',
      y: 'top',
      itemGap: fontSizeRem(10),
      formatter: (name) => {
        return ``;
      },
    },
    grid: {
      left: '0%',
      right: '4%',
      bottom: '15%',
      top: '16%',
      containLabel: true,
    },
    xAxis: [
      {
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
          color: '#D1D5DB',
          fontSize: fontSizeRem(20),
          fontWeight: '500',
          fontFamily: 'Inter',
          padding: [0, 0, 0, fontSizeRem(-35)],
          margin: fontSizeRem(25),
        },
        boundaryGap: false,
        data: [
          '09:00-10:00',
          '10:00-11:00',
          '11:00-12:00',
          '12:00-13:00',
          '13:00-14:00',
          '11:00-12:00',
          '12:00-13:00',
          '13:00-14:00',
        ],
      },
    ],
    yAxis: [
      {
        type: 'value',
        min: 10,
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
          color: '#A1A7B3',
          fontSize: fontSizeRem(20),
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
        //区域缩放
        dataZoom: [{
          type: 'inside', //1平移 缩放
          throttle: '50', //设置触发视图刷新的频率。单位为毫秒（ms）。
          minValueSpan: 6, //用于限制窗口大小的最小值,在类目轴上可以设置为 5 表示 5 个类目
          start: 1, //数据窗口范围的起始百分比 范围是：0 ~ 100。表示 0% ~ 100%。
          end: 50, //数据窗口范围的结束百分比。范围是：0 ~ 100。
          zoomLock: true, //如果设置为 true 则锁定选择区域的大小，也就是说，只能平移，不能缩放。
        }],
      },
    ],
    series: [
      {
        name: 'Email',
        type: 'line',
        smooth: true,
        stack: 'Total',
        emphasis: {
          focus: 'series',
        },
        showSymbol: false,
        itemStyle: {
          color: 'rgb(2,191,108)',
          normal: {
            color: '#fff',
            lineStyle: {
              color: '#5DF5E7',
              width: 2,
            },
          },
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
        data: [25, 35, 30, 50, 30, 20, 30, 40, 50],
      },
      {
        name: 'Emails',
        type: 'line',
        smooth: true,
        stack: 'Total',
        emphasis: {
          focus: 'series',
        },
        showSymbol: false,
        itemStyle: {
          normal: {
            color: '#fff',
            lineStyle: {
              color: '#5DF5E7',
              width: 2,
            },
          },
        },
        areaStyle: {  // 使用方法二的写法
          color: {
            type: 'linear',
            x: 0,  //右
            y: 0,  //下
            x2: 0,  //左
            y2: 1,  //上
            colorStops: [
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
           ]
          }
      },
        data: [25, 35, 30, 50, 30, 20, 30, 40, 50],
      },
    ],
  };

  option && myChart.setOption(option);

  window.addEventListener('resize', function () {
    // 调用 resize 方法重新渲染图表
    myChart.resize();
  });
};
