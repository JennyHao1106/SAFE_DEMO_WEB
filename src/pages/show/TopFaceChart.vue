<template>
  <div class="top-middle-cmp">
    <div class="chart-name">
      登记人次统计分析
      <dv-decoration-3 style="width: 200px; height: 20px" />
    </div>
    <dv-charts :option="option" />
  </div>
</template>

<script>
import { ref } from "vue";
import showData from "@/common/untils/show";

export default {
  name: "TopMiddleCmp",
  setup() {
    return {
      option: ref({
        legend: {
          data: ["人次/时"],
          textStyle: {
            fill: "#fff",
          },
        },
        xAxis: {
          data: [],
          boundaryGap: false,
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
            formatter({ value }) {
              return value.toFixed(2);
            },
          },
          axisTick: {
            show: false,
          },
          min: 0,
          max: 50,
          interval: 5,
        },
        series: [
          {
            data: [],
            type: "line",
            name: "人次/时",
            smooth: true,
            lineArea: {
              show: true,
              gradient: ["rgba(55, 162, 218, 0.6)", "rgba(55, 162, 218, 0)"],
            },
            linePoint: {
              radius: 4,
              style: {
                fill: "#00db95",
              },
            },
          },
        ],
      }),
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
     
      this.option.xAxis.data = showData.getFaceDataForShowChart().timeData.length == 0 ? initXaxis : showData.getFaceDataForShowChart().timeData;
      this.option.series[0].data = showData.getFaceDataForShowChart().countData.length == 0 ? initYaxis : showData.getFaceDataForShowChart().countData;
    }
  }
};
</script>

<style lang="less">
.top-middle-cmp {
  //padding: 0 50px;
  box-sizing: border-box;
  width: 50%;
  .chart-name {
    position: absolute;
    right: 35%;
    text-align: right;
    font-size: 16px;
    top: 10px;
  }
}
</style>
