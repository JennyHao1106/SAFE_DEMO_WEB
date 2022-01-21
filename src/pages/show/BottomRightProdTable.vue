<template>
  <div class="bottom-right-table-1">
    <dv-border-box-6>
      <div class="table-name">
        <img src="~@/assets/icon1.png" />作业计划预警历史记录
      </div>
      <dv-scroll-board :config="config" @click="openImg" />
    </dv-border-box-6>
    <el-dialog v-model="prodSafeDetailFlag" title="告警图像" width="40%" :append-to-body="true">
      <el-image :src="baseImg + imgUrl" fit="scale-down" class="fit-style">
        <template #placeholder>
          <div class="image-slot">
            Loading
            <span class="dot">...</span>
          </div>
        </template>
      </el-image>
    </el-dialog>
  </div>
</template>

<script>
import showData from "@/common/untils/show";

export default {
  name: 'BottomRightTable1',
  data() {
    let baseImg = "";
    if (process.env.NODE_ENV == "development") {
      baseImg = "http://localhost:8081/";
    } else {
      baseImg = "http://api.safe.demo:3000/";
    }
    return {
      config: {
        data: [

        ],
        index: true,
        rowNum: 8,
        columnWidth: [40, 70, 90, 150],
        align: ['center'],
        oddRowBGC: 'rgba(9, 37, 50, 0.4)',
        evenRowBGC: 'rgba(10, 32, 50, 0.3)'
      },
      baseImg,
      imgUrl: "",
      prodSafeDetailFlag: false
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      let showDataArr = showData.getProdDataForShowList()
      this.config = {
        data: showDataArr, index: true,
        rowNum: 8,
        columnWidth: [40, 70, 90, 150],
        align: ['center'],
        oddRowBGC: 'rgba(9, 37, 50, 0.4)',
        evenRowBGC: 'rgba(10, 32, 50, 0.3)'
      }
    },
    openImg(data) {
      console.log(data)
      if (data.columnIndex == 4) {
        let reg = /\((.+?)\)/g;
        data.ceil.match(reg);
        this.prodSafeDetailFlag = true;
        this.imgUrl = RegExp.$1;
      } else {
        return false
      }

    }
  }
}
</script>

<style lang="less">
.bottom-right-table-1 {
  width: calc(~"45% + 50px");
  height: 100%;
  margin: 0 10px;
  // display: flex;
  // flex-direction: column;
  .border-box-content {
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
  }

  .table-name {
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;

    img {
      width: 40px;
      height: 40px;
      margin-right: 5px;
    }
  }

  .dv-scroll-board {
    height: calc(~"100% - 60px");
  }
}
</style>
