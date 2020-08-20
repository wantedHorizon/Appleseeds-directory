const food = ["Noodle", "Pasta", "Ice-cream", "Meat", "Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives", "Hamburgers"];
const food2= ["Fries"];


const sameElements = (arr1, arr2) =>  {
    
    const out =arr1.filter((item) => arr2.includes(item));
    if(out.length> 0){
        return out;
    }

    return false;
}

console.log("food,food1",sameElements(food,food1));
console.log("food,food2",sameElements(food,food2));
