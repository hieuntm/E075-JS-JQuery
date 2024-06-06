"use strict";
let soDu = 1000;
const lichSuTaiKhoan = []; // => Xem lich su nap tien/ rut tien
const input = prompt("Xin mời nhập số tiền cần nạp");
const soTien = +input; // + cho phép đổi thành số
// soTien sẽ là NaN nếu nhập chữ
console.log("Ngoài: ", soTien, typeof soTien);
if (!isNaN(soTien)) {
    console.log("trong: ", soTien, typeof soTien);
}


function napTien() {
    const soTien = prompt("Xin mời nhập số tiền cần nạp");
    // Kiểm tra soTien
    // Kiểm tra nó có phải số hay không => if (typeof soTien === Number)
    // lichSu => +soTien


    lichSuTaiKhoan.push(+soTien);
    console.log(lichSuTaiKhoan)
}

function rutTien() {
    const soTien = prompt("Xin mời nhập số tiền cần rút");
    // lichSu => -soTien
    // Kiểm tra soTien
    // Kiểm tra nó có phải số hay không => if (typeof soTien === Number)
    // Kiểm tra xem số dư có đủ hay không

    // lichSu => +soTien
    lichSuTaiKhoan.push(-soTien);
    console.log(lichSuTaiKhoan)

}

// console.log(text);
// alert("") => Hiển thị
// prompt("") => Nhận input từ người dùng

// Rút tiền
// balance -= số tiền nào đấy;

// Nạp tiền
// balance += số tiền nào đấy;
