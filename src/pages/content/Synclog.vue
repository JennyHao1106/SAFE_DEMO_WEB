
  <template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="在线检测" name="first">
        <el-container direction="horizontal">
          <el-main>
            <el-upload
              class="upload-demo"
              drag
              action="http://localhost:8081/public/"
              multiple
            >
              <i class="el-icon-upload"></i>
              <div class="el-upload__text">
                将文件拖到此处，或
                <em>点击上传</em>
              </div>
            </el-upload>
          </el-main>
          <el-main>Main</el-main>
        </el-container>
      </el-tab-pane>
      <el-tab-pane label="历史数据" name="second">历史数据</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  setup() {
    return {
      activeName: 'first'
    };
  },
  methods:{
    handleClick(){}
  }
};
</script>

<style scoped>
.el-main {
  margin: 5px;
  background-color: white;
}
</style>
