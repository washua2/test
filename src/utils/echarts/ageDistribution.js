import * as echarts from 'echarts';
import {fontSizeRem} from '@/utils/utils';
export const initEcharts = (state) => {
  var chartDom = document.getElementById('AgeDistribution');
  var myChart = echarts.init(chartDom);
  var option;
  let legendShow = state
  let barWidth = 34
  let FemaleData
  if(legendShow){
    FemaleData = [10, 20, 30, 50, 80]
  }else{
    FemaleData = [100, 100, 100, 100, 100]
  }
  option = {
    grid: {
      show: 'true',
      borderWidth: '0',
      height: "80%",
      width: "87%",
      top: "10%",
      left: "11%",
      // x: "12%",
      // y:"20%",
    },
    legend: {
      show: legendShow? true : false,
      top: "-1%",
      left: "2%",
      itemWidth: fontSizeRem(54),
      itemHeight: fontSizeRem(12),
      itemGap: fontSizeRem(25),
      radius: fontSizeRem(20),
      icon: "roundRect",
      textStyle: {
        color: "#ffffff",
        fontSize: fontSizeRem(20),
        padding: [0, fontSizeRem(10)],
        fontWeight: 600,
      },
      data: ["Male",'Female'],
    },
    // tooltip: {
    //     trigger: 'axis',
    //     axisPointer: {
    //         type: 'shadow'
    //     },
    //     formatter: "{b0}: {c0}"
    // },
    backgroundColor: 'rgba(0,0,0,0)',
    xAxis: {
      type: 'value',
      // 背景线条(竖着的)
      splitLine: {
        lineStyle: {
          color: 'rgba(65, 82, 100, 0.50)',
          type: 'dashed', // dashed设置背景横线为虚线,solid为实线
        },
      },
      axisTick: {
        show: false, // 是否隐藏
        inside: false, // 刻度线指向内部还是外部
      },
      axisLine: {
        lineStyle: {
          color: 'rgba(0,0,0,0)',
        },
      },
      axisLabel: {
        formatter: '{value} ', // 自定义x轴文字内容,添加单位等  %
        color: '#9CA3AF',
        fontSize: fontSizeRem(20),
        fontWeight: 800,
      },
    },
    yAxis: [{
      type: 'category',
      inverse: true,
      axisLabel: {
        show: true,
        textStyle: {
          color: '#666'       //y轴字体颜色
        },
        formatter: function (value, index) {
          return ['{title|' + value + '} '].join('\n');
        },
        //定义富文本标签
        rich: {
          title: {
            color: '#9CA3AF',
            fontSize: fontSizeRem(20),
            fontWeight: 800,
            // borderWidth: 1,
            // borderColor: '#08c'
            // textareaBorderColor: '#08c',
          }
        }
      },
      splitLine: { show: false },   //横向的线
      axisTick: { show: false },    //y轴的端点
      axisLine: { show: false },    //y轴的线
      data: ['36-40', '31-35', '26-30', '19-25', '13-18']
    },
      {
        show: legendShow ? false : true,
        data: ['000', '000', '000', '000', '000'],
        offset: fontSizeRem(-65),
        position: "right",
        axisLabel: {
          lineHeight: fontSizeRem(-5),
          verticalAlign: "bottom",
          fontSize: fontSizeRem(20),
          color: "#E5E7EB",
          formatter: "{value}"
        },
        axisLine: {
          show: false
        },
        splitLine: {
          show: false
        },
        axisTick: {
          show: false
        }
      }
    ]
    ,
    series: [
      {
        name: 'Male',
        type: 'bar',
        itemStyle: {
          normal: {
            color: '#2AECDA',
          }
        },
        // label: {
        //     normal: {
        //         show: true,
        //         position: 'right',
        //         color: 'red',
        //         fontSize: 14,
        //         formatter:
        //         function(param) {
        //             // return 'xx';
        //         },
        //     }
        // },
        barWidth: fontSizeRem(legendShow? barWidth/2 : barWidth),
        data: [11, 33, 77, 39, 55]
      },
      {
        name: 'Female',
        type: 'bar',
        itemStyle: {
          normal: {
            color: legendShow? '#1C64F2':'#374151'
          }
        },
        barGap: legendShow? 0 : '-100%',
        z: 0,
        barWidth: fontSizeRem(legendShow? barWidth/2 : barWidth),
        data: FemaleData
      }
    ]
  };

  option && myChart.setOption(option);

  window.addEventListener('resize', function () {
    myChart.resize();
  });
};
