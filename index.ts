#! /usr/bin/env node

import inquirer from "inquirer";

const rNumber = Math.floor(Math.random() * 10);

const userInput: {
  usernum: number;
} = await inquirer.prompt([
  {
    type: "number",
    name: "usernum",
    message: "ENTER YOUR GUESS NUM",
  },
]);

console.log(rNumber, "NUMBER SYSTEM GENERATED");
console.log(userInput.usernum, "NUMBER YOU GUESSED");

if (rNumber === userInput.usernum) {
  console.log("Congratulations You Win!");
} else {
  console.log("Better Luck Next Time");
}
