const fs = require('fs');

let textIn = fs.readFileSync('./Files/input.txt', 'utf-8');
console.log(textIn);

let content=`Data read from the input.txt:${textIn}. \n Date created ${new Date()}`
// if the file does not exist this will create the file and write it and if the data is already present in it 
// it will override the old data withe the new data
fs.writeFileSync('./Files/output.txt',content)

let textIn2=fs.readFileSync('./Files/output.txt','utf-8');
console.log(textIn2) 

// const fs = require('fs');

// Read the input file


// Create the content to append
let content4 = `\nData read from the input.txt: ${textIn}. \nDate created: ${new Date()}`;

// Append the new content to the output file (creates file if it doesn't exist) and will not override the file if it already has the
// data
fs.appendFileSync('./Files/output.txt', content);

// Read and log the updated output file content
let textIn3 = fs.readFileSync('./Files/output.txt', 'utf-8');
console.log(textIn2);
