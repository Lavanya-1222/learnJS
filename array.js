a1=[10,2,30]


let a=new Array()

a[0]=90
a[1]=23
a[2]=67
a[3]=68

console.log(a.length);

delete a[2]
console.log(a,a[2],a.length);
console.log("---------------------------------------------------------------------")

console.log("-------------------------sort() reverse()-------------------------------");
array=["lavanya","nitesh","vaishnavi","Anita","badhri"]
array.sort()//H.W how to works for nums and strings
console.log(array)
array.reverse()
console.log(array);


console.log("---------------------push() pop()------------------------------------------------")
console.log(array);

array.pop()
console.log(array,"pop");
array.push("Meghna")

console.log(array,"push");

console.log("---------------------shift() unshift()------------------------------------------------")
console.log(array);

array.shift()//it deletes the first value
console.log(array,"shift")
array.unshift("Leena");
console.log(array,"unshift");//it addes the value at first

console.log("--------------------------------------------concat and  join----------------------------------")

let ar1=[90,89,76,56]
let ar2=[67,78,900,543]

console.log(ar1.concat(ar2))

console.log(ar1.join(",")) // you can use "" empty space also 

console.log("---------------------------------------slice and splice---------------------------------------")

//slice()- it gives you the part of array
console.log(ar1.slice(1,3));
console.log(ar1.slice(-2,-1))


//splice(index,How many to delete ,'new value to be added)- //index denotes start position of index
//count of how many elemets you want to delete
//new value denotes a new value which is going to add in array //it is option value
//*** it changes original array

new_array=[989,67,"lava",687]

new_array.splice(2,1,"lavanya")
console.log(new_array);

new_array.splice(2)

console.log(new_array);


console.log("--------------------------------------isArray()-----------------")

console.log(Array.isArray(new_array))

console.log("-------------------------indexOf and lastindexOf------------------")
array2=["lavanya","klkl","hire","lavanya","uio"]
console.log(array2.indexOf("lavanya"))
console.log(array2.indexOf("lavanya",2))//2 is start possition form where to find index number
console.log(array2.indexOf("samarth"));// both gives -1 if not found


console.log(array2.lastIndexOf("lavanya"));
console.log(array2.lastIndexOf("lavanya",2));// it also start from 2nd position

console.log("--------------------------includes-----------------------------");
// includes()- if returns true or false if element is present
console.log(array2.includes("uio"))

console.log('----------------------some() and every()----------------------')
//some()- it takes name of funtion or function  as argument and checks 
//any one value can pass the condtion of function or not  if yes then it return true 

//every()- every element is passes the condition then it return true
array3=["agc","harru","poter","strangers"]
console.log(array3.some(checkfirstLetter=(arg)=>arg[0]=="h"))
console.log(array3.every(checkfirstLetter=(arg)=>arg[0]=="h"))


console.log("-------------------find() and findindex()---------------------------")
// find()- it returns in value which pass the condition it also take an function AS ARGUMENT
// findIndex()- it returns in index which pass the condition it also take an function AS ARGUMENT
array4=["lava","meera","keera","lavanya"]

console.log(array4.find(checkletter=(arg)=>arg[0]=="l"))
console.log(array4.findIndex(checkletter=(arg)=>arg[0]=="l"))

console.log("----------------------filter()-------------------------------------")
//filter()- if will return all values which pass the condition in array form
//it also take function as argument
//it 
console.log(array4.filter(checkletters=(arg)=>arg[0]=="l"));

console.log("----------------------fill()-----------------------------------")
// fill()-   it used to fill arrays all elements with an static value
array5=["lava","Sama","Sneha","shlok","Barbie"]
console.log(array5.fill("Lavanya"))

console.log("---------------------toString and valueOf-----------------------")
//toString()- it converts an array into string but does not change the original array
array5.toString()
console.log(array5)
console.log(array5.toString());

// valueOf()-it printes the original value of array
console.log(array5.valueOf())

console.log("----------------------------forEach------------------------------")
// forEach()- it iterate each value incide of an array without forloop
// it  takes function as argument
//forEach(function(value,index)here index start from 0 and it is option parameter
//val parameter is for each elemet in array
array4.forEach(loop=(val,index)=>console.log(index+ " "+ val))