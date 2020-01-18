<template>
  <div class="signup">
    <form @submit.prevent="submitForm">
      <h3>Welcome!</h3>
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

<style>
.signup {
  display: flex;
  background: tomato;
}
h3, input, button {
  display: block;
}
</style>
