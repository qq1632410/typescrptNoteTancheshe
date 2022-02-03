class Person{
  // 属性
  // name: string = 'zs'
  readonly name: string = 'zs'
  age: number = 18
  // 静态属性
  static gender: string = '男'
  // 方法

  sayHello(){
    console.log("hello")
  }
  static personHello(){
    console.log('是类的静态方法')
  }

}

const zhangsan = new Person()
// 实例属性
console.log(zhangsan.name,zhangsan.age,Person.gender )
// 类属性
console.log(Person.gender)
// person.name是不能读出来的

zhangsan.age = 20

console.log(zhangsan.name,zhangsan.age,Person.gender )
zhangsan.sayHello()
Person.personHello()