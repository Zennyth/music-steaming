const guard = (to, from, next) => {
  next();
}

export default [
  {
    path: "/",
    name: "main",
    component: () => import("@/layouts/main/AppLayout.vue"),
    beforeEnter: guard,
    children: [
      {
        path: "/home",
        name: "home",
        component: () => import("@/pages/Home.vue")
      },
      
      // match
      {
        path: "/match",
        name: "match",
        component: () => import("@/pages/Match.vue")
      },
      {
        path: "/discovery",
        name: "discovery",
        component: () => import("@/pages/Discovery.vue")
      },
      {
        path: "/mood",
        name: "mood",
        component: () => import("@/pages/Mood.vue")
      },
      {
        path: "/surprise-me",
        name: "suprise-me",
        component: () => import("@/pages/SurpriseMe.vue")
      },

      // playlist
      {
        path: "/playlists",
        name: "playlists",
        component: () => import("@/pages/Playlists.vue")
      },
    ]
  },
]