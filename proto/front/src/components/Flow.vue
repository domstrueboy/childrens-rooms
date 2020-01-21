<template>
  <div class="flow">
    <h3>I'm flow {{ flow.name }}</h3>
    <div>Nothing to show</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'flow',
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapGetters(['getFlowById']),
    flow() {
      return this.getFlowById(this.id);
    },
  },
};
</script>

<style>
.flow {
  height: 50px;
  width: 250px;
  background: tomato;
}
</style>
