console.log("123412312"); 

// cd: change directory
// ls: list item on directory
// cd: .. -> Go back
// pwd: Display current location
// clear: clean history

// Trong C
// 1. int - so nguyen
// 2. float, double - so thuc
// 3. char - kieu 1 ky tu
// 4. void
// 5. boolean -> toan tu logic

// Trong JS
// Co kieu so : Dung de the hien ca so thuc va so nguyen
// Co kieu String '' ""
// Boolean
// Undefined
// Null

// Cach khai bao bien trong C
// int a = 10;
// double b = 15.2;

// Kieu du lieu trong JS
// var, let, const
// var: Dung de khai bao bien cuc bo, bien cuc bo trong ham, cho phep gan lai gia tri
// let: Dung de khai bao bien, cho phep gan lai gia tri
// const: constant: Hang so, khi gan gia tri roi thi ko thay doi duoc


let diemToan = 10;
let diemHoa = 9.5;
let tenHocSinh = 'Nguyen Van A'; // String: Kiểu chuỗi
let tenHocSinh2 = "Nguyen Van B"; // String: Kiểu chuỗi
let homNayTroiMua = true; // true/ false
let nullValue = null;
let UndefinedValue = undefined;

console.log(diemToan, diemHoa, tenHocSinh, tenHocSinh2);
console.log(homNayTroiMua, nullValue, UndefinedValue);

console.log(1 + 3);
console.log(1 - 2);
console.log(1 * 1);
console.log(15 / 20);

let i = 10;
console.log(i++); // i++ => Dùng i rồi mới tăng
// console.log(i); // = 11
console.log(++i); // ++i => Tăng i rồi mới dùng

let x = 10;
console.log(x--); 
console.log(--x);

// x++ <=> x = x + 1 <=> x += 1;
// x-- <=> x = x - 1 <=> x -= 1;
// x**
// x//

// ==, !=, >, <, >=, <= ------- => Trả ra kết quả là true/false

//10 != 11 => Biểu thức điều kiện

console.log(10 > 11); 
console.log(20 < 30);

let z = 10; // Kieu số
let zy = "10"; // Kiểu String

// == So sánh giá trị
// === So sánh giá trị + kiểu dữ liệu => Recommend
console.log("kết quả: ", z === zy);

console.log("10" + 20 + 20);

// && nó trả về true khi tất cả điều kiện đúng, chỉ cần 1 thằng sai là nó trả về false
// || 1 trong tất điều kiện đúng thì đúng, còn lại sai khi toàn bộ sai
let homNayTroiMua1 = true;
let homNayPhaiDiHoc = true;
let homNayCoBongDa = false;

let t = null;
let p = undefined;
let temp = 0;
// 3 biến trên => false
// Tất cả các biến có giá trị là null, undefined, 0 có coi là điều kiện của câu lệnh if

// Các bạn có thể dùng các biến coi như là điều kiện
if(t){
    if(t){

    }
    console.log("Hôm nay trời mưa");
} else if(t) {
    console.log("Hôm nay học buổi đầu môn JS")
} else if(p) {

} else {
    // Khi không thỏa mãn điều kiện nào
}




for(let i = 1; i < 10; i++){ // Foreach
    console.log(i);
}

let temp2 = 10;
while(temp2 > 0){
    console.log("While: ",temp2);
    temp2--;
}

let temp3 = 10;
do {
    console.log("Do while: ", temp3) // Đăng nhập
} while(temp3 > 10);

// Toán tử 3 ngôi
// Ngôi 1 và ngôi 2 là điều kiện so sánh với nhau
// Ngôi 3 là kết quả trả ra

console.log(200 % 13 == 0 ? 10 : 5);

function tenHam() {
    console.log("Ở trong hàm")
    // return
}

tenHam();




