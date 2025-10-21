let score = true

console.log(typeof score)
console.log(typeof (score))

let valueInNumber = Number (score)

console.log(typeof valueInNumber);
console.log(valueInNumber); //prints NaN (Not a Number; it's a value)
console.log(typeof NaN)

// Note: types can be converted in js easily using the Wrapper class concept where we 
// we capitalize the data type to actually convert it without throwing exceptions, we have to be careful
// as it will typecast it and give it values like NaN,etc., 
// "33" => 33 is possible (string to number)
// "33abc" => NaN (string to number)
// "" => 0 (string to number)
// true/false => 1/0 (boolean to number)
// boolean/number => string
// we'll look into conversions for objects and how we implement all these with forms
