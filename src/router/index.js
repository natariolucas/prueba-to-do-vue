import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Tareas from "../views/Tareas.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/Tareas",
    name: "Tareas",
    component: Tareas
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
