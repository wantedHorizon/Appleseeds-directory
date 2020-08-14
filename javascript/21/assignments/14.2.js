function findSmallest(a, b, c){
    if (a > b > c){
    return c;
    } else if (a > c > b) {
    return a;
   } else {
    return b;
    }
   }
//    debugger;

   findSmallest(52,66, 2);// 

//q1 => line 12
//q2 => it pooped right out with the console but i put first debugger; inside the function and then moved it to before the call;
//q3 => there is a typo in the function call so it doesn't find it
