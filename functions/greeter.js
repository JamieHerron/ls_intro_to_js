function greeter() {
  let rlSync = require(`readline-sync`);
  let firstName = rlSync.question(`What's your first name?\n`);
  let lastName = rlSync.question(`What's your last name?\n`);
  console.log(`${firstName} ${lastName}`);
}

greeter();

/*LS Solution (Better to have one function carry out one responsibility)

function getName(prompt) {
  let readlineSync = require('readline-sync');
  let name = readlineSync.question(prompt);
  return name;
}

let firstName = getName('What is your first name? ');
let secondName = getName('What is your second name? ');
console.log(`Hello, ${firstName} ${lastName}!`);
*/

