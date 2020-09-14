const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];

const strToObjectLength = (arr) => {
    let object1={};
    let oneString = arr.join('').toString().toLowerCase() .replace(/\s+/g, "");

    while(oneString.length> 0){
        let first1 = ""+oneString[0];
        let count =  (oneString.match(new RegExp(first1, "g")) || []).length; 
        object1[first1] = count;
        oneString =oneString.replace(new RegExp(first1,"g"),"");
    }
    return object1;
};

const strToObjectLengthExtra = (arr) => {
    const object1 = strToObjectLength(arr);
    let max = {
        letter: '',
        length: 0
    }
    for(const o1 in object1 ){
        if(object1[o1] > max.length){
            max = {letter: o1, length: object1[o1]};
        }
    }

    object1.maxOccurred = max;
    return object1;
}
console.log(strToObjectLengthExtra(array));
