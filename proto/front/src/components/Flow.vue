<template>
  <div class="flow">
    <p>I'm flow {{ id }}</p>
    <p>{{ flow }}</p>
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
