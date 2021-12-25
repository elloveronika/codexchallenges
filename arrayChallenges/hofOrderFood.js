function orderFood(list) {
  //p: list is an array of objects
  //r: a new object with the meals counted
  //e: { vegetarian: 2, standard: 1, vegan: 1 }
  //p: iterate over the array use dot notation to target the meal and then start creating a count
  //return the newobj

  const mealObj = {};

  for (let i = 0; i < list.length; i++) {
    if (mealObj[list[i].meal]) {
      mealObj[list[i].meal]++;
    } else mealObj[list[i].meal] = 1;
  }
  return mealObj;
}
orderFood(list1);
var list1 = [
  {
    firstName: "Noah",
    lastName: "M.",
    country: "Switzerland",
    continent: "Europe",
    age: 19,
    language: "C",
    meal: "vegetarian",
  },
  {
    firstName: "Anna",
    lastName: "R.",
    country: "Liechtenstein",
    continent: "Europe",
    age: 52,
    language: "JavaScript",
    meal: "standard",
  },
  {
    firstName: "Ramona",
    lastName: "R.",
    country: "Paraguay",
    continent: "Americas",
    age: 29,
    language: "Ruby",
    meal: "vegan",
  },
  {
    firstName: "George",
    lastName: "B.",
    country: "England",
    continent: "Europe",
    age: 81,
    language: "C",
    meal: "vegetarian",
  },
];
