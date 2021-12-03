<template>
  <div id="data-view">
    <dv-full-screen-container>
      <div class="main-header">
        <div class="mh-left">检测事件：安全帽检测-安全带检测-人脸识别</div>
        <div class="mh-middle">生产安全监控智能分析系统</div>
        <div class="mh-right">
          <dv-border-box-2 class="jump-to-manager"> 管理系统 </dv-border-box-2>
        </div>
      </div>

      <dv-border-box-1 class="main-container">
        <div class="mc-top">
          <Top-Left-Cmp />
          <Top-Face-Chart />
          <Top-Prod-Chart />
        </div>
        <div class="mc-bottom">
          <dv-border-box-6 class="bottom-left-container">
            <BottomLeftProdPie />
          </dv-border-box-6>

          <div class="bottom-right-container">
             <Bottom-Right-Face-Table />
              <Bottom-Right-Prod-Table />
              
          </div>
        </div>
      </dv-border-box-1>
    </dv-full-screen-container>
  </div>
</template>

<script>
import TopLeftCmp from "./TopLeftCmp";
import TopFaceChart from "./TopFaceChart.vue";
import TopProdChart from "./TopProdChart.vue";
import BottomLeftProdPie from "./BottomLeftProdPie.vue";
import BottomRightProdTable from './BottomRightProdTable.vue'
import BottomRightFaceTable from './BottomRightFaceTable.vue'

export default {
  name: "DataView",
  components: {
    TopLeftCmp,
    TopFaceChart,
    TopProdChart,
    BottomLeftProdPie,
    BottomRightProdTable,
    BottomRightFaceTable
  },
  setup() {
    return {};
  },
};
</script>

<style lang="less">
#data-view {
  width: 100%;
  height: 100%;
  background-color: #030409;
  color: #fff;

  #dv-full-screen-container {
    background-image: url("~@/assets/bg.png");
    background-size: 100% 100%;
    box-shadow: 0 0 3px blue;
    display: flex;
    flex-direction: column;
  }

  .main-header {
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    .mh-middle {
      font-size: 30px;
    }

    .mh-left,
    .mh-right {
      font-size: 16px;
      width: 450px;
      .jump-to-manager {
        width: 120px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        margin-left: 200px;
      }
    }
  }

  .main-container {
    height: calc(~"100% - 80px");

    .mc-top,
    .mc-bottom {
      box-sizing: border-box;
      padding: 30px;
      display: flex;
    }

    .mc-top {
      height: 40%;
    }

    .mc-bottom {
      height: 60%;
    }

    .top-left-cmp,
    .bottom-left-container {
      width: 32%;
    }

    .top-middle-cmp,
    .top-right-cmp {
      width: 34%;
    }

    .bottom-left-container {
      position: relative;

      .border-box-content {
        display: flex;
      }

      .mcb-decoration-1,
      .mcb-decoration-2 {
        position: absolute;
        left: 50%;
        margin-left: -2px;
      }

      .mcb-decoration-1 {
        top: 5%;
        transform: rotate(180deg);
      }

      .mcb-decoration-2 {
        top: 50%;
      }

      .bottom-left-chart-1,
      .bottom-left-chart-2 {
        width: 50%;
        height: 100%;
      }
    }

    .bottom-right-container {
      width: 68%;
      padding-left: 30px;
      box-sizing: border-box;
      display: flex;
    }
  }
}
</style>
