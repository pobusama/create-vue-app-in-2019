export default [
  {
    path: "/douban-movies/top250",
    name: "douban-movies-top-250",
    component: () =>
      import(/* webpackChunkName: "douban-movies-top-250" */ "./top250/index.vue")
  }
  //...
];
