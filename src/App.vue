<template>
  <NavBar />
  <router-view v-slot="{ Component }">
  <transition mode="out-in" name="fade">
    <component :is="Component" />
  </transition>
</router-view>
</template>
<script>
import NavBar from './components/NavBar.vue';
export default {
  components: {
    NavBar
}
}
</script>
<style lang="scss">
body {
  background: #251a2f;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #E5760C;
    }
  }
}
</style>
