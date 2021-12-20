<template>
  <div class="bottom-right-table-1">
    <dv-border-box-6>
      <div class="table-name">
        <img src="~@/assets/icon1.png" />作业计划预警历史记录
      </div>
      <dv-scroll-board :config="config" />
    </dv-border-box-6>
  </div>
</template>

<script>
import showData from "@/common/untils/show";

export default {
  name: 'BottomRightTable1',
  data () {
    return {
      config: {
        data: [
         
        ],
        index: true,
        rowNum:8,
        columnWidth: [35, 70,90,150],
        align: ['center'],
        oddRowBGC: 'rgba(9, 37, 50, 0.4)',
        evenRowBGC: 'rgba(10, 32, 50, 0.3)'
      }
    }
  },
  mounted() {
    this.init()
  },
  methods:{
    showDetail(){
      
    },
    init(){
      this.config.data=showData.getProdDataForShowList()
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
