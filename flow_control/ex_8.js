function numLogger(number) {
  if (number >= 0 && number <= 50) {
    console.log(`${number} is between 0 and 50`);
  } else if (number >= 51 && number <= 100) {
    console.log(`${number} is between 51 and 100`);
  } else if (number >= 101) {
    console.log(`${number} is greater than 100`);
  } else {
    console.log(`${number} is less than 0`);
  }
}

numLogger(25);
numLogger(75);
numLogger(125);
numLogger(-25);