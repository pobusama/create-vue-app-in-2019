<template>
  <div class="business-b-page-a">
    <h1 class="title">页面A</h1>
    这里是业务 B 页面 A
    <component-a></component-a>
  </div>
</template>

<script>
import ComponentA from "./components/component-a";

export default {
  name: "business-b-page-a",
  components: {
    ComponentA
  }
};
</script>

<style lang="stylus" scoped>
.title
  color pink
</style>
