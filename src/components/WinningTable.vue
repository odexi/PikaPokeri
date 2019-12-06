<template>
    <table
    :items="winningHands"
  >
    <tr >
        
    </tr>
    <tr v-for="(hand, index) in winningHands" :key="index">
      <td class="winning-table-text">{{ hand.name }}</td>
      <td v-for="(bet, ind) in bets" 
      :key="ind"
      class="winning-table-text"
      >{{ '€' + bet * hand.value }}</td>
    </tr>
  </table>
</template>
<script>
export default {
    data () {
        return {
            bets: [
                1,2,3,5,10
            ],
        winningHands: [
          {
            name: 'Kuningasvärisuora',
            value: 100
          },
          {
            name: 'Värisuora',
            value: 75
          },
          {
            name: 'Neloset',
            value: 50
          },
          {
            name: 'Täyskäsi',
            value: 20
          },
          {
            name: 'Väri',
            value: 15
          },
          {
            name: 'Suora',
            value: 11
          },
          {
            name: 'Kolmoset',
            value: 5
          },
          {
            name: 'Kaksi paria',
            value: 3
          },
          {
            name: '10-A pari',
            value: 2
          },
        ]
      
        }
    }
}
</script>
<style scoped>
.winning-table-text {
    color: white;
}
</style>
