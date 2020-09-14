

const grade = (g) => {
    if(g >=0 && g<=64) {return "F"}
    else if(g<69) {return "D"}
    else if(g<79) {return "C"}
    else if(g<89) {return "B"}
    else if(g<= 100) {return "A"}
    else {
        return "invalid input"
    }

}


const arr = [5 ,0 ,22 , 56 ,90,110,22,70,80,85,65,62];
arr.forEach((a)=> console.log(grade(a)));

// console.log(grade())