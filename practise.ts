//explicit type 明確宣告
let character : string;
let age : number;
age = 6;

//---------string-----------

let Zoe = "hello";
console.log('Zoe')

let Name : string;
Name = "Jose" 
//----Number-------

let height : number = 6 

//---Boolean---
let Wrong : boolean = false;

// --------undefined 和 null 是所有型別的子型別-------
//undefined : 變數沒有被宣告，或者是已經宣告了，但是沒有賦值
let a 
console.log(a) //undefined

//Null : 「空值」或「曾經有值但現在沒有了
let obj = { a: 1, b:2 }
obj = null;     
console.log(obj) // null


//array
let number = [10,20,30]
number.push(30);
number.push("a"); // Error, 遵循第一次建立的type

let mix = [10, 'array' , true]
mix.push(20)
mix.push('hello')  //both OK


//空array 寫法
let arrW1 :string[]
let arrW2 :string[] = []
arrW2.push('age')


let arrW3 : string[] = new Array()
let arrW4 : string[] = Array()

const arr :string[] = new Array(3).fill('hi')
console.log(arr)  //['hi','hi','hi']

//arrays宣告
let abbyOne : string[] = ['hello','good']

let abbyTwo : Array<string> = ["hello",'good']

//arrays聯合型別
let student : (string | number)[] = ['Zoe' ,18 , 'John']

let teacher : Array<string | number> = ["Will" , 38 ]

//Array for loop
let Numbers : number[] = [10, 20, 30]
for (let number of Numbers){
    console.log(number)  //10  20  30
}


//-----型別推斷後不可新增屬性------
let mixArr = ['123' , 456]
mixArr.push(true)


let mixArr2 = [
    {firstName : "Kitty" ,lastName : "Wang" ,age : 18},
    {firstName : "John" ,lastName : "Lin" ,age : 20},
]

let mixArr3 = [
    ['Hello',"Goodmarning"],
    ['Hi',true]
]
let mixArr4 : typeof mixArr3 = [
    [1,2,3],
    [true , false]
]


//union types 聯合型別
let mixed : (string|number|boolean)[] = []
mixed.push("hello")
mixed.push(20)
mixed.push(true)

let uid : string|number;
uid="123";
uid=123;
console.log(uid)


//objects
//---------型別推論 : 可以重新賦值，不可新增屬性----------
let zoeOne = {
    name : "zoecheng",
    gender : "female"
}
zoeOne.name = "KittyWang"
zoeOne.firstName = "Zoe" 


let zoeTwo : {
    name : string,
    age : number
}

zoeTwo = {name : "Jack", age : 30}
zoeThree : zoeTwo = {name : "John" , age : 28 , gender : male}
zoeFour : zoeTwo = {name : "Katty"}


//----------型別註記 ： 只能重新覆寫整個obj，不限內容，不能重新賦值。
let Abby : object = {
    name : "AbbyLin",
    gender : "female",
    height : 163
}

Abby.name = "Lisa"

Abby = {
    name : "lisa",
}
console.log(Abby)  //{name: 'lisa'}


//any 可任意更改成任何type
let anyage : any = 30;
anyage = true;
console.log(anyage)
anyage = "hello"
console.log(anyage)

let mixedarray : any[] = []
mixedarray.push("30");
mixedarray.push(30);
mixedarray.push(false);
console.log(mixedarray)


console.log("test123")

//------tuple------
//宣告元組
let arrSix:[number,string,boolean];
arrSix = [10,'hello',true]; 

//初始化陣列錯誤
arrSix = [true, 10, 'hello']; //各索引值型別不符，報錯
arrSix = [10, 'hello']; //少了第三個元素，報錯
arrSix[0]='hi' //，型別限定為數字，報錯


//----vs array-------
let arrSeven : Array<string | boolean | number> = ["hello", 10, true] 
arrSeven = [false, 20, 30]



//------type--------------
type A = string;
let B: A = "Hello";

 
interface CatTwo {
    name: string;
  }
  interface Dog {
    name: string;
    age: number;
  }
  //T5=string
  type T5 = Dog extends CatTwo ? string : number;
  //T6=number
  type T6 = CatTwo extends Dog ? string : number;


//交集
type Info1 = {
    name: string,
    age: number
}

type Info2 = {
    isGirl : boolean,
}

type UnionInfo = Info1 | Info2

