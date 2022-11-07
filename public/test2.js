"use strict";
// //* ---------class getter setter---------------
const fullNameMaxLength = 10;
class Employee {
  constructor () {
    this._EmployeeName = "";
  }

  get EmployeeName () {
    return this._EmployeeName + " is working today";
  }

  set EmployeeName (newName) {
    if (newName && newName.length > fullNameMaxLength) {
      throw new Error("EmployeeName has a max length of " + fullNameMaxLength);
    }
    this._EmployeeName = newName;
  }
}
//   * ------ 不可直接取用private值，但可透過public 的get去取值
class EmployeeTwo extends Employee {
  HiEmployee () {
    // console.log("Hello" + this._EmployeeName)
    console.log(" 123123123" + this.EmployeeName);
  }
}
const ITMember = new EmployeeTwo();
ITMember.HiEmployee();
class MIS {
  constructor (n) {
    this.employees = [];
    this.name = n;
  }

  counting (a, b) {
    console.log(this.name + ":" + `${a + b}`);
    return (this.name + ":" + `${a + b}`);
  }
}
// is a
const Co = new MIS("Marry");
Co.counting(16, 15);
// //*----- class and <T> -------
class Add {
}
const myAddNumber = new Add();
myAddNumber.zeroValue = 0;
myAddNumber.add = function (x, y) { return "result = " + `${x + y}`; };
console.log(myAddNumber.add(3, 5));
const myAddString = new Add();
myAddString.zeroValue = "hello";
myAddString.add = function (x, y) { return x + y; };
console.log(myAddString.add("3", "5"));
//* -------<T>事先不知道它是哪種型別，所以不能隨意的操作它的屬性或方法------
// * ex.1
class AddNumber {
  add (x, y) {
    return x + y;
  }
}
const Cal = new AddNumber();
myAddNumber.zeroValue = 0;
// * ex.2
function Length (arg) {
  console.log(arg.length);
  return arg;
}
// * ex.2 solution ---- extends interface 泛型約束----------
1.0;
function IdLength (arg) {
  console.log(arg.length);
  return arg;
}
IdLength(7); // * 傳入的arg必須包含length屬性
IdLength("asd");
2.0;
function IdLengthTwo (arg) {
  console.log(arg.length); // * Array包含length屬性
  return arg;
}
IdLengthTwo([1, 2, 3]);
IdLengthTwo(["1", "2", "3", "4"]);
// //*--------多個型別引數之間互相約束-----
function Copy (source, key) {
  return source[key];
}
const x = { a: 10, b: 20, c: 30, d: 40 };
console.log(Copy(x, "c"));
console.log(Copy(x, "k"));

// * --------As----------
// * 不確定傳進來的是string還是number
function getLength (something) {
  if (something.length) {
    return something.length;
  } else {
    return something.toString().length;
  }
}
// * ----------寫法一  ----------
// * 值 as 型別
function getLengthOne (something) {
  if (something.length) {
    return something.length;
  } else {
    return something.toString().length;
  }
}
console.log("1212", getLengthOne(8));

// * ----------寫法二   ----------
// * <型別>值
function getLengthTwo (something) {
  if (something) {
    return something.length;
  } else {
    return something.toString().length;
  }
}
function isFish (animal) {
  if (typeof animal.swim === "function") {
    return true;
  }
  return false;
}
// * ----------無法改變成原型別中不存在的型別 ----------
function getLengthThree (something) {
  if (something) {
    return something;
  } else {
    return something.toString().length;
  }
}


interface Foo {
    n?: number;
    s: string;
}

const foo1 = {} as Foo;               // ok