function isLanguageDiverse(list) {
  // thank you for checking out the Coding Meetup kata :)

  //p: array? array of objects? no object of object, valid array

  //r: a boolean, no string, represent whter the meetup is diverse in languages

  //e: 3 JS devs, 3 rubys, 1 python  == false
  // 1000 JS devs, 700 rubys, 500 python == true

  //p: iterate over array , for loop, use dot notation to
  //target the language prop, create an empty array to then push
  // the language props after counting them and first index in the array after
  // sorting aslo grab the last index in that array to then compare
  // the smallest number to largest num /
  let myLangObj = {};
  for (let i = 0; i < list.length; i++) {
    console.log(list[i].language);
    if (myLangObj[list[i].language]) {
      myLangObj[list[i].language] += 1;
    } else {
      myLangObj[list[i].language] = 1;
    }
  }
  console.log("this is my obj", myLangObj);
  let arrOfNums = Object.values(myLangObj).sort(
    (firstEl, secEl) => firstEl - secEl
  );
  console.log("this is arrOfNums", arrOfNums);

  console.log(arrOfNums[0] * 2 >= arrOfNums[arrOfNums.length - 1]);

  return arrOfNums[0] * 2 >= arrOfNums[arrOfNums.length - 1];
}

const list1 = [
  {
    firstName: "Daniel",
    lastName: "J.",
    country: "Aruba",
    continent: "Americas",
    age: 42,
    language: "Python",
  },
  {
    firstName: "Kseniya",
    lastName: "T.",
    country: "Belarus",
    continent: "Europe",
    age: 22,
    language: "Ruby",
  },
  {
    firstName: "Sou",
    lastName: "B.",
    country: "Japan",
    continent: "Asia",
    age: 43,
    language: "Ruby",
  },
  {
    firstName: "Hanna",
    lastName: "L.",
    country: "Hungary",
    continent: "Europe",
    age: 95,
    language: "JavaScript",
  },
  {
    firstName: "Jayden",
    lastName: "P.",
    country: "Jamaica",
    continent: "Americas",
    age: 18,
    language: "JavaScript",
  },
  {
    firstName: "Joao",
    lastName: "D.",
    country: "Portugal",
    continent: "Europe",
    age: 25,
    language: "JavaScript",
  },
];

const list2 = [
  {
    firstName: "Daniel",
    lastName: "J.",
    country: "Aruba",
    continent: "Americas",
    age: 42,
    language: "Python",
  },
  {
    firstName: "Kseniya",
    lastName: "T.",
    country: "Belarus",
    continent: "Europe",
    age: 22,
    language: "Ruby",
  },
  {
    firstName: "Hanna",
    lastName: "L.",
    country: "Hungary",
    continent: "Europe",
    age: 95,
    language: "JavaScript",
  },
  {
    firstName: "Jayden",
    lastName: "P.",
    country: "Jamaica",
    continent: "Americas",
    age: 18,
    language: "JavaScript",
  },
  {
    firstName: "Joao",
    lastName: "D.",
    country: "Portugal",
    continent: "Europe",
    age: 25,
    language: "JavaScript",
  },
];

const list3 = [
  {
    firstName: "Daniel",
    lastName: "J.",
    country: "Aruba",
    continent: "Americas",
    age: 42,
    language: "Python",
  },
  {
    firstName: "Kseniya",
    lastName: "T.",
    country: "Belarus",
    continent: "Europe",
    age: 22,
    language: "Ruby",
  },
  {
    firstName: "Jayden",
    lastName: "P.",
    country: "Jamaica",
    continent: "Americas",
    age: 18,
    language: "JavaScript",
  },
  {
    firstName: "Joao",
    lastName: "D.",
    country: "Portugal",
    continent: "Europe",
    age: 25,
    language: "JavaScript",
  },
];

const list4 = [
  {
    firstName: "Daniel",
    lastName: "J.",
    country: "Aruba",
    continent: "Americas",
    age: 42,
    language: "Python",
  },
  {
    firstName: "Kseniya",
    lastName: "T.",
    country: "Belarus",
    continent: "Europe",
    age: 22,
    language: "Ruby",
  },
  {
    firstName: "Joao",
    lastName: "D.",
    country: "Portugal",
    continent: "Europe",
    age: 25,
    language: "JavaScript",
  },
];
isLanguageDiverse(list1);
isLanguageDiverse(list2);
isLanguageDiverse(list3);
isLanguageDiverse(list4);
