function checkHand(hand) {

    const allEqual = arr => arr.every(v => v === arr[0]);
    let orderedRanks = [];
    let finalSuits = [];
    for (let card of hand) {
      orderedRanks.push(parseInt(card.rank));
      finalSuits.push(card.suit);
    }
    orderedRanks.sort(function(a, b) {
      return a - b;
    });
    let card1 = hand[0];
    let card2 = hand[1];
    let card3 = hand[2];
    let card4 = hand[3];
    let card5 = hand[4];
    // console.log(orderedRanks);
    // console.log(allEqual(finalSuits));
    // console.log(orderedRanks[1] + 3);
    let ranksFor4ofaKind = [];
    //Royal flush
    if (
      orderedRanks[0] === 1 &&
      orderedRanks[1] === 10 &&
      orderedRanks[4] === 13 &&
      allEqual(finalSuits)
    ) {
      return {message: "You got royal flush!", hand: orderedRanks, value: 1};
    }
    //Straight flush
    if (orderedRanks[4] === orderedRanks[0] + 4 && allEqual(finalSuits)) {
      return {message: "You got straight flush!", hand: orderedRanks, value: 2};
    }
    //4 of a kind
    if (
      allEqual(orderedRanks.slice(0, 4)) ||
      allEqual(orderedRanks.slice(1, 5))
    ) {
      return {message: "You got neloset!", hand: orderedRanks, value: 3};
    }
    //Fullhouse
    if (
      (allEqual(orderedRanks.slice(0, 3)) &&
        allEqual(orderedRanks.slice(3, 5))) ||
      (allEqual(orderedRanks.slice(0, 2)) &&
        allEqual(orderedRanks.slice(2, 5)))
    ) {
      return {message: "You got fullhouse!", hand: orderedRanks, value: 4};
    }
    //Flush
    if (allEqual(finalSuits)) {
      return {message: "You got flush!", hand: orderedRanks, value: 5};
    }
    //Straight
    if (
        (orderedRanks[0] !== orderedRanks[1] &&
        orderedRanks[1] !== orderedRanks[2] &&
        orderedRanks[2] !== orderedRanks[3] &&
        orderedRanks[3] !== orderedRanks[4] ) &&

      (orderedRanks[4] === orderedRanks[0] + 4 ||
      (orderedRanks[0] === 1 &&
        orderedRanks[1] === 10 &&
        orderedRanks[4] === 13))
    ) {
      return {message: "You got straight!", hand: orderedRanks, value: 6};
    }
    //3 of a kind
    if (
      allEqual(orderedRanks.slice(0, 3)) ||
      allEqual(orderedRanks.slice(1, 4)) ||
      allEqual(orderedRanks.slice(2, 5))
    ) {
      return {message: "You got kolmoset!", hand: orderedRanks, value: 7};
    }
    //Two pairs
    if (
      (allEqual(orderedRanks.slice(0, 2)) &&
        allEqual(orderedRanks.slice(1, 3))) ||
      (allEqual(orderedRanks.slice(0, 2)) &&
        allEqual(orderedRanks.slice(2, 4))) ||
      (allEqual(orderedRanks.slice(0, 2)) &&
        allEqual(orderedRanks.slice(3, 5))) ||
      (allEqual(orderedRanks.slice(1, 3)) &&
        allEqual(orderedRanks.slice(2, 4))) ||
      (allEqual(orderedRanks.slice(1, 3)) &&
        allEqual(orderedRanks.slice(3, 5))) ||
      (allEqual(orderedRanks.slice(2, 4)) &&
        allEqual(orderedRanks.slice(3, 5)))
    ) {
      return {message: "You got two pairs!", hand: orderedRanks, value: 8};
    }
    //10-A pair
    if (
      ((allEqual(orderedRanks.slice(0, 2)) &&
        (orderedRanks[0] == 1 || orderedRanks[0] >= 10)) ||
        (allEqual(orderedRanks.slice(1, 3)) &&
        (orderedRanks[1] == 1 || orderedRanks[1] >= 10)) ||
        (allEqual(orderedRanks.slice(2, 4)) &&
        (orderedRanks[2] == 1 || orderedRanks[2] >= 10)) ||
        (allEqual(orderedRanks.slice(3, 5)) &&
        (orderedRanks[3] == 1 || orderedRanks[3] >= 10)))
    ) {
      return {message: "You got 10-A pair!", hand: orderedRanks, value: 9};
    }


    return {message: "Better luck next time, pal!", hand: orderedRanks, value: 0};

}

export default checkHand
