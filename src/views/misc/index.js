export default [
  {
    path: "/",
    component: () => import(/* webpackChunkName: "nav" */ "./nav")
  },
  {
    path: "*",
    component: () => import(/* webpackChunkName: "404" */ "./404")
  }
];
