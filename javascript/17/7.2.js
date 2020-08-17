const o1 = {};
const m1 = new Map();

const arr =
    [
        "s0",
        "s1",
        "s2",
        "s3",
        "s4",
        "s5",
        "s6",
        "s7",
        "s8",
        "s9",

    ];

arr.forEach((str, index) => {
    o1[index] = str;
    m1.set(index, str);
});

console.log("m1 get 9");
console.time();
m1.get(9);
console.timeEnd();



console.log("\n\no1  [9]");
console.time();
o1[9];
console.timeEnd();

// console.log(m1, o1);


const searchMap = (m1,id) => {
    let count =0;
    for (const [key, value] of m1) {
        count++;

        if(key == id){
            return key;
        }
        
    }
}

const searchObject = (o1, id)=> {
   for(let key in o1){
       if(key == id){
           return;
       }
   }
}

console.log("\n\no1 searchObject by loop 9");
console.time();
searchObject(o1,9);
console.timeEnd();


console.log("\n\nm1 searchMap by loop 9");
console.time();
searchMap(m1,9);
console.timeEnd();
