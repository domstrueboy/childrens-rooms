<template>
  <div class="profile">
    <h3>{{ profileId === myId ? 'It`s your profile' : `Profile: ${profile.name}` }}</h3>
    <p>@{{ profile.slug }}</p>
    <p>{{ profile.email }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'profile',
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
