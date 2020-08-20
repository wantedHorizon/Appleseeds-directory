

const arr = [1,2,3,4,5,6,7,8,9,10,5454,11,12,545,13,555,0,-1,554];

const max = arr.reduce( (acc,num) => Math.max(acc,num) , 0);
console.log("max",max);

console.log("------------------------");

const sumEven = arr.reduce( (acc,num) => num%2 === 0 ? num+acc : acc,0 );
console.log("sum",sumEven);
console.log("------------------------");


const avg = arr.reduce( (acc,num) =>  num+acc, 0 )/arr.length;
console.log("avg",avg);
console.log("------------------------");
