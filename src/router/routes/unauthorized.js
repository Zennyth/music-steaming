export default [
  {
    path: '/',
    name: "unauthorized",
    component: () => import("@/layouts/unauthorized/AppLayout.vue"),
    children: [
      {
        path: "/login",
        name: "login",
        component: () => import("@/pages/Login.vue")
      }
    ]
  },
];