<template>
  <div class="profile">
    <h1>{{ profile.title }}</h1>
    <p>{{ profile.id }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['profile']),
  },
};
</script>
