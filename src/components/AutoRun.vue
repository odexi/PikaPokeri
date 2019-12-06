<script>
export default {
    data () {
        return {
            royalFlushes: [],
            straightFlushes: [],
            quads: [],
            fullhouses: [],
            flushes: [],
            straights: [],
            threeofakinds: [],
            twopairs: [],
            onepair: [],
            noWin: 0
        }
    },
    methods: {
        run10kTimes() {
      for (let i = 0; i < 10000; i++) {
        this.onDealCardsClick();
        if (
          this.hand[0].suit == this.hand[1].suit &&
          this.visible.some(v => v.suit == this.hand[0].suit)
        ) {
          this.onChoiceClick(
            this.visible.findIndex(v => v.suit == this.hand[0].suit)
          );
        } else {
          this.onChoiceClick(1);
        }
      }

      console.log("Results: ", {
        royalFlushes: this.royalFlushes,
        straightFlushes: this.straightFlushes,
        quads: this.quads,
        fullhouses: this.fullhouses,
        flushes: this.flushes,
        straights: this.straights,
        threeofakinds: this.threeofakinds,
        twopairs: this.twopairs,
        onepairs: this.onepair,
        noWin: this.noWin
      });
    },
    async onChoiceClick(value) {
      this.$store.dispatch("lastDraw", value);
      //console.log("Hand: ", this.hand);
      this.handleResult();
    },
    handleResult() {
      let result = Analyzer(this.hand);
      if (result.value == 1) {
        this.royalFlushes.push(result.hand);
        //console.log(result.message);
      }
      if (result.value == 2) {
        this.straightFlushes.push(result.hand);
        //console.log(result.message);
      }
      if (result.value == 3) {
        this.quads.push(result.hand);
        //console.log(result.message);
      }
      if (result.value == 4) {
        this.fullhouses.push(result.hand);
        //console.log(result.message);
      }
      if (result.value == 5) {
        this.flushes.push(result.hand);
        //console.log(result.message);
      }
      if (result.value == 6) {
        this.straights.push(result.hand);
        //console.log(result.message);
      }
      if (result.value == 7) {
        this.threeofakinds.push(result.hand);
        //console.log(result.message);
      }
      if (result.value == 8) {
        this.twopairs.push(result.hand);
        //console.log(result.message);
      }
      if (result.value == 9) {
        this.onepair.push(result.hand);
        //console.log(result.message);
      }
      if (result.value == 0) {
        this.noWin++;
        //console.log(result.message);
      }
      this.drawClicked = false;
      this.$emit('roundFinished')
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
    }
}
</script>
