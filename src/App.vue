<template>
  <v-app>
    <v-content>
      <PlayArea/>
    </v-content>
  </v-app>
</template>

<script>
import PlayArea from './components/PlayArea';

export default {
  name: 'App',

  components: {
    PlayArea,
  },

  data: () => ({
    //
  }),
};
</script>
