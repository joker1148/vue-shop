// // const reserve = (x) => {
// //     let int = Math.abs(x)
// //     let num = 0
// //     let MAX = 2147483647
// //     let MIN = -2147483648
// //     while (int != 0) {
// //         num = int % 10 + num * 10
// //         int = Math.floor(int / 10)
// //     }
// //     if (num >= MAX || num <= MIN) {
// //         return 0
// //     }
// //     if (x < 0) {
// //         return num *= -1
// //     }
// //     return num
// // }

// // function foo() { 
// //     console.log(a);
// //     var a = 1;
    
// // }

// // foo(); // ???


// // function sum(a){
// //     console.log(arguments)
// //     if(a>5){
// //         console.log("false")
// //         return false
// //     }
// //     return function(b){
// //         return function(c){
// //             return a+b+c
// //         }
// //     }
// // }
// // let a = sum(2)(3)
// // let b = a(5)
// // let c = a(7)
// // console.log(a,b,c)


// // function curry(fn){
// //     //获取参数个数
// //     let len = fn.length
// //     // console.log(arguments)
// //     return function temp(){
// //         //收集本地传递参数
// //         let args = [...arguments]
// //         if(args.length >= len){
// //             return fn(...args)
// //         }else{
// //             return function(){
// //                 temp(...args,...arguments)
// //             }
// //         }
// //     }
// // }


// function sub_curry(fn){
//     return function(){
//         return fn()
//     }
// }
// function curry(fn, length){
//     length = length || 4;
//     return function(){
//         if (length > 1) {
//             return curry(sub_curry(fn), --length)
//         }
//         else {
//             return fn()
//         }
//     }
// }
// var fn0 = function(){
//     console.log(1)
// }
// var fn1 = curry(fn0)
// fn1()()()() // 1

console.log(foo2)
var foo = 2
function foo2(){
    console.log("1")
}