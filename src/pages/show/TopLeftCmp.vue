<template>
  <div class="top-left-cmp">
    <div class="dc-left">
      <dv-border-box-5>
        <div class="main-value"><span>5000</span>人次</div>
        <div class="compare-value"><span>统计时间</span></div>
        <div class="compare-value">
          <span>{{ nowTime }}</span>
        </div>
      </dv-border-box-5>
      <div class="dc-text">
        登记信息总览
        <dv-decoration-3 style="width: 200px; height: 20px" />
      </div>
    </div>
    <div class="dc-right">
      <div class="dc-text">
        作业预警信息总览
        <dv-decoration-3 style="width: 200px; height: 20px" />
      </div>
      <dv-border-box-5 :reverse="true">
        <div class="main-value"><span>5000</span>人次</div>
        <div class="compare-value"><span>统计时间</span></div>
        <div class="compare-value"><span>{{ nowTime }}</span></div>
      </dv-border-box-5>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  name: "TopLeftCmp",
  setup() {
    return {
      timer: ref(""),
      nowTime: ref(""),
    };
  },
  mounted() {
   this.timer = setInterval(this.getTime, 1000);
  },
  beforeRouteLeave(){
    clearInterval(this.timer)
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
.top-left-cmp {
  display: flex;

  .dc-left,
  .dc-right {
    width: 50%;
  }

  .dv-border-box-5 {
    height: 60%;
  }

  .dc-text {
    display: flex;
    flex-direction: column;
    height: 40%;
    font-size: 20px;
    padding: 20px;
    box-sizing: border-box;
  }

  .dc-left .dc-text {
    align-items: flex-end;
    justify-content: center;
  }

  .dc-right .dc-text {
    justify-content: flex-start;
    padding-top: 20px;
  }

  .dc-left .dv-border-box-5 {
    padding: 30px;
    box-sizing: border-box;
  }

  .dc-right .dv-border-box-5 {
    padding: 35px;
    padding-left: 75px;
    box-sizing: border-box;
  }

  .main-value {
    font-weight: bold;
    font-size: 30px;

    span {
      font-size: 50px;
      color: #00c0ff;
      margin-right: 15px;
    }
  }

  .compare-value {
    height: 35px;
    line-height: 35px;
    font-size: 18px;

    span {
      margin-right: 30px;
    }
  }
}
</style>
