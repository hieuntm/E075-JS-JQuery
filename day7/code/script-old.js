// Tạo class Product (price, name, url)
class Product{
    constructor(name, price, url, quantity){
        this.name = name;
        this.price = price;
        this.url = "anh.jpg";
        this.quantity = quantity;
    }
}
// Tạo mảng chứa khoảng 10 - 15 sản phẩm

const products = [];

// Hiển thị ra màn hình 

// Phức tạp hơn: Đăng nhập thành công, thì mới hiển thị sản phẩm

// div: row
// div: từng sản phẩm đính col-3 col-4


// Bootstraps: Thư viện dùng CSS + JS -> Build sẵn cho các bạn class
const onClick = () => {
    const p = document.getElementById("paragraph");
    p.classList.add("none") // => add thêm các class css có sẵn
    p.classList.remove("display");
}

const onClick2 = () => {
    const p = document.getElementById("paragraph");
    p.classList.remove("none") // => add thêm các class css có sẵn
    p.classList.add("display");
}


const onClick3 = () => {
    const div = document.getElementById("products");
    const div2 = document.createElement("div");
    div2.classList.add("row")
    for(let i = 0; i < products.length; i ++){
        const div3 = document.createElement("div");
        div3.classList.add("col-3");
        //img, p (price), p (name)

        const p = document.createElement("p");
        p.innerHTML = " HELLO WOLRD " + i;
        
        div3.appendChild(p);
        div2.appendChild(div3);
    }
    div.appendChild(div2);
}