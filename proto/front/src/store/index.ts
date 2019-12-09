import Vue from 'vue';
import Vuex from 'vuex';
import { IStore } from './types';

Vue.use(Vuex);

const store: IStore = {
  state: {
    profiles: {
      '0000-0000-0000-0000-00000000': {
        id: '0000-0000-0000-0000-00000000',
        title: 'default title',
        places: [],
        masters: [],
        activities: [],
        events: [],
      },
    },
  },
  // mutations: {
  // },
  // actions: {
  // },
  // modules: {
  // },
};

export default new Vuex.Store(store);
