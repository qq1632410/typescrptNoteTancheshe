class Dog{
  name: string;
  age:number;
  constructor(name:string,age:number){
    this.name = name
    this.age = age
  }
  bark(){
    console.log(`${this.name}在旺旺叫`)
  }
}
const dog = new Dog('旺财',1)
const dog2 = new Dog('大黄',2)
console.log(dog,dog2)
dog.bark()
dog2.bark()