<template>
  <div class="iframe-wrapper">
    <iframe :src="src" style="width: 100%; height: 100%"></iframe>
  </div>
</template>

<script>
export default {
  name: 'IframeWrapper',
  props: {
    src: {
      type: String,
      required: true
    }
  }
}
</script>

<style>
.iframe-wrapper {
  display: flex;
}
</style>