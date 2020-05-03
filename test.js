const Promise = require("./promise.js")
const p1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("1")
        resolve("123")
    }, 1000);
})
p1.then((res)=>{
    console.log(res);
})

console.log(typeof null)