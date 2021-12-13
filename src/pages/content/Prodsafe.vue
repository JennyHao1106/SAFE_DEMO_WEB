
  <template>
  <div>
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
            title="信息概述"
            :column="1"
            border
            size="medium"
          >
            <el-descriptions-item label="当前总数数量"
              >{{ getPicTotalNum }}人</el-descriptions-item
            >
            <el-descriptions-item label="未带安全帽"
              >{{ getPicUnhatNum }}人</el-descriptions-item
            >
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
          <el-table-column prop="place_name" label="厂区名称" width="180">
            <template #default="scope">
              {{ baseFun.changePlaceName(scope.row.place_name) }}
            </template>
          </el-table-column>
          <el-table-column prop="alarm_state" label="告警状态" width="180">
            <template #default="scope">
              {{ baseFun.changeAlarmState(scope.row.alarm_state) }}
            </template>
          </el-table-column>
          <el-table-column prop="cam_name" label="相机名称" width="300">
            <template #default="scope">
              {{ baseFun.changeCamName(scope.row.cam_name) }}
            </template>
          </el-table-column>
          <el-table-column prop="alarm_time" label="告警时间" width="180">
            <template #default="scope">
              {{ baseFun.changeTimeToDate(scope.row.alarm_time) }}
            </template>
          </el-table-column>
          <el-table-column prop="person_name" label="人员姓名" width="180" />
          <el-table-column prop="picture_url" label="图片链接">
            <template #default="scope">
              <el-button type="text" @click="openProdSafeDetail(scope.row)">{{
                scope.row.picture_url
              }}</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-card>

    <el-dialog
      v-model="prodSafeDetailFlag"
      title="告警图像"
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
        ><el-col :span="8">姓名：{{ clickItem.person_name }}</el-col
        ><el-col :span="8">
          状态：{{ baseFun.changeAlarmState(clickItem.alarm_state) }}</el-col
        ><el-col :span="8"
          >时间：{{ baseFun.changeTimeToDate(clickItem.alarm_time) }}</el-col
        ></el-row
      >
    </el-dialog>
  </div>
</template>

<script>
import { ref } from "vue";
import api from "../../common/untils/api";
import baseFun from "../../common/untils/baseFunction";
// import { toRaw } from '@vue/reactivity'
export default {
  setup() {
    let baseImg = "";
    if (process.env.NODE_ENV == "development") {
      baseImg = "http://localhost:8081/";
    } else {
      baseImg = "http://api.safe.demo:3000/";
    }
    let prodSafeDetailFlag = ref(false);
    const timer = setInterval(() => {
      api.queryProdData();
    }, 1000);
    let clickItem = ref({});
    return {
      baseImg,
      timer,
      prodSafeDetailFlag,
      baseFun,
      clickItem,
    };
  },
  methods: {
    openProdSafeDetail(data) {
      this.prodSafeDetailFlag = !this.prodSafeDetailFlag;
      this.clickItem = data;
    },
  },
  mounted() {
    api.queryProdData();
  },
  unmounted() {
    clearInterval(this.timer);
  },
  computed: {
    getTableData() {
      return this.$store.state.prodData.list;
    },
    getTableTotal() {
      return this.$store.state.prodData.total;
    },
    getPicTotalNum() {
      return this.$store.state.prodData.total > 0
        ? this.$store.state.prodData.list[0].total_number
        : "XXXX";
    },
    getPicUnhatNum() {
      return this.$store.state.prodData.total > 0
        ? this.$store.state.prodData.list[0].un_hat
        : "XXXX";
    },
    getPicURL() {
      return this.$store.state.prodData.total > 0
        ? this.baseImg + this.$store.state.prodData.list[0].picture_url
        : this.baseImg+"/404.gif";
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
