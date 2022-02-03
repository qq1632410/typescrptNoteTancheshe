var Person = /** @class */ (function () {
    function Person() {
        // 属性
        // name: string = 'zs'
        this.name = 'zs';
        this.age = 18;
    }
    // 方法
    Person.prototype.sayHello = function () {
        console.log("hello");
    };
    Person.personHello = function () {
        console.log('是类的静态方法');
    };
    // 静态属性
    Person.gender = '男';
    return Person;
}());
var zhangsan = new Person();
// 实例属性
console.log(zhangsan.name, zhangsan.age, Person.gender);
// 类属性
console.log(Person.gender);
// person.name是不能读出来的
zhangsan.age = 20;
console.log(zhangsan.name, zhangsan.age, Person.gender);
zhangsan.sayHello();
Person.personHello();
