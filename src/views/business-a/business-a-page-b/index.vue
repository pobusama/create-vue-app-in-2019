<template>
  <div class="business-a-page-a">
    <h1 class="title">页面B</h1>
    这里是业务 A 页面 B
    <a-common-component parent="business-a-page-b" />
  </div>
</template>

<script>
import ACommonComponent from "@/components/a-common-component";

export default {
  name: "business-a-page-b",
  components: {
    ACommonComponent
  }
};
</script>

<style lang="stylus" scoped>
.title
  color pink
</style>
