let name='lava';

let name1= new String('lava')
console.log(name1)// it prints [String: 'lava']
console.log(typeof(name)
)
console.log(typeof(name1))


console.log(name===name1);


// ------------------methods----------------------------
string1='Lavanya miranam'
// -------------slice------------------
console.log(string1.slice(3,9))
// -------------charAt------------------
console.log(string1.charAt(3))
//-------------indexOf------lastIndexOf------------
console.log("lastindexOf",string1.lastIndexOf('an'))


console.log(string1.substring(-3,7))

console.log(string1.substr(1,3))

console.log(string1.toLowerCase(),string1.toUpperCase())
console.log(string1.includes("Lavanya"))//it finds the string is present or not
console.log(string1.startsWith("Lava1")) 
console.log(string1.endsWith("nam")) 
console.log(string1.search("an",4))
console.log(string1.search(/an/))//it works 
console.log(string1.indexOf(/an/))//it gives you -1 
/*IndexOf() - it accepts string literals or string objects but not regular expressions. 
It also accepts a zero-based integer value to start its search from, e.g.:

//"babyelephant".indexOf("e"); // gives you 4
"babyelephant".indexOf("e",5); // gives you 6 as the search starts from 6th position or 5th index.
var m= /e/; "babyelephant".indexOf(m); //gives -1 as it doesnt accepts regular expressions.

Search() - accepts both string literals or string objects and regular expressions.
 But it doesn't accepts a index to start the search from.
*/
s="lavANya miranam"
console.log(string1.match(/an/g))
console.log(s.match(/An/gi))
console.log(string1.match(/lava/i))

//The match() method in JavaScript is used for identifying 
//and retrieving substrings that fit a specified pattern, defined by a regular expression. 
//The match() method in JavaScript is used for identifying and 
//retrieving substrings that fit a specified pattern, defined by a regular expression. 
//g is for every place match and i is for ignore casesencitiveness //gi is for both

console.log(string1.replace("Lava","vava"),' ',string1)
console.log(string1.replace(/an/g,"sm"))
// JavaScript replace() method is used for manipulating strings. It allows you to search for a specific
// part of a string, called a substring, and then replace it with another substring.
//it does not changes the original string


s2="            lavanya miranam       "
console.log("trim method=",s2.trim())


// String Functions all 
//String {'', anchor: ƒ, at: ƒ, big: ƒ, blink: ƒ, …}
// anchor
// : 
// ƒ anchor()
// at
// : 
// ƒ at()
// big
// : 
// ƒ big()
// blink
// : 
// ƒ blink()
// bold
// : 
// ƒ bold()
// charAt
// : 
// ƒ charAt()
// charCodeAt
// : 
// ƒ charCodeAt()
// codePointAt
// : 
// ƒ codePointAt()
// concat
// : 
// ƒ concat()
// constructor
// : 
// ƒ String()
// endsWith
// : 
// ƒ endsWith()
// fixed
// : 
// ƒ fixed()
// fontcolor
// : 
// ƒ fontcolor()
// fontsize
// : 
// ƒ fontsize()
// includes
// : 
// ƒ includes()
// indexOf
// : 
// ƒ indexOf()
// isWellFormed
// : 
// ƒ isWellFormed()
// italics
// : 
// ƒ italics()
// lastIndexOf
// : 
// ƒ lastIndexOf()
// length
// : 
// 0
// link
// : 
// ƒ link()
// localeCompare
// : 
// ƒ localeCompare()
// match
// : 
// ƒ match()
// matchAll
// : 
// ƒ matchAll()
// normalize
// : 
// ƒ normalize()
// padEnd
// : 
// ƒ padEnd()
// padStart
// : 
// ƒ padStart()
// repeat
// : 
// ƒ repeat()
// replace
// : 
// ƒ replace()
// replaceAll
// : 
// ƒ replaceAll()
// search
// : 
// ƒ search()
// slice
// : 
// ƒ slice()
// small
// : 
// ƒ small()
// split
// : 
// ƒ split()
// startsWith
// : 
// ƒ startsWith()
// strike
// : 
// ƒ strike()
// sub
// : 
// ƒ sub()
// substr
// : 
// ƒ substr()
// substring
// : 
// ƒ substring()
// sup
// : 
// ƒ sup()
// toLocaleLowerCase
// : 
// ƒ toLocaleLowerCase()
// toLocaleUpperCase
// : 
// ƒ toLocaleUpperCase()
// toLowerCase
// : 
// ƒ toLowerCase()
// toString
// : 
// ƒ toString()
// toUpperCase
// : 
// ƒ toUpperCase()
// toWellFormed
// : 
// ƒ toWellFormed()
// trim
// : 
// ƒ trim()
// trimEnd
// : 
// ƒ trimEnd()
// trimLeft
// : 
// ƒ trimStart()
// trimRight
// : 
// ƒ trimEnd()
// trimStart
// : 
// ƒ trimStart()
// valueOf
// : 
// ƒ valueOf()
// Symbol(Symbol.iterator)
// : 
// ƒ [Symbol.iterator]()
// [[Prototype]]
// : 
// Object
// constructor
// : 
// ƒ Object()
// hasOwnProperty
// : 
// ƒ hasOwnProperty()
// isPrototypeOf
// : 
// ƒ isPrototypeOf()
// propertyIsEnumerable
// : 
// ƒ propertyIsEnumerable()
// toLocaleString
// : 
// ƒ toLocaleString()
// toString
// : 
// ƒ toString()
// valueOf
// : 
// ƒ valueOf()
// __defineGetter__
// : 
// ƒ __defineGetter__()
// __defineSetter__
// : 
// ƒ __defineSetter__()
// __lookupGetter__
// : 
// ƒ __lookupGetter__()
// __lookupSetter__
// : 
// ƒ __lookupSetter__()
// __proto__
// : 
// (...)
// get __proto__
// : 
// ƒ __proto__()
// set __proto__
// : 
// ƒ __proto__()