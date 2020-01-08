import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import store from '@/store';

Vue.use(VueRouter);

const routes = [
  {
    path: '/profile/:id',
    name: 'profile',
    component: Home,
    props: route => ({
      profileId: route.params.id,
      profile: store.state.profiles[route.params.id],
    }),
  },
  {
    path: '/',
    redirect: `/profile/${store.state.myId}`,
  },
  {
    path: '/profile',
    redirect: `/profile/${store.state.myId}`,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component() {
      return import(/* webpackChunkName: "about" */ '../views/About.vue');
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
