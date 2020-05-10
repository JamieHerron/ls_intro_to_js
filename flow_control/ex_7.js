function stringAllCaps(string) {
  if(string.length >= 10 && string !== "goodbye") {
    return string.toUpperCase();
  } else {
    return string;
  }
};

console.log(stringAllCaps('I like cats.'));

console.log(stringAllCaps('goodbye'));

console.log(stringAllCaps('I have 10 cars.'));


