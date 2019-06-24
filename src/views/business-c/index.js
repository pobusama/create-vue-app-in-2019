export default [
  {
    path: "/business-c/page-a",
    name: "business-c-page-a",
    component: () =>
      import(/* webpackChunkName: "business-c-page-a" */ "./business-c-page-a/index.vue")
  },
  {
    path: "/business-c/page-b",
    name: "business-c-page-b",
    component: () =>
      import(/* webpackChunkName: "business-c-page-b" */ "./business-c-page-b/index.vue")
  }
  //...
];
