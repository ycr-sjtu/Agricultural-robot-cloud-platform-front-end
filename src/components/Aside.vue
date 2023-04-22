<template>
  <div>
    <!--    默认打开第一个导航栏-->
    <el-button  style="margin: 10px;" @click="change" >
      <el-icon><TurnOff /></el-icon>
    </el-button>
    <el-menu style="min-height: calc(100vh - 50px)" default-active="/home" router class="el-menu-vertical-demo" :collapse="isCollapse">
      <el-menu-item index="/home">
        <el-icon><House /></el-icon>
        <span>首页</span>
      </el-menu-item>
      <el-menu-item index="/agriculture">
        <el-icon><Promotion /></el-icon>
        <el-link v-if="!isCollapse" href="http://hebei.nongjihuiyan.com/Home/Index">全国农机化信息服务平台</el-link>
      </el-menu-item>
      <el-sub-menu index="2">
        <template #title>
          <el-icon><Expand /></el-icon>
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
      <el-menu-item index="/visible">
        <el-icon><Promotion /></el-icon>
          <el-link v-if="!isCollapse" href="http://datav.guoxn.com.cn/#/info?id=741&iden=2">智慧农业可视化管控平台</el-link>
    </el-menu-item>
      <el-menu-item index="/cloud">
        <el-icon><Promotion /></el-icon>
        <el-link v-if="!isCollapse" href="http://106.15.233.31/home.php">智慧农场农机装备云管控平台</el-link>
      </el-menu-item>
      <el-menu-item index="/light">
        <el-icon><Promotion /></el-icon>
        <el-link v-if="!isCollapse" href="http://106.15.233.31:8180/home/">智能温室追光系统管控云平台</el-link>
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
  Location,
  Setting,
  House,TurnOff,Promotion,Expand
} from '@element-plus/icons-vue'

export default {
  name: "Aside",
  components: {
    Document, Location, Setting, House,TurnOff,Promotion,Expand
  },
  data()
  {
    return {
      isCollapse :false,
    }
  },
  methods: {
    change(){
      this.isCollapse = !this.isCollapse;
    }
  }
}
</script>