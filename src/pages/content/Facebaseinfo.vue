<template>
  <div>
    <el-card>
      <el-steps :active="active" align-center>
        <el-step title="步骤 1" description="准备录入"> </el-step>
        <el-step title="步骤 2" description="录入结果"></el-step>
      </el-steps>
      <div v-show="active == 1" class="tab-one">
        <el-row>
          <el-input
            v-model="inputName"
            placeholder="请输入姓名拼音 比如：张三 ,请输入 zhangsan"
          >
            <template #prepend
              ><el-icon><user-filled /></el-icon
            ></template>
          </el-input>
        </el-row>
        <el-row justify="center">
          <el-col :span="6"
            ><el-button type="primary" @click="createFaceInfo"
              >点击确定录入</el-button
            ></el-col
          ></el-row
        >
      </div>
      <div v-show="active == 2">
        <p v-if="enterFlag == 0" style="font-size: 20px">
          将于<span style="font-size: 24px; color: red">{{ count }}</span
          >秒后进行人脸录入，请站在摄像机前。
        </p>
        <el-row justify="center">
          <el-col :span="6" v-if="enterFlag == 1">
            <el-result icon="success" title="成功" :sub-title="enterMsg">
              <template #extra>
                <el-button type="primary" size="medium" @click="init"
                  >再次录入</el-button
                >
              </template>
            </el-result>
          </el-col>
          <el-col :span="6" v-else-if="enterFlag == 2">
            <el-result icon="error" title="失败" :sub-title="enterMsg">
              <template #extra>
                <el-button
                  type="primary"
                  size="medium"
                  @click="enterFaceInfoAgain"
                  >重新拍照</el-button
                >
              </template>
            </el-result>
          </el-col>
        </el-row>
      </div>
    </el-card>
  </div>
</template>
<script>
import { UserFilled } from "@element-plus/icons";
import { ref } from "@vue/reactivity";
import api from "../../common/untils/api";
export default {
  components: {
    UserFilled,
  },
  setup() {
    return {
      active: ref(1),
      inputName: ref(""),
      timer: ref(""),
      count: ref(3),
      enterFlag: ref(0),
      enterMsg: ref(""),
    };
  },
  watch: {
    count: function (newval) {
      if (newval == 0) {
        clearInterval(this.timer);
        this.enterFaceInfo();
      }
    },
  },
  methods: {
    init() {
      this.active = 1;
      this.enterFlag = 0;
      this.count = 3;
      this.inputName = "";
      this.enterMsg = "";
    },
    createFaceInfo() {
      if(this.inputName == ''){
          this.$message.error("用户名不能为空")
      }else{
        api
        .createFaceInfo(this.inputName)
        .then((res) => {
          this.$message.success(res.data.msg);
          this.active = 2;
          this.timer = setInterval(() => {
            this.count--;
          }, 1000);
        })
        .catch((err) => {
          this.$message.success(err.data.msg);
        });

      }
    
    },
    enterFaceInfo() {
      api
        .enterFaceInfo()
        .then((res) => {
          this.enterFlag = 1;
          this.enterMsg = res.data.msg;
        })
        .catch((err) => {
          this.enterFlag = 2;
          this.enterMsg = err.data.msg;
        });
    },
    enterFaceInfoAgain() {
      this.count = 3;
      this.enterFlag=0;
      this.timer = setInterval(() => {
        this.count--;
      }, 1000);
    },
  },
};
</script>
<style scoped>
.tab-one {
  padding: 200px 100px;
  align-content: center;
}
.el-row {
  margin-bottom: 120px;
}
</style>