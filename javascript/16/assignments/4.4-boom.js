const boom = (n) => {
    let result ="";
    for(let i=1; i<= n ;i++){
        let divides =false;
        let output =i.toString();
        if(i%7 === 0) {
            
            output= "BOOM";
            if(i.toString().includes('7')){
                output+="-BOOM";
            }
        }
      

        result += output +", ";
    }

    console.log(result);
}

// boom(18);

boom(100);
