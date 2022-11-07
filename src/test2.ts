// //* ---------class getter setter---------------
const fullNameMaxLength = 10;
class Employee {
    private _EmployeeName: string = "";
   
    get EmployeeName(): string {
      return this._EmployeeName + " is working today"; 
    }
   
    set EmployeeName(newName: string) {
      if (newName && newName.length > fullNameMaxLength) {
        throw new Error("EmployeeName has a max length of " + fullNameMaxLength);
      }
      this._EmployeeName = newName;
    }
  }


//   * ------ 不可直接取用private值，但可透過public 的get去取值
class EmployeeTwo extends Employee{
    HiEmployee(){
        // console.log("Hello" + this._EmployeeName)
        console.log(" 123123123" + this.EmployeeName) 
    }
}

const ITMember = new EmployeeTwo()
ITMember.HiEmployee()


// //* ------- class and interface -------
// //*class只可以繼承一個子類別,但是可以實現多個interface
interface WebMember{
    name: string
    age?: number
}
interface WebMemberCount{
    counting(a: number, b:number ): string
}

class MIS implements WebMember, WebMemberCount {
    name: string;
    protected employees: string[] = [] 

    constructor(n:string){
        this.name = n
   }
   counting(a: number, b: number): string {
    console.log(this.name + ':' + `${a+b}`)
     return(this.name + ':' + `${a+b}`)
   }
}


// is a

const Co = new MIS("Marry")
Co.counting(16,15)


// //*----- class and <T> -------
class Add<T,U> {
    zeroValue: T | undefined ;
    add: ((x: T, y: T) => U) | undefined;
}

let myAddNumber = new Add<number,string>();
myAddNumber.zeroValue = 0;
myAddNumber.add = function(x, y) { return "result = " + `${x + y}` };
console.log(myAddNumber.add(3,5))


let myAddString = new Add<string,string>();
myAddString.zeroValue = "hello";
myAddString.add = function(x, y) { return x + y; };
console.log(myAddString.add("3","5"))

//*-------<T>事先不知道它是哪種型別，所以不能隨意的操作它的屬性或方法------
// * ex.1
class AddNumber<T> {
    zeroValue: T | undefined ;
    add(x: T , y: T): T{
        return x + y
    } 
}

let Cal = new AddNumber<number>();
myAddNumber.zeroValue = 0;



// * ex.2
function Length<T>(arg: T): T {
    console.log(arg.length)
    return arg;
}


// * ex.2 solution ---- extends interface 泛型約束----------
1.
interface CheckLength {
    length: number;
}

function IdLength<T extends CheckLength>(arg: T): T {
    console.log(arg.length);
    return arg;
}

IdLength(7); // * 傳入的arg必須包含length屬性
IdLength("asd")



2. 
function IdLengthTwo<T>(arg: Array<T>): Array<T> {
    console.log(arg.length); // * Array包含length屬性
    return arg;
  }
IdLengthTwo([1,2,3])
IdLengthTwo(['1','2','3','4'])



// //*--------多個型別引數之間互相約束-----
function Copy<T, U extends keyof T>(source: T, key: U){
    return source[key];
}

let x = { a: 10, b: 20, c: 30, d: 40 };

console.log(Copy(x, 'c'))
console.log(Copy(x, 'k'))


// * --------As----------
// * 強制型轉
let one: number = 10
const two = one as unknown as string
console.log(two)


// * 不確定傳進來的是string還是number
function getLength(something: string | number): number {
    if (something.length) {
        return something.length;
    } else {
        return something.toString().length;
    }
}


// * ----------寫法一  ----------
// * 值 as 型別
function getLengthOne(something: string | number): number {
    if ((something as string).length) {
        return (something as string).length;
    } else {
        return something.toString().length;
    }
}

console.log('1212',getLengthOne(8))

// * ----------寫法二   ----------
// * <型別>值

function getLengthTwo(something: string | number): number {
    if ((<string>something)) {
        return (<string>something).length;
    } else {
        return something.toString().length;
    }
}

// * ------- 範例二，在不確定要用哪個類型時就需要使用其中一個類型的方法-----
interface Cat {
    name: string;
    run(): void;
}
interface Fish {
    name: string;
    swim(): void;
}

function isFish(animal: Cat | Fish) {
    if (typeof(animal as Fish).swim   === 'function') {
        return true;
    }
    return false;
}

// * ----------無法改變成原型別中不存在的型別 ----------
function getLengthThree(something: string | number): number {
    if ((<boolean>something)) {
        return (<boolean>something);
    } else {
        return something.toString().length;
    }
}

// * ---------- 注意使用 as 不會報錯或提醒裡面應該有哪些屬性 ---------
interface Foo {
    age: number;
    name: string;
  }
  
  const obj1: Foo = {}
  const obj2 = {} as Foo

//   interface Foo {
//     bar: number;
//     bas: string;
// }
// var foo = {} as Foo;

interface Foo {
    bar: number;
    bas: string;
  }
  
  let foo = function a(){
    let obj: { [key: number]: number } = {}  
  
    foo.bar = 123;     //OK
    foo.bas = 'hello'
}
  
  foo.bar = 123;     //OK
  foo.bas = 'hello'; //OK