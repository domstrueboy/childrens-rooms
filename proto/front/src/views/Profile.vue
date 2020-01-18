<template>
  <div class="profile">
    <h3>{{ profileId === myId ? 'It`s your profile' : `Profile: ${profile.name}` }}</h3>
    <p>@{{ profile.slug }}</p>
    <p>{{ profile.email }}</p>
    <Flow
      v-for="id in profile.flowIds"
      :key="id"
      :id="id"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex';
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
  },
};
</script>
