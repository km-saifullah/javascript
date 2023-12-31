let score = "33abc";
score = 33;
score = "33";
score = null;
score = undefined;
score = true;
// console.log(typeof score); // check type of score

let valueInNumber = Number(score);
// console.log(valueInNumber); // NaN : not a number
// console.log(typeof valueInNumber);

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = 1;
isLoggedIn = "";
isLoggedIn = "Monmoy";
let booleanLoggedIn = Boolean(isLoggedIn);
// console.log(isLoggedIn);
// console.log(booleanLoggedIn);
// console.log(typeof booleanLoggedIn);

// 1 => true; 0 => false
// "" => false; "monmoy" => true

let num = 33;
let stringNum = String(num);
// console.log(stringNum, typeof stringNum);

// ******************* Operations *******************
let value = 3;
let negValue = -value;
// console.log(negValue);

/* basic arithmetic operation
console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 ** 2);
console.log(2 / 3);
console.log(2 % 3);
*/

let str1 = "Hello";
let str2 = "world";
// console.log(str1 + str2);
// follow some rules ToPrimitive
// console.log(1 + "2");
// console.log("1" + 2);
// console.log("1" + "2");
// console.log(1 + "2" + 2);
// console.log(1 + 2 + "2");

let counter = 100;
// ++counter;
counter++;
console.log(counter);

// https://tc39.es/ecma262/#sec-toprimitive
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
