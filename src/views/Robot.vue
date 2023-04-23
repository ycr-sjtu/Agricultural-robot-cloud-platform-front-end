<template>
  <div class="content">

    <div class="submit">
      <el-form :inline="true" :model="gps" class="form">
        <el-form-item label="经度">
          <el-input v-model="gps.lng" placeholder="-180~180" />
        </el-form-item>
        <el-form-item label="纬度">
          <el-input v-model="gps.lat" placeholder="-90~90" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">提交</el-button>
        </el-form-item>
      </el-form>
    </div>

    <div class="table">
      <el-table :data="tableData" stripe>
<!--<el-table-column prop="id" label="ID" align="center" />-->
<!--          <el-table-column prop="category" label="类别" align="center" />-->
<!--          <el-table-column prop="robotNumber" label="机器编号" align="center" />-->
        <el-table-column label="GPS坐标" align="center">
          <el-table-column prop="lng" label="经度" align="center" />
          <el-table-column prop="lat" label="纬度" align="center" />
        </el-table-column>
        <el-table-column label="频率" align="center">
          <el-table-column prop="freq1" label="频率1" align="center" />
          <el-table-column prop="freq2" label="频率2" align="center" />
        </el-table-column>
        <el-table-column prop="vel" label="速度" align="center" />
        <el-table-column prop="time" label="记录时间" align="center"/>
        <el-table-column fixed="right" label="操作" align="center">
          <template #default="scope">
            <el-popconfirm confirm-button-text="是" cancel-button-text="否" :icon="InfoFilled" icon-color="red"
              title="确定删除用户？" @confirm="handleDelete(scope.row.id)">
              <template #reference>
                <el-button type="danger" size="small">删除</el-button>
              </template>
            </el-popconfirm>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <el-pagination class="page" v-model:current-page="pageNum" v-model:page-size="pageSize"
      :page-sizes="[10, 20, 50, 100]" background :total="total" layout="total, sizes, prev, pager, next, jumper"
      @size-change="handleSizeChange" @current-change="handleCurrentChange" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { getList, save, remove } from '@/api/robot';
import { InfoFilled } from '@element-plus/icons-vue'

const pageNum = ref(1);
const pageSize = ref(10);
const total = ref(0);
const category_2 = ref('未知类型');

const tableData = ref([]);
const url_list = ref([]);

const fetchData = () => {
  getList({
    pageNum: pageNum.value,
    pageSize: pageSize.value,
    category_2: category_2.value
  }
  ).then(response => {
    tableData.value = response.data.data.records;
    total.value = response.data.data.total;
    for (let i in tableData.value) {
      if (tableData.value[i].url != null && tableData.value[i].url != '') {
        url_list.value.push(tableData.value[i].url);
      }
    }
    console.log('url_list = ', url_list.value);
  });
};

const handleSizeChange = (val) => {
  pageSize.value = val;
  fetchData();
  console.log(`${val} items per page`)
}

const handleCurrentChange = (val) => {
  pageNum.value = val;
  fetchData();
  console.log(`current page: ${val}`)
}

onMounted(() => {
  fetchData();
});

const gps = ref({
  lng: '',
  lat: '',
})

const onSubmit = () => {
  save(gps.value).then(response => {
    if (response.data == '新增成功') {
      alert("新增成功");
      fetchData();
      addPoints();
    } else {
      alert("新增失败");
    }
  });
}


const handleDelete = (id) => {
  remove(id).then(response => {
    if (response.data == '删除成功') {
      alert("删除成功");
      fetchData();
      addPoints();
    } else {
      alert("删除失败");
    }
  });
};

const center = ref({ lng: 0, lat: 0 });
const zoom = ref(3);

const handler = ({ BMap, map }) => {
  // console.log(BMap, map);
  center.value.lng = tableData.value[0].lng;
  center.value.lat = tableData.value[0].lat;
  zoom.value = 15;
  addPoints();
}

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
  display: flex;
  flex-direction: column;
}

.submit {
  margin: 30px;
}

.page {
  margin: 30px;
}

.table {
  width: 1000px;
  margin-left: 50px;
  margin-right: 50px;
}
</style>
