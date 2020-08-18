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


console.log(strToObjectLength(array));
