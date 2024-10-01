console.log("-----------------------------creating object----------------------")
object={
fname:"lavanya",
lname:"miranam",
fullname: function(){
    console.log(this.fname+" "+this.lname)
},
marks:[89,78,67],

}
object.fullname()
console.log(object.marks)

console.log("-----------------------------creating object Method-2----------------------")

// in this method once you created object then you can add properties any time
let obj1=new Object()

obj1.fname="lavanya"
obj1.lname="ma**re "
console.log(obj1.fname,obj1.lname)

console.log('---------------------accesing method-----------------------------------------')

console.log("Method1=obj.property :-",obj1.fname)
console.log("Method2=obj['property'] :-",obj1['fname'])
