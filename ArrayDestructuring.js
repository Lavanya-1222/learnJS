user=["lava",22]
let [name,age]=user;
console.log(name,age)

console.log("----------method 1--------")

user=["lava",22]
 [name,age=23]=user;
console.log(name,age)

console.log("----------method 2--------")
let users=["lava",22,["female",500000]]
 let [name1,age1,[gender,salary]]=users;
console.log(name1,age1,gender,salary)

console.log("----------method 3--------")
let user1=["lava",22];

function b([name2,age2]){
    console.log(name2,age2);
}
b(user1);

console.log("----------method 4--------")
let user2=["lava",22,"F"];
let [name4,...arg]=user2;
console.log(arg[0])

console.log("----------method 5--------")
function c(){
    return ["lavanya",23];
}
let [name3,age3]=c();
console.log(name3,age3);
