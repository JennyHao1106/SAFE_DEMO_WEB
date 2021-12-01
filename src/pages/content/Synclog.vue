
  <template>
  <div class="history">
                <div>
              <el-descriptions
                class="margin-top"
                title="图片详情"
                :column="2"
                size="medium"
                border
              >
                <el-descriptions-item>
                  <template #label>
                    <user style="width: 1em; height:1em; margin-right: 8px;"/>
                    Username
                  </template>
                  kooriookami
                </el-descriptions-item>
                <el-descriptions-item>
                  <template #label>
                    <iphone style="width:1em; height: 1em; margin-right: 8px;"/>
                    Telephone
                  </template>
                  18100000000
                </el-descriptions-item>
              </el-descriptions>
            </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {
     
    };
  },
};
</script>

<style scoped>

</style>
