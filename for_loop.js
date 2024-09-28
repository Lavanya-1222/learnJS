for(let i=0;i<5;i++)
    console.log(i)



console.log("-------------------------multiple loop-------------------------")
for(let i=0;i<6;i++)
{console.log('loop number',i)
    for(let j=0;j<5;j++)
        console.log("j=",j)
}


console.log("-------------------------break and continue--------------------");

for(let i=20;i<28;i++)

   {console.log("i=",i) 
    if(i==22){
    console.log("happy birthday lavanya")
    break}
    }
console.log("-------------------------------continue--------------------------")
    for(let i=15;i<25;i++)

        {console.log("i=",i) 
         if(i==19){
         console.log("Today is raksha bandan")
         continue;
        }
         }

console.log("----------------------------while loop------------------------")

let a=50;
while(a>10)
{
    console.log(a);
    a=a-10    
}

console.log("----------------------------do while loop------------------------")
let a1=50

do {

    console.log(a1)
    a1=a1-10;
}while(a1>40)