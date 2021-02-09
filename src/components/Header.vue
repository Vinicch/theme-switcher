<template>
  <div class="header">
    Hello World
    <div class="custom-control custom-switch">
      <input
        id="theme-switcher"
        class="custom-control-input"
        type="checkbox"
        @click="toggleTheme"
      />
      <label for="theme-switcher" class="custom-control-label"></label>
    </div>
  </div>
</template>

<script lang="ts">
import { mapMutations } from 'vuex'

export default {
  name: 'Header',
  methods: {
    ...mapMutations(['toggleTheme']),
  },
}
</script>

<style scoped lang="scss">
div.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding: 0 30px;
  color: #fff;
  background: #7c238c;
}

div.app.dark {
  div.header {
    background: #333;
  }
}
</style>
