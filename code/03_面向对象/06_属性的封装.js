var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(
// function(){
//   class Person{
//     name: string
//     age: number
//     constructor(name: string,age: number){
//       this.name = name
//       this.age = age
//     }
//   }
//   const per = new Person('张三', 18)
//   console.log(per)
//   per.name = '李四'
//   console.log(per)
// 此时可以随便修改一个实例的内部属性，会有安全隐患
// 改进
function () {
    var Person = /** @class */ (function () {
        function Person(name, age) {
            this._name = name;
            this.age = age;
        }
        Object.defineProperty(Person.prototype, "name", {
            // // 将私有属性暴露
            // getName(){
            //   return this.name
            // }
            // setName(val:string){
            //   // 判断是否合法，可以设置更改
            //   this.name = val
            // }
            // getAge(){
            //   return this.age
            // }
            // setAge(val:number){
            //   this.age = val
            // }
            // TS 中的getter方法的方式
            get: function () {
                return this._name;
            },
            set: function (value) {
                // 判断传入值是否合法
                this._name = value;
            },
            enumerable: false,
            configurable: true
        });
        return Person;
    }());
    var per = new Person('张三', 18);
    console.log(per);
    // per.name = '李四' // 此时不能修改name 还有语法错误
    // console.log(per)
    // 常规方法暴露
    // conosle.log(per.getName())
    // per.setName('李四')
    // console.log(per)
    // getter
    console.log(per.name);
    per.name = '李四';
    console.log(per);
    // 属性修饰符
    var A = /** @class */ (function () {
        function A(name, age, sex) {
            this.name = name;
            this.age = age;
            this, sex = sex;
        }
        return A;
    }());
    var B = /** @class */ (function (_super) {
        __extends(B, _super);
        function B() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        B.prototype.text = function () {
            console.log(this.name);
            // console.log(this.age) // age是私有类型，在子类中也不能被访问，会有语法错误提示
            console.log(this.sex);
        };
        return B;
    }(A));
    // 属性修饰福也可以放在constructor中
    var C = /** @class */ (function () {
        function C(name, age, sex) {
            this.name = name;
            this.age = age;
            this.sex = sex;
        }
        return C;
    }());
    var c = new C('c1', '20', '男');
    console.log(c);
})();
