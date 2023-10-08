// Memory in JavaScript
/*
    Memory Types:
        - Stack
        - Heap
    Primitive type use Stack memory
    Non-primitive type use Heap memory
*/

let myName = "km saifullah";
let anotherName = myName;
anotherName = "Monmoy";
console.log(myName);
console.log(anotherName);

let user = {
  email: "user@gogole.com",
  upi: "user@bl",
};

let user2 = user;

user2.email = "hello@google.com";

console.log(user.email);
console.log(user2.email);
