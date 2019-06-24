<template>
  <div class="business-a-page-a">
    <h1 class="title">页面A</h1>
    这里是业务 A 页面 A
    <component-a></component-a>
    现在的时间是 {{ new Date() | dateFilter("YYYY年MM月DD日", "- -") }}
    <a-common-component parent="business-a-page-a" />
  </div>
</template>

<script>
import ComponentA from "./components/component-a";
import ACommonComponent from "@/components/a-common-component";
import { dateFilter } from "@/utils/date";

export default {
  name: "business-a-page-a",
  components: {
    ComponentA,
    ACommonComponent
  },
  filters: {
    dateFilter
  }
};
</script>

<style lang="stylus" scoped>
.title
  color pink
</style>
