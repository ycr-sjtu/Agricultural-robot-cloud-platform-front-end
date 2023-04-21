<template>
  <div>
    <!--    默认打开第一个导航栏-->
    <el-menu style="width: 200px; min-height: calc(100vh - 50px)" default-active="/home" router class="el-menu-vertical-demo">
      <el-menu-item index="/home">
        <el-icon>
          <IconMenu />
        </el-icon>
        <span>首页展示</span>
      </el-menu-item>
      <el-sub-menu index="1">
        <template #title>
          <el-icon>
            <IconMenu />
          </el-icon>
          <span>系统管理</span>
        </template>
        <el-menu-item index="/robot"><el-icon>
            <Document />
          </el-icon>
          <span>后台数据
          </span></el-menu-item>
        <el-menu-item index="/map"><span>
            <el-icon>
              <Location />
            </el-icon>
            地图显示
          </span></el-menu-item>
      </el-sub-menu>
      <el-menu-item index="/setting">
        <el-icon>
          <setting />
        </el-icon>
        <span>设置</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'

export default {
  name: "Aside",
  components: {
    Document, IconMenu, Location, Setting
  },
}
</script>