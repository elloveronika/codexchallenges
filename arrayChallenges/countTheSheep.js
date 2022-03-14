var countSheep = function (num) {
  //   console.log('this is num:', typeof num)
  //P: a number
  //r: an alpha numeric  string
  //e: (3), "1 sheep...2 sheep...3 sheep..."); === (1), "1 sheep...");
  //p: build a for loop to count up to num and with every iteration we are going to
  // use a template literal to return a concatenated string , probs going to use
  // += to add a new string every time
  let arrOfSheep = [];

  for (let i = 1; i <= num; i++) {
    //     console.log('this is iteration number',i)
    let sheepCount = `${i} sheep...`;
    //     console.log('this is sheepCount',sheepCount)
    arrOfSheep.push(sheepCount);
  }

  return arrOfSheep.join("");
};

countSheep(10);
countSheep(11);
countSheep(8);
