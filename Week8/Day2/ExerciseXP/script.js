// Exercise 1 : Scope

// Instructions

// Analyse the code below, and predict what will be the value of a in all the following functions.
// Write your prediction as comments in a js file. Explain your predictions.

// #1
// function funcOne() {
//     let a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(`inside the funcOne function ${a}`);
// }

//  Prediction for #1:
//  The value of `a` will be 3 inside the `funcOne` function.
//  This is because `a` is initially assigned the value 5, but it enters the if statement and gets reassigned to 3.

// #1.1 - run in the console:
// funcOne()
//  Prediction for #1.1:
//  It will display an alert box with the message "inside the funcOne function 3".

// #1.2 What will happen if the variable is declared with const instead of let?
//  Prediction for #1.2:
//  If the variable `a` is declared with `const` instead of `let`, an error will occur.
//  This is because the value of `a` is reassigned within the `if` statement, and `const` variables cannot be reassigned.

// #2
// let a = 0;
// function funcTwo() {
//     a = 5;
// }

// function funcThree() {
//     alert(`inside the funcThree function ${a}`);
// }

// #2.1 - run in the console:
// funcThree()
// funcTwo()
// funcThree()
//  Prediction for #2.1:
//  It will display an alert box with the message "inside the funcThree function 0" followed by "inside the funcThree function 5".
//  Initially, `a` is 0. When `funcThree` is called, it displays the value of `a` which is 0.
//  Then, `funcTwo` is called, which modifies the value of `a` to 5.
//  When `funcThree` is called again, it displays the updated value of `a`, which is 5.

// #2.2 What will happen if the variable is declared with const instead of let?
//  Prediction for #2.2:
//  If the variable `a` is declared with `const` instead of `let`, an error will occur.
//  This is because `const` variables cannot be reassigned, and `funcTwo` attempts to modify the value of `a`.

// #3
// function funcFour() {
//     window.a = "hello";
// }

// function funcFive() {
//     alert(`inside the funcFive function ${a}`);
// }

// #3.1 - run in the console:
// funcFour()
// funcFive()
//  Prediction for #3.1:
//  It will display an alert box with the message "inside the funcFive function hello".
//  `funcFour` assigns the value "hello" to the global variable `a` using the `window` object.
//  When `funcFive` is called, it displays the value of `a`, which is "hello" due to the modification in `funcFour`.

// #4
// let a = 1;
// function funcSix() {
//     let a = "test";
//     alert(`inside the funcSix function ${a}`);
// }

// #4.1 - run in the console:
// funcSix()
//  Prediction for #4.1:
//  It will display an alert box with the message "inside the funcSix function test".
//  Inside `funcSix`, a new local variable `a` is declared with the value "test".
//  When `alert` is called, it displays the value of the local `a`, which is "test".

// #4.2 What will happen if the variable is declared with const instead of let?
//  Prediction for #4.2
//  If the variable `a` is declared with `const` instead of `let`, there will be no effect on the code.
//  The `const` declaration will create a new block-scoped constant `a` within `funcSix`, which does not conflict with the outer `a` variable.

// #5
// let a = 2;
// if (true) {
//     let a = 5;
//     alert(`in the if block ${a}`);
// }
// alert(`outside of the if block ${a}`);

// #5.1 - run the code in the console
//  Prediction for #5.1:
//  It will display an alert box with the message "in the if block 5" followed by "outside of the if block 2".
//  Inside the `if` block, a new block-scoped variable `a` is declared with the value 5, which only exists within the block.
//  The `alert` statement within the `if` block displays the value of the local `a`, which is 5.
//  Outside the `if` block, the original `a` variable with the value 2 is still accessible, and the second `alert` statement displays its value.

// #5.2 What will happen if the variable is declared with const instead of let?
//  Prediction for #5.2:
//  If the variable `a` is declared with `const` instead of `let`, there will be no effect on the code.
//  The `const` declaration will create a new block-scoped constant `a` within the `if` block, which does not conflict with the outer `a` variable.
//  The code will behave the same way, displaying "in the if block 5" followed by "outside of the if block 2".


// Exercise 2 : Ternary Operator

// Instructions

// Using the code below:

// function winBattle(){
//     return true;
// }
// Transform the winBattle() function to an arrow function.
// Create a variable called experiencePoints.
// Assign to this variable, a ternary operator. If winBattle() is true, the experiencePoints variable should be equal to 10, else the variable should be equal to 1.
// Console.log the experiencePoints variable.

const winBattle = () => {
    return true
}

const experiencePoints = winBattle ? 10 : 1

console.log(experiencePoints)


// Exercise 3 : Is It A String ?

// Instructions

// Write a JavaScript arrow function that checks whether the value of the argument passed, is a string or not. The function should return true or false
// Check out the example below to see the expected output
// Example:

// console.log(isString('hello')); 
// true
// console.log(isString([1, 2, 4, 0]));
// false

const isString = value => typeof value === 'string'

console.log(isString('hello'))
console.log(isString([1, 2, 4, 0]))


// Exercise 4 : Find The Sum

// Instructions

// Create a one line function (ie. an arrow function) that receives two numbers as parameters and returns the sum.

const s = (a, b) => a + b
console.log(s(3, 5))


// Exercise 5 : Kg And Grams

// Instructions

// Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)

// First, use function declaration and invoke it.
// Then, use function expression and invoke it.
// Write in a one line comment, the difference between function declaration and function expression.
// Finally, use a one line arrow function and invoke it.

function convertToGramsDeclaration(weightInKg) {
    return weightInKg * 1000
}
  
console.log(convertToGramsDeclaration(2))


const convertToGramsExpression = function(weightInKg) {
    return weightInKg * 1000
};
  
console.log(convertToGramsExpression(2))


// Function Declaration vs Function Expression:
// The main difference between function declaration and function expression is that function declarations are hoisted, which means they can be called before they are defined in the code, while function expressions cannot be called before they are defined.
  
const convertToGramsArrow = weightInKg => weightInKg * 1000;
  
console.log(convertToGramsArrow(2))