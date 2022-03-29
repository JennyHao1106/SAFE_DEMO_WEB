
  <template>
  <div class="history">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>历史记录{{ getTableTotal }}条</span>
        </div>
      </template>

      <el-table :data="getTableData" stripe style="width: 100%">
        <el-table-column type="index" width="50" />
        <el-table-column prop="personName" label="人员姓名"></el-table-column>
        <el-table-column prop="orgName" label="所属部门"></el-table-column>
        <el-table-column prop="doorName" label="闸门信息"></el-table-column>
        <el-table-column  label="录入时间">
          <template #default="scope">{{ baseFun.dateFormat("YYYY-mm-dd HH:MM:SS",scope.row.eventTime) }}</template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
import { ref } from "vue";
import api from "../../common/untils/api";
import baseFun from "../../common/untils/baseFunction";
export default {
  setup() {
    let baseImg = "";
    if (process.env.NODE_ENV == "development") {
      baseImg = "http://localhost:8081/";
    } else {
      baseImg = "http://api.safe.demo:3000/";
    }
    let faceSafeDetailFlag = ref(false);
    const timer1 = setInterval(() => {
      api.queryFaceData();
    }, 200000);
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
    api.queryFaceData();
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
    }
  },
};
</script>

<style scoped>

</style>
