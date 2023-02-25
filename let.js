// console.log(a)//t ReferenceError: Cannot access 'a' before initialization
let a=90
// let a=900 Uncaught SyntaxError: Identifier 'a' has already been declared (at let.js:3:5)
let b;
function a1(){
    
    console.log(a)
}
a1()
console.log(b)

{
    let x=98
    console.log(x)
}
// console.log(x)  ReferenceError: x is not defined


