function evenOrOdd(number) {
  if(number % 2 === 0 && Number.isInteger(number)) {
    console.log("even");
  } else if(number % 2 !== 0 && Number.isInteger(number)) {
    console.log("odd");
  } else {
    console.log("Error");
  }
};

evenOrOdd("5");
evenOrOdd(6);

/* LAUNCH SCHOOL SOLUTION

function evenOrOdd(number) {
  if (!Number.isInteger(number)) {
    console.log('Sorry, the value you passed is not an integer');
    return;
  }

  if (number % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
}

*/
