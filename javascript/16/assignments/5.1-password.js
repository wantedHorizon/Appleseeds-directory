

const simplePasswordValidation1 = (password) => {
    if(password.length >7)
        return "Strong";

     return "Weak";   
}

const simplePasswordValidation2 = (password) => {
    return password.length>7 ? "Strong": "Weak";
}

const simplePasswordValidation3 = (password) => {
    
    password.length>7 &&  console.log( "Strong");
    password.length<7 &&  console.log("Weak");
}

function hasUpperCase(str) {
    return (/[A-Z]/.test(str));
}

const advancedPasswordValidation = (password) => {
    let out ="";

    if (hasUpperCase(password)) {
        out= "Very strong";
    }else {
        out = password.length>7 ? "Strong": "Weak";
        
    }
    return out;
}
//simple check
console.log('3 simple check long:');

console.log(simplePasswordValidation1("asfasfasfasf"));
console.log(simplePasswordValidation2("asfasfasfasf"));
simplePasswordValidation3("Asfasfasfasgasg");

console.log('3 simple check short:');
console.log(simplePasswordValidation1("aaa"));
console.log(simplePasswordValidation2("aaa"));
simplePasswordValidation3("aaa");

//advanced check
console.log('advanced check:\n');
console.log(advancedPasswordValidation("asfasfasf"));
console.log(advancedPasswordValidation("asfasfasAf"));
console.log(advancedPasswordValidation("asf"));





