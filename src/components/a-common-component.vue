<template>
  <div>
    这是一个公共组件，当前被
    <span class="parent">{{ parent }}</span>
    引用了
  </div>
</template>
<script>
export default {
  name: "ACommonComponent",
  props: {
    parent: {
      type: String,
      required: true
    }
  }
};
</script>
<style lang="stylus" scoped>
.parent
  color red
</style>
