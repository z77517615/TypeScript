//------------ function ------------------
function cal (x: number, y: number): number { 
   return (x+y)
}

let sum = function (x: number, y: number): number {
    return (x+y)
}

let greeting : Function
greeting = () => {
    console.log("hello") 
}


let calc: (a: number ,b: number, c: string) => number;
calc = (numberOne: number, numberTwo: number, action: string) => {
    if(action === 'add'){
        return numberOne + numberTwo
    }else{
        return numberOne - numberTwo
    }
}
calc(10, 20, 'add') //30



//---  function 參數預設值 -----------
const add = (a: number, b: number, c: number|string = 10) => {
    console.log(a+b)
    console.log(c)
}

add(8,9)  //17  10
add(8,9,20)  //17, 20
add(8,9,'20') //17  '20'


// ------ function 可選 ----------
function person(firstName: string, lastName?: string) : string {
    if (lastName) {
        return firstName + ' ' + lastName;
    } else {
        return firstName;
    }
}
person("kathy") //kathy



//------  interface + function ---------

interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
    return source.search(subString) == -1;
}

mySearch("kitty","tt") //false





//type aliases 重複使用的type可以先定義起來重複使用
type StringOrNum = string | number;

const log = (uid : StringOrNum , item: number) => {
    console.log(`${item} has a uid of ${uid}`)
}

type ObjWithName = {name : string , id : StringOrNum}
const greetAgain = (user : ObjWithName) => {
    console.log(`${user.name} has a ${user.id}`)
}



let logDetails : (obj:{name:string, age:number}) => void;
type person = {name: string , age:number} ;

logDetails = (zoe:person) => {
    console.log(`${zoe.name} is ${zoe.age} years old`)
}




