//comparison operations are all good when datatype are same for LHS & RHS
//real issue starts when datatypes are different and output isn't predictable

//console.log("1">1);
//console.log("01">1);//js automatically converted string to number for comparison

// console.log(null>0);//converts to 0
// console.log(null==0);//converts to NaN
// console.log(null>=0);//converts to 0

//Important: we can't just keep on checking ki kisme convert ho rha hai, so such ambigous
//conversions must be avoided in real code (downside/inconsistency of js)

//'==' is different from other comparison operators like <,>,>=,<=,etc.,
//other comparison operators convert 'null' to '0' whereas '==' doesn't convert it to number

// console.log(undefined>=0);
// console.log(undefined<=0);
// console.log(undefined==0); // all three gives false as compared to null,eventually seekhoge

//in js == and === works differently than normal comparison operators(syntax beneath is different)

//== vs ===; == just compares whereas === is a strict comparison where datatype is checked as well

console.log(0=="0");
console.log(0==="0");

//ALWAYS FOCUS ON CLEAN CODE

