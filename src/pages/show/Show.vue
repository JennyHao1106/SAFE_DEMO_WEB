<template>
  <div id="show">
    <!-- 头部 -->
    <div class="show-title">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="User" name="prod">User</el-tab-pane>
        <el-tab-pane label="Config" name="face">Config</el-tab-pane>
      </el-tabs>
    </div>
    <!-- 显示内容 -->
    <div></div>
    <div class="show-bottom"></div>
  </div>
</template>
<script>
export default {
    setup(){
        return {

        }
    }
}
</script>

<style scoped>
#show {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: url("~@/assets/background.png");
  color: aliceblue;
}
#show-title {
}
</style>