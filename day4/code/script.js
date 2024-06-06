let soDu = 1000;
const lichSuTaiKhoan = []; // => Xem lich su nap tien/ rut tien
// const input = prompt("Xin mời nhập số tiền cần nạp");
// const soTien = +input; // + cho phép đổi thành số
// soTien sẽ là NaN nếu nhập chữ
// console.log("Ngoài: ", soTien, typeof soTien);
// if (!isNaN(soTien)) {
//     console.log("trong: ", soTien, typeof soTien);
// }

//2. Check rút tiền
function displayBalance() {
    const p = document.getElementById("balance");
    p.innerHTML = "Số dư: $" + soDu;
}

displayBalance();

function displayHistory(number) {
    const p = document.createElement("p");
    if (number > 0) {
        p.style.color = "green"
        p.innerHTML = "Vừa nạp " + number + "$ tiền";
    } else {
        p.style.color = "red"
        p.innerHTML = "Vừa rút " + +number + "$ tiền";
    }

    const div = document.getElementById("history");
    div.appendChild(p);
    displayBalance();
}

function napTien() {
    const soTien = prompt("Xin mời nhập số tiền cần nạp");
    // Kiểm tra soTien
    // Kiểm tra nó có phải số hay không => if (typeof soTien === Number)
    // lichSu => +soTien

    lichSuTaiKhoan.unshift(+soTien);
    soDu += +soTien;
    console.log(lichSuTaiKhoan)
    displayHistory(+soTien)
}

function rutTien() {
    const soTien = prompt("Xin mời nhập số tiền cần rút");
    // lichSu => -soTien
    // Kiểm tra soTien
    // Kiểm tra nó có phải số hay không => if (typeof soTien === Number)
    // Kiểm tra xem số dư có đủ hay không

    // lichSu => +soTien
    lichSuTaiKhoan.unshift(-soTien);
    soDu -= +soTien;

    console.log(lichSuTaiKhoan)
    displayHistory(-soTien)
}

// console.log(text);
// alert("") => Hiển thị
// prompt("") => Nhận input từ người dùng

// Rút tiền
// balance -= số tiền nào đấy;

// Nạp tiền
// balance += số tiền nào đấy;
