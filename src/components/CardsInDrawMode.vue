<template>
  <v-layout row wrap>
    <v-flex xs2>
      <Card :back="true" />
    </v-flex>
    <v-flex xs2>
      <Card v-if="hand[0]" :card="hand[0]"></Card>
    </v-flex>
    <v-flex xs2>
      <Card v-if="hand[1]" :card="hand[1]"></Card>
    </v-flex>
    <v-flex xs2>
      <Card v-if="hand[2]" :card="hand[2]"></Card>
      <template v-if="!hand[2] && visible.length > 0">
        <Card :back="true" />
        <Card :back="true" :class="'closed-middle-card'" />
        <div @click="onCardClick(0)">
          <Card :card="visible[0]" :class="'open-top-card'" />
        </div>
      </template>
    </v-flex>
    <v-flex xs2>
      <Card v-if="hand[3]" :card="hand[3]"></Card>
      <template v-if="!hand[3] && visible.length > 0">
        <Card :back="true" />
        <Card :back="true" :class="'closed-middle-card'" />
        <div @click="onCardClick(1)">
          <Card :card="visible[1]" :class="'open-top-card'" />
        </div>
      </template>
    </v-flex>
    <v-flex xs2>
      <Card v-if="hand[4]" :card="hand[4]"></Card>
    </v-flex>
  </v-layout>
</template>
<script>
import Analyzer from "@/hand-analyzer/analyzer.js";
import Card from "@/components/Card.vue";
export default {
  components: {
    Card
  },
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
    return {};
  },
  methods: {
    async onCardClick(value) {
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
      this.$emit("roundFinished");
    }
  }
};
</script>
<style scoped>
.open-top-card {
  transform: translateX(-9px) translateY(-316px);
}
.closed-middle-card {
  transform: translateY(-155px);
}
</style>

