<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import '@/assets/icon/iconfont.css'
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px;*/
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
}
</style>
