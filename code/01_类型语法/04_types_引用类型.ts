//  object 表示一个js对象
let a:object
a = {}
a = function () {}

let b: {name: string, age?: number}  // 对对象里面的属性和值，和数量进行控制
// 问号表示age属性可有可无（可选）
b  = {name: 'zhengsan'}
b = {name: 'zddd',age:18}
// b = {name: 'vvv',sex :'222'} 类型错误在定义时没有进行sex属性的声明

let c: {name: string,[propName: string]:any} // 表示任意类型的属性
// c = {age:1} 没有name
c = {name: 'b', b:1,r:5}

// 函数结构声明
let d : (a: number,b:number) => number; //便是d是一个传两个number类型且返回也是number类型的函数
d = function (n1, n2) {return n1+n2}


// array
let e: string[] ; // 字符串数组
e = ['1','2']
// e = [1,2,3]   //类型错误

let f: Array<number>
f = [1,2,3,4]
// f = ['1','2','3'] // 类型错误

// 元祖 turple 固定长度的数组
let h: [string,string]
h = ['123' ,'ddd']
// h = ['1','2','3'] // 类型长度错误

// enum 枚举,把可能的值都列举出来
let i: { name: string,gender: 0 | 1}
i = {
  name: '2',
  gender : 0
}

enum Gender{
  male = 0,
  female = 1
}

let g: { name: string,gender: Gender}
g = {
  name: '2',
  gender : 0
}


let j: {name: string} & {age: number}
// j 必须要同时满足这俩

// 类型的别名
type myTyps = string  // 此时 myType就是string的别名，是和string一致的

type chooice = 1| 2| 3| 5| 4
let k:chooice
let m: chooice

k =1
// k =6  //类型错误