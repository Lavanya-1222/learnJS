class base{
    constructor(name){
        this.sname=name;
        console.log("base class ");
    }
    info(){
      
        console.log("base info ",this.sname)
    }
}
class  derived extends base {
  constructor(){
    super("lava");
    super.info();
    console.log("DerivedC");
  }
    info(){
        // super.info();
        console.log("derived info ",this.sname)
    }

}
let a=new derived();
a.info();