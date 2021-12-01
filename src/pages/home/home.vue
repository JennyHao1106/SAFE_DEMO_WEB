<template>
   <div class="about">
        <v-header />
        <v-sidebar />
        <div class="content-box" :class="{ 'content-collapse': collapse }">
            <div class="content">
                <router-view v-slot="{ Component }">
                    <transition name="move" mode="out-in">
                        <keep-alive :include="tagsList">
                            <component :is="Component" />
                        </keep-alive>
                    </transition>
                </router-view>               
            </div>
        </div>
  </div>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";
import vHeader from "./Header.vue";
import vSidebar from "./Sidebar.vue";
export default {
  components: {
         vHeader,
         vSidebar
    },
    setup(){
       const store = useStore();
       const collapse = computed(() => store.state.collapse);
       const tagsList = computed(() =>
            store.state.tagsList.map((item) => item.name)
        )
       return {
         collapse,
         tagsList
       }
    }
}
</script>

