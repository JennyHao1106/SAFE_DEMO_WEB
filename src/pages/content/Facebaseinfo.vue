<template>
  <div>
    <el-card>
      <el-steps :active="active" align-center>
        <el-step title="步骤 1" description="准备录入"> </el-step>
        <el-step title="步骤 2" description="录入结果"></el-step>
      </el-steps>
      <div v-show="active == 1" class="tab-one">
        <el-input v-model="inputName" placeholder="Please input">
          <template #prepend
            ><el-icon><user-filled /></el-icon
          ></template>
        </el-input>
      </div>
      <div v-show="active == 2">bb</div>
    </el-card>
  </div>
</template>
<script>
import { UserFilled } from "@element-plus/icons";
export default {
  components: {
    UserFilled,
  },
  setup() {
    let active = 1;
    let inputName = "";
    return {
      active,
      inputName,
    };
  },
};
</script>
<style scoped>
.tab-one {
  padding: 0 auto;
}
</style>