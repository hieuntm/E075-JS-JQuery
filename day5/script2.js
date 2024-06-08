class Person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = 20;
        this.address = "Hanoi"; // Thiết kế thuộc tính trong constructor
        // height, weight
        // race
        // bloodGroup
        // hairColor
    }

    run(){

    }

    speak(){

    }

    display() { // Hành vi

    }
}

const Vuong = new Person("Vuong", "Do");
// console.log(Vuong);

const atms = [];

class AccountNumberATM {
    constructor(username){
        this.balance = 0;
        this.username = username;
        this.password = "123456";
        this.history = [];
    }

    napTien(soLuong){
        history.unshift(+soLuong);
    }

    rutTien(soLuong){
        history.unshift(-soLuong);
    }

    transfer(tenTKchuyenToi, soLuong){
        // Kiểm tra TK chuyển tới có tồn tại
        // kiểm tra TK có đủ tiền hay ko
        // => 
        // TK chuyển tới : + tiền
        // TK gốc: - tiền
        // lịch sử cho cả 2 tài khoản
    }
}

const ATM1 = new AccountNumberATM("account1");
ATM1['balance'] = 1000;
atms.push(ATM1);
const ATM2 = new AccountNumberATM("account2");
ATM2['balance'] = 2000;
atms.push(ATM2);

console.log(atms);

function dangNhap(){
    const username1 = document.getElementById("username").value;
    const password1 = document.getElementById("password").value;
    let foundAccount = false;
    for(let account of atms) {
        // account là tài khoản trong mảng
        // username1, passwowrd1 là người dùng nhập vào
        if(account.username === username1 && account.password === password1){ // Điều kiện này đúng
            // Tìm được tài khoản
            // Cần 1 biến toàn cục (global) để lữu trữ tài khoản đang dùng
            console.log("dang nhap thanh cong");
            foundAccount = true;
            displayBankInformation(account);
            break;
        }
    }

    if(!foundAccount){
        console.log("Dang nhap that bai");
        displayError();
    }
}

function displayError(){
    const p = document.getElementById("error-message");
    p.style.color = 'red';
    p.style.display = "inline";
    p.innerHTML = "Mat khau ko dung, tai khoan khong ton tai";
}

function displayBankInformation(account){
    const table = document.getElementById("dangNhapTable");
    if(table){
        table.style.display = "none";
    }

    const bank = document.getElementById("bank");
    if(bank){
        bank.style.display = "block";
        const balance = document.getElementById("balance");
        balance.innerHTML = "Balance: $" + account.balance;
    }
}

