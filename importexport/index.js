/*for the addition and subtraction
const oper = require("./operator");

console.log(oper);
console.log(oper.add(5,5));
console.log(oper.sub(10,5));

//to call a string 
//const name = require("./operator");
//console.log(name);
*/
//calling multiple math operators 
const { add, sub, mul, div , name } = require("./operator");

console.log(add(10,5));
console.log(sub(10,5));
console.log(mul(20,5));
console.log(div(30,5));
console.log(name);