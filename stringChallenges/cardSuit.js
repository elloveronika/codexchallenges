function defineSuit(card) {
  console.log(card);
  //p: a string with a number and its suit
  //r: a string that represents the suit
  //e: defineSuit('Q♠'), 'spades' === ('J♥'), 'hearts'
  //p: create an object that contains the
  // suit props, split the card string into an array
  // iterate of object using for in and passing the
  // some method / filter and then return the condition that passed

  const suitObject = {
    clubs: "♣",
    hearts: "♥",
    diamonds: "♦",
    spades: "♠",
  };
  let suit = card[card.length - 1];

  for (let suits in suitObject) {
    //     console.log(suitObject[suits])
    let suitsValue = suitObject[suits];
    if (suitsValue === suit) {
      //       console.log('this is the ans',suits)
      return suits;
    }
  }
}
defineSuit("3 ♣");
