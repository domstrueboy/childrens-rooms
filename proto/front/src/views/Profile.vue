<template>
  <div class="profile">
    <h1>{{ profile ? profile.title : 'John Doe' }}</h1>
    <p>{{ profile ? profile.id : '0000-0000-0000-0000-00000000' }}</p>
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
