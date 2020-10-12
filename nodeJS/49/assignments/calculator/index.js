const chalk = require('chalk');
const yargs = require('yargs')

yargs.version('1.1.0');

yargs.command({
    command: 'calc',
    describe: 'Add multiple numbers',
    builder: {
        add: {
            describe: 'add two or more numbers',
            type: 'array'
        }
        ,
        sub: {
            describe: 'subtract two or more  numbers',
            type: 'array'
        },
        mul: {
            describe: 'multiple two or more numbers',
            type: 'array'
        },
        pow: {
            describe: 'number ^ 2',
            type: 'number'
        }
    },
    handler(argv) {
        if(argv.add){
            const res= argv.add.reduce((acc,number)=>  acc+number);
            console.log(chalk.green(res));
        } 

        if(argv.sub){
            const res= argv.sub.reduce((acc,number)=>  acc-number);
            console.log(chalk.green(res));
        } 

        if(argv.mul){
            const res= argv.mul.reduce((acc,number)=>  acc*number);
            console.log(chalk.green(res));
        } 

        if(argv.pow){
            if(isNaN(argv.pow)){
                console.log(chalk.red.inverse("pow invalid input"));
                return;
            }
            const res= argv.pow**2;
            console.log((chalk.green(res)));
        } 

    }
})

//example commands
// node index.js calc --add 5 7 8 
// node index.js calc --sub 5 7 8 
// node index.js calc --pow 5   
// node index.js calc --mul 5 7 8    
yargs.parse();