person1={
    name:"lavanya",
age:23,
 

}
person1_Education={
    course:"B.tech",
    grade: "A"
}

console.log("-------------------------------assign()------------------------")
// it returns one or more sourse object to destination
console.log(Object.assign(person1,person1_Education))

console.log("-------------------------------create()------------------------")
//it creates new object with exsisting obuject with all properties
let female=Object.create(person1)
console.log(female);
female.age=24
console.log(female);

console.log("--------------------------------defineProperties---------------------");
// console.log(Object.defineProperties(person1))

Object


