



let pixels = "30px";

const pxToInteger = (str) => {
    
    return Number(str.replace('px',''));
}

console.log(pxToInteger(pixels));