let name='lava';

let name1= new String('lava')
console.log(name1)// it prints [String: 'lava']
console.log(typeof(name))//type is string
console.log(typeof(name1))//type is object


console.log(name===name1);//false


// ------------------methods----------------------------
string1='Lavanya miranam'
console.log("-------------slice------------------")
console.log(string1.slice(0))
console.log(string1.slice(3,9))
console.log("slice by negative value",string1.slice(-1))//it return last char
console.log(string1.slice(-3))//it return 3 char from last
console.log(string1.slice(-3,-1))//it will perform like [)
console.log(string1.slice(16,5))// it gives you empty charecter if start>stop


console.log("-------------substring------------------------------")
console.log(string1.substring(1,3))
console.log(string1.substring(-3))//If any argument is negative or is NaN, it is treated as 0.
console.log(string1.substring(14,4))//If start > stop, then the function swaps both arguments.


console.log("-------------charAt-------------------------")
console.log(string1.charAt(3))//charecter at this position starts from 0

console.log("----------------lastIndexOf------------")
console.log("lastindexOf",string1.lastIndexOf('an'))// it gives you last index of duplicate element present


console.log("-----------------------substr-------------------------------------")
console.log(string1.substr(1,3))// start from length (how many charecters)

console.log("---------------------------toLowerandUPPer---------------------------------")
console.log(string1.toLowerCase(),string1.toUpperCase())

console.log("-----------------------includes-------------------------------------")
console.log(string1.includes("Lavanya"))//it finds the string is present or not return true and false value
                                        //never take regular expresion /fhg/
console.log(string1.includes("Sam"))

console.log("-------------------startsWith---------endsWith--------------------------------")
console.log(string1.startsWith("Lava1")) 
console.log(string1.endsWith("nam")) 


console.log("-------------------serach-----------------------------------------")
console.log(string1.search("an",4))//  But it doesn't accepts a index to start the search from.
console.log(string1.search(/an/))//Search() - accepts both string literals or string objects and regular expressions.


console.log("-------------------indexOf-----------------------------------------")
console.log(string1.indexOf(/an/))//it accepts string literals or string objects but not regular expressions.  
//It also accepts a zero-based integer value to start its search from, e.g.:
//"babyelephant".indexOf("e"); // gives you 4
console.log(string1.indexOf("an",4));//it accepts starts integer value




console.log("-----------------------match-------------------------------------")
s="lavANya miranam"

console.log(string1.match(/an/g))
console.log(s.match(/An/gi))
console.log(string1.match(/lava/i))

//The match() method in JavaScript is used for identifying 
//and retrieving substrings that fit a specified pattern, defined by a regular expression. 
//and return an array at output  
//g is for every place match and i is for ignore casesencitiveness //gi is for both


console.log("----------------------------replace--------------------------------")
console.log(string1.replace("Lava","vava"))
console.log(string1.replace(/an/g,"sm"))//it will replace all over the string


console.log("-------------------------------trim-----------------------------")

s2="            lavanya miranam       "
console.log("trim method=",s2.trim())//it remove spaces
console.log("trim method=",s2.trimEnd())
console.log("trim method=",s2.trimStart())

console.log("--------------charCodeAt-------------fromCharCode---------------------------------")
console.log(s2.charCodeAt(1))// it will return ASCII Code
console.log(String.fromCharCode(83))// it return the value related string 


console.log("--------------------concat----------------------------------------")
console.log(s.concat(string1,s2))//you can concate two or more variables

console.log("--------------------------split----------------------------------")
console.log(string1.split("a"))//split by char you can give space also

console.log("--------------------------repeat----------------------------------")
console.log(string1.repeat(3))//it repeats number of times 

a=true;
a1=89
console.log("--------------------------toString----------------------------------")
console.log(a.toString(),typeof a,typeof a.toString() )
console.log(a1.toString(),typeof a1,typeof a1.toString() )// it converts to string 

console.log("--------------------------valueOf----------------------------------")
console.log(string1.valueOf())// it will return value
// String Functions all 
//String {'', anchor: ƒ, at: ƒ, big: ƒ, blink: ƒ, …}
 //anchor
//at()
//big()
//blink()
//bold()
//charAt()
// charCodeAt()
// codePointAt()
// concat()
// endsWith
//fixed()
//fontcolor()
// fontsize()
//includes()
// indexOf()
// isWellFormed
// italics
// lastIndexOf
// length
// link
// localeCompare
// match
//matchAll
// normalize
// padEnd
// padStart
// repeat
// replace
// replaceAll
// search
// slice
// small
// split
// startsWith
// strike
// sub
// substr
// substring
// sup
// toLocaleLowerCase
// toLocaleUpperCase
// toLowerCase
// toString
// toUpperCase
// toWellFormed
// ƒ trim()
// trimLeft
// trimRight
// trimEnd()
// trimStart
// valueOf
// [[Prototype]]
// Object
// hasOwnProperty
// isPrototypeOf
// propertyIsEnumerable
// toLocaleString
// toString
// valueOf
// __defineGetter__
// __defineSetter__
// __lookupGetter__
// __lookupSetter__
// __proto__
// get __proto__
// set proto__()