import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';


Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
<<<<<<< HEAD
    path: '/',
    name: 'home',
    component: Home,
  }],
=======
      path: '/',
      name: 'post',
      component: Post,
    },
    {
      path: "/messages",
      name: "messages",
      component: () => import(`@/views/Messages.vue`)
    }
  ],
>>>>>>> 753d72af3e512cb14111e4c6f9bfce1782d88b11
});
