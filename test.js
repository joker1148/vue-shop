// const Promise = require("./promise.js")
// const p1 = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         console.log("1")
//         resolve("123")
//     }, 1000);
// })
// p1.then((res)=>{
//     console.log(res);
// })

// console.log(typeof null)

// class Cat {
//   constructor (name, color) {
//     var heart = '❤️'
//     var stomach = '胃'
//     var heartbeat = function () {
//       console.log(heart + '跳')
//     }
//     this.name = name
//     this.color = color
//     heartbeat()
//     this.jump = function () {
//       console.log(this)
//       console.log('我跳起来了~来追我啊')
//     }
//   }
//   cleanTheBody = function () {
//     console.log('我会用唾液清洁身体')
//   }
//   static descript = '我这个类是用来生产出一只猫的'
//   static actingCute () {
//     console.log(this)
//     console.log('一听到猫我就想到了它会卖萌')
//   }
// }
// Cat.staticName = 'staticName'
// var guaiguai = new Cat('guaiguai', 'white')

// console.log(guaiguai)  // 同指向cat  (guaiguai,white,jump,cleanTheBody)
// guaiguai.jump()  //我跳起来了~来追我啊
// guaiguai.cleanTheBody()  //我会用唾液清洁身体
// console.log(guaiguai.descript)  //undefined
// guaiguai.actingCute()  //报错：静态方法无法调用

// Cat.actingCute() //class Cat{...}  '一听到猫我就想到了它会卖萌'
// console.log(Cat.descript) //'我这个类是用来生产出一只猫的'
// console.log(Cat.staticName)  //'staticName'


var a = new A()
function A () {}
console.log(a)

var b = new B()
class B {}
console.log(a)