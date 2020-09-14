const data = [{
        name: "John",
        birthday: "1-1-1995",
        favoriteFoods: {
            meats: ["hamburgers", "sausages"],
            fish: ["salmon", "pike"],
        },
    },
    {
        name: "Mark",
        birthday: "10-5-1980",
        favoriteFoods: {
            meats: ["hamburgers", "steak", "lamb"],
            fish: ["tuna", "salmon", "barracuda"],
        },
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
            meats: ["ham", "chicken"],
            fish: ["pike"],
        },
    },
    {
        name: "Thomas",
        birthday: "1-10-1990",
        favoriteFoods: {
            meats: ["bird", "rooster"],
            fish: ["salmon"],
        },
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
            meats: ["hamburgers", "lamb"],
            fish: ["anchovies", "tuna"],
        },
    },
];


// q1
console.log("------------------------q1---------------------");

const allNames = (data) => {
    const out= [];
    data.forEach(element => {
        element.name ? out.push(element.name) : null;
    });

    return out;
}
console.log(allNames(data));

// q2
console.log("\n------------------------q2---------------------\n");

const burnBefore = (data,year ) =>{
    
    return data.filter(object => {
        if(object.birthday){
            const birthYear = Number(object.birthday.split("-")[2]);
            return birthYear < year ?  true : false;
            
        } else {
            return false;
        }
    } );
}

console.log("burn before: \n",burnBefore(data,1990));

//q3
console.log("\n------------------------q3---------------------\n");

const foodCount = (data) => {
    const out = {};
    data.forEach(element => {
        if(element.favoriteFoods){
           for(const foodType in element.favoriteFoods){
                
                element.favoriteFoods[foodType].forEach(food => {
                    out.hasOwnProperty(food) ? out[food]++: out[food] =1;
                } );
           }
        }
    });
    return out;
}

console.log(foodCount(data));