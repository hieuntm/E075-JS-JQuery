
const button = document.createElement("button");
const div = document.getElementById("main");

button.textContent = "Click here";

// button.onclick = function (){
//     // Cho phép dùng 1 lần click 
//     // là thuộc tính của thẻ html
// }

button.addEventListener('click', function(){

}); // Annonymous function

button.addEventListener('click', () => {
    alert("XYZ");
}); // Annonymous function

// Định nghĩa 1 hàm trước

function click(){
    alert("abc");
}

button.addEventListener('click', click); // Annonymous function
// Được call

div.addEventListener('keydown', function(event){
    event.preventDefault();
    console.log(event);
    event.key // trả về phím được press
    if(event.key === "ESC"){
        // close
    } else {
        
    }

    // Nhập từ bàn phím vào
    // thực thi hành động nào đấy
})

div.appendChild(button);

const keydownFunction = (event) => {
    // console.log("ABC");
    event.preventDefault();

}