console.log("----------1Line Code---------- ")
let a=()=>console.log("hello :)");
a();

console.log("----------1argument  without return keyword ---------- ")
let b=name=>`Welcome ${name}`;// if you writing  in one line no need of write return keyword use () brackets for returning objs
console.log(b("lavanya"));   // if you writing in {} multiple line code then you have to write return keyword


console.log("----------Multiple line and arguments-with return keyword ---------")
let c=(fname,lname)=>{
    console.log(`Welcome ${fname} ${lname}`);
    x= String.fromCodePoint(0x1F60D)
    // console.log(x);
    return x
}

console.log(c("lava","mira"));