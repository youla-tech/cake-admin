<template>
  <div class="c-graphic" :style="{width: contentWidth + 'px', height: contentHeight + 'px'}" @click="refreshCaptch">
    <img :src="imgSource" alt="captcha">
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
  },
  data () {
    return {
      imgSource: this.source
    }
  },
  methods: {
    refreshCaptch () {
      this.imgSource = this.imgSource.slice(0, this.imgSource.indexOf('?')) + '?t=' + new Date().getTime()
    }
  },
}
</script>

<style lang="scss" scoped>
.c-graphic{
  cursor: pointer;
}
img{
  width: 100%;
  height: 100%;
}
</style>