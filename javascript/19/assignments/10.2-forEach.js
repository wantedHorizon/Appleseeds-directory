
const testArr= [1,2,3,4,5,6,7,8,20];
const testObject = [
    {},
    {},
    {},
    {},
    {},
    {},
]

// q1
console.log("----------------q1-------------------");
const doubleValues = (array) => array.map(e => e*2);

console.log(doubleValues(testArr));

// q2
console.log("----------------q2-------------------");
const onlyEvenValues = (array) => array.filter(e => e%2 ===0);

console.log(onlyEvenValues(testArr));


// q3
console.log("----------------q3-------------------");

const addKeyAndValue = (array, key ,value) =>{
    array.forEach(element => {
        element[key] =value;
    });
    return array;
}

console.log(addKeyAndValue(testObject,"key","value"));

// q4
console.log("----------------q4-------------------");

const shiftLetters = (str) => {
    return str.split('').map( letter => String.fromCharCode(letter.charCodeAt(0) -1) ).join('');
}
console.log("a".charCodeAt(0));
console.log(shiftLetters("ssfasf"));

//extra 
console.log("----------------extra-------------------");

const convertToOpenClose = (str) => {
    
    return str.toLowerCase().split("").map( char => {
        return (str.match(new RegExp(char, "g")) || []).length >1 ?  ')' : '('; 
    } ).join('');
}

console.log(convertToOpenClose("din"));
console.log(convertToOpenClose("recede"));
console.log(convertToOpenClose("Success"));
// console.log(convertToOpenClose("(( @")); //breaks the code ( char is not autorized with regex
