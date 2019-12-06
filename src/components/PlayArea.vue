<template>
  <div style="width: 800px;">
    <v-layout>
      <v-flex xs12>
        <v-card :style="'background-image: url(' + getBackGroundImage() + ');'">

          <v-flex xs12>
            <v-card-text :style="'height: 250px; border: 1px solid;'">
              <WinningTable
              >
              </WinningTable>
            </v-card-text>
          </v-flex>
        
          <v-flex xs12>
            <v-card-text :style="'height: 250px; border: 1px solid;'">
              <CardsInDrawMode
                @roundFinished="drawClicked=false"
              ></CardsInDrawMode>
            </v-card-text>
          </v-flex>
          <v-btn
            absolute
            right
            large
            dark            
            color="blue"
            style="transform: translateY(-65px) translateX(-150px); border-radius: 40%;"
            @click="onDealCardsClick()" 
            :disabled="drawClicked"
          >
            Panos
          </v-btn>
          <v-btn
            absolute
            right
            large
            dark            
            color="green"
            style="transform: translateY(-65px); border-radius: 40%;"
            @click="onDealCardsClick()" 
            :disabled="drawClicked"
          >
            Pelaa
          </v-btn>
        </v-card>
      </v-flex>
    </v-layout>

    <HandResultCheck></HandResultCheck>
    
    <div v-if="resultReady"></div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import HandResultCheck from "@/components/HandResultCheck";
import Analyzer from "@/hand-analyzer/analyzer.js";
import CardsInDrawMode from "@/components/CardsInDrawMode";
import WinningTable from "@/components/WinningTable";

export default {
  components: {
    HandResultCheck,
    CardsInDrawMode,
    WinningTable
  },
  computed: {
    ...mapState([
      // 'hand'
    ]),
    deck: {
      get() {
        return this.$store.state.deck;
      }
    },
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
      resultReady: false,
      drawClicked: false,
      ranks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
      suits: ["S", "C", "H", "D"],
    };
  },
  methods: {
    
    getBackGroundImage() {
      return require("../assets/bgimage.jpg");
    },
    async onDealCardsClick() {
      this.resetDeck();
      this.drawClicked = true;
      let drewCards = [];
      let choices = {
        hidden: [],
        visible: []
      };
      
      for (let i = 0; i < 2; i++) {
        let randomCard = this.getRandomCard();
        drewCards.push(randomCard);
        this.removeCardFromDeck(randomCard.id);
      }
      for (let i = 0; i < 2; i++) {
        for (let k = 0; k < 2; k++) {
          let randomOptionCard = this.getRandomCard();
          choices.hidden.push(randomOptionCard);
          this.removeCardFromDeck(randomOptionCard.id);
        }
        let randomOptionCard = this.getRandomCard();
        choices.visible.push(randomOptionCard);
        this.removeCardFromDeck(randomOptionCard.id);
      }

      this.$store.dispatch("firstDraw", { hand: drewCards, choices: choices });
    },
    
    removeCardFromDeck(id) {
      this.$store.dispatch("removeCardFromDeck", id);
    },
    onResetDeckClick() {
      this.resetDeck();
    },
    resetDeck() {
      this.drawClicked = false;
      this.$store.dispatch("resetDeck", {
        ranks: this.ranks,
        suits: this.suits
      });
    },
    getRandomCard() {
      return this.deck[
        Math.floor(Math.random() * Math.floor(this.deck.length))
      ];
    },
    
  },
  mounted() {
    this.$store.dispatch("resetDeck", { ranks: this.ranks, suits: this.suits });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.playing-card {
  border-radius: 7px;
}
</style>