<template>
  <div class="profile">
    <h3>{{ profileId === myId ? 'It`s your profile' : `Profile: ${profile.name}` }}</h3>
    <p>@{{ profile.slug }}</p>
    <p>{{ profile.email }}</p>
    <Flow
      v-for="flow in flows"
      :key="flow.id"
      :flow="flow"
    />
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import Flow from '../components/Flow.vue';

export default {
  name: 'profile',
  components: {
    Flow,
  },
  props: {
    profileId: {
      type: String,
      required: true,
    },
    profile: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapState(['myId']),
    ...mapGetters(['getProfileFlowsList']),
    flows() {
      return this.getProfileFlowsList(this.profileId);
    },
  },
};
</script>
