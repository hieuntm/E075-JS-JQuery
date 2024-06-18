class AccountNumberATM {

    constructor(username, password) {
        this.balance = 0;
        this.username = username;
        this.password = password;
        this.DOB = new Date();
        this.OTP = "123";
        this.history = [];
    }
    
    napTien(soLuong) {
        this.balance += soLuong;

        var today  = new Date().toLocaleDateString("en-US");
        const transaction = {
            date: today, // name: value
            amount: +soLuong
        }

        this.history.unshift(transaction);
    }

    rutTien(soLuong) {
        if (this.balance >= soLuong) {
            this.balance -= soLuong;

            var today  = new Date().toLocaleDateString("en-US");
            const transaction = {
                date: today, // name: value
                amount: -soLuong
            }
            this.history.unshift(transaction);
        } else {
            alert('Số dư không đủ để rút tiền.');
        }
    }

    transfer(tenTKchuyenToi, soLuong) {
        const accountTo = atms.find(account => account.username === tenTKchuyenToi);
        if (accountTo && this.balance >= soLuong) {
            this.balance -= soLuong;
            accountTo.balance += soLuong;

            var today  = new Date().toLocaleDateString("en-US");

            const transactionReceive = {
                date: today, // name: value
                amount: +soLuong,
                type: 'transfer-rec'
            }

            const transactionSend = {
                date: today, // name: value
                amount: -soLuong,
                type: 'transfer-send'
            }

            this.history.unshift(transactionReceive); // => Người gửi hay người nhận
            accountTo.history.unshift(transactionSend);
        } else {
            alert('Chuyển tiền thất bại');
        }
    }
}

// alert -> Show
// prompt -> Input
// confirm -> true/false

// Các thẻ dùng để đăng nhập
const usernameForSignIn = document.getElementById("username");
const passwordForSignIn = document.getElementById("password");
const pErrorMessageSignIn = document.getElementById("error-message");

// Các thẻ dùng để đăng ký
const usernameForSignUp = document.getElementById("usernamedk");
const passwordForSignUp = document.getElementById("passworddk");
const repasswordForSignUp = document.getElementById("re-passworddk");
const pErrorMessageSignUp = document.getElementById("error-message-dk");

// Display balance
const divBalance = document.getElementById("balance");

// History
const historyDiv = document.getElementById("history");

// Tính năng banking
const soTienNapInput = document.getElementById("soTienNap");
const soTienRutInput = document.getElementById("soTienRut");

const soTienChuyenInput = document.getElementById("soTienChuyen");
const tenTKchuyenToiInput = document.getElementById("tenTKchuyenToi");


let atms = [];

function setupDefaultAccount(){
    // Lấy từ localStorage -> chuyển ngược về JS Object
    const atmsFromLocal = JSON.parse(localStorage.getItem("atms")); // => Mảng

    console.log(atmsFromLocal);

    if(atmsFromLocal && atmsFromLocal.length > 0) {
        atms.push(...atmsFromLocal);
    } else {
        const ATM1 = new AccountNumberATM("account1", "123");
        ATM1.balance = 1000;
        atms.push(ATM1);
        const ATM2 = new AccountNumberATM("account2", "123");
        ATM2.balance = 2000;
        atms.push(ATM2);
    }

    console.log("Log here:", atms);
    // const ATM1 = new AccountNumberATM("account1", "123");
    // ATM1.balance = 1000;
    // atms.push(ATM1);
    // const ATM2 = new AccountNumberATM("account2", "123");
    // ATM2.balance = 2000;
    // atms.push(ATM2);
    
    // JS Object
    // {balance:1000,username:"account1",password:"123",DOB:"",OTP:"123","history":[]}
    //console.log(ATM1);


    // JSON
    //{"balance":1000,"username":"account1","password":"123","DOB":"2024-06-18T11:56:58.846Z","OTP":"123","history":[]}

    //console.log(JSON.stringify(ATM1));
    // localStorage.setItem("atms", JSON.stringify(atms));

    //localStorage.setItem(); // => Lưu vào LocalStorage
   // localStorage.getItem(); // => Lấy ra từ LocalStorage

}

// String, bất kể chuỗi nào
// localStorage.setItem("atms", 123123);

setupDefaultAccount();
// 

// JSON Kiểu dữ liệu JS mở rộng
// Javascript Object Notation

// JSON - XML
// JSON nhiều hơn

//JSON.stringify(); => Lấy Object trong JS -> chuỗi
//JSON.parse();  => Lấy chuỗi đổi Object JS
// localStorage.setItem("atms", atms);


console.log(atms);

let currentAccount = null;

