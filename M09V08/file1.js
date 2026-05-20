const {a } = require("./file2");
const {a : x} = require("./file3"); //a:x is not a key payer value, this export and distractureing is called name elias
console.log(a, x);


const {add} = require("./utlils/add");
console.log(add(2,4));

const {subs} = require("./utlils/substract")
console.log(subs(2,6));

