<template>
  <div style="display: flex;flex-direction: column;">
    <div class="content">
      <baidu-map
          class="bm-view"
          :center="center"
          :zoom="zoom"
          :scroll-wheel-zoom="true"
          mapType="BMAP_HYBRID_MAP"
          @ready="handler"
      >
        <bm-scale anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-scale>
        <bm-point-collection
            :points="points"
            shape="BMAP_POINT_SHAPE_CIRCLE"
            color="red"
            size="BMAP_POINT_SIZE_NORMAL"
            @click="clickHandler"
        ></bm-point-collection>
      </baidu-map>
    </div>
  </div>
</template>

<script setup>
import {ref, onMounted} from "vue";
import {getList} from "@/api/robot";

const pageNum = ref(1);
const pageSize = ref(50);
const total = ref(0);
const category_2 = ref("未知类型");
const tableData = ref([]);
const center = ref({lng: 0, lat: 0});
const zoom = ref(3);
const points = ref([]);
const count = ref(0);

//获取最大的pageNum
const fetchData = () => {
  getList({
    pageNum: pageNum.value,
    pageSize: pageSize.value,
    category_2: category_2.value,
  }).then((response) => {
    tableData.value = response.data.data.records;
    total.value = response.data.data.total;
    pageNum.value = Math.ceil(total.value / pageSize.value);
    console.log(response);
    count.value++;
    if (count.value === 2) {
      points.value = tableData.value.map(item => ({lng: item.lng, lat: item.lat}));
      console.log(points.value);
    }
  });
};

onMounted(() => {
  fetchData();
});


const handler = () => {
  fetchData();
  center.value.lng = tableData.value[0].lng;
  center.value.lat = tableData.value[0].lat;
  zoom.value = 7;
};

const clickHandler = (e) => {
  alert(`单击点的坐标为：${e.point.lng}，${e.point.lat}`);
};
</script>

<style scoped>
.content {
  margin: 20px;
}

.bm-view {
  width: 1400px;
  height: 600px;
}
</style>