// Falsy values: '', 0, undefined, null -> false
function dangKy() {
    const username = usernameForSignUp.value; // Username nhập từ người dùng/ form đăng ký
    const password = passwordForSignUp.value;
    const repassword = repasswordForSignUp.value;

    if(!username){
        displayErrorDK("Xin mời nhập username");
        return; // Bản chất là dừng code tại đây
    }

    if(password !== repassword){
        displayErrorDK("Mật khẩu không khớp");
        return; // Bản chất là dừng code tại đây
    }
    // Đã kiểm tra nó giống nhau rồi
    // Pass tồn tại 
    // if((!password || password.length <= 8)){

    const PASSWORD_LENGTH = 1;
    if(!(password && password.length >= PASSWORD_LENGTH)){
        displayErrorDK(`Mật khẩu chưa đủ ${PASSWORD_LENGTH} ký tự`);
        return; // Bản chất là dừng code tại đây
    }

    // Thực thi tiếp, nếu 2 mật khẩu giống nhau
    // Kiểm tra tài khoản, kiểm tra xem username nó đã tồn trong mảng chưa là được
    for(let account of atms) {
        if(account.username === username){
            displayErrorDK("Tài khoản đã tồn tại");
            return;
        }
    }
    /// Thêm tài khoản
    const newAccount = new AccountNumberATM(username, password);
    atms.push(newAccount);// Mảng trong JS lưu mọi thể loại/ kiểu
    // console.log(atms);
    localStorage.setItem("atms", JSON.stringify(atms));
    // Thông báo cho người dùng là tạo mk thành công
    displaySuccessDK("Tạo tài khoản thành công");
}

function displaySuccessDK(text){
    pErrorMessageSignUp.textContent = text;
    pErrorMessageSignUp.style.display = 'block';
    pErrorMessageSignUp.style.color = 'green';
}

function displayErrorDK(text){
    pErrorMessageSignUp.textContent = text;
    pErrorMessageSignUp.style.display = 'block';
    pErrorMessageSignUp.style.color = 'red';
}

function displayError() {
    pErrorMessageSignIn.style.color = 'red';
    pErrorMessageSignIn.style.display = "inline";
    pErrorMessageSignIn.innerHTML = "Mật khẩu không đúng hoặc tài khoản không tồn tại";
}

function dangNhap() {
    const username1 = usernameForSignIn.value;
    const password1 = passwordForSignIn.value;

    let foundAccount = false;
    for (let account of atms) {
        if (account.username === username1 && account.password === password1) {
            currentAccount = account;
            console.log("Đăng nhập thành công");
            foundAccount = true;
            displayBankInformation(account);
            break;
        }
    }

    if (!foundAccount) {
        console.log("Đăng nhập thất bại");
        displayError();
    }
}

function displayBankInformation(account) {
    const p = document.getElementById("error-message");
    p.style.display = "none";

    const table = document.getElementById("dangNhapTable");
    table.style.display = "none";

    const bank = document.getElementById("bank");
    bank.style.display = "block";

    const balance = document.getElementById("balance");
    balance.innerHTML = "Balance: $" + account.balance;
    displayHistory(account.history);
}


function napTien() {
    const soTienNap = parseFloat(soTienNapInput.value);

    if (!isNaN(soTienNap) && soTienNap > 0) {
        currentAccount.napTien(soTienNap);
        updateBalance();
    } else {
        alert('Vui lòng nhập số tiền hợp lệ.');
    }
}

function rutTien() {
    const soTienRut = parseFloat(soTienRutInput.value);

    if (!isNaN(soTienRut) && soTienRut > 0) {
        currentAccount.rutTien(soTienRut);
        updateBalance();
    } else {
        alert('Vui lòng nhập số tiền hợp lệ.');
    }
}

function chuyenTien() {
    const soTienChuyen = parseFloat(soTienChuyenInput.value);
    const tenTKchuyenToi = tenTKchuyenToiInput.value;
    
    if (!isNaN(soTienChuyen) && soTienChuyen > 0 && tenTKchuyenToi) {
        currentAccount.transfer(tenTKchuyenToi, soTienChuyen);
        updateBalance();
    } else {
        alert('Vui lòng nhập thông tin hợp lệ.');
    }
}

function updateBalance() {
    divBalance.innerHTML = "Balance: $" + currentAccount.balance;
    displayHistory(currentAccount.history);
}

function displayHistory(history) {
    historyDiv.innerHTML = "<h3>Lịch sử giao dịch:</h3>";
    history.forEach(item => {

        // item => name: value => object
        // { date: 
        // } amount

        const p = document.createElement("p");
        if(item.amount > 0){
            p.innerHTML = item.date + " - Nạp thành công $" + item.amount;
            p.style.color = 'green';
        } else {
            p.innerHTML = item.date + " - Rút thành công $" + item.amount;
            p.style.color = 'red';
        }
        historyDiv.appendChild(p);
    });
}


function dangXuat(){
    currentAccount = null;
    const table = document.getElementById("dangNhapTable");
    table.style.display = "block";

    const bank = document.getElementById("bank");
    bank.style.display = "none";
}
