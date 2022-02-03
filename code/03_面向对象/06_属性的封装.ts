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
    function(){
      class Person{
        // 属性修饰符
        // public: 所有可见,默认
        // private: 仅内部可见
        // protected： 进当前和子类能访问
        private _name: string
        private age: number
        constructor(name: string,age: number){
          this._name = name
          this.age = age
        }
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
        get name(){
          return this._name
        }
        set name(value: string){
          // 判断传入值是否合法
          this._name = value
        }
      }
  
      const per = new Person('张三', 18)
      console.log(per)
      // per.name = '李四' // 此时不能修改name 还有语法错误
      // console.log(per)

      // 常规方法暴露
      // conosle.log(per.getName())
      // per.setName('李四')
      // console.log(per)

      // getter
      console.log(per.name)
      per.name = '李四'
      console.log(per)




      // 属性修饰符
      class A {
        public name: string
        private age: number
        protected sex: string
        constructor(name: string,age:number,sex:string){
          this.name = name
          this.age = age
          this,sex = sex
        }
      }
      class B extends A {
        text(){
          console.log(this.name)
          // console.log(this.age) // age是私有类型，在子类中也不能被访问，会有语法错误提示
          console.log(this.sex)
        }
      }

      // 属性修饰福也可以放在constructor中
      class C {
        constructor(public name: string,private age:string,protected sex: string){

        }
      }
      const c = new C('c1','20','男')
      console.log(c)
  }
)()