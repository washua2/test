import * as echarts from 'echarts';
import {fontSizeRem} from '@/utils/utils';
export const initEcharts = () => {
  var chartDom = document.getElementById('Temperature');
  var myChart = echarts.init(chartDom);
  var option;
  let model = {
    yCates: ['22:00','20:00','18:00','16:00','14:00', '12:00', '10:00',
      '08:00', '06:00', '04:00',
      '02:00','00:00'],
    xCates: ['15/03', '16/03', '17/03', '18/03', '19/03','20/03','21/03'],
    data: [
      // [yCateIndex, xCateIndex, value]
      [0,0,1],[0,1,1],[0,2,4],[0,3,6],[0,4,5],[0,5,5],[0,6,5],
      [1,0,1],[1,1,1],[1,2,4],[1,3,7],[1,4,6],[1,5,5],[1,6,6],
      [2,0,1],[2,1,3],[2,2,4],[2,3,7],[2,4,6],[2,5,6],[2,6,6],
      [3,0,3],[3,1,3],[3,2,6],[3,3,9],[3,4,8],[3,5,8],[3,6,8],
      [4,0,3],[4,1,3],[4,2,6],[4,3,9],[4,4,8],[4,5,9],[4,6,8],
      [5,0,4],[5,1,3],[5,2,6],[5,3,9],[5,4,9],[5,5,10],[5,6,9],
      [6,0,4],[6,1,4],[6,2,7],[6,3,9],[6,4,9],[6,5,10],[6,6,8],
      [7,0,3],[7,1,5],[7,2,5],[7,3,8],[7,4,8],[7,5,9],[7,6,7],
      [8,0,2],[8,1,7],[8,2,5],[8,3,7],[8,4,7],[8,5,8],[8,6,6],
      [9,0,1],[9,1,5],[9,2,4],[9,3,5],[9,4,6],[9,5,4],[9,6,6],
      [10,0,1],[10,1,3],[10,2,3],[10,3,4],[10,4,5],[10,5,4],[10,6,4],
      [11,0,1],[11,1,3],[11,2,3],[11,3,4],[11,4,4],[11,5,5],[11,6,4],
    ]
  };
  let colorData = ["#B3371C",'#D24323','#E88510','#E89F10','#FFD109','#CEC953','#6AB047','#1C92A2','#2F88BA','#347BBD']
  let data = model.data.map(function (item) {
    return [item[1], item[0], item[2] || '-'];
  });
  option = {
    tooltip: {
      position: 'top',
      textStyle: {
        fontSize: fontSizeRem(20),
        color: '#666'       //y轴字体颜色
      },
    },
    animation: false,
    grid: {
      width: '90%',
      height: '73%',
      y: '5%'
    },
    xAxis: {
      type: 'category',
      data: model.xCates,
      axisLabel: {
        color: '#9CA3AF',
        fontSize: fontSizeRem(20),
        fontWeight: 700,
      },
    },
    yAxis: {
      type: 'category',
      data: model.yCates,
      axisLabel: {
        color: '#9CA3AF',
        fontSize: fontSizeRem(20),
        fontWeight: 700,
      },
    },
    visualMap: {
      color: colorData,
      min: 1,
      max: 10,
      itemHeight: fontSizeRem(550),
      calculable: true,
      orient: 'horizontal',
      left: 'center',
      bottom: '0%',
      textStyle: {
        color: "rgba(0,0,0,0)",
        fontSize: fontSizeRem(20),
        fontWeight: 600,
      },
    },
    series: [{
      name: 'Punch Card',
      type: 'heatmap',
      data: data,
      label: {
        normal: {
          show: false
        }
      },
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }]
  };

  option && myChart.setOption(option);

  window.addEventListener('resize', function () {
    myChart.resize();
  });
};
