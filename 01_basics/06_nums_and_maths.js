const number = 130
//console.log(number);

const otherNumber = new Number(221300.293); //created using Number object wrapper
//console.log(otherNumber);
//provides accessor methods

// console.log(otherNumber.toString()) // converts number to string type
// console.log(otherNumber.toPrecision(4)); //significant digits to be displayed
// console.log(otherNumber.toFixed(2)); //number of digits to be kept after decimal
//most of the time toFixed is kept at '2'

const balance = 1000000
//console.log(balance.toLocaleString('en-IN')) //adds ',' as per US standards for currency/balance; 
// 'en-IN' when passed as parameter converts it to Indian standards


let intriger;
// console.log(intriger = Number.MAX_SAFE_INTEGER); //max integer value in js
// console.log(intriger = Number.MIN_SAFE_INTEGER); //min integer value in js
// console.log(intriger = Number.MAX_VALUE); // max number in js
// console.log(intriger = Number.MIN_VALUE); // min number in js


//--------------------------MATH------------------------------------------------------------


// console.log(Math); //contains lots of accessor methods; check on chrome
// console.log(Math.abs(-3453));
// console.log(Math.round(otherNumber)); // rounds of the decimal part to nearest integer
// console.log(Math.floor(otherNumber)); // floor value ; GIF 
// console.log(Math.ceil(otherNumber)); // ceiling value ; LIF 
// console.log(Math.min(2,5,67,346,6,3)); // can provide array as well
// console.log(Math.max(2,5,67,346,6,3));

//how to genearte random values in a range in js

//console.log(Math.random()); //returns a decimal number between 0 and 1 exclusively

//since it follows the range mentioned, if we shift the decimal by multiplying 10
//this will give us the range from 0 to 10 exclusively but decimal numbers
//suppose we want numbers between 10 and 20, then what can we modify?
const max = 20
const min = 10
console.log(Math.floor((Math.random()*(max-min+1)))+min);

//using floor and shifting decimal now generates numbers between 0-9;
//adding 1 gives 1-10 as new range
//to get a range of 10 - 20, we need to define the limits and range
//console.log((Math.floor((Math.random()*(max-min+1))))+min) gives us a range where max and min are inclusive
// why max - min + 1 to get range 
// and plus 1 for removing zero values as it would generate 0.24 get round off to 0