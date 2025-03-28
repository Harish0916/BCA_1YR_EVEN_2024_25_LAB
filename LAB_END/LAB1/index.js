import { af } from "./module/af.js";
import { rf } from "./module/rf.js";
import { wf } from "./module/wf.js";
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
rl.question("Enter your choice (r,w,a) ", (op)=>{
    switch(op){
        case 'w': wf("sample.txt","welcome"); break;
        case 'r': rf("sample.txt"); break;
        case 'a': af("sample.txt","welcome again"); break;
    }
    rl.close()
})



