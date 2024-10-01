//Date's In Js

let now=new Date()

console.log("---------------------------------Date----------------------------------");
console.log(now)
// You cannot omit month. If you supply only one parameter it will be treated as milliseconds.
let date1=new Date(2018)
console.log(date1)

console.log("------------------------toDateString---------------------------------")
console.log(now.toDateString())//it prints date in readable form
console.log("------------------------toString---------------------------------")
console.log(now.toString())
console.log("------------------------toLocaleString---------------------------------")
console.log(now.toLocaleString())

console.log("---------------------------------Date---Methods-------------------------------");
console.log(now.getDate(),"getDate()-it return day of the date")//it return day of the day
console.log(now.getMonth(),"getMonth()-it return month of that date starts from 0 index")
console.log(now.getFullYear(),"getFullYear()-it return year of the date");
console.log(now.getDay(),'getDay()-it return monday or tuseday in number format starts from 0=sunday index')

console.log("---------------------------------Time---Methods-------------------------------");
console.log(now.getHours(),"getHours it return hour");
console.log(now.getMinutes(),"getMinutes it return Minutes");
console.log(now.getSeconds(),"getSeconds it return Seconds");
console.log(now.getMilliseconds(),"getMilliseconds it return milliSeconds");

console.log("------------------------set Date----------------------------------------------");
now.setDate(1)
console.log(now.toDateString());
now.setMonth(9)
console.log(now.toDateString());
now.setFullYear(2025);
console.log(now.toDateString());
now.setHours(13)
console.log(now.getHours())
now.setMinutes(15)
console.log(now.getMinutes())

console.log(now.toLocaleString('default',{weekday:"long"}))

