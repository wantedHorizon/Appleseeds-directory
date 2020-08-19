
const callbacks = (str, callbackFunction) => {
    
    typeof(callbackFunction) === 'function' ? callbackFunction(str): null;
}


console.log(callbacks("sasf",(str)=> console.log(str)));