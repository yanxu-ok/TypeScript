// console.log("你好")

//typescript中的数据类型
// 增加了类型校验 
//布尔类型
//数字类型
//字符串类型
//数组类型

//第一种定义数组的形式
// let arr: number[] = [1, 2, 3, 4]
// //第二种
// let arr1: Array<number> = [1, 2, 3, 4]

// //第三种
// let arr5: any[] = [1, '2312', '4214']

// //元组类型（tuple）

// let arr3: [number, string] = [1, '1']
//给数组中每一个位置指定数据类型


//枚举类型（enum）

// enum flag {
//     ok = 0,
//     no = 1
// }
// let num = flag.ok
// console.log(num)
//任意类型（any）
// let obj: any = document.getElementById('app');
// obj.style.color = 'red';

//null和undefined

// let age1: number | undefined;
// console.log(age1)
//定义未赋值就是undefined


//void 类型

// function fn(params: number): void {
//     console.log("run")
// }
//如果方法没有返回值 则标明void
//never类型

// let age: string = 'true'
// age = "123"


//ts  函数重载
//第一种重载方式
// function getInfo(params: number): void;

// function getInfo(arr: any[]): void;

// function getInfo(arr: any): void {
//     if (typeof arr === 'number') {
//         console.log(arr)
//     } else {
//         console.log(arr)
//     }
// }
//第二种重载方式z
// function getInfo(params: number): void;

// function getInfo(params: number, arr: any[]): void;

// function getInfo(params: number, arr?: any): void {
//     if (arr) {
//         console.log(arr, params)
//     } else {
//         console.log(params)
//     }
// }
// getInfo(1, [1111])

//ts中实现继承  extends  super()

// class Person {
//     name: string;
//     constructor(name: string) {
//         this.name = name;
//     }
//     getName(): void {
//         console.log(`${this.name}在运动`);
//     }
// }

// class Web extends Person {
//     constructor(name: string) {
//         super(name)
//     }
//     getName(): void {
//         console.log(`${this.name}在运动---子类`);
//     }
// }

// let w = new Web('111')
// w.getName()

//在ts中类里面的修饰符
//  public  ：在哪都能访问
// protected：保护类型  在本身类和子类里面可以访问
// private：外面不能访问
//属性默认不加  就是公有


// 静态方法   静态方法不能访问公共属性，只能访问静态属性
// class Person {
//     name: string;
//     static age: number = 20;
//     constructor(name: string) {
//         this.name = name;
//     }
//     getName(): void {
//         console.log(`${this.name}在运动`);
//     }

//     static getData(): void {
//         console.log(`${this.age}在运动`);
//     }
// }
// Person.getData()


//多态 ：父类定义一个方法不去实现，让继承它的子类去实现，每一个子类有不同的表现

//抽象类：不能直接被实例化

//用abstract关键字定义抽象类和抽象方法。抽象方法不包含具体实现，并且必须在派生类中实现
//abstract抽象方法只能放到抽象类里


// abstract class Person {
//     name: string; //ts中必须指定属性  ，在普通js中可以不用指定属性
//     constructor(name: string) {
//         this.name = name
//     }
//     abstract play(): void;
// }

// class Student extends Person {
//     constructor(name: string) {
//         super(name)
//     }
//     play(): void {
//         console.log('1111')
//     }
// }
// Person v = new Student('闫旭');


//接口  行为，动作的约束
//接口属性前面加上问号代表可选参数

// interface Person {
//     id: number;
//     name?: string;
// }

// function func(obj: Person) {
//     return `${obj.id} + ${obj.name}`;
// }

// let obj1 = { id: 1, name: '闫旭' };
// console.log(func(obj1)
// )

// interface Iconfigface {
//     type: string;
//     url: string;
//     data?: string;
//     dataType?: string;
// }

//原生js封装ajax在ts中实现

// let ajax = function (config: Iconfigface) {
//     let xmlhttprequest = new XMLHttpRequest(); //第一步先创建xml对象
//     xmlhttprequest.open(config.type, config.url); //第二部设置请求的参数类型
//     xmlhttprequest.send(); //第三步发送请求
//     xmlhttprequest.onreadystatechange = function () { //步骤四:注册事件 onreadystatechange 状态改变就会调用
//         if (xmlhttprequest.readyState == 4 && xmlhttprequest.status == 200) {
//             console.log(xmlhttprequest.responseText);  //步骤五 如果能够进到这个判断 说明 数据 完美的回来了,并且请求的页面是存在的
//         }
//     }

// }
// ajax({
//     type: 'get',
//     url: './index.txt'
// })

//函数类的接口应用
// interface Iencodeface {
//     (key: string, value: string, name: string): string;
// }
// let md5: Iencodeface = function (key: string, value: string, name: string): string {
//     return key + value
// }
// console.log(md5('1', '2', '3'))


//数组的可索引接口  对数组的约束
// interface IarrFace {
//     [index: number]: any
// }
// let arr:IarrFace = [1,2,3,'1']
// console.log(arr[3])


//对类的约束接口 和java、c#的相似   类可以继承接口

// interface Ianimalface {
//     eat(foot: string): void;
// }

// class Dog implements Ianimalface {
//     name: string;
//     constructor(name: string) {
//         this.name = name
//     }
//     eat(): void {
//         console.log(this.name)
//     }
// }
// let d = new Dog('小花')
// d.eat()


//接口的扩展 ：接口可以继承接口

//泛型  组件不仅能够支持当前的数据类型，同时也能支持未来的数据类型。提高可重用性
//泛型 ：就是解决类 接口方法的复用性 ，以及对新类型的支持  要求：传入的参数和返回的参数类型一致

// let func = function <T>(value: T): T {
//     return value;
// }
// console.log(func('1111'))

//泛型类 

// class Num<T>{
//     list: T[] = [];
//     add(value: T): void {
//         this.list.push(value)
//     }
//     getlist(): T[] {
//         return this.list
//     }
// }
// let d = new Num<number>();
// d.add(1);
// d.add(1);
// console.log(d.getlist())

//泛型接口

// interface Ipersonface {
//     <T>(id: T, name: T): T;
// }

// let func: Ipersonface = function <T>(id: T, name: T): T {
//     return name
// }
// console.log(func<string>('1', '闫旭'))


//把类作为参数来约束数据传入的类型
// class User {
//     username: string | undefined;
//     password: string | undefined;
// }

// class Mysql {
//     add(user: User): boolean {
//         console.log(user.username)
//         return true
//     }
// }
// let user1 = new User();
// user1.username = '闫旭',
//     user1.password = '123456'
// new Mysql().add(user1)