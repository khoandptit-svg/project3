/** Toán tử gán :
Toán tử    Ví dụ       Tương đương với
=          a = b       a = b
+=         a += b      a = a + b
-=         a -= b      a = a - b
*=         a *= b      a = a * b
/=         a /= b      a = a / b
**=        a **= b     a = a ** b

*/
// Ví dụ : Toán tử += :
var a = 1 ;
a += 2 ; 
console.log(a);  //3

// Toán tử chuỗi - String operator :
var firstName = "Ngo" ;
var lastName = "Khoa" ;
console.log(firstName + " " + lastName); // Ngo Khoa 



/** Toán tử so sánh     
Toán tử
==       --> Bằng
!=       --> Không bằng
>        --> Lớn hơn
<        --> Nhỏ hơn
>=       --> Lớn hơn hoặc bằng
<=       --> Nhỏ hơn hoặc bằng
 */
var a = "Ngo Dang Khoa" ; // hoặc ghi số
var b = "Ngo Dang Khoa" ;
if (a >= b) {
    console.log('Điều kiện đúng');
} else{
    console.log('Điều kiện sai');
}