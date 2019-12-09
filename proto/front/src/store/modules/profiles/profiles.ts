import { Module } from 'vuex';
import { IRootState } from '../../types';
import { IState } from './profiles.types';

const profiles: Module<IState, IRootState> = {
  state: {
    profiles: {},
  },
  mutations: {
  },
  actions: {
  },
};

export default profiles;
