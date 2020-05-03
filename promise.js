// let p1 = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         console.log("111")
//         resolve("222")
//     }, 2000);
// })

// let p2 = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         console.log("333")
//         resolve("444")
//     }, 3000);
// })

// let p3 = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         console.log("555")
//         resolve("666")
//     }, 4000);
// })

// Promise.all([p1,p2,p3]).then((res)=>{
//     console.log(res)
// })

// Promise.race([p1,p2,p3]).then((res)=>{
//     console.log(res)
// })
// // p.then((res)=>{
// //     console.log(res)
// //     return new Promise((resolve,reject)=>{
// //         setTimeout(() => {
// //             console.log("333")
// //             resolve("444")
// //         }, 2000);
// //     })
// // }).then((res)=>{
// //     console.log(res)
// // })


class Promise{
    constructor(executor){
        this.state = "pending"
        this.value = undefined
        this.reason = undefined
        this.onResolvedCallBack = []
        this.onRejectedCallBack = []
        const resolve = (value)=>{   
            if(this.state == "pending"){
                this.state = "fulfilled"
                this.value = value
                this.onResolvedCallBack.forEach(fn => fn())
            }
        }
        const reject = (reason)=>{
            if(this.state === 'pending'){
                this.state = "rejected"
                this.reason = reason
            }
        }
        executor(resolve,reject)
    }
    then(onFulfilled,onRejected){
        const promise2 =  new Promise((resolve,reject)=>{
            if(this.state === "fulfilled"){
                //进入下一流程,不然拿不到promise2
                setTimeout(()=>{
                    const x = onFulfilled(this.value)  //promise/123/"1234"
                    resolvePromise(promise2,x,resolve,reject)
                })
            }
            if(this.state === "onRejected"){
                setTimeout(()=>{
                    const x = onRejected(this.reason)
                    resolvePromise(promise2,x,resolve,reject)
                })
            }
            if(this.state == "pending"){
                this.onResolvedCallBack.push(()=>{
                    setTimeout(()=>{
                        const x = onFulfilled(this.value)
                        resolvePromise(promise2,x,resolve,reject)
                    })
                })
                this.onRejectedCallBack.push(()=>{
                    setTimeout(()=>{
                        const x = onRejected(this.reason)
                        resolvePromise(promise2,x,resolve,reject)
                    })
                })
            }
        })
        return promise2
    }
}

const resolvePromise = (promise2,x,resolve,reject)=>{
    console.log(promise2,x,resolve,reject)
    if(promise2 === x){
        return reject(new TypeError("循环引用"))
    }
    //判断是不是promise
    if(typeof x === "function" || typeof x === "object" && x !== null){
        try{
            const then = x.then
            if(typeof then === "function"){  //认为是promise
                then.call(x,y =>{
                    // resolve(y)
                    //递归解析
                    resolvePromise(promise2,y,resolve,reject)
                },r=>{
                    reject(err)
                })
            }
        }catch(err){
            reject(err)
        }
    }else{
        resolve(x)
    }
}

//发布订阅者模式

module.exports = Promise