// const promise=fetch('https://dummyjson.com/products/3')

// promise.then(function(data){return data.json()}).then(function(data){console.log(data)})

// --------------method1--------------
let lava=true
const promise1=new Promise(function(resolve,reject){
    if(lava)
    resolve(" success")
    else
    reject("failture")
})
console.log(promise1)

// --------------method 2--------------
function comp(lava){
    console.log("panding wait")
    return new Promise(function(resolve,reject){
        if(lava)
        resolve("success 2")
        else
        reject("failture 2")
    })
}
console.log(comp(true))

//--------------method 3--------------
function comp1(lava1){
    return new Promise(function(resolve,reject){
        if(lava1)
        resolve("success 3")
        else
        reject("failture 3")
    })
}

comp1(true).then((result)=>console.log(result))
comp1(false).catch((result)=>console.log(result))

//--------------method 4--------------
function comp2(lava2){
    return new Promise(function(resolve,reject){
        if(lava2)
        resolve("success 4")
        else
        reject("failture 4")
    })
}

comp2(false).then((result)=>console.log(result)).catch((result)=>console.log(result))