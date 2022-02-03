(function(){
  // 动物类
  class Animal{
    name:string;
    age: number;
    constructor(name:string,age:number){
      this.name =  name
      this.age= age
    }
    sayHello(){
      console.log(`${this.name}在说你好呀`)
    }
  }
  // 狗类
  class Dog extends Animal{
    // name:string;
    // age: number;
    // constructor(name:string,age:number){
    //   this.name =  name
    //   this.age= age
    // }
    // sayHello(){
    //   console.log(`${this.name}在说你好呀`)
    // }
    bark(){
      console.log(`${this.name} 在叫`)
    }
  }
  const wangcai = new Dog('wangcai',2)
  wangcai.sayHello()
  console.log(wangcai)
  //  猫类
  class Cat extends Animal{
    // name:string;
    // age: number
    // constructor(name: string,age: number){
    //   this.name = name
    //   this.age = age
    // }
    // sayHello(){
    //   console.log(`${this.name}在说你好呀`)
    // }
    miaomiao(){
      console.log(`${this.name}在喵喵叫`)
    }
  }
  
  const tom = new Cat('tom',2)
  console.log(tom)
  tom.sayHello()
  tom.miaomiao()

  class Bird extends Animal{
    type: string
    constructor(name:string,age:number,type: string){
      super(name,age) // 当前类的父类，在构造函数中必须调用一下
      this.type = type
    }  
    sayHello(){
      super.sayHello() // 父类的抽象类
      console.log(`我是小鸟喳喳叫，我是${this.type} 哟`)
    }
  }

  const yingwu = new Bird('xiaoxiaoniao',0.5,'yingwu')
  console.log(yingwu)
  yingwu.sayHello()
})()

function supper(name: string, age: number) {
  throw new Error("Function not implemented.");
}
