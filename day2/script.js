// int, double, float, char, boolean
 // => 
// var, let, const
// const là hằng số
// let là biến có thể gán lại giá trị
// var tương tự

let x = 10;
let y = "Hello world";
let z = 'Hello world'

let w = 13.4123;
let m = true; // false

console.log("Hello");
console.log(z);//
console.log(x);

if(x == 10){
    console.log("X = 10");
}

// + - * / %
// > < >= <= == != ===
// && || !


// == so sánh giá trị
// === so sánh giá trị + kiểu dữ liệu
let l = 12;
let p = "12";

if(l == p){
    console.log("Bằng giá trị");
}


if(l === p){
    console.log("Bằng giá trị, cả kiểu dữ liệu");
}


// == <-> ===

// Cho cạnh hình vuông có độ dài = 10. Yêu cầu tính diện tính, chu vi
let a = 10;

const dienTich = a * a;
const chuVi = a * 4;

console.log(dienTich, chuVi, a);

// console.log()


switch(a){
    case 1: 
        break;
    case 2: 
        break;
    default: 
        break;
}

// 

for(let i = 10; i < 15; i++){ // i++ <=> i+=1 <=> i = i + 1
    console.log(i);
}

while(true){
    console.log("Hello world");
    break;
}

do {
    console.log("Hello 123");
    break;
} while(true);

//  Hàm
function tenFunction(x, y, z) {
    console.log("Trong hàm");

    return "Hello world";
}

const tring = "Test tra ve: ";
const duLieuTraVe = tenFunction();

console.log(tring, duLieuTraVe);

function add(a = 10, b = 15){
    console.log(typeof(a), typeof(b));
    return a + b;
}

const add = (a, b) => a + b;

const tinhToan = add(30, 20);
console.log("Tinh tong: ", tinhToan); // NaN = > Not a number

// Anonymous function: Hàm vô danh, hàm ko có tên

(function (){

})

// Trong browser: trình duyệt, cung cấp cho chúng ta nhiều hàm
// setTimeOut: Sau một khoảng thời gian thì thực hiện hàm
// setInterval: Lặp lại hàm sau một khoảng thời gian

// Named function => Hàm được đặt tên
function displayHelloGA(){
    console.log("Hello Green Academy");
}

// ms: 1s = 1000ms
// setTimeout(displayHelloGA, 2000);

// Named fucntion
// setTimeout(function displayHelloGA(){
//     console.log("Hello Green Academy");
// }, 2000);

// Annonymous fucntion
// setTimeout(function(){
//     console.log("Hello Green Academy");
// }, 2000);

// Array fucntion => ES6
// setTimeout(() => {
//     console.log("Hello Green Academy");
// }, 2000);

// Arrow function => Hàm mỗi tên, sự kết hợp
const arrowFunction = (a, b, c, d = 100) => {
    console.log("Trong arrow function");
    console.log(a, b, c ,d);
}

() => {

}

console.log("Hello from Saturday");
arrowFunction(10, 20, 30);


setInterval(() => {
    console.log("Hello Green Academy");
}, 2000);