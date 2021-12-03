<template>
  <div class="bottom-left-chart-1">
    <div class="header-name">登机通过率</div>
    <div class="details-value"><span>50</span>%</div>
    <dv-charts :option="option" />
  </div>
</template>

<script>
export default {
  name: "BottomLeftChart1",
  data() {
    return {
      option: {
        legend: {
          left: "center",
          data: ["总人次", "未佩戴安全帽人次"],
        },
        series: [
          {
            type: "pie",
            data: [
              { name: "未佩戴安全帽人次", value: 65 },
              { name: "总人次", value: 93 },
            ],
            outsideLabel: {
              show: true,
              labelLineBendGap: "0",
              labelLineEndLength: "5",
              style: {
                fontSize: 9,
              },
            },
            pieStyle: {
              width: "100",
              height:"100",
            },
          },
        ],
        color: ["#00c0ff", "#3de7c9"],
      },
    };
  },
};
</script>

<style lang="less">
.bottom-left-chart-1 {
  position: relative;

  .header-name {
    height: 150px;
    line-height: 150px;
    font-size: 20px;
    text-align: center;
  }

  .details-value {
    height: 40px;
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    span {
      color: #00c0ff;
      font-size: 40px;
    }
  }
  .dv-charts-container {
    height: calc(~"100% - 190px");
  }

  .decoration-ring {
    position: absolute;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 5px solid fade(#fefefe, 30);
    top: 150px;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
