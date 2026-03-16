/*
Kiểu dữ liệu trong Javascript - Data types in Javascript

1. Kiểu dữ liệu nguyên thủy - Primitive data types :
    - Number
    - String
    - Boolean
    - Undefined
    - Null
    - Symbol (ES6)

2. Kiểu dữ liệu phức tạp - Complex data types :
    - Function
    - Object

*/

// Number type :
var a = 1;
var b = 2;
var c = 1.5;
console.log(typeof a); // number

// String type :
var fullname = "Ngo Khoa";
console.log(fullname);

// Boolean type :
var isSuccess = true ;
console.log(isSuccess); // true

// Undefined type :
var age ;
console.log(age); // undefined

// Null type :
var isNull = null ;
console.log(isNull); // null
console.log(typeof isNull); // object (lỗi của JS)  

// Symbol type :
var id = Symbol('id'); // unique
var id2 = Symbol('id');
console.log(id); // Symbol(id)
console.log(id === id2); // false

// Function type :
var myFunction = function() {
    alert('Hi.Xin chào các bạn');
}
myFunction(); // Hi.Xin chào các bạn

// Object type :
// oject:
var myObject = {
    name: 'Ngo Khoa',
    age: 18,
    adress: "Hà Nội",
    myFunction: function() {

    }    
};
console.log('myObject',myObject);

// array:
var myArray = [
    'JavaScript',
    'PHP',
    'Ruby'
];
console.log(myArray)








