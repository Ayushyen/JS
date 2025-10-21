"use strict";
/*
2 versions of js: modern and old, to provide context to the 
execution environment, use strict is used in the file to say I'm
based on new JS convention and this will enable all the features
of new JS like arrow functions, etc., to get old JS, there's no keyword
as of now, also by default it detects the context but it's a 
good code practice to mention it 
*/

//alert(3+3) //will work in browser with a prompt box
//won't work here in node but there's a way to do this here too

/*
number => limit is around 2^53, mostly this is used as this is more than enough
bigint => more capacity; useful where higher numbers are dealt like HFT, numerous requests are handled
string => anything defined in "" or ''; empty string is not null or undefined!!!!
null => standalone value; type of object(debated: blunder or gr8 move?); used to specify null value, where we can't define 0 as it's a critical point
undefined => a special data type in js, default values for variable or any operation that leads to it
boolean => true or false
symbol => to determine uniqueness for components; will see with react and figma stuff
object => will see later
*/
console.log(typeof null);
console.log(typeof undefined);

//follow ecma and mdn docs for good code practices