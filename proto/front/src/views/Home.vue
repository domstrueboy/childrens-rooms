<template>
  <div class="home">
    <h3>{{ profileId === myId ? 'It`s your profile' : `Profile: ${profile.name}` }}</h3>
    <p>{{ profile }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'home',
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
    ...mapState(['myId', 'profiles']),
  },
};
</script>
