<template>
  <div class="app" :class="{ dark: isDarkTheme }">
    <Header />
  </div>
</template>

<script lang="ts">
import { mapGetters } from 'vuex'
import Header from '@/components/Header.vue'

export default {
  name: 'App',
  components: {
    Header,
  },
  computed: {
    ...mapGetters(['isDarkTheme']),
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

div.app {
  width: 100vw;
  height: 100vh;
  background: #f5f5f5;
  font-size: 14px;
  color: #333;
  font-family: sans-serif;
}

div.app.dark {
  background: #121212;
  color: #fff;
}
</style>
