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
(function () {
    // 动物类
    var Animal = /** @class */ (function () {
        function Animal(name, age) {
            this.name = name;
            this.age = age;
        }
        Animal.prototype.sayHello = function () {
            console.log("".concat(this.name, "\u5728\u8BF4\u4F60\u597D\u5440"));
        };
        return Animal;
    }());
    // 狗类
    var Dog = /** @class */ (function (_super) {
        __extends(Dog, _super);
        function Dog() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        // name:string;
        // age: number;
        // constructor(name:string,age:number){
        //   this.name =  name
        //   this.age= age
        // }
        // sayHello(){
        //   console.log(`${this.name}在说你好呀`)
        // }
        Dog.prototype.bark = function () {
            console.log("".concat(this.name, " \u5728\u53EB"));
        };
        return Dog;
    }(Animal));
    var wangcai = new Dog('wangcai', 2);
    wangcai.sayHello();
    console.log(wangcai);
    //  猫类
    var Cat = /** @class */ (function (_super) {
        __extends(Cat, _super);
        function Cat() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        // name:string;
        // age: number
        // constructor(name: string,age: number){
        //   this.name = name
        //   this.age = age
        // }
        // sayHello(){
        //   console.log(`${this.name}在说你好呀`)
        // }
        Cat.prototype.miaomiao = function () {
            console.log("".concat(this.name, "\u5728\u55B5\u55B5\u53EB"));
        };
        return Cat;
    }(Animal));
    var tom = new Cat('tom', 2);
    console.log(tom);
    tom.sayHello();
    tom.miaomiao();
    var Bird = /** @class */ (function (_super) {
        __extends(Bird, _super);
        function Bird(name, age, type) {
            var _this = _super.call(this, name, age) // 当前类的父类，在构造函数中必须调用一下
             || this;
            _this.type = type;
            return _this;
        }
        Bird.prototype.sayHello = function () {
            _super.prototype.sayHello.call(this); // 父类的抽象类
            console.log("\u6211\u662F\u5C0F\u9E1F\u55B3\u55B3\u53EB\uFF0C\u6211\u662F".concat(this.type, " \u54DF"));
        };
        return Bird;
    }(Animal));
    var yingwu = new Bird('xiaoxiaoniao', 0.5, 'yingwu');
    console.log(yingwu);
    yingwu.sayHello();
})();
function supper(name, age) {
    throw new Error("Function not implemented.");
}
