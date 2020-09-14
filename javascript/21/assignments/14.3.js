function getSumOfEven(arr){
    // debugger;
    return arr[1] + arr[3] + arr[5] + arr[7] + arr[9];
   }
   getSumOfEven([1,2,3,4,5,6,7,8,9,10]);
//    debugger;


   //q1 => line 3
   //q2 =>  line 2,6 debugger;
   //q3 => there is a call to index out of bounds , arr[10] => arr[9]
   //so we do number + undefine => NaN 
