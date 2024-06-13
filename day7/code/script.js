// Tạo class Product (price, name, url)

// Tạo mảng chứa khoảng 10 - 15 sản phẩm

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