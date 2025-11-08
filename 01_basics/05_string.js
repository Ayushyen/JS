const name = "Ayush"
const repoCount = 7
console.log(name+repoCount+" Value"); //that crossed out thing we'll get to know later
//this syntax is not recommended as a good practice in modern code

console.log(`Hello my name is ${name} and my Repository count is ${repoCount}`);
//use of backticks (``) and inserting the variables dynamically to string
// is considered as a good practice in code; might see this(string interpolation) in backend side 
//advantage: allows a lot more on the go like we can implement methods using dot operator

const newName = new String('Aayush-yen')
//intialized using String constructor

console.log(newName[0]);
//String creates object where it's a series of characters (not an array) but kept as a key pair;check on browser

console.log(newName.__proto__);
//returns an object but shows empty but actually contains a lot more, can check on browser/mdn docs
//proto is an accessor property of every object instance created,
// and gives internal property of an object like charAt, length, etc.,
// no need to use .__proto__. at all as the access is even available by simply using dot

console.log(newName.charAt(1));
//remember this is just a method that returns string on the console, object isn't modified (ref:heap and stack)

//these accessor functions can be looked up on mdn docs

console.log(newName.split('-'));
//splits the string with the parameter mentioned, has other features too like limit

const newString = newName.substring(-2,5); // substring starting from 0th index till n-1
console.log(newString);
// if negative index is entered, it ignores it and comes to zero unlike python

const sliceString = newName.slice(-10,5) // string slicing from ith index till n-1 in positive direction
console.log(sliceString);//negative index is it starts counting in reverse so
// -1 is the last index and -10 here is 0th index

//mostly we'll see slice

const namae = "     Ayush    "
console.log(namae.trim()); // used to remove empty spaces as these can't be stored like this in dB
// works on whitespaces and newline characters only

const url = "https://ayushyen.com/ayush%20yen" //in URL encoding, spaces are converted to %20
console.log(url.replace('%20','-'));
 
console.log(url.includes('sh'))

