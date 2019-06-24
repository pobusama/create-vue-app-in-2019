export default [
  {
    path: "/business-b/page-a",
    name: "business-b-page-a",
    component: () =>
      import(/* webpackChunkName: "business-b-page-a" */ "./business-b-page-a/index.vue")
  },
  {
    path: "/business-b/page-b",
    name: "business-b-page-b",
    component: () =>
      import(/* webpackChunkName: "business-b-page-b" */ "./business-b-page-b/index.vue")
  }
  //...
];
