<template>
  <div id="app">
    <nav id="nav">
      <router-link
        v-for="link in links"
        :to="link.link"
        :key="link.link"
        class="link"
      >
        {{ link.name }}
      </router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  computed: {
    links() {
      return this.$store.getters.getProfilesLinksList;
    },
  },
};
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.link:not(:first-child) {
  margin-left: 10px;
}
</style>
