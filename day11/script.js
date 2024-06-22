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

const defaultCartValue = () => {
    return {
        items: [],
        totalPrice: 0,
        discount: 0,
        coupon: 0
    };
}

let cart;

// Button
const btn = document.getElementById('submit'); //=> add new
const btn_search = document.getElementById('btn_search');
const btn_search_price = document.getElementById('btn_search_price');
const btn_sort = document.getElementById('sortButton');
const btn_show_cart = document.getElementById('showCartButton');
const btn_order = document.getElementById("order-button");
const btn_close_modal_overlay = document.getElementById("closeOverlay");

const btn_close_add_form = document.getElementById("closeAddForm");
const btn_close_cart_form = document.getElementById("closeCartForm");

const btn_show_add_form = document.getElementById("showAddBookForm");
const btn_show_cart_form = document.getElementById("showCartForm");

const btn_close_update_form = document.getElementById("closeUpdateForm");

const btn_update_form = document.getElementById("submit-updatebook");

const btn_confirm_delete = document.getElementById("confirm-delete");
const btn_cancel_delete = document.getElementById("cancel-delete");

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

// Event update book
const nameUpdateInput = document.getElementById('name-update');
const priceUpdateInput = document.getElementById('price-update');
const authorUpdateInput = document.getElementById('author-update');
const publisherUpdateInput = document.getElementById('publisher-update');

// Div overlay
const divAddBook = document.getElementById("overlay-add-book");
const divUpdateBook = document.getElementById("overlay-update-book");
const divShowCart = document.getElementById("overlay-show-cart");

const divOverlayLevel1 = document.getElementById("overlay-level1");
const divOverlayMiddle = document.getElementById("overlay-level-middle");

const divConfirmDelete = document.getElementById("overlay-delete-book");
// P
const pShowPrice = document.getElementById("totalPrice-Paragraph");


let currentID; // Tăng dần
let books; // Books trong mảng

const saveCartToLS = () => {
    localStorage.setItem('cart', JSON.stringify(cart));
}

const saveToLS = () => {
    localStorage.setItem('books', JSON.stringify(books));
}

const saveCurID = () => {
    localStorage.setItem('currentID', currentID + 1);
}

const setupDefaultValue = () => {
    currentID = localStorage.getItem('currentID'); // Lấy ID của book
    currentID = currentID ? parseInt(currentID) : 0;
    books = JSON.parse(localStorage.getItem('books')) || []; // Lấy books tồn tại trong localstorage
    cart = JSON.parse(localStorage.getItem('cart')) || defaultCartValue();
}

const createAddToCartButton = (book) => { // Add item to cart
    const itemAddToCart = document.createElement("td"); // 1 ô trong bảng
    const button = document.createElement("button"); // tạo ra 1 span
    button.textContent = "Add to cart";
    button.classList.add("btn");
    button.classList.add("btn-secondary");
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
        showData(cart);
        saveCartToLS();
    })
    
    return itemAddToCart;
}

const showData = (cart) => {
    // cart.items đang chứa toàn bộ sản phẩm
    let totalItems = 0; // Total items
    let totalPrices = 0;
    for(let item of cart.items){
        console.log(item);
        totalItems += +item.quantity;
        totalPrices += +item.quantity * +item.price;
    }

    btn_show_cart.textContent = `Show cart (${totalItems})` // ES6
    pShowPrice.textContent = `Total Price: $${totalPrices}`
    btn_show_cart_form.textContent = `Cart (${totalItems})`;
}

const createUpdateButton = (book) => {
    const itemAddToDelete = document.createElement("td");
    const button = document.createElement("button");
    button.textContent = "Update Item";
    button.classList.add("btn");
    button.classList.add("btn-warning");
    itemAddToDelete.appendChild(button)
    button.addEventListener('click', function () {
        // Implement here
        // Show form update ra
        divUpdateBook.classList.remove('hidden');
        divOverlayMiddle.classList.remove('hidden')

        // Dùng cái tham số book, để truyền thông tin vào form update

        nameUpdateInput.value = book.name;
        priceUpdateInput.value = book.price;
        authorUpdateInput.value = book.author;
        publisherUpdateInput.value = book.publisher;
    })
    return itemAddToDelete;
}

let currentDeleteId = -1;
const createDeleteButton = (book) => {
    const itemAddToDelete = document.createElement("td");
    const button = document.createElement("button");
    button.textContent = "Delete Item";
    button.classList.add("btn");
    button.classList.add("btn-danger");
    itemAddToDelete.appendChild(button)
    button.addEventListener('click', function () {

        currentDeleteId = book.id;

        divConfirmDelete.classList.remove("hidden");
        divOverlayMiddle.classList.remove("hidden");

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
        // Append button add to cart
        row.appendChild(createAddToCartButton(book)); // Thêm tính năng add vào cart
        // 
        row.appendChild(createUpdateButton(book)); // Thêm tính năng update 
        //
        row.appendChild(createDeleteButton(book)); // Thêm tính năng xóa 

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
    showCart();
    showData(cart);
}

setupShop(); // Chạy đầu tiên


// Show form
const showAddBookForm = () => {
    divAddBook.classList.remove("hidden");
    divOverlayMiddle.classList.remove("hidden")
}

const closeAddForm = () => {
    divAddBook.classList.add("hidden");
    divOverlayMiddle.classList.add("hidden")
}

const showCartForm = () => {
    divShowCart.classList.remove("hidden");
    divOverlayMiddle.classList.remove("hidden")
}

const closeCartForm = () => {
    divShowCart.classList.add("hidden");
    divOverlayMiddle.classList.add("hidden")
}

const closeUpdateForm = () => {
    divUpdateBook.classList.add("hidden")
    divOverlayMiddle.classList.add("hidden")
}

const closeDeleteConfirmForm = () => {
    divConfirmDelete.classList.add("hidden");
    divOverlayMiddle.classList.add("hidden");

    currentDeleteId = -1;
}

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

const showOrderForm = () => {
    divOverlayLevel1.classList.remove("hidden");
    divOverlayMiddle.classList.remove("hidden")

}

const closeOverlayByClick = () => {
    closeOL();
}

const closeOL = () => {
    divOverlayLevel1.classList.add("hidden");
    divOverlayMiddle.classList.add("hidden");
}

const deleteBook = () => {
    const temp = [];
    for (let item of books) {
        if (item.id !== currentDeleteId) {
            temp.push(item);
        }
    }
    books = [...temp];
    saveToLS();
    showBooks(books);
    closeDeleteConfirmForm();
}


// Thêm event click cho button
btn.addEventListener('click', addBook);
btn_search.addEventListener('click', searchBooks);
btn_search_price.addEventListener('click', findByPriceRange);
btn_show_cart.addEventListener('click', showCart);
btn_order.addEventListener('click', showOrderForm);
btn_order.addEventListener('mouseover', showOrderForm);
// btn_order.addEventListener('mouseleave', closeOL)

btn_show_add_form.addEventListener('click', showAddBookForm);
btn_show_cart_form.addEventListener('click', showCartForm);

btn_close_add_form.addEventListener('click', closeAddForm);
btn_close_cart_form.addEventListener('click', closeCartForm);
btn_close_update_form.addEventListener('click', closeUpdateForm);

btn_close_modal_overlay.addEventListener('click', closeOverlayByClick);

btn_confirm_delete.addEventListener('click', deleteBook)
btn_cancel_delete.addEventListener('click', closeDeleteConfirmForm);

document.addEventListener('keydown', closeOverlay);
