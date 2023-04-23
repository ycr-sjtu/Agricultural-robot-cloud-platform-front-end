<template>
</template>

<script>
export default {
  name: "Light",
  created() {
    // 在组件创建时自动跳转到路由
    const url = encodeURIComponent('http://106.15.233.31:8180/home/');
    this.$router.push({ name: 'Iframe', params: { url } });
  },
}
</script>