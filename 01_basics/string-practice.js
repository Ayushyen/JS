// last char program
// const string = ""
// console.log(string.at(-1))

//----------------------------------------------------------------------------------------------

// // abbreviation program
// const string = "ayush Tushar Yenurkar"
// console.log(`Original string is ${string} and the abbreviation is: ` );
// let splitString = (string.split(" "))
// let abbreviatedName = "";
// for (let index = 0; index < splitString.length; index++) {
//     splitString[index] = splitString[index].charAt(0)+".";
// }
// let finalName = "";
// for (let index = 0; index < splitString.length; index++) {
//     finalName += abbreviatedName.concat(splitString[index]);
// }
// console.log(finalName.toUpperCase());

//---------------------------------------------------------------------------------------------------

//file extension check
// const fileName = "sdiojJDAKao.PG"
// let lowerCaseName = fileName.toLowerCase();
// console.log(lowerCaseName.endsWith("jpg")||lowerCaseName.endsWith("png"));

//--------------------------------------------------------------------------------------------------

//email ID domain extraction
// const emailID = "ayushyenurkar@gmail.com"
// console.log(emailID.slice(emailID.indexOf("@"),emailID.length+1));

//-------------------------------------------------------------------------------------------------

// url domain and protocol checker
// const url = "localhost://www.google.com";
// console.log("Request type: http or https: "+url.startsWith("http"))
// console.log(".com domain: "+ url.endsWith(".com"))

//--------------------------------------------------------------------------------------------------

//search and slice
// const sentence = "Javascript is very important language these days and quite loved by everyone";
// console.log(sentence.slice(sentence.indexOf("love"),sentence.length+1));

// //pending work
// 🧩 Level 3 – Regex + Manipulation

// Task 7:
// From a sentence, extract all hashtags.
// Input: "Learning #JS #Backend #DevOps" → Output: ["#JS", "#Backend", "#DevOps"]
// → Use match() or matchAll().

// Task 8:
// Given a messy input " Hello World \n", clean it and convert to uppercase.
// → Use trim() and toUpperCase().

// 🧩 Level 4 – Production Simulations

// Task 9:
// You receive API logs like:
// "ERROR: [2025-11-08] Service unavailable at /api/login"
// Extract only the date and endpoint.
// → Use slice(), indexOf(), lastIndexOf(), and maybe split().

// Task 10:
// Implement a case-insensitive includes manually without using .includes().
// → Use indexOf() and convert both to lowercase.

// 🧩 5️⃣ Bonus: Build a Mini Utility Script
// Project: “🧹 String Sanitizer”
// Write a reusable JS function sanitizeInput(input) that:
// trims the input
// converts to lowercase
// removes special characters (except space)
// checks if it includes banned words ("spam", "ad")
// Use: trim(), toLowerCase(), replace() (though not accessor), and includes()