class Book {
    constructor(id, name, price, author, publisher) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.author = author;
        this.publisher = publisher;
        this.quantity = 10;
    }
}

// Id tự tăng và lưu vào localStorage
let currentID = localStorage.getItem('currentID');
// Lấy curentID ở LocalStorage
currentID = currentID ? parseInt(currentID) : 0;
// Nếu currentID tồn tại trong localStorage thì 
// ép kiểu nó về số nguyên parseInt(currentID)?
// Còn không thì mặc định = 0
// Toán tử 3 ngôi
// Id tăng dần dựa vào localStorage

const table = document.getElementById("list_books");
let books = JSON.parse(localStorage.getItem('books')) || [];

localStorage.getItem('books')

const saveToLS = () => {
    localStorage.setItem('books', JSON.stringify(books));
}

const saveCurID = () => {
    localStorage.setItem('currentID', currentID + 1);
}

const cart = {
    items: [], // => Tập trung vào đây
    totalPrice: 0,
    discount: 0,
    coupon: 0
}

const addBook = () => {
    let name = document.getElementById('name').value;
    let price = document.getElementById('price').value;
    let author = document.getElementById('author').value;
    let publisher = document.getElementById('publisher').value;

    const addItem = new Book(currentID + 1, name, price, author, publisher);
    books.push(addItem);
    saveToLS();
    saveCurID();
    location.reload();
}

let btn = document.getElementById('submit');
btn.addEventListener('click', addBook);

let btn_search = document.getElementById('btn_search');
btn_search.addEventListener('click', searchBooks);

let btn_search_price = document.getElementById('btn_search_price');
btn_search_price.addEventListener('click', findByPriceRange);

const showBooks = (array) => {
    table.innerHTML = '';
    for (const book of array) { // Lặp từng quyển sách
        const row = document.createElement("tr");
        for (let property in book) { // Lấy từng thuộc tính trong object
            const itemDetail = document.createElement("td");
            itemDetail.innerHTML = book[property];
            row.appendChild(itemDetail);
        }
        //
        row.appendChild(createAddToCartButton(book));
        //
        row.appendChild(createDeleteButton(book));

        table.appendChild(row);
    }
}

function createAddToCartButton(book) {
    const itemAddToCart = document.createElement("td"); // 1 ô trong bảng
    const button = document.createElement("button"); // tạo ra 1 span
    // span.setAttribute('onclick', 'deleteBookById(' + book.id + ')');
    button.textContent = "Add to cart";
    itemAddToCart.appendChild(button);
    // button => Thẻ button
    button.addEventListener('click', function () {
        cart.items.push({
            ...book,
            quantity: 1
        });
        console.log(cart);
        // Show cart to HTML, hiển thị id, tên, giá, quantity trong giỏ hàng
    })
    return itemAddToCart;
}


// Tham số book ở đây là book muốn xóa
function createDeleteButton(book) {
    const itemAddToDelete = document.createElement("td"); // 1 ô trong bảng
    const button = document.createElement("button"); // tạo ra 1 span
    // span.setAttribute('onclick', 'deleteBookById(' + book.id + ')');
    button.textContent = "Delete Item";
    itemAddToDelete.appendChild(button)
    button.addEventListener('click', function () {
        // Lý thuyết
        // books- chứa toàn bộ sách => mảng chứa nhiều object
        // muốn xóa
        // Lặp từ đầu mảng sách -> cuối
        // Tìm ra sách cần xóa dựa vào id
        // Xóa sách đó ra

        // Thực hành
        // 1. lặp từ đầu đến cuối, thằng nào ko trùng id xóa, 
        // thì nhét vào mảng mới, rồi gán cho mảng cũ
        const temp = [];
        console.log(book.id);
        for (let item of books) {
            if (item.id !== book.id) {
                temp.push(item);
            }
        }
        console.log(temp);
        books = [...temp];
        saveToLS();
        showBooks(books);
    })
    return itemAddToDelete;
}

function searchBooks() {
    let query = document.getElementById('search_value').value;
    // Chuyển đổi query và tên sách trong mảng thành chữ thường để tìm kiếm không phân biệt hoa thường
    const lowercaseQuery = query.toLowerCase();

    // Dùng filter để lọc ra các cuốn sách thỏa mãn điều kiện tìm kiếm
    const results = books.filter(book =>
        book.name.toLowerCase().includes(lowercaseQuery) ||
        book.author.toLowerCase().includes(lowercaseQuery)
    );

    showBooks(results);
}

function findByPriceRange() {
    let inputMin = document.getElementById('min').value;
    let inputMax = document.getElementById('max').value;

    // Dùng filter để lọc ra các cuốn sách thỏa mãn điều kiện tìm kiếm
    const results = books.filter(book =>
        inputMin < book.price && book.price < inputMax
    );

    showBooks(results);
}
const sortBooksByPrice = () => {
    const sortedBooks = books.sort((a, b) => a.price - b.price);
    showBooks(sortedBooks);
}

let sortOrder = 'asc';
const toggleSortOrder = () => {
    const sortButton = document.getElementById('sortButton');
    if (sortOrder === 'asc') {
        books.sort((a, b) => b.price - a.price);
        sortOrder = 'desc';
        sortButton.textContent = 'Sắp xếp theo giá giảm dần';
    } else {
        books.sort((a, b) => a.price - b.price);
        sortOrder = 'asc';
        sortButton.textContent = 'Sắp xếp theo giá tăng dần';
    }
    showBooks(books);
}

if (books) {
    showBooks(books);
}

function deleteBookById(id) {
    if (books) {
        books = books.filter(book => book.id !== id);
        localStorage.setItem('books', JSON.stringify(books));
    }
}