(function(){
  // 定义一个类型，不能重复定义
  type myType = { name: string, age: number}
  const obj: myType = {name: '123', age: 1 }

  // 接口 定义一个类的结构,用来定义一个类应该有哪些属性和方法
  // 同时接口也可以当成类型声明去使用
  // 接口是重复定义的，将两个接口合为一个
  interface myInterface{
    name:string;
    age: number
  }

  interface myInterface{
    sex: string
  }

  // 接口做类型声明 
  const obj1: myInterface = {name: '123', age: 1, sex:'男'}
  console.log(obj1)

  // 接口中所有的属性都不能有实际的值
  // 所有方法属性都没有值
  interface myInter{
    name: string;
    sayHello()
  }


// 用一个类去实现一个接口，让类满足接口的要求
  class myClass implements myInter{
    name: string
    constructor(name: string){
      this.name = name
    }
    sayHello() {
      console.log("我是实现接口的类呀")
    }
  }
  const myclass1 = new myClass('myclass1')
  console.log(myclass1)
  myclass1.sayHello()
})()