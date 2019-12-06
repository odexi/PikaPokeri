<template>
  <v-img
    :src="cardImage(back, card)"
    :class="cardClass"
    :height="165"
    :width="110"
    aspect-ratio="1"
    class="playing-card"
  ></v-img>
</template>

<script>
export default {
  props: {
    card: Object,
    back: Boolean,
    cardClass: String
  },
  methods: {
    cardImage(back, card) {
      if (!back) {
        return require("../assets/cards/" + card.suit + card.rank + ".png");
      } else {
        return require("../assets/cards/red_back.png");
      }
    },
  }
};
</script>
<style scoped>
.playing-card {
  border-radius: 7px;
}
</style>