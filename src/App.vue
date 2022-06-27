<template>
  <span>
    <img alt="Vue logo" src="./src/assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </span>
</template>

<script type="module">
// import HelloWorld from './components/HelloWorld.vue';
const HelloWorld = window.httpVueLoader("./src/components/HelloWorld.vue");

module.exports = {
  name: "App",
  components: {
    helloworld: HelloWorld,
  },
};
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
</style>
