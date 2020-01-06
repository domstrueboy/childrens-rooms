import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    myId: 'myId',
    profiles: {
      myId: {
        name: 'My tiny school',
        flows: ['flow1', 'flow2'],
        events: ['event1', 'event2'],
        regularEvents: ['regEvent1', 'regEvent2'],
        teachers: ['teacher1', 'teacher2'],
        classes: ['class1', 'class2'],
      },
      vasya: {
        name: 'Vasiliy',
        flows: ['flow1', 'flow2'],
        events: ['event1', 'event2'],
        regularEvents: ['regEvent1', 'regEvent2'],
        teachers: ['teacher1', 'teacher2'],
        classes: ['class1', 'class2'],
      },
    },
    flows: {
      flow1: {
        name: '',
      },
    },
    events: {},
    regularEvents: {},
    teachers: {},
    classes: {},
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  strict: process.env.NODE_ENV !== 'production',
});
