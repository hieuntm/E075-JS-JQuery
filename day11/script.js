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

const cart = {
    items: [],
    totalPrice: 0,
    discount: 0,
    coupon: 0
}

// Button
const btn = document.getElementById('submit'); //=> add new
const btn_search = document.getElementById('btn_search');
const btn_search_price = document.getElementById('btn_search_price');
const btn_sort = document.getElementById('sortButton');
const btn_show_cart = document.getElementById('showCartButton');
const btn_order = document.getElementById("order-button");
const btn_close_modal_overlay = document.getElementById("closeOverlay");
// Search
const searchByNameText = document.getElementById('search_value');
const searchByInputMin = document.getElementById('min');
const searchByInputMax = document.getElementById('max');

// Table to display books
const table = document.getElementById("list_books");
const tableCart = document.getElementById("list_books_cart");

// Event add book
const nameInput = document.getElementById('name');
const priceInput = document.getElementById('price');
const authorInput = document.getElementById('author');
const publisherInput = document.getElementById('publisher');

// Div overlay
const divOverlayLevel1 = document.getElementById("overlay-level1");
const mainDiv = document.getElementById("main-content");

let currentID; // Tăng dần
let books; // Books trong mảng

const saveToLS = () => {
    localStorage.setItem('books', JSON.stringify(books));
}

const saveCurID = () => {
    localStorage.setItem('currentID', currentID + 1);
}

const setupDefaultValue = () => {
    currentID = localStorage.getItem('currentID');
    currentID = currentID ? parseInt(currentID) : 0;
    books = JSON.parse(localStorage.getItem('books')) || [];
    // console.log(currentID, books);
}

const createAddToCartButton = (book) => {
    const itemAddToCart = document.createElement("td"); // 1 ô trong bảng
    const button = document.createElement("button"); // tạo ra 1 span
    button.textContent = "Add to cart";
    itemAddToCart.appendChild(button);
    button.addEventListener('click', function () {
        // Thêm book vào cart
        const temp = []
        let flag = false;
        let duplicateItem;
        let itemsInCart = cart.items; // Lôi cart hiện tại
        for (let item of itemsInCart) { // Chạy 1 vòng lặp
            if (item.id === book.id) { // Nếu mà id book thêm vào tồn tại
                // found: tồn tại trong cart
                flag = true;
                duplicateItem = item;
            } else {
                temp.push(item);
            }
        }
        let itemTemp;
        if (!flag) {
            itemTemp = {
                ...book,
                quantity: 1
            };
        } else {
            itemTemp = {
                ...duplicateItem,
                quantity: duplicateItem.quantity + 1
            };
        }
        temp.push(itemTemp);

        console.log(temp); //
        cart.items = [];
        cart.items.push(...temp);
        // List item, thêm cái nào cart.items

        // cart.items đang chứa toàn bộ sản phẩm
        let totalItems = 0; // Total items
        for(let item of cart.items){
            console.log(item);
            totalItems += +item.quantity;
        }
        // reduce
        btn_show_cart.textContent = `Show cart (${totalItems})` // ES6
        // btn_show_cart.textContent = "Show cart (" + totalItems + ")" // Cách cũ
        // totalItems

        showCart();
    })
    
    return itemAddToCart;
}

const createDeleteButton = (book) => {
    const itemAddToDelete = document.createElement("td");
    const button = document.createElement("button");
    button.textContent = "Delete Item";
    itemAddToDelete.appendChild(button)
    button.addEventListener('click', function () {
        const temp = [];
        console.log(book.id);
        for (let item of books) {
            if (item.id !== book.id) {
                temp.push(item);
            }
        }
        books = [...temp];
        saveToLS();
        showBooks(books);
    })
    return itemAddToDelete;
}

const showBooks = (array) => {
    if (array.length < 0) {
        return;
    }
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

const showCart = () => {
    tableCart.innerHTML = '';
    const array = cart.items.sort((a, b) => a.id - b.id);
    //
    for (const book of array) { // Lặp từng quyển sách
        const row = document.createElement("tr");

        // id
        appendToCart(book, 'id', row);
        // name
        appendToCart(book, 'name', row);
        // price
        appendToCart(book, 'price', row);
        // quantity
        appendToCart(book, 'quantity', row);
        // totalPrice
        appendToCart(book, 'totalPrice', row); // Append total price

        // Xóa khỏi cart
        // row.appendChild(createDeleteButton(book));

        tableCart.appendChild(row);
    }
}

const appendToCart = (book, property, row) => {
    const itemDetail = document.createElement("td");

    if (property === 'totalPrice') {
        itemDetail.innerHTML = Number(book.price) * Number(book.quantity);
    } else {
        itemDetail.innerHTML = book[property];
    }
    row.appendChild(itemDetail);


}

const setupShop = () => {
    setupDefaultValue(); // Get value từ localstorage
    showBooks(books); // show books
}
setupShop(); // Chạy đầu tiên


// Hàm tính năg
const addBook = () => {
    let name = nameInput.value;
    let price = priceInput.value;
    let author = authorInput.value;
    let publisher = publisherInput.value;

    const addItem = new Book(currentID + 1, name, price, author, publisher);
    books.push(addItem);
    saveToLS();
    saveCurID();
    location.reload();
}

function searchBooks() {
    const value = searchByNameText.value;
    const lowercaseQuery = value.toLowerCase();
    const results = books.filter(book =>
        book.name.toLowerCase().includes(lowercaseQuery) ||
        book.author.toLowerCase().includes(lowercaseQuery)
    );

    showBooks(results);
}

function findByPriceRange() {
    const inputMin = searchByInputMin.value;
    const inputMax = searchByInputMax.value;
    const results = books.filter(book =>
        inputMin < book.price && book.price < inputMax
    );

    showBooks(results);
}

let sortOrder = 'asc';
const toggleSortOrder = () => {
    if (sortOrder === 'asc') {
        books.sort((a, b) => b.price - a.price);
        sortOrder = 'desc';
        btn_sort.textContent = 'Sắp xếp theo giá giảm dần';
    } else {
        books.sort((a, b) => a.price - b.price);
        sortOrder = 'asc';
        btn_sort.textContent = 'Sắp xếp theo giá tăng dần';
    }
    showBooks(books);
}

const showOrderForm = () => {
    divOverlayLevel1.classList.add("overlay-level1");
    divOverlayLevel1.classList.remove("hidden");

    mainDiv.classList.add("capacity-low")
    mainDiv.classList.remove("capacity-default")

}

const closeOverlay = (event) => {
    console.log(event.key);

    if(event.key === "Escape"){
        closeOL();
    }

    if(event.key === "F11"){
        // full screen
        // chinh css
    }

    if(event.key === "M"){

    }


}

const closeOverlayByClick = () => {
    closeOL();
}

const closeOL = () => {
    divOverlayLevel1.classList.remove("overlay-level1");
    divOverlayLevel1.classList.add("hidden");

    mainDiv.classList.remove("capacity-low")
    mainDiv.classList.add("capacity-default")
}


// Thêm event click cho button
btn.addEventListener('click', addBook);
btn_search.addEventListener('click', searchBooks);
btn_search_price.addEventListener('click', findByPriceRange);
btn_show_cart.addEventListener('click', showCart);
btn_order.addEventListener('click', showOrderForm);
btn_order.addEventListener('mouseover', showOrderForm)
// btn_order.addEventListener('mouseleave', closeOL)

btn_close_modal_overlay.addEventListener('click', closeOverlayByClick)

document.addEventListener('keydown', closeOverlay)
