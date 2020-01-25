<template>
  <div class="flow">
    <h3>I'm flow {{ flow.id }}</h3>
    <div>Nothing to show</div>
  </div>
</template>

<script>
export default {
  name: 'flow',
  props: {
    flow: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
.flow {
  height: 50px;
  width: 250px;
  background: tomato;
}
</style>
