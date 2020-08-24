function funcA() {
    console.log(a);
    console.log(foo());
    var a = 1;

    function foo() {
        return 2;
    }
}
funcA();


//b1 -  this function tries to log a but a is not defined, so it hoisting it to it prints undefined.
// also it will print later 2 because function foo is hoisting 
// to fix the first undefined output we need to move a before the logging.



//--------------------------------------------------------------------------------------------------------------------------

var fullName = 'John Doe';
var obj = {
    fullName: 'Colin Ihrig',
    prop: {
        fullName: 'Aurelio De Rosa',
        getFullName: function () {
            return this.fullName;
        }
    }
};
console.log(obj.prop.getFullName());
var test = obj.prop.getFullName;
console.log(test());

// line 31 will print "Aurelio De Rosa" because this refers ti the prop object
//line 32 will return the function getFullName 
//line 33 will print 'undefined' because it scooped to where it ran , we need to change the function return to fullname or to arrow function


//--------------------------------------------------------------------------------------------------------------------------------------


function funcB() {
    let a = b = 0;
    a++;
    s = 5;
    return a;
}
funcB();
console.log(typeof a); //undefined  because it's scoped to funcB
console.log(typeof b); //number - b was defined with auto assignment so it was defined as global, to fix it we need to define b like "let b = 0;"

//--------------------------------------------------------------------------------------------------------------------------------------


function funcD1() {
    d = 1;
}
funcD1();
console.log(d);

function funcD2() {
    var e = 1;
}
funcD2();
console.log(e);

// line 60 will print 1 because d is global-- to fix it we need to use const or let , unless we want it to be global

//line 66 will print undefined, it is because var is function closer, we can change it to global like line 57 

//--------------------------------------------------------------------------------------------------------------------------------------


function funcE() {
    console.log("Value of f in local scope: ", f);
}
console.log("Value of f in global scope: ", f);
var f = 1;
funcE();

//line 78 will print `Value of f in global scope:  undefined` due to variables hoisting 
//line 80 will print "Value of f in global scope:  1" because f will go to upper level and f is already defined 