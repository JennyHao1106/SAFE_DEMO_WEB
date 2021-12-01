
  <template>
  <div class="sidebar">
    <el-menu
      class="sidebar-el-menu"  
      text-color="#bfcbd9"
      active-text-color="#20a0ff"
      unique-opened
      :default-active="onRoutes"
      router
      background-color="#324157"
    >
      <el-menu-item :index="item.index" :key="item.index" v-for="item in items">
        <i :class="item.icon"></i>
        <template #title>{{ item.title }}</template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";
export default {
  setup() {
    const items = [
      {
        icon: "el-icon-lx-home",
        index: "/camera",
        title: "相机总览",
      },
      {
        icon: "el-icon-lx-cascades",
        index: "/prodsafe",
        title: "生产安全监控",
      },
      {
        icon: "el-icon-lx-cascades",
        index: "/facesafe",
        title: "人员登机监控",
      },
      {
        icon: "el-icon-lx-cascades",
        index: "/baseinfo",
        title: "人脸录入",
      },
      {
        icon: "el-icon-lx-copy",
        index: "/synclog",
        title: "同步日志",
      },
    ];
    const route = useRoute();
    const onRoutes = computed(() => {
      return route.path;
    });
    return {
      items,
      onRoutes
    };
  },
};
</script>

<style scoped>
.sidebar {
  display: block;
  position: absolute;
  left: 0;
  top: 70px;
  bottom: 0;
  overflow-y: scroll;
  background-color:#324157;
}
.sidebar::-webkit-scrollbar {
  width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
  width: 250px;
}
/* .sidebar > ul {
  height: 100%;
} */
</style>
