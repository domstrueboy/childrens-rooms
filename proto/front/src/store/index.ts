import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { IRootState } from './types';
import profiles from './modules/profiles/profiles';

Vue.use(Vuex);

const store: StoreOptions<IRootState> = {
  state: {
    version: '1.0.0',
  },
  modules: {
    profiles,
  },
};

export default new Vuex.Store<IRootState>(store);
