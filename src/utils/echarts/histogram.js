import * as echarts from "echarts";
import {fontSizeRem} from "../utils"

export const initEcharts = () => {
  var chartDom = document.getElementById("Histogram");
  var myChart = echarts.init(chartDom);

  let yLabel = [
    "Access Control",
    "Monitoring",
    "Fire Fighting",
    "Lighting",
  ];
  let yData = [79, 80, 75, 74];
  let alerts=[2,1,0,2]
  let bgData = [100, 100,100,100];
  var yData2 = yData.map(function(index) {
    return index + 20;
  });
  let scale = 10;
  const color = [
    "#D1D5DB",
    "#D1D5DB",
    "#D1D5DB",
    "#D1D5DB"
  ];
  const colors = [
    "#1F2A37",
    "#1F2A37",
    "#1F2A37",
    "#1F2A37",
  ];
  let option = {
    grid: {
      left:fontSizeRem(-190),
      right:fontSizeRem(150),
      top:fontSizeRem(10), //拉伸距离顶部高度
      bottom:fontSizeRem(-20), //拉伸距离底部高度
      containLabel: true
    },
    xAxis: {
      show: false,
      type: "value"
    },
    yAxis: [
      {
        type: "category",
        inverse: true,
        // 设置刻度标签
        axisLabel: {  
          // 控制标签是否显示
          show: true,
          align:'left',
          position: '20',
          color: "#D1D5DB",
          fontSize:fontSizeRem(28),
          fontWeight: "500",
          fontFamily: "Inter",
          margin:fontSizeRem(230)
        },
        splitLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        },
        data: yLabel
      },
      {
        type: "category",
        inverse: true,
        axisTick: "none",
        axisLine: "none",
        show: false,
        axisLabel: {
          margin:fontSizeRem(30),
          textStyle: {
            color: "#fff",
            fontSize:fontSizeRem(28),
            fontWeight: "bold",
            fontFamily: "Gill Sans"
          },
          // formatter(params, index) {
          //   // 使用 rich 设置样式
          //   return `{top|${params}}/{end|${bgData[index]}}`;
          // },
          // rich: {
          //   top: {
          //     color: "#D1D5DB",
          //     align: "center",
          //     fontFamily: "Gill Sans",
          //     padding: [5, 10],
          //     fontSize: 36
          //   },
          //   end: {
          //     color: "#fff",
          //     align: "center",
          //     fontFamily: "Gill Sans",
          //     padding: [15, 10],
          //     fontSize: 34
          //   }
          // }
        },
        data: yData
      }
    ],
    series: [
      {
        name: "值1",
        type: "bar",
        zlevel: 0,
        label: {
          //图形上的文本标签
          show: true,
          position: "right", //标签的位置
          offset: [fontSizeRem(10), 0], //标签文字的偏移，此处表示向上偏移40
          formatter(params, index) {
            // 使用 rich 设置样式
            return `{top|${yData[params.dataIndex]}}{end|         ${alerts[params.dataIndex]}}`;
          },
          // fontSize: 28,
          // color: "#D1D5DB",
          // fontFamily: "Gill Sans",
          rich: {
            top: {
              color: "#D1D5DB",
              align: "center",
              fontFamily: "Gill Sans",
              padding: [fontSizeRem(5), fontSizeRem(10)],
              fontSize:fontSizeRem(28)
            },
            end: {
              color: "#D1D5DB",
              align: "center",
              fontFamily: "Gill Sans",
          offset: [fontSizeRem(10), 0], //标签文字的偏移，此处表示向上偏移40
              padding: [fontSizeRem(30), 0],
              fontSize:fontSizeRem(28)
            }
          },
        },
        data: bgData,
        barWidth:fontSizeRem(12),
        barGap: "-100%",
        itemStyle: {
          normal: {
            color: "rgba(31, 42, 55,1)",
          }
        },
      },
      {
        name: "值",
        type: "bar",
        zlevel: 1,
        label: {
          //图形上的文本标签
          show: false,
          position: "left", //标签的位置
          offset: [fontSizeRem(70),fontSizeRem(-20)], //标签文字的偏移，此处表示向上偏移40
          formatter: "{c}%", //标签内容格式器 {a}-系列名,{b}-数据名,{c}-数据值
          color: "#00a8f1", //标签字体颜色
          fontSize:fontSizeRem(28)  //标签字号
        },
        itemStyle: {
          normal: {
            color: params => ({
              type: "linear",
              x: 1,
              y: 0,
              x2: 0,
              y2: 0,
              colorStops: [
                {
                  offset: 0,
                  color: color[params.dataIndex] // 柱子最高度% 处的颜色
                },
                {
                  offset: 1,
                  color: colors[params.dataIndex] // X轴处的颜色
                }
              ],
              global: false // 缺省为 false
            }),
            shadowBlur: 0,
            shadowColor: "rgba(87,220,222,0.7)"
          }
        },
        barWidth:fontSizeRem(12),
        data: yData
      },
      
      {
        name: "背景",
        type: "bar",
        barWidth:fontSizeRem(12),
        barGap: "-100%",
        data: bgData,
        itemStyle: {
          normal: {
            color: "rgba(31, 42, 55,1)",
          }
        }
      },
      // {
      //   //无色柱状图
      //   name: "头部",
      //   type: "bar",
      //   stack: "头部",
      //   barWidth: 10,
      //   // barGap: "40%",
      //   itemStyle: {
      //     normal: {
      //       color: "rgba(0,0,0,0)"
      //     }
      //   },
      //   data: yData2
      // }
    ]
  };
  option && myChart.setOption(option);
  window.addEventListener('resize', function() {
    // 调用 resize 方法重新渲染图表
    myChart.resize();
  });
};
