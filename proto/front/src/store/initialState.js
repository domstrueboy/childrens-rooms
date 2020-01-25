export default {
  myId: 'profile1',
  profiles: {
    profile1: {
      info: {
        title: 'profile 1 title',
        desc: 'profile 1 description',
        slug: 'profile1slug',
        email: 'profile1@profile1.com',
      },
      flows: {
        flow1: {
          info: {
            title: 'flow 1 title',
            desc: 'flow 1 description',
            slug: 'flow1slug',
          },
          grid: ['8:00', '8:45', '8:55', '9:40'],
          connects: {
            events: ['event1', 'event2'],
            regularEvents: ['regEvent1', 'regEvent2'],
          },
        },
        flow2: {
          info: {
            title: 'flow 2 title',
            desc: 'flow 2 description',
            slug: 'flow2slug',
          },
          grid: ['8:00', '8:45', '8:55', '9:40'],
          connects: {
            events: ['event1', 'event2'],
            regularEvents: ['regEvent1', 'regEvent2'],
          },
        },
      },
      events: {
        event1: {
          info: {
            title: 'event 1 title',
            desc: 'event 1 description',
            slug: 'event1slug',
          },
          from: new Date('January 17, 2020 08:00:00'),
          to: new Date('January 17, 2020 08:45:00'),
          connects: {
            flows: ['flow1'],
            teachers: ['teacher1'],
            eventTypes: ['eventType1'],
          },
        },
      },
      regularEvents: {
        regEvent1: {
          info: {
            title: 'regular event 1 title',
            desc: 'regular event 1 description',
            slug: 'regevent1slug',
          },
          from: new Date('January 17, 2020 08:55:00'),
          to: new Date('January 17, 2020 09:40:00'),
          flags: ['weekdays'],
          connects: {
            profile: 'profile1',
            flows: ['flow1'],
            teachers: ['teacher1'],
            eventTypes: ['eventType2'],
          },
        },
      },
      teachers: {
        teacher1: {
          info: {
            title: 'teacher 1 title',
            name: 'teacher 1 name',
            desc: 'teacher 1 description',
            slug: 'teacher1slug',
          },
          connects: {
            events: ['event7', 'event8'],
            regularEvents: ['regEvent7', 'regEvent8'],
            eventTypes: ['eventType4'],
          },
        },
      },
      eventTypes: {},
    },
  },
  teachers: { // teachers as separate profiles

  },
};
