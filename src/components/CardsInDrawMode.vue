<template>
  <v-layout row wrap>
    <v-flex xs2>
      <v-img
        v-if="hand[0]"
        :src="cardImage(hand[0])"
        :height="165"
        :width="110"
        aspect-ratio="1"
        class="playing-card"
      ></v-img>
    </v-flex>
    <v-flex xs2>
      <v-img
        v-if="hand[1]"
        :src="cardImage(hand[1])"
        :height="165"
        :width="110"
        aspect-ratio="1"
        class="playing-card"
      ></v-img>
    </v-flex>
    <v-flex xs2>
      <template v-if="hand[2]">
        <v-img
          :src="cardImage(hand[2])"
          :height="165"
          :width="110"
          @click="onChoiceClick(0)"
          aspect-ratio="1"
          class="playing-card"
        ></v-img>
      </template>
      <template v-if="!hand[2] && visible.length > 0">
        <v-img
          :src="redBackImage()"
          :height="165"
          :width="110"
          aspect-ratio="1"
          class="playing-card"
        ></v-img>
        <v-img
          :src="redBackImage()"
          style="transform: translateY(-155px)"
          :height="165"
          :width="110"
          aspect-ratio="1"
          class="playing-card"
        ></v-img>
        <v-btn
          style="height: 165px; width: 110px; background-color: transparent"
          @click="onChoiceClick(0)"
        >
          <v-img
            :src="cardImage(visible[0])"
            style="transform: translateX(-9px) translateY(-316px)"
            :height="165"
            :width="110"
            aspect-ratio="1"
            class="playing-card"
          ></v-img>
        </v-btn>
      </template>
    </v-flex>
    <v-flex xs2>
      <v-img
        v-if="hand[3]"
        :src="cardImage(hand[3])"
        @click="onChoiceClick(0)"
        :height="165"
        :width="110"
        aspect-ratio="1"
        class="playing-card"
      ></v-img>
      <template v-if="!hand[3] && visible.length > 0">
        <v-img
          :src="redBackImage()"
          :height="165"
          :width="110"
          aspect-ratio="1"
          class="playing-card"
        ></v-img>
        <v-img
          :src="redBackImage()"
          style="transform: translateY(-155px)"
          :height="165"
          :width="110"
          aspect-ratio="1"
          class="playing-card"
        ></v-img>
        <v-btn
          style="height: 165px; width: 110px; background-color: transparent"
          @click="onChoiceClick(1)"
        >
          <v-img
            :src="cardImage(visible[1])"
            style="transform: translateX(-9px) translateY(-316px)"
            :height="165"
            :width="110"
            aspect-ratio="1"
            class="playing-card"
          ></v-img>
        </v-btn>
      </template>
    </v-flex>
    <v-flex xs2>
      <v-img
        v-if="hand[4]"
        :src="cardImage(hand[4])"
        :height="165"
        :width="110"
        aspect-ratio="1"
        class="playing-card"
      ></v-img>
    </v-flex>
  </v-layout>
</template>
<script>
import Analyzer from "@/hand-analyzer/analyzer.js";
export default {
  computed: {
    hand: {
      get() {
        return this.$store.state.hand;
      }
    },
    choices: {
      get() {
        return this.$store.state.choices;
      }
    },
    visible: {
      get() {
        return this.choices.visible ? this.choices.visible : [];
      }
    },
    hidden: {
      get() {
        return this.choices.hidden ? this.choices.hidden : [];
      }
    }
  },
  data() {
    return {
      
    };
  },
  methods: {
    cardImage(card) {
      return require("../assets/cards/" + card.suit + card.rank + ".png");
    },
    redBackImage() {
      return require("../assets/cards/red_back.png");
    },
    async onChoiceClick(value) {
      this.$store.dispatch("lastDraw", value);
      //console.log("Hand: ", this.hand);
      this.handleResult();
    },
    handleResult() {
      let result = Analyzer(this.hand);
      if (result.value == 1) {
        //this.royalFlushes.push(result.hand);
        console.log(result.message);
      }
      if (result.value == 2) {
        //this.straightFlushes.push(result.hand);
        console.log(result.message);
      }
      if (result.value == 3) {
        //this.quads.push(result.hand);
        console.log(result.message);
      }
      if (result.value == 4) {
        //this.fullhouses.push(result.hand);
        console.log(result.message);
      }
      if (result.value == 5) {
        //this.flushes.push(result.hand);
        console.log(result.message);
      }
      if (result.value == 6) {
        //this.straights.push(result.hand);
        console.log(result.message);
      }
      if (result.value == 7) {
        //this.threeofakinds.push(result.hand);
        console.log(result.message);
      }
      if (result.value == 8) {
        //this.twopairs.push(result.hand);
        console.log(result.message);
      }
      if (result.value == 9) {
        //this.onepair.push(result.hand);
        console.log(result.message);
      }
      if (result.value == 0) {
        //this.noWin++;
        console.log(result.message);
      }
      this.$emit('roundFinished')
    },
  }
};
</script>
<style scoped>
.playing-card {
  border-radius: 7px;
}
</style>

