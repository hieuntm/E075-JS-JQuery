//FB
const friend1 = "A";
const friend2 = "B";
const friend3 = "C";

// Sinh ra mảng => Bản chất là để lưu nhiều giá trị
const friends = ["A", "B", "C", 1, 2, 3];


const array = [1, 2, 3, 4, 5, 6];
const array2 = new Array(1, 2, 3, 4, 5, 6);

// Hiển thị mảng
console.log(array);
console.log(array2);

// Cách truy xuất vào từng phần tử
console.log("Trước khi sửa: ", array[3]); // => ở vị trí thứ 4
array[3] = 44;
console.log("Sau khi sửa: ", array[3]); // => ở vị trí thứ 4
// 

// array.length => hỗ trợ trả về độ dài hiện tại của mảng

// Cách duyệt => Sinh ra các bài toán, tìm max, tìm min, tìm giá trị nào đấy trong mảng
for (let i = 0; i < array.length; i++) {
    // console.warn(array[i]);
    // console.error(array[i]);
    console.log(array[i]);
}

// cách 2: dùng nhiều
for (let i in array) {
    console.log(array[i]);
}
// cách 3
for (let i of array) {
    console.log(array[i]);
}
// cách 4
array.forEach(item => console.log(item));
// Cách 5
array.map(item => console.log(item)); // Sinh ra mảng mới

// Sinh ra các hàm hỗ trợ trong mảng
const array3 = [10, 20, 30, 40, 50];
console.log("Ban đầu: ", array3);
// Thêm phần tử vào mảng
const x = array3.push(10); // => Thêm vào cuối mảng, hàm push trả về size của mảng
console.log("X: ", x);
console.log("Thêm vào cuối:", array3);

const y = array3.unshift(20); // => Thêm vào đầu mảng, hàm unshift trả về size của mảng
console.log("y: ", y);
console.log("Thêm vào đầu:", array3);

// Xóa phần tử
const z = array3.pop(); // => Xóa phần tử cuối, trả về phần tử bị xóa
console.log("z: ", z);
console.log("Xóa cuối:", array3);

const w = array3.shift(); // Xóa đầu
console.log("w: ", w);
console.log("Xóa đầu:", array3);

// Hàm bổ trợ
const viTri = array3.indexOf(40); //// Trả về vị trí của phần tử cần tìm
console.log("viTri: ", viTri);

const coHayko = array3.includes(400); //// trả về true nếu tồn tại phần tử và ngược lại trả về false
console.log("coHayko: ", coHayko);

// Sắp xếp
array.sort(); // => Sort theo alphabet
array.reverse(); // => Đảo ngược array.

