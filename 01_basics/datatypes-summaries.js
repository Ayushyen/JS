//On basis of how data is stored and accessed in js, it's categorized into 2 types: primitive
//and non primitive (reference type)

//Primitive: 7 - String, Number, Boolean, Undefined, Null(represents empty, not 0),
//Symbol(advanced frontend) and BigInt(big numbers/scientific calc.)
//call by values; no reference is given, a copy is provided when it is copied

//Reference (Non Primitive): 3 - Arrays, Objects, Funtions
//call by reference; references are provided through which we can directly access it.

//TO MASTER JS, MASTER OBJECTS AND BROWSER EVENTS

const id = Symbol('123')
const anotherID = Symbol('123')
const noValue = null
const notDefined = undefined
const smallNumber = 123
const stringVariable = "Ayush"


//console.log(id === anotherID); // gives false despite being assigned same thing
//console.log(id == anotherID); // it's false as both of them are different as per JS

const bigNumber = 82304803490123219n //to make it BigInt just add 'n' at the end of number

let arrayString = ["ayush", "yen", "dexter"];
let studentObject = {
    name:"Ayush",
    department:"Engineering",
    role:"Operations"
}
//anything defined inside {} is treated as object, we can assign it to a variable as well (reference)
 
let print = function(){
    console.log("Hello World");
}

console.table([typeof id, typeof noValue,typeof notDefined,typeof smallNumber,typeof stringVariable,typeof bigNumber, typeof arrayString, typeof studentObject, typeof print]);

//https://tc39.es/ecma262/#sec-typeof-operator

//Heap vs Stack in JS

//Stack: stores primitive datatypes and references of non primitive as well
//Heap: stores the object values/fields in the memory and the reference to access it is in Stack

//Logic is same as Java (Already covered in JVM internals) -_-