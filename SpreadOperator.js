let a=[10,20,30]
console.log(a);
console.log(...a);
console.log([...a]);
b=[...a]
console.log(b);
b.push(60);
c=[...a,...b]
console.log(c);
c=[80,...a,...b,90]
console.log(c);

let obj1={name:"lava"}
let obj2={age:22}
obj3={...obj1,...obj2}
console.log(obj3)