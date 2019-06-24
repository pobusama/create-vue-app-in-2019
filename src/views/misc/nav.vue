<template>
  <nav>
    <div class="buckets-container">
      <div v-for="(bucket, index) in buckets" :key="index">
        <div class="card" v-for="(paths, key) in bucket" :key="key">
          <div v-for="(path, index) in paths" :key="index">
            <a href="javascript:;" type="text" @click="go(path)">{{ path }}</a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      columnCount: Math.floor(document.body.clientWidth / 300)
    };
  },
  computed: {
    paths() {
      return this.$router.options.routes
        .filter(route => !["/", "/404", "*"].includes(route.path))
        .reduce(
          (ret, route) => [
            ...ret,
            route.path,
            ...(route.children
              ? route.children.map(subRoute => `${route.path}/${subRoute.path}`)
              : [])
          ],
          []
        )
        .sort();
    },
    cardModel() {
      return this.paths.reduce((ret, path) => {
        const key = /\/[\w-]+/.exec(path)[0];

        return ret[key]
          ? {
              ...ret,
              [key]: [...ret[key], path]
            }
          : {
              ...ret,
              [key]: [path]
            };
      }, {});
    },
    buckets() {
      const buckets = Array.apply(null, { length: this.columnCount }).map(
        () => ({})
      );

      Object.entries(this.cardModel).forEach(([key, paths]) => {
        let minIndex = 0;
        let minLength = Infinity;

        buckets.forEach((bucket, index) => {
          const length = Object.values(bucket).reduce(
            (ret, paths) => ret + paths.length,
            0
          );

          if (length < minLength) {
            minIndex = index;
            minLength = length;
          }
        });
        buckets[minIndex][key] = paths;
      });

      return buckets;
    }
  },
  methods: {
    go(path) {
      this.$router.push({ path });
    },
    onresize() {
      this.columnCount = Math.floor(document.body.clientWidth / 300);
    }
  },
  mounted() {
    window.addEventListener("resize", this.onresize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onresize);
  }
};
</script>
<style lang="stylus" scoped>
nav
  display grid
  grid 110px auto / auto
  place-items center
 .banner
    margin-top 20px
    &:hover
      filter url(#blurMe)
.buckets-container
  display grid
  grid auto / auto-flow auto
  grid-gap 10px
  .card
    border 2px solid red
    border-radius 6px
    padding 10px
    margin-bottom 10px
</style>
