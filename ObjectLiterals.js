let n="name"
let name="name"
// -------method 1------
let obj1={
    name
}
console.log(obj1)

// -------method 2------
let obj2={
[n +"student"]:"lava"
}
console.log(obj2)

// -------method 3------
let obj3={
    name:"lava",
    show(){
        return `Welcome ${this.name}`;
    }
};
console.log(obj3.show())

// -------method 4-----
let obj4={
    name:"lava",
    'details show'(){
        return `Welcome ${this.name}`;
    }
};
// console.log(obj4.details show())
console.log(obj4['details show']())

// -------method 5------

let fame="lava";
let lame="mira";
function a(fname,lname){
    return{fname,lname}
};
console.log(a(fame,lame));
