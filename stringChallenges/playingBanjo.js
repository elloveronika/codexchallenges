function areYouPlayingBanjo(name) {
  //includes , conditional , ternary to check
  // Implement me
  //p: always a valid string,alpha chars , no empty strings
  //r: a string representing if name plays banjo or not
  //e: "Adam", "Adam does not play banjo"
  // "Raul", "Raul does play banjo";
  //p: call on the includes method on name and pass in r as a value
  //  use the || operator to check for both cases and
  // use conditional to return string name plays banjo

  console.log("this is param", name);
  console.log("this is ", name[0]);
  let firstLetter = name[0].toLowerCase();

  return firstLetter === "r"
    ? `${name} plays banjo`
    : `${name} does not play banjo`;
}

areYouPlayingBanjo("Robert");
areYouPlayingBanjo("Herbert");
