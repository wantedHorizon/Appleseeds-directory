const people = ["Greg", "Mary", "Devon", "James"];

// q1
console.log("q1");
people.forEach(person => {
    process.stdout.write(" ," + person)
});

// q2
console.log("q2");

let people2 = people.filter(p => p !== "Greg");
let index = people.findIndex(p => p === "Greg");
people.splice(index, 1);

console.log("\n", people);

// q3 
console.log("q3");

people.splice(people.indexOf("James"), 1);
console.log(people);


// q4
console.log("q4");

people.unshift("Matt");
console.log(people);

// q5
console.log("q5");

people.push("Eliran");
console.log(people);

// q6
console.log("q6");

// let BreakException = {};

// try {

//     people.forEach(element => {
//         console.log(element);
//         if (element === "Mary") {
//             throw BreakException;
//         }
//     })
// } catch(e) {
//     if(e !== BreakException) throw e;
// }

for (let el of people) {
    console.log(el);
    if (el === "Mary") {
      break;
    }
  }

//   q7
console.log("q7");
const people7 = people.slice(2);
console.log(people7);

// q8
console.log("q8");
console.log("index of Mary: ", people.indexOf("Mary"));//1

// q9
console.log("q9");
console.log("index of Foo: ", people.indexOf("Foo"));//-1


// q10
console.log("q10");

const people10 = ["Greg", "Mary", "Devon", "James"];
people10.splice(2,1,"Elizabeth", "Artie");
console.log(people10);

// q11
// let withBob = people10.join("Bob");
// console.log(withBob);
console.log("q11");

let withBob =people10.concat("Bob")
console.log(withBob);
