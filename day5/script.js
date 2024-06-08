// Lưu biến đơn
const a = 10;

// Lưu nhiều biến, trị số, index.
const b = [1, 2, 3, 4];
b[0];
b[1];

// Object, lưu nhiều giá trị, thể hiện ở dạng list,
// name: value
// {}
const c = {
    firstName: "Green", 
    lastName: "Academy", // => Thuộc tính

    display: function() { //  => Phương thức, methods, hành vi
        console.log("Hello world");
    }
}
// truy xuất vào object
console.log(c['firstName']);
console.log(c['lastName']);
// => Cú pháp cũ

console.log(c.firstName);
console.log(c.lastName);
c.display();


// Object -> Class
// Class là khuôn mẫu để tạo ra Object



const Product = function (){
    // TenSp
    // GiaSP
    // KichThuoc
    // KieuSP
    // NhaCungCap
    // MieuTa
}

const Book = function (){

}

const Article = function (){
    // this -> Tham chiếu đến đối tượng hiện tại
}

 // => Quản lý các Product, Person

const Person = function(firstName, lastName) {
    // firstname
    // lastname
    // age
    // address
    // birthYear
    // STK
    // SoBH
    // 
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = 20;
    this.address = "Hanoi";
}

const VuongNgoiBanDau = new Person();
const TruongNgoiBanDau = new Person("Truong", "Nguyen");

console.log("Vuong: ",VuongNgoiBanDau);
console.log("Truong: ",TruongNgoiBanDau);


// ES6: 2015- 2016




