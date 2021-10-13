<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <Vue2HelloWorld msg="Hello Vue 2 + Vue 2 Composition API + Vite" />
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
// Use as local component
import { Vue2HelloWorld } from './lib'

export default defineComponent({
  name: 'App',
  components: {
    // Use as local component
    Vue2HelloWorld
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#app .app-container {
  /* display: flex; */
  /* flex-direction: column; */
  margin: auto;
  width: 100%;
}
</style>
