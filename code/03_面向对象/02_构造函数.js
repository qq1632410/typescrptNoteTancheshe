var Dog = /** @class */ (function () {
    function Dog(name, age) {
        this.name = name;
        this.age = age;
    }
    Dog.prototype.bark = function () {
        console.log("".concat(this.name, "\u5728\u65FA\u65FA\u53EB"));
    };
    return Dog;
}());
var dog = new Dog('旺财', 1);
var dog2 = new Dog('大黄', 2);
console.log(dog, dog2);
dog.bark();
dog2.bark();
