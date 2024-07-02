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

const defaultBooksValue = async () => {
    const books = await fetch("http://192.168.9.195:8001/books")
        .then(response => response.json()) // => Luôn tồn tại
        .then(data => data)
        .catch(error => console.log(error));
    console.log(books);
    return books;
}

let cart;

// Button
const btn = document.getElementById('submit'); //=> add new
const btn_search = document.getElementById('btn_search');
const btn_search_price = document.getElementById('btn_search_price');
const btn_sort = document.getElementById('sortButton');
const btn_show_cart = document.getElementById('showCartButton');
const btn_clear_cart = document.getElementById("clearCartButton");
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

const divOverlayMiddle = document.getElementById("overlay-level-middle");
const divOverlayMiddleError = document.getElementById("overlay-level-middle-error");

const divConfirmDelete = document.getElementById("overlay-delete-book");
const divOverlayError = document.getElementById("overlay-error");

// Div address order form
const divAddressForm = document.getElementById("address-order-form");
// document.querySelector => Performance < getElementById

// const divOverlayLevel1 = document.getElementById("overlay-level1");

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

const setupDefaultValue = async () => {
    currentID = localStorage.getItem('currentID'); // Lấy ID của book
    currentID = currentID ? parseInt(currentID) : 0;
    books = JSON.parse(localStorage.getItem('books')) || await defaultBooksValue(); // Lấy books tồn tại trong localstorage
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
    // cur đang là từng item trong cart, đnag là
    let totalItems = cart.items.reduce((acc, cur) => acc + +cur.quantity, 0)
    let totalPrices = cart.items.reduce((acc, cur) => acc + +cur.quantity * +cur.price, 0)

    // for(let item of cart.items){
    //     totalItems += +item.quantity;
    //     totalPrices += +item.quantity * +item.price;
    // }

    btn_show_cart.textContent = `Show cart (${totalItems})` // ES6
    pShowPrice.textContent = `Total Price: $${totalPrices}`
    btn_show_cart_form.textContent = `Cart (${totalItems})`;
}

let currentUpdateId = -1;
// Hàm tạo ra Button Update, chạy mặc định khi hàm show books
const createUpdateButton = (book) => {
    const itemAddToDelete = document.createElement("td");
    const button = document.createElement("button");
    button.textContent = "Update Item";
    button.classList.add("btn");
    button.classList.add("btn-warning");
    itemAddToDelete.appendChild(button)
    //showUpdateForm(book) => thực thi => code chạy
    // showUpdateForm => khai báo hành vi => code đợi chạy khi mà action được thực hiện
    button.addEventListener('click', () => {
        // Show form update ra
        divUpdateBook.classList.remove('hidden');
        divOverlayMiddle.classList.remove('hidden')

        // Dùng cái tham số book, để truyền thông tin vào form update
        nameUpdateInput.value = book.name;
        priceUpdateInput.value = book.price;
        authorUpdateInput.value = book.author;
        publisherUpdateInput.value = book.publisher;
        // Lưu id cần update vào
        currentUpdateId = book.id;
    });
    return itemAddToDelete;
}

let currentDeleteId = -1;
let currentDeleteCartItemId = -1;

