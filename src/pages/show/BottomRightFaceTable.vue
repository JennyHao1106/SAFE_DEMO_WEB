<template>
  <div class="bottom-right-table-1">
    <dv-border-box-6>
      <div class="table-name">
        <img src="~@/assets/icon2.png" />登机人次历史记录
      </div>
      <dv-scroll-board :config="config" @click="openImg" />
    </dv-border-box-6>
    <el-dialog v-model="faceSafeDetailFlag" title="告警图像" width="40%" :append-to-body="true">
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
        rowNum: 8,
        index: true,
        columnWidth: [40, 70, 90, 150],
        align: ['center'],
        oddRowBGC: 'rgba(9, 37, 50, 0.4)',
        evenRowBGC: 'rgba(10, 32, 50, 0.3)'
      },
      faceSafeDetailFlag: false,
      imgUrl: "",
      baseImg
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    openImg(data) {
      if (data.columnIndex == 4) {
        let reg = /\((.+?)\)/g;
        data.ceil.match(reg);
        this.faceSafeDetailFlag = true;
        this.imgUrl = RegExp.$1;
      } else {
        return false
      }
    },
    init() {
      let showDataArr = showData.getFaceDataForShowList()
      this.config = {
        data: showDataArr,
        rowNum: 8,
        index: true,
        columnWidth: [40, 70, 90, 150],
        align: ['center'],
        oddRowBGC: 'rgba(9, 37, 50, 0.4)',
        evenRowBGC: 'rgba(10, 32, 50, 0.3)'
      }

    }
  }
}
</script>

<style lang="less">
.bottom-right-table-1 {
  width: calc(~"45% + 10px");
  height: 100%;
  margin: 0 30px;

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
