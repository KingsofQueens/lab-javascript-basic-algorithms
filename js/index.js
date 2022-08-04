// Iteration 1: Names and Input
let hacker1Name = 'XXXX';
let hacker1Occupation = 'driver';

console.log(`The ${hacker1Occupation}\'s name is ${hacker1Name}`)


let hacker2Name = 'WXYZ';
let hacker2Occupation = 'nagivator';

console.log(`The ${hacker2Occupation}\'s name is ${hacker2Name}`)

// Iteration 2: Conditionals
if (hacker1Name.length > hacker2Name.length) {
  console.log(`The driver has the longest name, it has ${hacker1Name.length} characters.`)
} else if (hacker1Name.length < hacker2Name.length) {
  consloe.log(`It seems that the navigator has the longest name, it has ${hacker2Name.length} characters.`)
} else {
  console.log(`Wow, you both have equally long names, ${hacker2Name.length} characters!`)
}

let hacker1UpperCase = hacker1Name.toUpperCase();
let hacker1ArrayUpperCase = hacker1UpperCase.split('');
console.log(hacker1ArrayUpperCase.join(' '));

// Iteration 3: Loops
function reverseString(hackerName) {
  let newString = "";
  for (i = hacker2Name.length - 1; i >= 0; i--) {
    newString += hacker2Name[i];
  }
  console.log(newString);
}
reverseString(hacker2Name);

if (hacker1Name.localeCompare(hacker2Name) < 0) {
  console.log(`The driver's name goes first.`)
} else if (hacker1Name.localeCompare(hacker2Name) > 0) {
  console.log(`Yo, the navigator goes first definitely.`)
} else {
  console.log(`What?! You both have the same name?`)
}
