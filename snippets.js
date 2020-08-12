function createAnyElement(name, attributes) {
    let element = document.createElement(name);
    for (let k in attributes) {
        element.setAttribute(k, attributes[k])
    }
    return element;
}

/*Scope demonstration: var is function scoped, let is block scope*/
var globalName = "Joe";
function something(){
    var globalName = "Jack"
    console.log(globalName)
}
something
console.log(globalName)

let name = "Joe";
function something2(){
    let name = "Jack"
    console.log(name)
}
something2()
console.log(name)

/* Arrow functions*/
let adder = (n1, n2) => n1 + n2;

let greeter = name => `Hello ${name}!`;