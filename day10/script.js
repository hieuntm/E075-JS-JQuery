
// Destructuring
let arr = [1, 2, 3, 4];

// console.log(arr[1], arr[2]);
const [a, b, d] = arr;
console.log(b, d);

const object = {
    name1: "GA",
    address: "Nguyen Trai"
}

console.log(object.name1, object.address);

const { name1, address } = object;

console.log(name1, address);

// Spread
// arr.push(5);

// arr = [...arr, 5];
console.log(...arr);

// Rest Operator
function sum(...z) {
    let sum = 0;
    for (let item of z) {
        sum += item;
    }
    console.log(sum);
}

sum(10, 20);

// 
function math(x, y) {
    const add = x + y;
    const sub = x - y;
    const mul = x * y;
    const div = x / y;
    return [add, sub, mul, div];
}

const [add, sub, mul, div] = math(15, 35);
console.log(add, sub, mul, Math.ceil(div))


const obj2 = {
    age: 20
}

const obj3 = {
    address: "Nguyen Trai"
}

// const obj4 = {
//     age: obj2.age,
//     address: obj3.address
// }

const obj4 = {
    ...obj2,
    ...obj3
}
console.log(obj4)

let book = {
    title: "GA", // => Thuộc tính
    price: 12,
    quantity: 20
}


// Bài toán, mỗi lần bấm order thì quantity - 1 (- theo số lượng)
// console.log();

book = { // Gán lại giá trị
    ...book, // Giữ nguyên toàn bộ thuộc tính
    quantity: book.quantity - 1 // Ghi đè lại thuộc tính quantity
}

console.log(book);

const bookArray = [book]
for (let item of bookArray) {
    if (item.id = 1) {
        // Found book
        const currentQuantity = item.quantity;
        item.quantity = currentQuantity - 1;
    }
}

// Nếu không có tham số thì mặc định là 10
// ES6
function display(price = 10) {
    console.log(price);
}

// ES5
function display(price) {
    price = price || 10; // false || 10 
    console.log(price);
}
// Falsy values: Tức là các giá trị trả về false
// 0, null, undefined, false, '' 
// Tất các giá trị khác ở trên thì trả về true
// Khi các biến có chứa các giá trị trên
// Các bạn đc quyền if
const x = 0; // => False
if (x) {
    console.log("Hello")
} else {
    console.log(" Worlds");
}


display(20); // Nếu truyền tham số thì log ra tham số


// localStorage 
// Lưu trữ dữ liệu vào browser, trình duyện support
// Lưu: localStorage.setItem(key, value);
localStorage.setItem("key2", "value2");
// Phải lưu nó dưới dạng String
// JSON.stringify => Biến object thành string
// JSON.parse => Biến tring thành javascript object
// JSON là gì: Là đối tượng Object dùng để trao đổi giữa web, backend, frontend
// key -> Chìa khóa/biến
// value-> giá trị
const y = localStorage.getItem('key2');
console.log(y);

const ax = 21;
const bx = 20;
const cx = 30;

console.log(ax > 20 ? bx : cx);
// => 30
// => 20
