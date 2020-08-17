
const swapProp = (o) => {
    const out = {};
    for(const prop in o){
        out[o[prop]]=prop;
    }
    return out;
}

const object = { a: 1, b: 2, c: 3 };

console.log(swapProp(object));