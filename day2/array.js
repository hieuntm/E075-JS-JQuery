// Trong C mảng là tập hợp, các phần tử cùng kiểu
// Và được xác định bởi trị số (index)
// mảng thì bắt buộc phải khai báo kích thước

// Trong JS, trị số

const arrowFunction = () => {
    console.log(10);
    return 20;
}

const myArray = ["text1", "text2", "text3","text4"];

const myArray2 = [1, 2.5, "Hello world", true, 'test'];

//myArray2[0] -> Dùng index để truy xuất dữ liệu từ mảng
// console.log(myArray2[0], myArray2[1], myArray2[2], myArray2[3]);

// Đây là duyêt mảng
// for(let i = 0; i < myArray2.length; i++){
//     console.log(myArray2[i]);
// }

// Thêm vào mảng cuối
myArray2.push(10);
console.log(myArray2);
myArray2.push(20);
console.log(myArray2);

// Xóa phần tử cuối
let deletedElement = myArray2.pop();
console.log(myArray2, "Xóa: " + deletedElement);

// Xóa phần tử đầu
let deletedElement2 = myArray2.shift();
console.log(myArray2, "Xóa: " + deletedElement2);

// Thêm vào đầu
myArray2.unshift(99);
console.log(myArray2);

// Xóa phần tử
const result = myArray2.slice(1, 4); // Biến truyền vào đầu tiên là vị trí muốn xóa, biến truyền thứ 2 là số phần tử sẽ xóa
console.log("I", result);
console.log("II", myArray2);

// const result2 = myArray2.splice(1, 4); Comment Xóa phần tử
// console.log(1, result2);
// console.log(2, myArray2);

// const result2 = myArray2.splice(1, 0, 7, 10, 15); Comment thêm phần tử
// console.log(1, result2);
// console.log(2, myArray2);

const array3 = ['X', ' ABC', ' Hello world'] // 
const array4 = array3.concat(myArray2); // Nối 2 mảng

console.log(array4);

console.log(array4.reverse());

const arrayNumber = [10, 1, 25, 2, 3, 6, 7, 9, 11, 15]; // Sắp xếp
console.log(arrayNumber.sort((a, b) => a- b));