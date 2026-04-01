//hiểu hơn câu lệnh điều kiện
//và phép so sánh
/* các giá trị sau đây được coi là false khi sử dụng trong điều kiện
0
''
underfined
null
NaN
false
*/

var a = 1;
var b = 2;

// var result = 'A' && 'B' && 'C' ;
// console.log(result); //C 

// var result = null && 'B' && 'C' ;
// console.log(result); //null

// var result = 'A' || 'B' || 'C' || 'D';
// console.log(result); //A

var result = 'A' || 'B' || null || 'D';
console.log(result); //A


// var result = a < b;
// console.log('result:',result); //true


// if (a<b) {
//     console.log('Dieu kien dung');
// } else {
//     console.log('Dieu kien sai');
// }