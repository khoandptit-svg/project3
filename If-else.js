// If - else :

// VD1 :
var isSuccess = 1 < 2 ;
if (isSuccess) {
    console.log('Điều kiện đúng');
} else {
    console.log('Điều kiện sai');
}

// VD 2 :
var fullName = "Ngo Dang Khoa" ;
if (fullName) {
    console.log('Điều kiện đúng');
} else {
    console.log('Điều kiện sai');
}



/** 6 giá trị falsy trong JavaScript (kết quả khi chuyển sang kiểu Boolean sẽ là false) :
 * 0
 * false
 * "" - '' (chuỗi rỗng)
 * undefined
 * null
 * NaN
*/ 

// VD 3 :
var a = NaN ;
if (a) {
    console.log('Điều kiện đúng');
} else {
    console.log('Điều kiện sai');
}