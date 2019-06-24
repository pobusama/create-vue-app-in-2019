export default [
  {
    path: "/business-a/page-a",
    name: "business-a-page-a",
    component: () =>
      import(/* webpackChunkName: "business-a-page-a" */ "./business-a-page-a/index.vue")
  },
  {
    path: "/business-a/page-b",
    name: "business-a-page-b",
    component: () =>
      import(/* webpackChunkName: "business-a-page-b" */ "./business-a-page-b/index.vue")
  }
  //...
];
