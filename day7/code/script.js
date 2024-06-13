// Tạo class Product (price, name, url)
class Product{
    constructor(name, price, url, quantity){
        this.name = name;
        this.price = price;
        this.url = "anh.jpg";
        this.quantity = quantity;
    }
}
const products = [];
const product1 = new Product("LAPTOP", 2000, "ẢNH TỪ MẠNG/ TẢI VỀ MÁY -> ĐƯA ẢNH VÀO", 20)
// Tạo mảng chứa khoảng 10 - 15 sản phẩm
for(let i = 0; i < 12; i++){
    const product = new Product("Sản phẩm " + Math.trunc(i * Math.random() * 1000), Math.trunc(i * Math.random() * 100), "", i + Math.trunc(i * Math.random() * 15));
    products.push(product);
}

console.log(products);
// Hiển thị ra màn hình 

// Phức tạp hơn: Đăng nhập thành công, thì mới hiển thị sản phẩm

// div: row
// div: từng sản phẩm đính col-3 col-4

{/* <div class="card border-primary">
<img class="card-img-top" src="holder.js/100px180/" alt="Title">
<div class="card-body">
  <h4 class="card-title">Title</h4>
  <p class="card-text">Text</p>
</div>
</div> */}

{/*<div class="card">
        <img class="card-img-top" src="../Untitled.png" alt="">
        <div class="card-body">
            <h4 class="card-title">Title</h4> // Name
             <p class="card-text">Text</p> //  Gía
        </div>
</div> */
}

const showProduct = () => {
    const listProductDiv = document.getElementById("products");

    const productDiv = document.createElement("div");
    productDiv.classList.add("row");
    for(let i = 0; i < products.length; i++){
        // Lấy từng sản phẩm trong vòng lặp
        const product = products[i];
        // -------------- Cục Image --------------
        const image = document.createElement("img");
        image.classList.add("card-img-top");
        image.src = product.url;
        // ------------------------------------ 
        // -------------- Cục body --------------
        const cardTitle = document.createElement("h4"); //h4
        cardTitle.classList.add("card-title");
        cardTitle.textContent = product.name;

        const cardText = document.createElement("p"); // p
        cardText.classList.add("card-text");
        cardText.textContent = '$' + product.price + '- Số lượng: ' + product.quantity;

        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        // ------------------------------------ 
        // -------------- Thêm vào card --------------
        const cardDiv = document.createElement("div");
        cardDiv.classList.add("card");
        cardDiv.classList.add("border-danger");
        cardDiv.appendChild(image);
        cardDiv.appendChild(cardBody);
        // ------------------------------------ 

        // -----------------Vẽ div có col------------------- 
        const singleProductDiv = document.createElement("div");
        singleProductDiv.classList.add("col-2");
        singleProductDiv.appendChild(cardDiv);

        productDiv.appendChild(singleProductDiv);
    }
    listProductDiv.appendChild(productDiv);
}