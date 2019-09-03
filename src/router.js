import Vue from 'vue';
import Router from 'vue-router';

import Post from './views/Post.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
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
});
