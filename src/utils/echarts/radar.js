import * as echarts from "echarts";
import {fontSizeRem} from "../utils"

export const initEcharts = () => {
  var chartDom = document.getElementById("Radar");
  var myChart = echarts.init(chartDom);
  var option;
  option = {
    color: ["#2aecda", "#2aecda", "#2aecda", "#2aecda"],
    legend: {},
    radar: [
      {
        indicator: [
          { text: "Fire", num: 272 },
          { text: "Access Contro", num: 21 },
          { text: "Monitoring", num: 80 },
          { text: "Emergency ", num: 90 },
          { text: "Intrusion", num: 56 }
        ],
        center: ["53%", "50%"],
        radius: "67%",
        startAngle: 20,
        splitNumber: 5,
        // shape: "circle",
        axisName: {
          formatter(value, params) {
            return `${params.text}`;
          },
          color: "#9CA3AF",
          fontFamily: "Inter",
          fontWeight: "normal",
          fontSize:fontSizeRem(18) ,
          padding: [20, 0]
        },
        splitArea: {
          areaStyle: {
            color: ["transparent", "transparent", "transparent", "transparent"],
            shadowColor: "#4b5563",
            shadowBlur: 15
          }
        },
        axisLabel: {
          textStyle: "#D1D5DB"
        },
        axisLine: {
          lineStyle: {
            color: "#4b5563",
            width: 2
          }
        },
        splitLine: {
          lineStyle: {
            color: "#4b5563",
            width: 2
          }
        }
      }
    ],
    series: [
      {
        type: "radar",
        grid: {
          left: -150,
          right: 100,
          top: 100, //拉伸距离顶部高度
          bottom: 0, //拉伸距离底部高度
          containLabel: true
        },
        symbolSize: 0,
        itemStyle: "#D1D5DB",
        emphasis: {
          lineStyle: {
            width: 0
          }
        },
        data: [
          {
            value: [60, 5, 0.3, -100, 1500],
            areaStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "#2aecda" // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "#3d5f67" // 100% 处的颜色
                  }
                ],
                global: false // 缺省为 false
              }
            },
            lineStyle: {
              color: "#2aecda",
              width: 2
            },
            itemStyle: {
              //拐点空心圆空心圆
              normal: {
                color: "#fff",
                borderWidth: 1
              }
            }
          }
        ]
      }
    ]
  };

  option && myChart.setOption(option);
  window.addEventListener('resize', function() {
    // 调用 resize 方法重新渲染图表
    myChart.resize();
  });
};