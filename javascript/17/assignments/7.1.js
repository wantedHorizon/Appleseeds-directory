
const o1 = { name: 'name1' };
const o2 = { name: 'name2' };
const o3 = { name: 'name3' };

const m1 = new Map('');

// .set()

m1.set(o1, 1);
m1.set(o2, 2);
m1.set(o3, 3);

console.log("for of");
for (const [object, id] of m1) {
    console.log("object[name]:", object.name, " id:", id);
}
console.log("\nforEach");

function logMapElements(value, key, map) {
    console.log(`object[name]:[${key.name}] , id:[${value}]`);
}

 m1.forEach(logMapElements);
  