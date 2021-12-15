function warnTheSheep(queue) {
  //p: array? array of strings?

  //r: a interpolated string, a string with embedded JS

  //e: ["sheep", "sheep", "wolf"] == "Pls go away and stop eating my sheep"
  // ["sheep", "sheep", "wolf","sheep", "sheep"] ==
  //"Oi! Sheep number 2! You are about to be eaten by a wolf!"
  //p: iterating over the array using the method indexof after we use the reverse method
  // if the first element is wolf then return "Pls go away and stop eating my sheep"
  //else "Oi! Sheep number indexOF! You are about to be eaten by a wolf!"
  console.log("this is param", queue);
  let revArr = queue.reverse();
  console.log("this is revArr", revArr);
  let wolf = revArr.indexOf("wolf");
  console.log(wolf);
  if (revArr[0] == "wolf") {
    return "Pls go away and stop eating my sheep";
  } else {
    return `Oi! Sheep number ${wolf}! You are about to be eaten by a wolf!`;
  }
}
let arrSheep = [
  "sheep",
  "sheep",
  "sheep",
  "sheep",
  "sheep",
  "wolf",
  "sheep",
  "sheep",
];
let arrSheep1 = [
  "sheep",
  "sheep",
  "sheep",
  "sheep",
  "sheep",
  "wolf",
  "sheep",
  "sheep",
];
warnTheSheep(arrSheep);
warnTheSheep(arrSheep1);
