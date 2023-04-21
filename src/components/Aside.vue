<template>
  <div>
    <!--    默认打开第一个导航栏-->
    <el-menu style="width: 250px; min-height: calc(100vh - 50px)" default-active="/home" router class="el-menu-vertical-demo">
      <el-menu-item index="/home">
        <el-icon>
          <IconMenu />
        </el-icon>
        <span>首页</span>
      </el-menu-item>
      <el-menu-item index="/setting">
        <el-icon>
          <IconMenu />
        </el-icon>
        <span>全国农机化信息服务平台</span>
      </el-menu-item>
      <el-sub-menu index="1">
        <template #title>
          <el-icon>
            <IconMenu />
          </el-icon>
          <span>田间蔬菜移栽物联网监控系统</span>
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
        <IconMenu />
      </el-icon>
      <span>智慧农业可视化管控平台</span>
    </el-menu-item>

      <el-menu-item index="/setting">
        <el-icon>
          <IconMenu />
        </el-icon>
        <span>智慧农场农机装备云管控系统</span>
      </el-menu-item>
      <el-menu-item index="/setting">
        <el-icon>
          <IconMenu />
        </el-icon>
        <span>智能温室追光系统管控云平台</span>
      </el-menu-item>
<!--      <el-menu-item index="/setting">-->
<!--        <el-icon>-->
<!--          <setting />-->
<!--        </el-icon>-->
<!--        <span>设置</span>-->
<!--      </el-menu-item>-->
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