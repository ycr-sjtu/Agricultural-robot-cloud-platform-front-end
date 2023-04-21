<template>
  <div class="ddd">
    <el-row style="display: flex;flex-direction: row;justify-content: space-around">
      <el-card :body-style="{ padding: '0px' }" style="width: 600px">
        <el-carousel height="700px">
          <el-carousel-item v-for="item in carouseData" :key="item">
            <el-image style="width: 600px;height: 550px" :src="item.url" />
          </el-carousel-item>
        </el-carousel>
        <div style="padding: 14px">
          <span>介绍部分1</span>
          <div class="bottom">
            <time class="time">{{ currentDate }}</time>
            <el-button text class="button">了解更多信息</el-button>
          </div>
        </div>
      </el-card>

      <el-card :body-style="{ padding: '0px' }" style="width: 600px">
        <el-carousel height="700px">
          <el-carousel-item v-for="item in carouseData" :key="item">
            <el-image style="width: 600px;height: 550px" :src="item.url" />
          </el-carousel-item>
        </el-carousel>
        <div style="padding: 14px">
          <span>介绍部分2</span>
          <div class="bottom">
            <time class="time">{{ currentDate }}</time>
            <el-button text class="button">了解更多信息</el-button>
          </div>
        </div>
      </el-card>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import utils from '../utils/utils'

const carouseData = [
  { url: utils.getAssetsFile('全控科技QK-G400T模块外观及尺寸图.png') },
  { url: utils.getAssetsFile('系统图.png') },
  { url: utils.getAssetsFile('蓝煦阳光导入系统部件.jpg') },
];
const currentDate = ref(new Date());
</script>
<style scoped>
.ddd {
  margin-top: 40px;
}

.time {
  font-size: 12px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 10px;
  min-height: auto;
  color: #409eff;
}

.image {
  width: 100%;
  display: block;
}
</style>