let IsGirl : UnionInfo = {
    name: "Mary",
    isGirl : true
}

//聯集
type UnionInfoTwo = Info1 & Info2
let IsGirlTwo : UnionInfoTwo = {
    name: "Mary",
    age : 20,
}

//--------interface----------
interface Person {
    //原始型別
    name: string
    age: number
    //基礎物件型別
    birthday: Date
    habits: string[]
    //函式型別
    run(meter: number): void
}

//交集
interface IntA {
    name: "Mary",
    age : 20,
}

interface IntB extends IntA {
    isGirl : boolean,
}

let IsGirlThree : IntB = {
    name: "Mary",
    age : 20,
    isGirl: true
}


//聯集
interface Foo {
    foo: string;
    test: string;
}

interface Bar {
    bar: string;
    name: string;
}
  
type sayHello =  Foo | Bar
// type sayHello 
let say : sayHello = {
    test: 'test',
    foo: 'hi',
    name : 'kiki'
}

type sayHelloTwo =  Foo & Bar
let sayyes : sayHelloTwo = {
    test: 'test',
    foo: 'hi',
    name : 'kiki',
    bar : 'wine'
}

//Omit  -- 把指定的key去除掉
interface OmitTest {
    username: string 
    password: string 
    isAuth: boolean
}
type UserAuth = Omit<OmitTest, 'isAuth'> 
//等同於
type UserAuth = {
    username: string 
    password: string 
}


//Pick -- 只拿指定的key
interface PickTest {
    username: string 
    password: string 
    isAuth: boolean
  }
  type UserAuth = Pick<PickTest, 'isAuth'> 
  //等同於
  type UserAuth = {
    isAuth: boolean
  }


// --Partial -  interface的每個屬性都變成可選
interface PartialTest {
    width: number | string
    color: string
  }
  type Options = Partial<PartialTest>
  //等同於
  type Options = {
    width?: number | string
    color?: string
  }


// ------- Record - 構成一個由Keys組成的interface {[k in keyof Keys]: Type}
//ex1.
interface Colors {
    color: string
  }
type TextKeys = 'title' | 'subtitle'
  
type TextColorsOne = Record<TextKeys, Colors>
  //等同於
type TextColorsTwo = {
    title: Colors
    subtitle: Colors
  }

  

//ex2.
type ThreeStringProps = Record<'prop1' | 'prop2' | 'prop3', string>
//等同於
type ThreeStringProps = {prop1: string, prop2: string, prop3: string}


//---------class------------

interface Animal<T> {
    name: string;
    age: T;
  }


class Cat<T> implements Animal<T> {
    constructor(age: T) {
      this.age = age;
    }
    name: "";
    age: T;
  }

  let cat = new Cat<number>(10);

//---------  Class Private ---------
class PropertyOne {
    private firstName: string;

    constructor() {
    this.firstName = 'Jimmy';
    }

}

const property = new PropertyOne();
console.log(property.firstName)


class PropertyThree extends PropertyOne {
    sayHi(){
        console.log(this.firstName) 
        return this.firstName
    }
}


//-----------Class  Protected --------------
class Property {
    protected firstName: string;

    constructor() {
    this.firstName = 'Jimmy';
    }

}
class PropertyTwo extends Property {
    sayHi(){
        console.log(this.firstName) //'Jimmy'
        return this.firstName
    }
}
  
const propertyInstance = new Property();

const propertyTwoInstance = new PropertyTwo();
console.log(propertyInstance.firstName); 




























interface Hasformatter{
    format() :string;
}

class Payment implements Hasformatter{
    recipient : string ;
    details : string;
    amount : number;

    constructor(c: string,d: string, a:number){
        this.recipient =c;
        this.details=d;
        this.amount=a
    }
    format(){
        return `${this.recipient} is owed ${this.amount} for ${this.details}`;
    }
}

let a = new Payment('Fruit','shopping',300);
console.log(a.format())

class Print<T> { 
    data: T
    constructor(d:T){
      this.data = d
    }
}

let p = new Print<number>(999)
console.log("p",p)



// let objOne : {
//     name: 'zoe',
//     phone: '0912345678',
//     orders: 
//     [
//         {
//         orderID: 11111, 
//         itemName: 'apple', 
//         itemCount: 5
//         }, 
//         {
//         orderID: 22222, 
//         itemName: 'orange', 
//         itemCount: 10
//         }
//     ]
// }