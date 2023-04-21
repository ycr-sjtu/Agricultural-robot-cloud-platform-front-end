<template>
  <div style="display: flex;flex-direction: column;">
  <div class="content">
    <baidu-map
      class="bm-view"
      :center="center"
      :zoom="zoom"
      :scroll-wheel-zoom="true"
      mapType="BMAP_SATELLITE_MAP"
      @ready="handler"
    >
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
import { ref, onMounted } from "vue";
import { getList} from "@/api/robot";

const pageNum = ref(12);
const pageSize = ref(50);
const total = ref(0);
const category_2 = ref("未知类型");

const tableData = ref([]);

const fetchData = () => {
  getList({
    pageNum: pageNum.value,
    pageSize: pageSize.value,
    category_2: category_2.value,
  }).then((response) => {
    tableData.value = response.data.data.records;
    total.value = response.data.data.total;
  });
};

onMounted(() => {
  fetchData();
});

const gps = ref({
  lng: "",
  lat: "",
});
const center = ref({ lng: 0, lat: 0 });
const zoom = ref(3);

const handler = ({ BMap, map }) => {
  center.value.lng = tableData.value[0].lng;
  center.value.lat = tableData.value[0].lat;
  zoom.value = 15;
  addPoints();
};

const points = ref([]);

const clickHandler = (e) => {
  alert(`单击点的坐标为：${e.point.lng}，${e.point.lat}`);
};

const addPoints = () => {
  const pointAll = [];
  for (let i in tableData.value) {
    pointAll.push({ lng: tableData.value[i].lng, lat: tableData.value[i].lat });
  }
  points.value = pointAll;
};
</script>

<style scoped>
.content {
  margin: 50px;
}
.bm-view {
  width: 1400px;
  height: 600px;
}
</style>
