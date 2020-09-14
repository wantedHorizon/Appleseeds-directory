

const checkColor = (color) => {
    switch(color){
        case "red":case "pink": case "orange":
            return "light color"
        case "blue" :case "purple": case "brown":
            return "dark color";
        default:
            return "unknown color";    
    }
}


console.log("red:",checkColor("red"));
console.log("pink:",checkColor("pink"));
console.log("orange:",checkColor("orange"));
console.log("blue:",checkColor("blue"));
console.log("purple:",checkColor("purple"));
console.log("brown:",checkColor("brown"));
console.log("yellow-green:",checkColor("yellow-green"));





