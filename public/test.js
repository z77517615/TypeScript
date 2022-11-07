// anchor 可能為null,vm 需要跑if判斷式
// const anchor = document.querySelector('a')
// if (anchor){
//     console.log(anchor.href)
// }
// or 加！，確定此值一定存在不為null
// const anchor = document.querySelector('a')!
// console.log(anchor.href)
import { List } from './class/List.js';
import { Income } from './class/Income.js';
import { Expend } from './class/Expend.js';
//as定義出是什麼類型的Element, 在form後面.之後可以用下拉選單選去所有跟element相關的選項
const form = document.querySelector('.new-item-form');
// console.log(form.children)
const type = document.querySelector('#type');
const fromwho = document.querySelector('#fromwho');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const ul = document.querySelector('ul');
    if (!ul) {
        return;
    }
    const list = new List(ul);
    let values;
    values = [fromwho.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'income') {
        doc = new Income(...values);
    }
    else {
        doc = new Expend(...values);
    }
    list.render(doc, type.value);
});
// console.log('11111')
// type AA = string;
// // //* ------basic classes-------
// class Department {
//     name: string;
//     constructor(n: string) {
//         this.name = n
//         console.log(this.name)
//     }
// }
// const IT = new Department("aaaa")
// // //* ---------private class---------
// // * -----可以用method添加新的人名或直接更改裡面的employee值，避免不同開發者用不同方式，增加程式碼不一致性，可以用private-------
// // * ------原本----------
// class DepartmentTwo {
//     name: string;
//     employees: string[] = []
//     constructor(n: string) {
//         this.name = n
//     }
//     addEmployee(employee: string) {
//         this.employees.push(employee)
//     }
//     printEmployeeInfo() {
//         console.log(this.employees.length)
//         console.log(this.employees)
//     }
// }
// const ITtwo = new DepartmentTwo("ITW")
// ITtwo.addEmployee("Mark")
// ITtwo.addEmployee("Joe")
// ITtwo.employees[2] = "Amy"
// ITtwo.printEmployeeInfo()
// // //*  ------private----------------
// class DepartmentThree {
//     name: string;
//     private employees: string[] = []
//     constructor(n: string) {
//         this.name = n
//     }
//     addEmployee(employee: string) {
//         this.employees.push(employee)
//     }
//     printEmployeeInfo() {
//         console.log(this.employees.length)
//         console.log(this.employees)
//     }
// }
// const ITthree = new DepartmentThree("ITW")
// ITthree.addEmployee("Mark")
// ITthree.addEmployee("Joe")
// // * -----屬性添加private後，無法在外部直接更改值或讀取，只能在內部讀取值------
// ITthree.employees[2] = "Mary"
// ITthree.printEmployeeInfo()
// // //* ------------private and inheritance------
// // //* ---------private屬性不可被子類別繼承-------
// class DepartmentFour {
//     name: string;
//     private employees: string[] = []
//     constructor(n: string) {
//         this.name = n
//     }
//     addEmployee(employee: string) {
//         this.employees.push(employee)
//     }
//     printEmployeeInfo() {
//         console.log(this.employees.length)
//         console.log(this.employees)
//     }
// }
// class DepartmentFive extends DepartmentFour {
//     HiEmployee() {
//         console.log(this.name)
//         console.log(this.employees) // 不可被繼承
//     }
// }
// const ITFive = new DepartmentFive("ITW")
// // //* ---------protect-------------------
// class DepartmentSix {
//     name: string;
//     protected employees: string[] = []
//     constructor(n: string) {
//         this.name = n
//     }
//     addEmployee(employee: string) {
//         this.employees.push(employee)
//     }
//     printEmployeeInfo() {
//         console.log(this.employees.length)
//         console.log(this.employees)
//     }
// }
// const ITSix = new DepartmentSix("ITW")
// ITSix.addEmployee("Mark")
// ITSix.addEmployee("Joe")
// ITSix.employees[2] = "Jammy" // Error ,protected不可被外部存取
// class DepartmentSeven extends DepartmentSix {
//     HiSay() {
//         console.log(this.name)
//         console.log(this.employees) //可以被子類別繼承
//     }
// }
// // //*--------readonly , init後無法更改值--------
// class DepartmentEig {
//     // name: string
//     private employees: string[] = []
//     //----name寫在constructor裡面init記得要加上public--------
//     constructor(readonly id: string, public name: string) {
//         // this.name = n
//     }
//     describe(this: DepartmentEig) {
//         console.log(` Department (${this.id}) : ${this.name}`)
//     }
//     addEmployee(employee: string) {
//         // * -----可以在內 ' 外部被存取，但在任何地方想再更改後的值都不允許------
//         this.id = "700"
//         this.employees.push(employee)
//     }
//     printEmployeeInfo() {
//         console.log(this.employees.length)
//         console.log(this.id, this.employees)
//     }
// }
// const ITEig = new DepartmentEig("600", "ITW")
// ITEig.describe() // 在內部讀取
// console.log(ITEig.id)  //在外部讀取
// IT.id = "700"
// // //* ---------class getter setter---------------
// const fullNameMaxLength = 10;
// class Employee {
//     private _EmployeeName: string = "";
//     get EmployeeName(): string {
//         return this._EmployeeName + " is working today";
//     }
//     set EmployeeName(newName: string) {
//         if (newName && newName.length > fullNameMaxLength) {
//             throw new Error("EmployeeName has a max length of " + fullNameMaxLength);
//         }
//         this._EmployeeName = newName;
//     }
// }
// //   let employee = new Employee();
// //   employee.EmployeeName = "Bob Smith";
// //   if (employee.EmployeeName) {
// //     console.log(employee.EmployeeName);
// //   }
// // //   * ------ 不可直接取用private值，但可透過public 的get去取值
// class EmployeeTwo extends Employee {
//     HiEmployee() {
//         // console.log("Hello" + this._EmployeeName)
//         console.log(" 123123123" + this.EmployeeName)
//     }
// }
// const ITMember = new EmployeeTwo()
// ITMember.HiEmployee()
// // //* ------- class and interface -------
// // //*class只可以繼承一個子類別,但是可以實現多個interface
// interface WebMember {
//     name: string
//     age?: number
// }
// interface WebMemberCount {
//     counting(a: number, b: number): string
// }
// class MIS implements WebMember, WebMemberCount {
//     name: string;
//     protected employees: string[] = []
//     constructor(n: string) {
//         this.name = n
//     }
//     counting(a: number, b: number): string {
//         console.log(this.name + ':' + `${a + b}`)
//         return (this.name + ':' + `${a + b}`)
//     }
// }
// const Co = new MIS("Marry")
// Co.counting(16, 15)
// // //*----- class and <T> -------
// class Add<T, U> {
//     zeroValue: T | undefined;
//     add: ((x: T, y: T) => U) | undefined;
// }
// let myAddNumber = new Add<number, string>();
// myAddNumber.zeroValue = 0;
// myAddNumber.add = function (x, y) { return "result = " + `${x + y}` };
// console.log(myAddNumber.add(3, 5))
// let myAddString = new Add<string, string>();
// myAddString.zeroValue = "hello";
// myAddString.add = function (x, y) { return x + y; };
// console.log(myAddString.add("3", "5"))
// //*-------<T>事先不知道它是哪種型別，所以不能隨意的操作它的屬性或方法------
// // * ex.1
// class AddNumber<T> {
//     zeroValue: T | undefined;
//     add(x: T, y: T): T {
//         return x + y
//     }
// }
// let Cal = new AddNumber<number>();
// myAddNumber.zeroValue = 0;
// // * ex.2
// function Length<T>(arg: T): T {
//     console.log(arg.length)
//     return arg;
// }
// // * ex.2 solution ---- extends interface 泛型約束----------
// 1.
// interface CheckLength {
//     length: number;
// }
// function IdLength<T extends CheckLength>(arg: T): T {
//     console.log(arg.length);
//     return arg;
// }
// IdLength(7); // * 傳入的arg必須包含length屬性
// IdLength("asd")
// 2.
// function IdLengthTwo<T>(arg: Array<T>): Array<T> {
//     console.log(arg.length); // * Array包含length屬性
//     return arg;
// }
// IdLengthTwo([1, 2, 3])
// IdLengthTwo(['1', '2', '3', '4'])
// // //*--------多個型別引數之間互相約束-----
// function Copy<T, U extends keyof T>(source: T, key: U) {
//     return source[key];
// }
// let x = { a: 10, b: 20, c: 30, d: 40 };
// console.log(Copy(x, 'c'))
// console.log(Copy(x, 'k'))
// // * --------As----------
// // * 強制型轉
// let one: number = 10
// const two = one as unknown as string
// console.log(two)
// // * 不確定傳進來的是string還是number
// function getLength(something: string | number): number {
//     if (something.length) {
//         return something.length;
//     } else {
//         return something.toString().length;
//     }
// }
// // * ----------寫法一   ----------
// // * 值 as 型別
// function getLengthOne(something: string | number): number {
//     if ((something as string).length) {
//         return (something as string).length;
//     } else {
//         return something.toString().length;
//     }
// }
// // * ----------寫法二   ----------
// // * <型別>值
// function getLengthTwo(something: string | number): number {
//     if ((<string>something)) {
//         return (<string>something).length;
//     } else {
//         return something.toString().length;
//     }
// }
// // * ------- 範例二，在不確定要用哪個類型時就需要使用其中一個類型的方法-----
// interface Cat {
//     name: string;
//     run(): void;
// }
// interface Fish {
//     name: string;
//     swim(): void;
// }
// function isFish(animal: Cat | Fish) {
//     if (typeof (animal as Fish).swim === 'function') {
//         return true;
//     }
//     return false;
// }
// // * ----------無法改變成原型別中不存在的型別 ----------
// // function getLengthThree(something: string | number): number {
// //     if ((<boolean>something)) {
// //         return (<boolean>something);
// //     } else {
// //         return something.toString().length;
// //     }
// // }
// // * ---------- 注意使用 as 不會報錯或提醒裡面應該有哪些屬性 ---------
// // interface Foo {
// //     age: number;
// //     name: string;
// // }
// // let foo = function add(){
// //     let obj :object= {}
// //     obj.
// // }
// interface User {
//     name: string;
//     email: string
//     age: 18
//   }
// export default {
// name: 'Netanel',
// email: 'n@n.com'
// } as User
// let a :string= "aaa"
// function add(x: number, y: number): number{
//     return x+y
// }
// add(3,5)
// interface Foo {
//     n?: number;
//     s: string;
// }
// const foo1 = {} as Foo;               // ok
// const foo2 = { n: 1 } as Foo;         // ok
// const foo3 = { n: '' } as Foo;        // KO: "Property 's' is missing..."
// const foo4 = { n: '' as any } as Foo; // ok
// const foo5 = { n: 1, x: 2 } as Foo;   // KO: "Property 's' is missing..."
// const foo6 = { s: '', x: 2 } as Foo;  // ok
// const foo7 = { s: 1, x: 2 } as Foo;   // KO: "Types of property 's' are incompatible."
// let age = 18;
// let name = "John";
// age = name as number;
