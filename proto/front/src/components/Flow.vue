<template>
  <div class="flow">
    <div class="info">
      <h3>{{ this.flow.info.title }}</h3>
      <p>@{{ this.flow.info.slug }}</p>
      <p>{{ this.flow.info.desc }}</p>
    </div>
    <div class="timeline">
      <div
        class="gridline"
        v-for="time in grid"
        :key="time"
        :style="{
          left: getGridlinePosition(time)
        }"
      >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'flow',
  props: {
    flow: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    id: 'flow 1',
    info: {
      title: 'flow 1 title',
      desc: 'flow 1 description',
      slug: 'flow1slug',
    },
    grid: ['8:00', '8:45', '8:55', '9:40'],
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
      event2: {

      },
    },
    regularEvents: {
      regularEvent1: {

      },
      regularEvent2: {

      },
    },
  }),
  methods: {
    getGridlinePosition(time) {
      const [hours, minutes] = time.split(':').map(el => parseInt(el, 10));
      const position = Math.round((hours * 60 + minutes) / 1440 * 100);
      return `${position}vw`;
    },
  },
};
</script>

<style>
.info {

}
.timeline {
  height: 100px;
  width: 100vw;
  background: lightblue;
  position: relative;
  display: flex;
  align-items: center;
}
.gridline {
  height: 110px;
  width: 1px;
  background: darkcyan;
  position: absolute;
  cursor: pointer;
}
</style>
