<template>
    <div>
      <v-btn @click="onResetDeckClick()">Reset</v-btn>
      <br>
      <v-btn @click="royalFlush()">Royal flush</v-btn>
      <br>
      <v-btn @click="straightFlush()">Straight flush</v-btn>
      <br>
      <v-btn @click="fourOfAKind()">Four of a kind</v-btn>
      <br>
      <v-btn @click="fullHouse()">Fullhouse</v-btn>
      <br>
      <v-btn @click="flush()">Flush</v-btn>
      <br>
      <v-btn @click="straight()">Straight</v-btn>
      <br>
      <v-btn @click="threeOfAKind()">Three of a kind</v-btn>
      <br>
      <v-btn @click="twoPairs()">Two pairs</v-btn>
      <br>
      <v-btn @click="pair10A()">pair10-A</v-btn>
      <br>
      <v-btn @click="run10kTimes()">Run 10k times</v-btn>
      <br>
    </div>
</template>

<script>
export default {
    royalFlush() {
      this.$store.state.hand = [
        {
          rank: "10",
          suit: "H"
        },
        {
          rank: "11",
          suit: "H"
        },
        {
          rank: "12",
          suit: "H"
        },
        {
          rank: "13",
          suit: "H"
        },
        {
          rank: "1",
          suit: "H"
        }
      ];
      this.handleResult();
    },
    straightFlush() {
      this.$store.state.hand = [
        {
          rank: "10",
          suit: "H"
        },
        {
          rank: "11",
          suit: "H"
        },
        {
          rank: "8",
          suit: "H"
        },
        {
          rank: "7",
          suit: "H"
        },
        {
          rank: "9",
          suit: "H"
        }
      ];
      this.handleResult();
    },
    fourOfAKind() {
      this.$store.state.hand = [
        {
          rank: "10",
          suit: "C"
        },
        {
          rank: "13",
          suit: "H"
        },
        {
          rank: "10",
          suit: "S"
        },
        {
          rank: "10",
          suit: "D"
        },
        {
          rank: "10",
          suit: "H"
        }
      ];
      this.handleResult();
    },
    fullHouse() {
      this.$store.state.hand = [
        {
          rank: "10",
          suit: "C"
        },
        {
          rank: "13",
          suit: "H"
        },
        {
          rank: "10",
          suit: "S"
        },
        {
          rank: "10",
          suit: "D"
        },
        {
          rank: "13",
          suit: "D"
        }
      ];
      this.handleResult();
    },
    flush() {
      this.$store.state.hand = [
        {
          rank: "10",
          suit: "C"
        },
        {
          rank: "9",
          suit: "C"
        },
        {
          rank: "3",
          suit: "C"
        },
        {
          rank: "2",
          suit: "C"
        },
        {
          rank: "13",
          suit: "C"
        }
      ];
      this.handleResult();
    },
    straight() {
      this.$store.state.hand = [
        {
          rank: "10",
          suit: "H"
        },
        {
          rank: "9",
          suit: "C"
        },
        {
          rank: "11",
          suit: "S"
        },
        {
          rank: "7",
          suit: "C"
        },
        {
          rank: "8",
          suit: "C"
        }
      ];
      this.handleResult();
    },
    threeOfAKind() {
      this.$store.state.hand = [
        {
          rank: "10",
          suit: "C"
        },
        {
          rank: "3",
          suit: "H"
        },
        {
          rank: "10",
          suit: "S"
        },
        {
          rank: "10",
          suit: "D"
        },
        {
          rank: "2",
          suit: "D"
        }
      ];
      this.handleResult();
    },
    twoPairs() {
      this.$store.state.hand = [
        {
          rank: "10",
          suit: "C"
        },
        {
          rank: "3",
          suit: "H"
        },
        {
          rank: "10",
          suit: "S"
        },
        {
          rank: "3",
          suit: "D"
        },
        {
          rank: "2",
          suit: "D"
        }
      ];
      this.handleResult();
    },
    pair10A() {
      this.$store.state.hand = [
        {
          rank: "1",
          suit: "C"
        },
        {
          rank: "3",
          suit: "H"
        },
        {
          rank: "12",
          suit: "S"
        },
        {
          rank: "7",
          suit: "D"
        },
        {
          rank: "12",
          suit: "D"
        }
      ];
      this.handleResult();
    }
}
</script>
