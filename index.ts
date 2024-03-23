import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "enter first number", type: "number", name: "firstNumber" },
  { message: "enter second number", type: "number", name: "secondNumber" },
  {
    message: "select one of the operators to perform action",
    type: "list",
    name: "operators",
    choices: ["addition", "subtraction", "multiplication", "division"],
  },
]);

if  (answer.operators ==="addition"){
  console.log(answer.firstNumber + answer.secondNumber);
} else if(answer.operators === "subtraction"){
    console.log(answer.firstNumber - answer.secondNumber);
   }else if( answer.operators === "multiplication"){
    console.log(answer.firstNumber * answer.secondNumber);
   }else if(answer.operators === "division"){
    console.log(answer.firstNumber/answer.secondNumber);
   }
