// let score = true

// console.log(typeof score)
// console.log(typeof (score))

// let valueInNumber = Number (score)

// console.log(typeof valueInNumber);
// console.log(valueInNumber); //prints NaN (Not a Number; it's a value)
// console.log(typeof NaN)

// Note: types can be converted in js easily using the Wrapper class concept where we 
// we capitalize the data type to actually convert it without throwing exceptions, we have to be careful
// as it will typecast it and give it values like NaN,etc., 
// "33" => 33 is possible (string to number)
// "33abc" => NaN (string to number)
// "" => 0 (string to number)
// true/false => 1/0 (boolean to number)
// boolean/number => string
// we'll look into conversions for objects and how we implement all these with forms

let value = 3
let negativeValue = -value
//console.log(negativeValue);

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**3)
// console.log(1.5/2)
// console.log(2%2)

let str1 = "hello "
let str2 = "world"
// console.log(str1+str2);

// console.log(typeof (1+2+'2'));//later gets converted; such practices are not good for clean production code; just for logical fun
// console.log('1'+2+2); //first operand's type is followed

// console.log((3*(4%45))-53);//bad practice if don't use parethesis as this reduces code readability

let a=b=c=4 //also a poor way to reassign; not readable for codebases

//post and pre increment/decrement(covered in java)

