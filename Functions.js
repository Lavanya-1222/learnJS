//function statement
function a(){
console.log("hello")
}
a();




//function expression

let b=function (){
    console.log("hello2")
}
b();




//named function Expression

let c=function xyz(){
    console.log("hellow3")
}
c();
// console.log(xyz)error
//xyz()error





//anonymous function

function d(){
    return function(){console.log("hello4")}//anonymouse function
}
let d1=d()
d1()




//first class function or first class citiesn 

function e(e1=function(){console.log("hellow5")})
{
    return e1;
}
e()()

if(0)console.log("hello nitish")