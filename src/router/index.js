import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/cv",
    name: "CV",
    component: () => import(/* webpackChunkName: "about" */ "../views/CV.vue"),
  },
  {
    path: "/certifications",
    name: "Certifications",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Certifications.vue"),
  },
  {
    path: "/blog",
    name: "Blog",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Blog.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
