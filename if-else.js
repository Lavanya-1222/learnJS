// let number=20
// if(25<number)
//     console.log("is a greater than 25");

// else if (number==20)
//     console.log("number is equal to 20");



let number=30
if(number>25 && number<35 )
console.log("A");
else if(number<20 && number >24)
    console.log("B");


// && || !=

// Nullish coalsecing operator:= null or undefind
console.log("-------------------------------------Nullish coalsecing----------------------------");
let a;
a= 30  ?? 10
console.log(a) 
a=null ?? 20
console.log(a)
a=undefined ?? 30
console.log(a);

// falsy values 

// false,0,"",-0,null,undefined,BigInt,NaN

// truthy values

//true,1," ","0", 'false',[], {},funtion(){}


console.log("-------------------------------------bigint-----------------------------");
let bigint_number=4836432864398574398543659838798798798798798798795709430n
console.log(typeof bigint_number);
if(bigint_number)
    console.log(true)


console.log("-------------------------------------[],{}-----------------------------");

let array1=[]
let object1={}
if(array1)
    console.log(true)
if(object1)
    console.log(true);
    
console.log("-------------------------------------Ternary Operator-----------------------------");

const number2=90

number2==90? console.log("is 90") : console.log("is not 90");

