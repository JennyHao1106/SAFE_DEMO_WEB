
  <template>
  <div class="history">
    <el-card class="box-card card-top">
      <el-row>
        <el-col :span="12">
          <el-image :src="getPicURL" fit="scale-down" class="fit-style">
            <template #placeholder>
              <div class="image-slot">Loading<span class="dot">...</span></div>
            </template>
          </el-image>
        </el-col>
        <el-col :span="10" :offset="2">
          <el-descriptions
            class="margin-top"
            title="登机人员信息"
            :column="1"
            border
            size="medium"
          >
            <el-descriptions-item label="姓名">{{
              getPicPersonName
            }}</el-descriptions-item>
            <el-descriptions-item label="时间">{{
              baseFun.changeTimeToDate(getCheckTime)
            }}</el-descriptions-item>
            <el-descriptions-item label="状态">正常</el-descriptions-item>
          </el-descriptions>
        </el-col>
      </el-row>
    </el-card>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>历史记录{{ getTableTotal }}条</span>
        </div>
      </template>
      <div>
        <el-table :data="getTableData" stripe style="width: 100%" height="350">
          <el-table-column type="index" width="50" />
          <el-table-column prop="cam_name" label="相机名称" width="180">
            <template #default="scope">
              {{ baseFun.changeCamName(scope.row.cam_name) }}
            </template>
          </el-table-column>
          <el-table-column prop="person_name" label="人员姓名" width="180" />
          <el-table-column prop="check_state" label="审核状态" width="300">
            <template #default="scope">
              {{ baseFun.changeCheckState(scope.row.check_state) }}
            </template>
          </el-table-column>
          <el-table-column prop="check_time" label="审核时间" width="180">
            <template #default="scope">
              {{ baseFun.changeTimeToDate(scope.row.check_time) }}
            </template>
          </el-table-column>
          <el-table-column prop="picture_url" label="操作">
            <template #default="scope">
              <el-button type="text" @click="openFaceSafeDetail(scope.row)">{{
                scope.row.picture_url
              }}</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div></div>
    </el-card>
    <el-dialog
      v-model="faceSafeDetailFlag"
      title="人员信息"
      width="40%"
      :append-to-body="true"
    >
      <el-image
        :src="baseImg + clickItem.picture_url"
        fit="scale-down"
        class="fit-style"
      >
        <template #placeholder>
          <div class="image-slot">Loading<span class="dot">...</span></div>
        </template>
      </el-image>
      <el-row
        ><el-col :span="12">姓名：{{ clickItem.person_name }}</el-col
        ><el-col :span="12"
          >时间：{{ baseFun.changeTimeToDate(clickItem.check_time) }}</el-col
        ></el-row
      >
    </el-dialog>
  </div>
</template>

<script>
import { ref } from "vue";
import api from "../../common/untils/api";
import baseFun from "../../common/untils/baseFunction";
export default {
  setup() {
    const baseImg = "http://localhost:3000/";
    let faceSafeDetailFlag = ref(false);
    const timer1 = setInterval(() => {
      api.queryProdData(1);
    }, 1000);
    let clickItem = ref({});
    return {
      baseImg,
      timer1,
      clickItem,
      baseFun,
      faceSafeDetailFlag,
    };
  },
  methods: {
    openFaceSafeDetail(data) {
      this.faceSafeDetailFlag = !this.faceSafeDetailFlag;
      this.clickItem = data;
    },
  },
  mounted() {
    api.queryProdData(1);
  },
  unmounted() {
    clearInterval(this.timer1);
  },
  computed: {
    getTableData() {
      return this.$store.state.faceData.list;
    },
    getTableTotal() {
      return this.$store.state.faceData.total;
    },
    getPicPersonName() {
      return this.$store.state.faceData.total > 0
        ? this.$store.state.faceData.list[0].person_name
        : "XXXX";
    },
    getCheckTime() {
      return this.$store.state.faceData.total > 0
        ? this.$store.state.faceData.list[0].check_time
        : "XXXX";
    },
    getPicURL() {
      return this.$store.state.faceData.total > 0
        ? this.baseImg + this.$store.state.faceData.list[0].picture_url
        : "http://localhost:3000/404.gif";
    },
  },
};
</script>

<style scoped>
.card-top {
  margin-bottom: 10px;
}
.fit-style {
  max-height: 350px;
}
</style>
