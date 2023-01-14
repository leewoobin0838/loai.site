import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/home/Home"

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/about/About'),
  }
];

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router;