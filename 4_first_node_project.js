
//if we want to import any module in node we use require function which has parameter module name
// in the form of string

const readline=require('readline');
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question('please enter your name:',(name)=>{
    console.log('You entered : '+name);
    rl.close();
})

rl.on('close',()=>{
    console.log('Interface closed')
    process.exit(0)
})
