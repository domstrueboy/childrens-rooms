<template>
  <div class="signup">
    <h3>Welcome!</h3>
    <form @submit.prevent="submitForm">
      <input v-model="form.username">
      <input v-model="form.email">
      <input v-model="form.password" type="password">
      <button>Sign Up</button>
    </form>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

const initialValues = {
  username: '',
  email: '',
  password: '',
};

export default {
  name: 'signup',
  data: () => ({
    form: { ...initialValues },
  }),
  methods: {
    ...mapMutations(['signup']),
    submitForm() {
      this.signup(this.form);
      this.resetForm();
    },
    resetForm() {
      this.form = { ...initialValues };
    },
  },
};
</script>

<style module>
  form {
    display: flex;
    flex-direction: column;
  }
</style>
