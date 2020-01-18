import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const socket = new WebSocket('ws://localhost:8081');

socket.onopen = () => {
  console.log('WebSocket connected');
};

socket.onclose = (event) => {
  if (event.wasClean) {
    console.log('Соединение закрыто чисто');
  } else {
    console.log('Обрыв соединения'); // например, "убит" процесс сервера
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
  state: {
    myId: 'myId',
    profiles: {
      myId: {
        title: 'My tiny school',
        slug: 'domstrueboy',
        email: 'doms@ya.ru',
        flowIds: ['flow1', 'flow2'],
        events: ['event1', 'event2'],
        regularEvents: ['regEvent1', 'regEvent2'],
        teachers: ['teacher1', 'teacher2'],
        classes: ['class1', 'class2'],
      },
      vasya: {
        title: 'Vasiliy',
        slug: 'Васямба',
        email: 'ogogo@ogo.go',
        flowIds: ['flow1', 'flow2'],
        events: ['event1', 'event2'],
        regularEvents: ['regEvent1', 'regEvent2'],
        teachers: ['teacher1', 'teacher2'],
        classes: ['class1', 'class2'],
      },
    },
    flows: {
      flow1: {
        name: 'Hoho',
      },
      flow2: {
        name: 'Hehe',
      },
    },
    events: {},
    regularEvents: {},
    teachers: {},
    classes: {},
  },
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
