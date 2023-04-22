<template>
  <div style="height:80px;line-height: 80px;border-bottom: 5px solid #2376b7;display:flex">
    <div style="height: 80px;text-align: center;line-height: 60px">
      <img src="../assets/logo.png" alt="" style="width:200px; position: relative; top:12px">
    </div>
    
    <div style="width: 300px; padding-left: 30px;font-weight: bold;color: cornflowerblue">智慧农场全程全面管控云平台</div>
    <div style="flex: 1;"></div>

    <div style="width: 100px;padding-top: 20px">
      <el-dropdown>
        <div>
        <el-avatar :icon="UserFilled" />
        </div>

<!--        使用了命名插槽-->
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="sd">退出系统</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>

  </div>
</template>

<script>
import { UserFilled } from '@element-plus/icons-vue'
export default {
  name: "Header",
  computed: {
    UserFilled() {
      return UserFilled;
    }
  },
  methods: {
    sd(){
      this.$router.push('/login');
    }
  }
}
</script>