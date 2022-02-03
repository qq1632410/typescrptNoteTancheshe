(function () {
    var obj = { name: '123', age: 1 };
    // 接口做类型声明 
    var obj1 = { name: '123', age: 1, sex: '男' };
    console.log(obj1);
    // 用一个类去实现一个接口，让类满足接口的要求
    var myClass = /** @class */ (function () {
        function myClass(name) {
            this.name = name;
        }
        myClass.prototype.sayHello = function () {
            console.log("我是实现接口的类呀");
        };
        return myClass;
    }());
    var myclass1 = new myClass('myclass1');
    console.log(myclass1);
    myclass1.sayHello();
})();
