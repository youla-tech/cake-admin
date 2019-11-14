<template>
  <div class="gc-canvas" :style="{width: contentWidth + 'px', height: contentHeight + 'px'}">
    <img :src="source" alt="captcha">
  </div>
</template>

<script>
export default {
  props: {
    source: {
      type: String,
      default: ''
    },
    contentWidth: {
      type: Number,
      default: 136
    },
    contentHeight: {
      type: Number,
      default: 38
    }
  }
}
</script>

<style lang="scss" scoped>

</style>