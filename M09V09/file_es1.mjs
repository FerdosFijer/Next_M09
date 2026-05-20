// const {a } = require("./file2");
import {a} from "./file_es2.mjs"

// const {a : x} = require("./file3")
import {a as x} from "./file_es3.mjs"

// const {add} = require("./utlils/add");
// const {subs} = require("./utlils/substract")
// console.log(a, x);

// const{add,subs} =require("./utils/index.js")
// console.log(add(2,4));
// console.log(subs(x,a));

// console.log(a,x);

import utils from "./utils_esm/index.mjs";
console.log(utils.add(2,4));
console.log(utils.subs(x,a));

