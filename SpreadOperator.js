let a=[10,20,30]
console.log(a);//array
console.log(...a);//SP oprt
console.log([...a]);//array
b=[...a];
console.log("after array A assign",b);
a.push(60);
console.log("after push 60 in A, B=",b)
console.log("after push 60 in A, A=",a)// only a is change b is same if you doing this with normal b=a then it will change both a and b as 10,20,30,60
c=[...a,...b]// you can ad 2 array with sp opt 
console.log(c);

c=[80,...a,...b,90]
console.log(c);

let obj1={name:"lava",Status:'happy'}
let obj2={age:22}
obj3={...obj1,...obj2}//you can also use sp opt for object 
console.log(obj3)







Name="name";
let arrafun=(Name)=>{console.log(Name)}
arrafun();