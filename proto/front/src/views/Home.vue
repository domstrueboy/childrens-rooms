<template>
  <div class="home">
    <h3>{{ id === myId ? 'It`s your profile' : `Profile: ${profiles[id].name}` }}</h3>
    <p>{{ profiles[id] }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'home',
  props: {
    profileId: String,
  },
  computed: {
    ...mapState(['myId', 'profiles']),
    id() { return this.profileId || this.myId; },
  },
};
</script>
