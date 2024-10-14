const fs = require('fs');

let textIn = fs.readFileSync('./Files/input.txt', 'utf-8');
console.log(textIn);

let content=`Data read from the input.txt:${textIn}. \n Date created ${new Date()}`
fs.writeFileSync('./Files/output.txt',content)

let textIn2=fs.readFileSync('./Files/output.txt','utf-8');
console.log(textIn2) 
