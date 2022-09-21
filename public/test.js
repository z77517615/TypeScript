"use strict";
let Zoe = "hello";
console.log('Zoe');
const select = document.querySelectorAll('input');
console.log(select);
select.forEach(function (input) {
    console.log(input);
});
//array
// let number = [10,20,30]
// number.push(30);
// number.push("a"); // Error, 遵循第一次建立的type
// let mix = [10, 'array' , true]
// mix.push(20)
// mix.push('hello')  //both OK
//explicit type 明確宣告
let character;
let age;
//arrays
let tony = [];
tony.push('age');
console.log(tony);
//union types 聯合型別
let mixed = [];
mixed.push("hello");
mixed.push(20);
mixed.push(true);
let uid;
uid = "123";
uid = 123;
console.log(uid);
//objects
let zoeOne;
zoeOne = {
    name: "zoecheng",
    sex: "female",
};
let zoeTwo;
zoeTwo = { name: "Jack", age: 30 };
//any 可任意更改成任何type
let anyage = 30;
anyage = true;
console.log(anyage);
anyage = "hello";
console.log(anyage);
let mixedarray = [];
mixedarray.push("30");
mixedarray.push(30);
mixedarray.push(false);
console.log(mixedarray);
console.log("test123");
console.log("test111");
