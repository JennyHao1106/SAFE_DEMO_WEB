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
          max: 500,
          interval: 50,
        },
        series: [
          {
            name: "人次/时",
            data: [100, 200, 300, 405, 300, 200, 150, 205, 99.84],
            type: "bar",
            gradient: {
              color: ["#37a2da", "#67e0e3"],
            },
          },
        ],
      },
    };
  },
};
</script>

<style lang="less">
.top-right-cmp {
  position: relative;
  padding: 0 50px;
  box-sizing: border-box;

  .chart-name {
    position: absolute;
    right: 70px;
    text-align: right;
    font-size: 20px;
    top: 10px;
  }
}
</style>
