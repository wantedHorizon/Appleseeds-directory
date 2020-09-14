

const printFizzBuzz= (n) => {
    let out="";
    for(let i =1; i<=n ; i++) {
        let temp ;
        temp =i;
        if(i % 3 === 0){
            temp="Fizz"
            if(i % 5 === 0)
                temp+="Buzz";
        }
        else if(i % 5 === 0)
          temp = "Buzz";
        
       
        out+=","+temp;
    }

    return out;
}

console.log(printFizzBuzz(100))

