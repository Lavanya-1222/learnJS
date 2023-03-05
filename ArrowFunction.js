let a=()=>console.log("hello :)");
a();
console.log("----------1Line Code---------- ")
let b=name=>`Welcome ${name}`;
console.log("----------1argument  with return---------- ")
console.log(b("lavanya"));

console.log("----------Multiple line and arguments----------")
let c=(fname,lname)=>{
    console.log(`Welcome ${fname} ${lname}`);
    x= String.fromCodePoint(0x1F60D)
    console.log(x);
}

c("lava","mira");