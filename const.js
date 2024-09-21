// const a; Uncaught ReferenceError: b is not defined

const a=90;
// const a=88;syntaxError: Identifier 'a' has already been declared 

// a=89;TypeError: Assignment to constant variable. at const.js:6:2

{
    const x=98
    console.log(x)
}
// console.log(x)Uncaught ReferenceError: x is not defined