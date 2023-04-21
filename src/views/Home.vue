<template>
  <div class="ddd">
  <el-row><b>项目名称：智慧农场农业机器人研发</b></el-row>
  <el-row><b>项目编号：2019YFE0125200</b></el-row>
  <el-row><b>平台开发：上海交通大学机械与动力工程学院</b></el-row>
  <el-row>
    <el-col :span="12">
      <p>
      研究目标：针对农业机器人作业数据和经验流失、多生产环节多机协同作业低效问题，提出基于大数据、知识库的智慧农场系列化、成套化农业机器人生产“端-边-云”计算架构，攻克作业机器人群组智能化调度管理和机器人集群作业的知识增殖理论与技术，实现基于作业场景的自适应学习与机器人智能发育，形成农业机器人跨场景多模态作业数据和经验积聚，自主作业效能提升。
      </p>
    </el-col>
  </el-row>
  
    <el-row style="display: flex;flex-direction: row;justify-content: space-around">
      <el-col :span="12">
      <el-card :body-style="{ padding: '0px' }" style="width: 800px">
        <el-carousel height="700px">
          <el-carousel-item v-for="item in carouseData1" :key="item">
            <el-image style="width: 600px;height: 550px" :src="item.url" />
          </el-carousel-item>
        </el-carousel>
        <div style="padding: 14px">
          <span>智慧农场云平台架构</span>
        </div>
      </el-card>
      </el-col>

      <el-col :span="12">
      <el-card :body-style="{ padding: '0px' }" style="width: 800px">
        <el-carousel height="700px">
          <el-carousel-item v-for="item in carouseData2" :key="item">
            <el-image style="width: 600px;height: 550px" :src="item.url" />
          </el-carousel-item>
        </el-carousel>
        <div style="padding: 14px">
          <span>云平台各类农机</span>
        </div>
      </el-card>
    </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import utils from '../utils/utils'

const carouseData1 = [
  { url: utils.getAssetsFile('1.png') },
];
const carouseData2 = [
  { url: utils.getAssetsFile('2.png') },
  { url: utils.getAssetsFile('3.png') },
  { url: utils.getAssetsFile('4.png') },
  { url: utils.getAssetsFile('5.png') },
  { url: utils.getAssetsFile('6.png') },
  { url: utils.getAssetsFile('7.png') },
  { url: utils.getAssetsFile('8.png') },
  { url: utils.getAssetsFile('9.png') },
  { url: utils.getAssetsFile('10.png') },
  { url: utils.getAssetsFile('11.png') },
  { url: utils.getAssetsFile('12.png') },
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
