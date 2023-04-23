<template>
</template>

<script>
export default {
  name: "Cloud",
  created() {
    // 在组件创建时自动跳转到路由
    const url = encodeURIComponent('http://106.15.233.31/home.php');
    this.$router.push({ name: 'Iframe', params: { url } });
  },
}
</script>