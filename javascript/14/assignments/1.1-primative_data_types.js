/*
--Delete the wrong answers--

1. Which of the following is/are strings?


c) '4'

2. Which of the following is/are numbers?

a) 4
b) 4.0

d) -4

3. Which of the following is/are booleans?

a) true
b) false


4. What is the result of 80 + 71.2?

a) 151.2
// 

5. What is the result of "80" + 71.2?


c) "8071.2"

6. Does 100 + 30 produce a number or a string?

a) number


7. Does "100" + 30 produce a number or a string?


b)string

*/

//------Submit your answers under the question------//

//create three different ways to declare variables

const one =1;
let two = 2;
var three = 3;

//declare a variable and reassign a value to it
let test = 4;
test =5;

//create a variable and after that assign a string with its value being: He's got it!
let test2 = 6;
test2 = `He's got it`;

/*
1. create a variable and assign a value on how much a restaurant bill is.
2. create a variable and assign a value on how much tax they should pay.
3. create a variable that will calculate the bill * tax and its output would be: Your total bill is <total bill> $.
 */

    const price =5;
    const tax = 1.17;

    // const priceAfterTax = `Your total bill is ${Math.floor(price *tax)}$.`;
    const priceAfterTax = `Your total bill is ${(price *tax)}$.`;

    // console.log(priceAfterTax);
// Round the number 50.6 to its nearest integer
   console.log( Math.ceil(50.6))
//Create a variable that is undefined
    let n ;