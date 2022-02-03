function fn(a: number):number{
  return a
}

// 泛型 在定义函数或者是类时，如果类型不明确的时候就可以使用泛型
function fn1<T>(a: T): T{
  return a
}

// 直接调用
console.log(fn1(10))

// 手动声明
console.log(fn1<string>('hello'))


function fn2<K, T>(a:K,b:T): void{
  console.log(a,b)
}

fn2<string,number>('hello',123)


interface Inter{
  length: number
}
// T 必须是Inter的实现类
function fn3<T extends Inter>(a: T): number{
  console.log(a)
  return a.length
}

console.log(fn3({length:20,name:'xxxxx'}))


class MyClass<T>{
  age: T
  constructor(age: T){
    this.age = age
  }
}

const mc = new MyClass<number>(18)
console.log(mc)

