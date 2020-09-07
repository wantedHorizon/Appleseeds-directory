

const greaterThan = (number) => {
    return new Promise( function(res,rej){
        if(number < 10){
            rej(`Number(${number}) is less than 10`);
        }
        res(`Number(${number}) is greater than 10`);
    })
}


greaterThan(15)//greater than
.then(msg => {console.log(msg)})
.catch(err => console.error(err));

greaterThan(9)//less than
.then(msg => {console.log(msg)})
.catch(err => console.error(err));