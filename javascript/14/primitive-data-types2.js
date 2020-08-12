/*
    JavaScript - Primitive Data Types

    The following exercise contains the following subjects:
        * String
        * undefined

    Instructions:
        * String Tasks:
            1) Write the phrase "Welcome to Full-Stack Bootcamp" as a String in 5 different ways.
            2) Get the first letter of the word "Bootcamp" using two different ways.
            3) Write two string variables with the same word, in a way that when compared will result in false.
            4) Get the length of the String from the first task.
            5) Combine these two Strings "Hello" and "World" using as many different ways you can (at least 3).

        * undefined Tasks:
            1) Create an undefined variable in two differnet ways.
            2) Check if a variable is undefined in two differnet ways.

    Submit the file to Hive
*/
// 1)
console.log('1)Welcome to Full-Stack Bootcamp');
console.log("2)Welcome to Full-Stack Bootcamp");
console.log(`3)Welcome to Full-Stack Bootcamp`);
console.log('4)Welcome to'+ ' Full-Stack Bootcamp');
console.log("5)Welcome" +' to Full-Stack Bootcamp');
// 2)
console.log("Bootcamp"[0]);
console.log("Bootcamp".charAt(0));

// 3)
const a = "hello";
const b = "Hello";
console.log(a===b);
// 4)

console.log('Welcome to Full-Stack Bootcamp'.length);

// 5

const w1 = "Hello";
const w2 = "World";

console.log(w1+' '+w2);
console.log(w1+" "+w2);
console.log(w1.concat(' '+w2));
console.log(`${w1} ${w2}`);

// u1
let x;
let f = undefined;
var z ;
console.log(x);
console.log(z);

//u2 
if(x === undefined){
    console.log('x is undefined')
}

if(!z){
    console.log('z is undefined')
}