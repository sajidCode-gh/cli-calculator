import { question } from "readline-sync";

type operator = "+" | "-" | "*" | "/";

function main(): void {
  const firstStr: string = question("Enter first number:\n");
  const operator: string = question("Enter Operator:\n");
  const SecondStr: string = question("Enter Second number:\n");

  const validInput: boolean =
    isNumber(firstStr) && isOperator(operator) && isNumber(SecondStr);

  if (validInput) {
    const firstNum: number = parseInt(firstStr);
    const secondNum: number = parseInt(SecondStr);
    const result = calculate(firstNum, operator as operator, secondNum);
    console.log("The Result is:  " + result);
  } else {
    console.log("Invalid input");
  }
}

function calculate(firstNum: number, operator: operator, secondNum: number) {
  switch (operator) {
    case "+":
      return firstNum + secondNum;
    case "-":
      return firstNum - secondNum;
    case "*":
      return firstNum * secondNum;
    case "/":
      return firstNum / secondNum;
  }
}

function isOperator(operator: string): boolean {
  switch (operator) {
    case "+":
    case "-":
    case "*":
    case "/":
      return true;
    default:
      return false;
  }
}

function isNumber(str: string): boolean {
  const maybeNum = parseInt(str);
  const isNum: boolean = !isNaN(maybeNum);
  return isNum;
}

main();
