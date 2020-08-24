// var b = 1;

// function someFunction(number) {
//     function otherFunction(input) {
//         return b;
//     }
//     b = 5;
//     return otherFunction;
// }
// var firstResult = someFunction(9);
// var result = firstResult(2);

// result will get 5 because b is var and we changed it to 5 ;
//  there is no use with number


// -----------------------------------------------------------------------------------------------------

// var a = 1;

// function b2() {
//     a = 10;
//     return;

//     function a() {}
// }
// b2();
// console.log(a);

// line 25 will never be defined 
// line 27 will return undefined 
//line 28 will print 1 because b2 because var is function closure;

// -----------------------------------------------------------------------------------------------------


// let i;
// for (i = 0; i < 3; i++) {
//     const log = () => {
//         console.log(i);
//     }
//     setTimeout(log, 100);
// }

// this will print '3' '3' '3'  ,after 100ms i at   the outer closure equals 3 so it prints 3  
