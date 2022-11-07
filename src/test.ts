let Zoe = "hello";

console.log('Zoe')

const select = document.querySelectorAll('input') 

console.log(select)

select.forEach(function(input){
    console.log(input)
}) 

//array
// let number = [10,20,30]
// number.push(30);
// number.push("a"); // Error, 遵循第一次建立的type

// let mix = [10, 'array' , true]
// mix.push(20)
// mix.push('hello')  //both OK


//explicit type 明確宣告
let character : string;
let age : number;

//arrays
let tony : string[] = [];
tony.push('age')
console.log(tony)

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
let zoeOne : object;
zoeOne = {
    name : "zoecheng",
    sex : "female",
}

let zoeTwo : {
    name : string,
    age : number
}

zoeTwo = {name:"Jack", age:30}

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

console.log("test111")





