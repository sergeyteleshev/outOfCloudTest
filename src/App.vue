<template>
  <div id="app">
    <AssemblyHeader text="Взгляните на процесс сборки своими глазами"/>
    <AssemblySlider/>
    <img alt="Vue logo" src="assets/img/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import AssemblyHeader from "@/components/AssemblyHeader";
import AssemblySlider from "@/components/AssemblySlider";

export default {
  name: 'App',
  components: {
    HelloWorld,
    AssemblyHeader,
    AssemblySlider,
  }
}
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
