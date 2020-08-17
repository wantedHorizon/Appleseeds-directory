const candyStore = {
    candies: [{
            name: "mint gum",
            id: "as12f",
            price: 2,
            amount: 2
        },
        {
            name: "twix",
            id: "5hd7y",
            price: 5,
            amount: 4
        },
    ],
    cashRegister: 200
}



function getCandy(candyStore, id) {
    //your code
    return candyStore.candies.find(element =>element.id === id);
}


function getPrice(candyStore, id) {
    //your code
    return getCandy(candyStore,id).price;
}


function addCandy(candyStore, id, name, price) {
    //your code
    candyStore.candies.push({
        name: name,
        id: id,
        price: price,
        amount: 1
    });

}

function buy(candyStore, id) {
    //your code
    const product = getCandy(candyStore, id);
    if(!product){
        return;
    }
    if (product.amount > 0) {
        product.amount--;
        candyStore.cashRegister += product.price;
    } else {
        console.log("product ran out");
    }


}
console.log(getCandy(candyStore, "as12f"));
console.log(getCandy(candyStore, "5hd7y"));

//price
console.log(getPrice(candyStore, "5hd7y")); //5

//add candy
addCandy(candyStore, "125", "sugar-rush", 525);
console.log(getCandy(candyStore, "125"));

console.log("register before:", candyStore.cashRegister);
buy(candyStore, "125");
console.log("register after:", candyStore.cashRegister);