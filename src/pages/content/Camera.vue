
  <template>
  <div class="watch">
    <el-row>
      <el-col :span="12">
        <el-card class="box-card card-content">
          <template #header>
            <div class="card-header">
              <span>相机总览</span>
            </div>
          </template>
          <div class="">
            <el-tree
              class="tree-node-style"
              :data="treeNode"
              :props="defaultProps"
              accordion
              @node-click="handleNodeClick"
            />
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card class="box-card card-content">
          <template #header>
            <div class="card-header">
              <span>图片信息</span>
            </div>
          </template>
          <div class="">
            <div class="block">
              <el-image :src="imgSrc" fit="contain">
                <template #placeholder>
                  <div class="image-slot">
                    Loading<span class="dot">...</span>
                  </div>
                </template>
              </el-image>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const treeNode = [
      {
        label: "总装厂",
        children: [
          {
            label: "第一站位",
            children: [
              {
                label: "一层登机东向相机",
              },
              {
                label: "二层西北向相机",
              },
              {
                label: "二层东北向相机",
              },
              {
                label: "三层西北向相机",
              },
              {
                label: "三层东北向相机",
              }
            ],
          },
          {
            label: "第二站位",
          },
          {
            label: "第三站位",
          },
          {
            label: "第四站位",
          }
        ],
      },
    ];
    const defaultProps = {
      children: "children",
      label: "label",
    };
    const size = ref('')
    const imgSrc = require("@/assets/model.png");
    return { treeNode, defaultProps, imgSrc,size };
  },
  methods: {
    handleNodeClick(data) {
      if(data.label =="一层登机东向相机"){
        this.$router.replace("facesafe");
      }else if (data.label=="二层西北向相机"){
        this.$router.replace("prodsafe");
      }
      console.log(data);
    },
  },
};
</script>

<style scoped>
.box-card {
  margin-left: 10px;
  height: 850px;
}
.tree-node-style {
  font-size: 16px;
}
.img-style {
  margin: auto 0;
}
.card-content{
    display:block;
}

</style>
