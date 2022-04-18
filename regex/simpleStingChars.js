function solve(s) {
  //   console.log(typeof s)

  //p: a string chars
  //r: an array of numbers representing the amount of each char upper, lower, nums, special
  //e: ("$Cnl)Sr<7bBW-&qLHI!mY41ODe"), [10,7,3,6]) === ("bgA5<1d-tOwUZTS8yQ"),[7,6,3,2]);
  //p: iterate over string using match method and then calling the length to get num for
  // each char
  // return each variable inside an array
  let upper = s.match(/[A-Z]/g).length || 0;
  console.log("this is upper", upper);
  let lower = s.match(/[a-z]/g).length || 0;
  console.log("this is lower", lower);
  let num = s.match(/[0-9]/g).length || 0;
  console.log("this is num", num);
  let spec = s.match(/[^0-9A-Za-z]/g).length || 0;
  console.log("this is spec", spec);
  return [upper, lower, num, spec];
}
solve("Codewars@codewars123.com");
