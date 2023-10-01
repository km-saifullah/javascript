const accountId = 144652;
let accountEmail = "user@gmail.com";
var accountPassword = "12345";
accountCity = "Dhaka";
let accountState;

// accountId = 2; // not allowed. Const cannot allow us to change

accountEmail = "user1.gmail.com";
accountPassword = "2121214";
accountCity = "Comilla"; // we should not use this

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity,accountState]);
