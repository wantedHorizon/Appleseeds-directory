//way 1
const o = {
    name: 'eliran',
    printName: function () {
        console.log(this.name);
    },
    printNameAfter: function(time) {
        console.log(`after ${time}ms`);
        setTimeout(this.printName.bind(this),time);
    }
}
// o.printName();
// o.printNameAfter(1000);



// -------------------------------------------------------------------------


//way 2 
function CostumeObject(name){
    this.name = name;
    
}

CostumeObject.prototype.printName = function () {
    console.log(this.name);
};

CostumeObject.prototype.printNameAfter = function (time) {
    console.log(`after ${time}ms`);
    setTimeout(this.printName.bind(this),time);
};

const o2 = new CostumeObject('eliran');
console.log(o2);
o2.printName();
o2.printNameAfter(1000);

