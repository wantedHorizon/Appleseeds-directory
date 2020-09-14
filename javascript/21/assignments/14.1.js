function getSum(arr1, arr2){
    debugger;
  

    let sum = 0;
    for (let i=0; i < arr1.length; i++){//line 4 
    sum += arr1[i];//line 5 assignment to const 
    }
    for (let i=0; i < arr2.length; i++){
    sum += arr2[i];
    }
    }
    getSum([1,2,3],[5,66,23]);// arr1 ,arr2 are undefined due to comma between parameters

//q1 => line 4
//q2 => i used debugger and stepped over until the code broke 
//q3 => the arr1.length cannot find length of undefined because we sent the arguments without a comma,

//q4 there is another bug of const assignment line 5 