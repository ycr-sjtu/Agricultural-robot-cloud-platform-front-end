<template>

</template>

<script>
export default {
  name: "Agriculture",
  data(){
    return {

    }
  },
  created() {
    // 在组件创建时自动跳转到路由
    const url = encodeURIComponent('http://hebei.nongjihuiyan.com/Home/Index');
    this.$router.push({ name: 'Iframe', params: { url } });
  },
}
</script>

