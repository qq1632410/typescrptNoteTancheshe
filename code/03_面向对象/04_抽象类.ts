(function(){
  // abstract 抽象类，不能创建实例
abstract class Animal{
  name:string;
  age: number;
  constructor(name:string,age:number){
    this.name =  name
    this.age= age
  }
  // 抽象方法，没有方法体，只能定义在抽象类里面，子类必须重写这个抽象方法
  abstract sayHello(): void
}
class Dog extends Animal{
  sayHello(){
    console.log("hhhhhh")
  }
}
const dahuang = new Dog('dahuang',1)
console.log(dahuang)
dahuang.sayHello()
})()