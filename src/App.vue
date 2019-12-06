<template>
  <div id="app">
    <v-app>
      <v-layout>
        <v-content>       
          <PlayArea />  
        </v-content> 
      </v-layout>
    </v-app>
  </div>
</template>

<script>
import PlayArea from './components/PlayArea';

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
  margin-top: 60px;
}
</style>
