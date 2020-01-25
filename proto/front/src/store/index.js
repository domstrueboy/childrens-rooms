import Vue from 'vue';
import Vuex from 'vuex';
import initialState from './initialState';

Vue.use(Vuex);

const socket = new WebSocket('ws://localhost:8081');

socket.onopen = () => {
  console.log('WebSocket connected');
};

socket.onclose = (event) => {
  if (event.wasClean) {
    console.log('Соединение закрыто чисто');
  } else {
    console.log('Обрыв соединения');
  }
  console.log(`Код: ${event.code} причина: ${event.reason}`);
};

socket.onmessage = (event) => {
  console.log(`Получены данные ${event.data}`);
};

socket.onerror = (error) => {
  console.log(`Ошибка ${error.message}`);
};

export default new Vuex.Store({
  state: initialState,
  getters: {
    getProfileId: state => (idOrSlug) => {
      if ({}.hasOwnProperty.call(state.profiles, idOrSlug)) return idOrSlug;
      const profile = Object.entries(state.profiles).find(el => el[1].slug === idOrSlug);
      if (profile) return profile[0];
      return null;
    },
    getProfilesList: state => Object.entries(state.profiles),
    getProfilesIdsList: state => state.profiles.keys(),
    getProfilesLinksList: state => Object.entries(state.profiles).map(
      el => ({
        link: el[1].slug ? el[1].slug : el[0],
        name: el[1].name,
      }),
    ),
    getFlowById: state => id => state.flows[id],
    getProfileFlowsList: state => profileId => Object.entries(state.profiles[profileId].flows).map(
      flow => ({
        id: flow[0],
        ...flow[1],
      }),
    ),
  },
  mutations: {
    signup(state, user) {
      state.profiles.myId = user;
    },
  },
  actions: {
  },
  modules: {
  },
  strict: process.env.NODE_ENV !== 'production',
});
