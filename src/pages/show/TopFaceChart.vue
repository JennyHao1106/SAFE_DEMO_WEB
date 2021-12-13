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
          data: [
            "7时",
            "8时",
            "9时",
            "10时",
            "11时",
            "12时",
            "13时",
            "14时",
            "15时",
            "16时",
            "17时",
            "18时",
            "19时",
            "20时",
            "21时",
            "22时",
          ],
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
          max: 500,
          interval: 50,
        },
        series: [
          {
            data: [100, 200, 300, 405, 300, 200, 150, 205, 99.84],
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
  methods:{
    init(){
      
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
