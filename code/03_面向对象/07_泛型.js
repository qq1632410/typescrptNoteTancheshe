function fn(a) {
    return a;
}
// 泛型 在定义函数或者是类时，如果类型不明确的时候就可以使用泛型
function fn1(a) {
    return a;
}
// 直接调用
console.log(fn1(10));
// 手动声明
console.log(fn1('hello'));
function fn2(a, b) {
    console.log(a, b);
}
fn2('hello', 123);
// T 必须是Inter的实现类
function fn3(a) {
    console.log(a);
    return a.length;
}
console.log(fn3({ length: 20, name: 'xxxxx' }));
var MyClass = /** @class */ (function () {
    function MyClass(age) {
        this.age = age;
    }
    return MyClass;
}());
var mc = new MyClass(18);
console.log(mc);
