class student{

    constructor(name,age){
      this.name=name;
      this.age=age;
    }
    hello(){
        console.log(`Hello ${this.name} ${this.age} `)
    }
static staticmethod(){


console.log("statc method");
}
}
let a=new student("lavanya",22);
a.hello();
let b=new student("lava",22);
b.hello();
student.staticmethod();