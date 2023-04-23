<template>
</template>

<script>
export default {
  name: "Visible",
  created() {
    // 在组件创建时自动跳转到路由
    const url = encodeURIComponent('http://datav.guoxn.com.cn/#/info?id=741&iden=2');
    this.$router.push({ name: 'Iframe', params: { url } });
  },
}
</script>
