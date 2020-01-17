import Vue from 'vue';
import VueRouter from 'vue-router';
import Profile from '../views/Profile.vue';
import store from '@/store';

Vue.use(VueRouter);

const routes = [
  {
    path: '/profile/:id',
    name: 'profile',
    component: Profile,
    props: route => ({
      profileId:
        store.getters.getProfileId(route.params.id) || store.state.myId,
      profile:
        store.state.profiles[store.getters.getProfileId(route.params.id) || store.state.myId],
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
    component() {
      return import(/* webpackChunkName: "about" */ '../views/About.vue');
    },
  },
  {
    path: '/signup',
    name: 'signup',
    component() {
      return import(/* webpackChunkName: "about" */ '../views/Signup.vue');
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
