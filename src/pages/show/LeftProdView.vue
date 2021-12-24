<template>
  <div class="bottom-left-chart-1">
    <div class="dc-text">
      作业预警信息总览
      <dv-decoration-3 style="width: 200px; height: 20px" />
    </div>
    <div class="main-value">
      <span>{{ getTableTotal }}</span>人次
      <div class="compare-value">统计时间：{{ nowTime }}</div>
    </div>
    <div>
      <dv-border-box-8>
        <div class="el-image">
          <img :src="imgSrc" alt srcset class="el-image__inner" style="object-fit: fill;" />
        </div>
      </dv-border-box-8>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  name: "BottomLeftChart1",
  props: {
    baseImg: String
  },
  setup() {
    return {
      timer: ref(""),
      nowTime: ref(""),
    };
  },
  mounted() {
    this.timer = setInterval(this.getTime, 1000);
  },
  beforeRouteLeave() {
    clearInterval(this.timer);
  },
  computed: {
    getTableTotal() {
      return this.$store.state.prodData.total;
    },
    imgSrc() {
      return this.baseImg + this.$store.state.prodData.list[0].picture_url;
    }
  },
  methods: {
    checkTime(i) {
      if (i < 10) return "0" + i;
      return i;
    },
    getTime() {
      let time = new Date();
      let year = time.getFullYear(); //获取年份
      let month = time.getMonth() + 1; //获取月份
      let day = time.getDate(); //获取日期
      let hour = this.checkTime(time.getHours()); //获取时
      let minite = this.checkTime(time.getMinutes()); //获取分
      let second = this.checkTime(time.getSeconds()); //获取秒
      /****当时、分、秒、小于10时，则添加0****/
      this.nowTime =
        year +
        "-" +
        month +
        "-" +
        day +
        " " +
        hour +
        ":" +
        minite +
        ":" +
        second;
    },
  },
};
</script>

<style lang="less">
.bottom-left-chart-1 {
  display: flex;
  flex-direction: column;
  .dc-text {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .main-value {
    font-weight: bold;
    font-size: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    span {
      font-size: 50px;
      color: #00c0ff;
      margin-right: 15px;
    }
    .compare-value {
      height: 35px;
      line-height: 35px;
      font-size: 18px;
      margin-left: 20px;
      span {
        margin-right: 30px;
      }
    }
  }
  .dv-border-box-8 .border-box-content {
    // height: 350px;
    height: calc(33vh);
    .el-image {
      margin: 10px;
      border-radius: 5px;
    }
  }
}
</style>
