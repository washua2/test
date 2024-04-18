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
      padding: [fontSizeRem(10), 0, 0,0],
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
      axisPointer: {
        lineStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: 'rgba(0, 255, 233,0)',
              },
              {
                offset: 0.5,
                color: 'rgba(255, 255, 255,1)',
              },
              {
                offset: 1,
                color: 'rgba(0, 255, 233,0)',
              },
            ],
            global: false,
          },
        },
      },
      fontSize: '12px',
      backgroundColor: 'rgba(7,16,47,.6)', //设置背景图片 rgba格式
      color: 'black',
      borderWidth: '0', //边框宽度设置1
      borderColor: 'transparent', //设置边框颜色
      textStyle: {
        color: '#fff', //设置文字颜色
      },
      extraCssText: 'box-shadow: 0px 0px 20px inset #09E5ED',
      formatter: function (params, ticket, callback) {
        // console.log(params)
        const item = params[0];
        const item1 = params[1];

        var string =
          '<div className="mr-1">' +
          item.name.replace('-', '点').replace('-', '点') +
          '点' +
          '</div>';
        string += `<div style="display:flex;align-items: center;margin-top:0.3125rem;margin-left:0.3125rem"><div style="width:0.5rem;height:0.5rem;background:rgba(2,191,108,1);"></div><span style= "padding:0 0.625rem">${item.name.slice(
          0,
          4,
        )}</span> <span style = "padding:0 1.25rem">${
          item.value
        } </span> </div>`;
        if (item1 != undefined) {
          string += `<div style="display:flex;align-items: center;margin-top:2px;margin-left:0.3125rem;"><div style="width:0.5rem;height:0.5rem;background:#F7B500;"></div><span style= "padding:0 0.625rem">${item1.name.slice(
            0,
            4,
          )}</span> <span style = "padding:0 1.25rem">${
            item1.value
          } </span> </div>`;
        }
        return string;
      },
    },
    legend: {
      icon: 'roundRect',
      itemWidth: fontSizeRem(40),
      itemHeight: fontSizeRem(40),
      orient: 'horizontal',
      left: "15%",
      top: "-1%",
      x: 'left',
      y: 'top',
      itemGap: fontSizeRem(10),
      formatter: (name) => {
        return ``;
      },
    },

    grid: {
      left: '0%',
      right: '0%',
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
          color: '#9CA3AF',
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
      },
    ],
    //区域缩放
    dataZoom: [
      //给x轴设置滚动条
      {
        type: 'slider', //slider表示有滑动块的，inside表示内置的
        startValue: 8,//可用于设置开始显示的柱子的长度
        endValue: 1,//可用于设置结束显示的柱子的长度
        start: 10, //默认为0  可设置滚动条从在后进行展示
        end: 30, //默认为100
        show: true,
        // xAxisIndex: [0],
        // handleSize: fontSizeRem(20), //滑动条的 左右2个滑动条的大小
        height: fontSizeRem(8), //组件高度
        left: '1%', //左边的距离
        right: '6%', //右边的距离
        bottom:"5%", 
        textStyle: {
          color: "transparent",
        },
        borderColor: 'transparent',
        // fillerColor: '#374151',
        backgroundColor: '#374151', //两边未选中的滑动条区域的颜色
        showDataShadow: false, //是否显示数据阴影 默认auto
        showDetail: false, //即拖拽时候是否显示详细数值信息 默认true
        // realtime: true, //是否实时更新
        filterMode: 'filter',
        handleStyle: {
          borderRadius: '50',
        },
        fillerColor: "#6B7280", //滚动条颜色
        brushSelect: false,
        handleSize: fontSizeRem(30),
        handleColor:"#fff",
        handleIcon:
        "path://M50,50 m 0, -49 a 49,49 0 1,1 0,98 a 49,49 0 1,1 0,-98",
        handleStyle: {
          color: "#3B91FF",
          borderWidth:fontSizeRem(9),
          opacity: 1
          },
          dataBackground: {
            areaStyle: {
              color: '#A1AEC2',
              opacity: 0.8
            }
        },
        selectedDataBackground: {
            areaStyle: {
              color: '#A1AEC2',
              opacity: 0.8
            }
        },
      },
      //下面这个属性是里面拖到
      {
        type: 'inside',
        show: true,
        xAxisIndex: [0],
        start: 0, //默认为1
        end: 100, //默认为100
        moveOnMouseWheel: false,
        preventDefaultMouseMove: false,
      },
    ],
    series: [
      {
        name: '2021',
        // name: name1,
        type: 'line',
        smooth: true,
        stack: 'Total',
        emphasis: {
          focus: 'series',
        },
        showSymbol: false,
        label: {
          show: false,
          position: 'top',
          textStyle: {
            color: '#fff',
          },
        },
        itemStyle: {
          color: '#5DF5E7',
          borderWidth: 3,
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
        data: [25, 35, 30, 50, 30, 20, 30, 40, 50],
      },
    ],
  };

  option && myChart.setOption(option);

  const blue=document.getElementById("blue")
  const addEchart=document.getElementById("addEchart")
  blue.onclick=function(event){
    option.series.push({
      name: '2020',
      // name: name1,
      type: 'line',
      smooth: true,
      stack: 'Total',
      emphasis: {
        focus: 'series',
      },
      showSymbol: false,
      label: {
        show: false,
        position: 'top',
        textStyle: {
          color: '#fff',
        },
      },
      itemStyle: {
        color: '#1C64F2',
        borderWidth: 3,
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
                color: '#0d98ff',
              },
              {
                offset: 0.5,
                color: '#2d669a',
              },
              {
                offset: 1,
                color: '#253c53',
              },
            ],
            false,
          ),
        },
      },
      data: [30, 15, 40, 50, 40, 20, 30, 40, 50],
    })
    // 3.75
    console.log("addEchart.style.left",event)
    addEchart.style.left=event.x/16+2.7+"rem"
    option && myChart.setOption(option);
  }
  window.addEventListener('resize', function () {
    // 调用 resize 方法重新渲染图表
    myChart.resize();
  });
};
