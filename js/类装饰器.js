"use strict";
//装饰器去就是一种方法，可以注入到类，方法、属性参数上来扩展类、属性、方法、参数的功能
//类装饰器
// function logClass(params: string) {
//     return function (target: any) {
//         console.dir(target); //target就是类
//         console.log(params);
//         target.prototype.url = params;
//     }
// }
// @logClass('http')
// class Person {
//     get(): void {
//     }
// }
// console.dir(Person)
//还可以利用构造函数重载
// function logClass(target: any) {
//     return class extends target {
//         name: string = '我是修改后的数据'
//         get() {//方法也要重载
//         }
//     }  
// }
// @logClass
// class Person {
//     name: string | undefined;
//     get(): void {
//     }
//     constructor(name: string) {
//         this.name = name
//     }
// }
// console.dir(new Person('yanxu').name)
//属性装饰器
// function logClass(params: string) {
//     return function (target: any, attr: any) {
//         //target是类的原型对象 也就是prototype  attr是属性的名字
//         console.log(target)
//         console.log(attr)  //也就是说可以直接修改原型上的数据
//     }
// }
//es5中的构造函数和es6为什么直接把函数生命在原型对象上，因为在es5中要创建多个实例时，要访问同一个方法，如果方法定义在
//构造函数中，则每个实例访问时都需要额外开辟一块内存，内存浪费了，所以要定义在原型对象上(prototype)。
// class Person {
//     @logClass('http')
//     name: string | undefined;
//     get(): void {
//     }
// }
//方法装饰器  ：可以修改
// function get(params: string) {
//     return function (target: any, funcName: any, desc: any) {  //接收三个参数  第一个是原型对象 ，二是函数名字，三是描述信息 描述信息.value 就是函数本身
//         let ofunc = desc.value; //先把原先的方法存起来
//         desc.value = function (...arg: any[]) {  //然后定义一个新的方法 当实例化的时候先调用这个，对传进来的参数进行约束
//             let arg1 = arg.map(item => {
//                 return item + ''
//             })
//             console.log(arg1)
//             ofunc.apply(this, arg1) //执行原来的方法把 约束完的方法传进去
//         }
//     }
// }
// class Person {
//     name: string | undefined;
//     @get('http')
//     getData(...arg: any[]): void {
//         console.log('111') //最后执行
//     }
// }
// let d = new Person();
// d.getData('111', 111)
//装饰器执行顺序
//属性->方法->方法参数->类
