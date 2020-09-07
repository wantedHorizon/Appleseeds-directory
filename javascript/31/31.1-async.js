

    const getIDs = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([532, 543, 753, 1, 5]);
        }, 1500);
    });






const getRecipe =  (recipeID) => {
    return new Promise((resolve, reject) => {
        setTimeout(
            (ID) => {
                const recipe = {
                    title: "Fresh tomato pasta",
                    publisher: "Pinchas Hodadad",
                };
                return(`${ID}: ${recipe.title}`);
            },
            1500,
            recipeID
        );
    });
};


async function go(){
    try {
        const IDs = await getIDs()
     debugger;
        console.log(IDs);
        const recipe = await getRecipe(IDs[2]);
        
        console.log(recipe);
    } catch {
        error => console.log(error);
    }
    
}


go();

