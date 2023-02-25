const promise=fetch('https://dummyjson.com/products/3')

promise.then(function(data){return data.json()}).then(function(data){console.log(data)})