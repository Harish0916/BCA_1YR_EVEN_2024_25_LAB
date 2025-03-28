import { add } from "./module/add.js";
import { sub } from "./module/sub.js";
import { prod } from "./module/prod.js";
import { div } from "./module/div.js";
const op="+";

switch(op){
    case "+": console.log(add(12,4)); break;
    case "-": console.log(sub(12,4)); break;
    case "*": console.log(prod(12,4)); break;
    case "/": console.log(div(12,4)); break;
}