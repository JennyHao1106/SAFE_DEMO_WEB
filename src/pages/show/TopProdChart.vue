<template>
  <div class="top-right-cmp">
    <div class="chart-name">
      作业预警人次统计分析
      <dv-decoration-3 style="width: 200px; height: 20px" />
    </div>
    <dv-charts :option="option" />
  </div>
</template>

<script>
import showData from "@/common/untils/show";
export default {
  name: "TopRightCmp",
  data() {
    return {
      option: {
        legend: {
          data: [
            {
              name: "人次/时",
              color: "#00baff",
            },
          ],
          textStyle: {
            fill: "#fff",
          },
        },
        xAxis: {
          data: [],
          axisLine: {
            style: {
              stroke: "#999",
            },
          },
          axisLabel: {
            style: {
              fill: "#999",
            },
          },
          axisTick: {
            show: false,
          },
        },
        yAxis: {
          data: "value",
          splitLine: {
            show: false,
          },
          axisLine: {
            style: {
              stroke: "#999",
            },
          },
          axisLabel: {
            style: {
              fill: "#999",
            },
          },
          axisTick: {
            show: false,
          },
          min: 0,  
          interval:50,
        },
        series: [
          {
            name: "人次/时",
            data: [],
            type: "bar",
            gradient: {
              color: ['rgba(251, 114, 147, .6)', 'rgba(251, 114, 147, .1)']
            },
            barStyle: {
              stroke: '#fb7293'
            }
            
          },
        ],
      },
    };
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      /**绘图X\Y轴必须有数据，为了确保折线图展示无误，通过该方法初始化数据 */
      let initXaxis = ["7时", "8时", "9时", "10时", "11时", "12时", "13时", "14时", "15时", "16时", "17时", "18时"];
      let initYaxis = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      this.option.xAxis.data = showData.getProdDataForShowChart().timeData.length == 0 ? initXaxis : showData.getProdDataForShowChart().timeData;
      this.option.series[0].data = showData.getProdDataForShowChart().countData.length == 0 ? initYaxis : showData.getProdDataForShowChart().countData;
    }
  }
};
</script>

<style lang="less">
.top-right-cmp {
  //padding: 0 30px;
  box-sizing: border-box;
  width: 50%;
  .chart-name {
     position: absolute;
     right: 70px;
    text-align: right;
    font-size: 16px;
    top: 10px;
   // display: flex;
    
  }
}
</style>
