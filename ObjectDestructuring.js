let obj={
    name:"lava",
    age:22
}
let {name,age}=obj;
console.log(name,age);

console.log("----------method 2-using alias-------")
let obj1={
    name1:"lava",
    age1:22,
  }
let {name1: n,age1: a}=obj1;
console.log(n,a);

console.log("----------method 2-nested-object-------")
let obj6={
    name7:"lava",
    age7:22,
    inobj:{
        gender:"female",
           }
}
let {name7,inobj:{gender}}=obj6;
console.log(gender)
console.log("----------method 2-1-nested-object--------")
let obj7={
    name8:"lava",
    age9:22,
    inobj2:{
        gender1:"female",
           }
}
let {name8,inobj2}=obj7;
let {gender1}=inobj2;
console.log(gender1)
console.log("----------method 3--using function parameter------") 
function abc({name2,age2}){
    console.log(name2,age2);
}
abc({name2:"lava",age2:22})

console.log("----------method 4-restOp-------")
let obj3={
    name5:"lava",
    age5:22,
    gender:"F"
}
let {name5,...agr}=obj3;
console.log(agr['gender'])

console.log("----------method 5-return-------")
function abcd(){
    return {name6:"lava",age6:22};
}
let {name6,age6}=abcd();
console.log(name6,age6)