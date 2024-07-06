// class Room {
//     constructor(id, name, price, checkin, checkout, benefits){
//         this.id = id ;
//         this.name = name;
//         this.price = price;
//         this.checkin = checkin; // => Thông tin them,
//         this.checkout = checkout; //=> Thông tin them, thay vì
//         // là mình vào cart, sinh nó ra khi mình booking
//         this.benefits = benefits;
//     }
// }

class Room {
  constructor(id, name, price, thumbnail, images, benefits, available) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.thumbnail = thumbnail; // Show
    this.images = images; // => Detail
    this.benefits = benefits;
    this.available = available; // Đã bị book hay chưa
    //  available: true/false
    // Đúng: Đang có người thuê
    // Sai: Đang trống
  }
}

const rooms = [];
rooms.push(
  new Room(1, "P202", 3000, "images/hotel-1.jpg", [], "Pool, BBQ, Golf", true)
);
rooms.push(
  new Room(2, "P203", 4000, "images/hotel-1.jpg", [], "Pool, Golf", false)
);
rooms.push(
  new Room(3, "P204", 2500, "images/hotel-1.jpg", [], "Pool, Golf", false)
);
// Ví dụ data, đang có 3 room có thể book

// div
const roomsDiv = document.getElementById("rooms");

//
function generateRoomDiv(room) {
  // <div class="row w-50">
  // w-50 = width: 50%
  //   <div class="col-4">
  //     <img class="card-img-top" src="images/hotel-1.jpg" alt="Title" />
  //   </div>
  //   <div class="col-8">
  //     <h4 class="card-title">Title</h4>
  //     <p class="card-text">Text</p>
  //     <p> Avaible(green color )/Booked(red color)
  //   </div>
  // </div>
  // ------------DIV2---------------------------------
  const h4 = document.createElement("h4");
  h4.classList.add("card-title");
  h4.textContent = room.name; // => HARD CODE/ FIX CỨNG DATA

  const p = document.createElement("p");
  p.classList.add("card-text");
  p.textContent = room.benefits;

  const p2 = document.createElement("p");
  p2.classList.add("card-text");
  p2.textContent = room.available ? "Not Available" : "Avaible";
  p2.style.color = room.available ? "red" : "green";

  const div2 = document.createElement("div");
  div2.classList.add("col-6");

  div2.appendChild(h4);
  div2.appendChild(p);
  div2.appendChild(p2);
  // -----------------------------------------------------
  // ------------------DIV1-----------------------------------
  const image = document.createElement("img");
  image.src = room.thumbnail;
  image.classList.add("card-img-top");
  image.classList.add("w-100");
  image.classList.add("h-100");

  // room.images => Mảng toàn ảnh => Details
  image.addEventListener("click", () => {
    alert("Hello X"); // => Add carousel
  });

  const div1 = document.createElement("div");
  div1.classList.add("col-4");
  div1.appendChild(image);
  // -----------------------------------------------------
  // ---------------------DIV3--------------------------------
  const div3 = document.createElement("div");
  div3.classList.add("col-2");

  const buttonBook = document.createElement("button");
  buttonBook.textContent = "Book now";
  buttonBook.classList.add("btn");
  buttonBook.classList.add("btn-primary");
  buttonBook.classList.add("w-100");
  buttonBook.classList.add("h-75");
  buttonBook.classList.add("m-1");

  //   const buttonDetail = document.createElement("button");
  //   buttonDetail.textContent = "Details";
  //   buttonDetail.classList.add("btn");
  //   buttonDetail.classList.add("btn-secondary");
  //   buttonDetail.classList.add("w-100");
  //   const br = document.createElement("br");

  div3.appendChild(buttonBook);
  //   div3.appendChild(br);
  //   div3.appendChild(buttonDetail);

  // -----------------------------------------------------
  // -------------------APPEND----------------------------------

  const div = document.createElement("div");
  div.classList.add("row");
  div.classList.add("w-50");
  div.classList.add("mb-1");
  div.classList.add("border");
  div.classList.add("border-1");
  div.classList.add("rounded");

  div.appendChild(div1); // col-4
  div.appendChild(div2); // col-6
  div.appendChild(div3); // col-2
  // -----------------------------------------------------

  roomsDiv.appendChild(div);
}

for (let room of rooms) {
  generateRoomDiv(room);
}