const createDeleteButton = (book, type) => {
    const itemAddToDelete = document.createElement("td");
    const button = document.createElement("button");
    button.textContent = "Delete Item";
    button.classList.add("btn");
    button.classList.add("btn-danger");
    itemAddToDelete.appendChild(button)
    button.addEventListener('click', function () {
        if(type === 'book'){
            currentDeleteId = book.id;
        } else if(type === 'cart'){
            currentDeleteCartItemId = book.id;
        }
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
        row.appendChild(createDeleteButton(book, 'book')); // Thêm tính năng xóa 

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
        // Delete from cart
        appendToCart(book, 'deleteButton', row);

        tableCart.appendChild(row);
    }
}

const appendToCart = (book, property, row) => {
    const itemDetail = document.createElement("td");
    if (property === 'totalPrice') {
        itemDetail.innerHTML = Number(book.price) * Number(book.quantity);
    } else if (property === 'deleteButton') {
        // itemDetail.appendChild(createDeleteButton(book)); => Đổi tham số
        itemDetail.appendChild(createDeleteButton(book, 'cart'));
    } else {
        itemDetail.innerHTML = book[property];
    }
    row.appendChild(itemDetail);
}

const setupShop = async () => {
    await setupDefaultValue(); // Get value từ localstorage
    showBooks(books); // show books
    showCart();
    showData(cart);
}

setupShop(); // Chạy đầu tiên


// Error function
const showError = (message) => { // Tham số => linh động cái biến truyền vào
    divOverlayError.classList.remove("hidden");
    const p = document.createElement("p");
    p.innerHTML = message // Khác phần này
    p.classList.add("error-message");
    divOverlayError.appendChild(p);
    divOverlayMiddleError.classList.remove("hidden");
}

// Show form add book
const showAddBookForm = () => {
    divAddBook.classList.remove("hidden");
    divOverlayMiddle.classList.remove("hidden");
}

const closeAddForm = () => {
    divAddBook.classList.add("hidden");
    divOverlayMiddle.classList.add("hidden");
}

// show form cart
const showCartForm = () => {
    if (cart.items.length > 0) {
        divShowCart.classList.remove("hidden");
        divOverlayMiddle.classList.remove("hidden")
    } else {
        showError("Error: Cart Item < 0");
    }
}

const closeCartForm = () => {
    divShowCart.classList.add("hidden");
    divAddressForm.classList.add("hidden")
    divOverlayMiddle.classList.add("hidden")

    divShowCart.classList.remove("h-75");
}

// show address form
const showOrderForm = () => {
    // divOverlayLevel1.classList.remove("hidden");
    divAddressForm.classList.remove("hidden")
    divShowCart.classList.add("h-75"); // Boostraps -> Tính height
}

// close update book form
const closeUpdateForm = () => {
    divUpdateBook.classList.add("hidden");
    divOverlayMiddle.classList.add("hidden");

    currentUpdateId = -1;
}

// close delete book form
const closeDeleteConfirmForm = () => {
    divConfirmDelete.classList.add("hidden");
    divOverlayMiddle.classList.add("hidden");

    currentDeleteId = -1;
    currentDeleteCartItemId = -1;
}

// Validation book => trả về true/false
const validateBook = (name, price) => {
    console.log(name, price, typeof (price))
    if (name === "") {
        showError("Error: Name of book can not be empty");
        return false;
    }
    // (Là số và lớn hơn 0 và nhỏ 1tr) => sai
    // không phải là số hoặc nó nhỏ hơn 0 hoặc nó lớn 1tr
    // 
    if (!(price > 0 && price < 1000000)) {
        showError("Error: Price of book should be (0 -> 1.000.000)");
        return false;
    }

    return true;
}


// Hàm tính năg books
const addBook = () => {
    let name = nameInput.value;
    let price = +priceInput.value;
    let author = authorInput.value;
    let publisher = publisherInput.value;

    // Luôn phải xử lý
    // Validate book mới

    // name ko được rỗng,
    // price thì lớn 1 và không quá 1.000.000

    if (!validateBook(name, price)) {
        return;
    }

    const addItem = new Book(currentID + 1, name, price, author, publisher);
    // books.push(addItem); // Thêm vào cuối
    books.unshift(addItem); // Thêm vào đầu

    saveToLS();
    saveCurID();
    // location.reload();
}

// {id: 10, name: "abccc", price: "123", author: "123", publisher: "123", quantity: 10}
const updateBook = () => {
    const newName = nameUpdateInput.value
    const newPrice = +priceUpdateInput.value
    const newAuthor = authorUpdateInput.value
    const newPublisher = publisherUpdateInput.value

    // if (validateBook(newName, newPrice) === false) {
    //     return;
    // }

    if (!validateBook(newName, newPrice)) {
        return;
    }

    // currentUpdateId
    // Tìm ra book, theo id, sửa nó, cập nhập vào mảng, show lại ra giao diện
    if (currentUpdateId !== -1) {
        curentUpdateBook = books.find(book => book.id !== currentDeleteId);
        // Ghi đè các thông tin cần thiết
        curentUpdateBook = {
            ...curentUpdateBook,
            name: newName,
            price: newPrice,
            author: newAuthor,
            publisher: newPublisher
        }
        // Ghi đè ông book mới vào book cũ trong mảng
        // filter, map, reduce, find, fill, splice, slice
        // books = books.map(book => {
        //     if(book.id === curentUpdateBook.id){
        //         return curentUpdateBook;
        //     } else {
        //         return book;
        //     }
        // })
        // Ngắn
        books = books.map(book => book.id === curentUpdateBook.id ? curentUpdateBook : book);
        saveToLS();
    }
    showBooks(books);
    closeUpdateForm();
    // 

}

const clearCart = () => {
    cart.items = [];
    saveCartToLS();
    showCart(cart);
    showData(cart);
}

// Ctrl + F
const deleteBook = () => {
    // books -> Mảng book
    // const temp = [];
    // for (let item of books) {
    //     if (item.id !== currentDeleteId) {
    //         temp.push(item);
    //     }
    // }
    // books = [...temp];
    // DeleteBook
    if (currentDeleteId !== -1) {
        books = books.filter(book => book.id !== currentDeleteId);
        saveToLS();
        showBooks(books);
    }
    //Delete CartItem
    if(currentDeleteCartItemId !== -1){
        cart.items = cart.items.filter(book => book.id !== currentDeleteCartItemId);
        saveCartToLS();
        showCart(cart);
        showData(cart);
    }
    closeDeleteConfirmForm();
}

function searchBooks() {
    const value = searchByNameText.value;
    if (value !== "") {
        const lowercaseQuery = value.toLowerCase();
        // Từ mảng books ban đầu, lọc toàn bộ, trả về mảng mới thỏa mãn điều kiện
        const results = books.filter(book =>
        // includes // tồn tại chuỗi nằm trong nó
        // Ví dụ: Đắc nhân tâm -> includes thỏa mãn khi
        // Từ nó có: Đắc, Nhân, Tâm, Đắc nhân, nhân tâm
        {
            const lowerBook = book.name.toLowerCase();
            return lowerBook.includes(lowercaseQuery) || lowerBook.includes(lowercaseQuery)
        }
        );
        showBooks(results);
    }
}
// Hàm callback, trong map, filter
//
// const x = [3,4,5,6];
// const y = x.map(item => item * 2)
// // Nhiều permits để can thiệp vào nó, thêm {} và tử khóa return
// const z = x.map(item => {
//     let conditions = false;
//     if(conditions){
//         item = item * 345;
//     }
//     return item * 2;
// })
//
function findByPriceRange() {
    const inputMin = searchByInputMin.value;
    const inputMax = searchByInputMax.value;
    if (inputMin < inputMax) {
        const results = books.filter(book =>
            inputMin < book.price && book.price < inputMax
        );
        showBooks(results);
    }
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

const closeError = (event) => {
    if (event.key === "Escape") {
        divOverlayError.classList.add("hidden")
        while (divOverlayError.lastChild) {
            divOverlayError.lastChild.remove();
        }
        divOverlayMiddleError.classList.add("hidden");
    }
}


const closeOverlayByClick = () => {
}



// Thêm event click cho button
btn.addEventListener('click', addBook);
btn_update_form.addEventListener('click', updateBook);

btn_search.addEventListener('click', searchBooks);
btn_search_price.addEventListener('click', findByPriceRange);
btn_show_cart.addEventListener('click', showCart);
btn_order.addEventListener('click', showOrderForm);
// btn_order.addEventListener('mouseover', showOrderForm);

// btn_order.addEventListener('mouseleave', closeOL)

// show add book// close add book
btn_show_add_form.addEventListener('click', showAddBookForm);
btn_close_add_form.addEventListener('click', closeAddForm);

// show add cart// close add cart
btn_show_cart_form.addEventListener('click', showCartForm);
btn_close_cart_form.addEventListener('click', closeCartForm);
btn_clear_cart.addEventListener('click', clearCart)
// 
btn_close_update_form.addEventListener('click', closeUpdateForm);

btn_close_modal_overlay.addEventListener('click', closeOverlayByClick);

btn_confirm_delete.addEventListener('click', deleteBook)
btn_cancel_delete.addEventListener('click', closeDeleteConfirmForm);

document.addEventListener('keydown', closeError);
