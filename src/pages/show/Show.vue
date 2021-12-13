<template>
  <div id="data-view">
    <dv-full-screen-container>
      <div class="main-header">
        <div class="mh-left">检测事件：安全帽检测-安全带检测-人脸识别</div>
        <div class="mh-middle">生产安全监控智能分析系统</div>
        <div class="mh-right">
          <dv-border-box-2 class="jump-to-manager" @click="toManager">
            管理系统
          </dv-border-box-2>
        </div>
      </div>
      <dv-loading v-if="isLoad">Loading...</dv-loading>

      <dv-border-box-1 class="main-container" v-else>
        <div class="mc-left">
          <div class="mc-left-top">
            <Left-Face-View :baseImg="baseImg" />
          </div>
          <dv-decoration-2 />
          <div class="mc-left-bottom">
            <Left-Prod-View :baseImg="baseImg" />
          </div>
        </div>
        <div class="mc-right">
          <div class="mc-right-top">
            <Top-Face-Chart />
            <Top-Prod-Chart />
          </div>
          <dv-decoration-2 :reverse="true" />
          <div class="mc-right-bottom">
            <Bottom-Right-Face-Table />
            <Bottom-Right-Prod-Table />
          </div>
        </div>
      </dv-border-box-1>
    </dv-full-screen-container>
  </div>
</template>

<script>
import { ref } from "vue";

import LeftFaceView from "./LeftFaceView.vue";
import TopFaceChart from "./TopFaceChart.vue";
import TopProdChart from "./TopProdChart.vue";
import LeftProdView from "./LeftProdView.vue";
import BottomRightProdTable from "./BottomRightProdTable.vue";
import BottomRightFaceTable from "./BottomRightFaceTable.vue";
import api from "../../common/untils/api";

export default {
  name: "DataView",
  components: {
    LeftFaceView,
    TopFaceChart,
    TopProdChart,
    LeftProdView,
    BottomRightProdTable,
    BottomRightFaceTable,
  },
  setup() {
    let baseImg = "";
    if (process.env.NODE_ENV == "development") {
      baseImg = "http://localhost:8081/";
    } else {
      baseImg = "http://api.safe.demo:3000/";
    }
    return {
      isLoad: ref(true),
      baseImg,
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    //初始化数据
    init() {
      //获取登机信息的数据
      api.queryFaceData();
      api.queryProdData();
      setTimeout(() => {
        this.isLoad = false;
      }, 2000);
    },
    toManager() {
      this.$router.replace("/");
    },
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
      font-size: 20px;
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
    display: flex;
    flex-direction: column;
    .border-box-content {
      display: flex;
    }
    .mc-left {
      width: calc(~"40%");
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      margin-left: 30px;
      .mc-left-top,
      .mc-left-bottom {
        margin-top: 20px;
        height: 50%;
      }
      .dv-decoration-2 {
        width: 100%;
        height: 5px;
      }
    }
    .mc-right {
      width: calc(~"60%");
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      .mc-right-top {
        height: 40%;
        display: flex;
        flex-direction: row;
      }

      .mc-right-bottom {
        height: 55%;
        display: flex;
        flex-direction: row;
      }
      .dv-decoration-2 {
        position: absolute;
        right: 30%;
        width: 5px;
        height: 95%;
      }
    }
    // .mc-top,
    // .mc-bottom {
    //   box-sizing: border-box;
    //   padding: 30px;
    //   display: flex;
    // }

    // .mc-top {
    //   height: 40%;
    // }

    // .mc-bottom {
    //   height: 60%;
    // }

    // .top-left-cmp,
    // .bottom-left-container {
    //   width: 32%;
    // }

    // .top-middle-cmp,
    // .top-right-cmp {
    //   width: 34%;
    // }

    // .bottom-left-container {
    //   position: relative;

    //   .border-box-content {
    //     display: flex;
    //   }

    //   .mcb-decoration-1,
    //   .mcb-decoration-2 {
    //     position: absolute;
    //     left: 50%;
    //     margin-left: -2px;
    //   }

    //   .mcb-decoration-1 {
    //     top: 5%;
    //     transform: rotate(180deg);
    //   }

    //   .mcb-decoration-2 {
    //     top: 50%;
    //   }

    //   .bottom-left-chart-1,
    //   .bottom-left-chart-2 {
    //     width: 50%;
    //     height: 100%;
    //   }
    // }

    // .bottom-right-container {
    //   width: 68%;
    //   padding-left: 30px;
    //   box-sizing: border-box;
    //   display: flex;
    // }
  }
}
</style>
