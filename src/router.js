import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';


Vue.use(Router);
let routes = [{
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/messages',
    name: 'messages',
    component: () => import('@/views/Messages.vue'),
  },
  {
    path: '/createpost',
    name: 'createpost',
    component: () => import('@/views/CreatePost.vue'),
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('@/views/Profile.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue'),
  },
  {
    path: '/lab',
    name: 'lab',
    component: () => import('@/views/Lab.vue'),
  },
];

const router = new Router({
  base: process.env.BASE_URL,
  mode: "history",
  linkActiveClass: "active",
  routes
});
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token');
  if (!token && to.path != "/login") next("/login");
  else next();
});

export default router;
