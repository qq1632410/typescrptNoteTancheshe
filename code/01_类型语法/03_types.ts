// // 使用字面量进行类型声明,相当于声明常量类型，更改会有错误提示
// let a: 10;
// a = 10
// // a = 11 //

// // 多变量
// let b: 'male' | 'female'
// // b或者是male或者是female
// b = 'male'
// b = 'female'
// // b = 'hello'  // 错误提示


// // 可以使用 | 来链接多个类型

// let c: number | string
// c = 1
// c ='2'
// // c= false 错误类型提示

// // any 任意类型，一个类型设置为any以后相当于对该变量关闭了TS的类型检测 不建议使用
// let d:any
// d = 10
// d = 'hello'
// d = false 
// let e; // 隐式any

// // unkonw 是一个类型安全的any
// let f: unknown;
// f = 10
// f = true
// f = 'hello'

// let s: string
// s = d // any类型可以复制给任意变量而没有错误提示
// // s = f  // 将unkown 给其他类型会有类型错误提示
// if(typeof f === 'string'){ // 但是经过类型判断的unkown 是可以赋值的
//   s = f
// }

// s = f as string // 类型断言，用于告诉解析器变量实际类型
// s = <string> f // 类型断言


// // void
// function fn(): string| number {return '123'}
// function fn1(): void{}  // 没有返回值或者返回空值 null/undefine
// function fn2(): never{ throw new Error('报错了')}

