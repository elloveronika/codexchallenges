function findOddNames(list) {
  // thank you for checking out the Coding Meetup kata :)

  //p: array? array of objects? same type with props insde objects?
  // props will always be the same? valid name string data type
  //r: array with objects that only add up to odd number with ascii codes in their name
  //e: 'Aba' 65 + 98 + 97 = 260 even number
  // 'Abb' is: 65 + 98 + 98 = 261 odd
  //p: iterating over the list, array , and we willl target the first name
  // property with each iteration save it in a variable which
  //we then call the split method on , an array of letters
  // iteate over that array inside the for loop/ map
  // charcodeat / charcode in order to get the charcode and
  //push into a new array which we will then reduce the nums in the array
  // and use condtional to check if sum is odd
  // then we will push the dev object into new array and return

  const mapped = list.filter((dev) => {
    const oddArr = dev.firstName
      .split("")
      .map((letter) => letter.charCodeAt(0))
      .reduce((prevNum, currNum) => prevNum + currNum, 0);
    if (oddArr % 2 !== 0) return dev;
  });

  return mapped;
}

const list1 = [
  {
    firstName: "Aba",
    lastName: "N.",
    country: "Ghana",
    continent: "Africa",
    age: 21,
    language: "Python",
  },
  {
    firstName: "Abb",
    lastName: "O.",
    country: "Israel",
    continent: "Asia",
    age: 39,
    language: "Java",
  },
];

findOddNames(list1);
