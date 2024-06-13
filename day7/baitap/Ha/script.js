let soMayMan = Math.floor(Math.random() * 100) + 1;
let soDoan;
let ketQua;
function kiemTra(){
    soDoan =Number(document.getElementById("soDoan").value);
    if(soDoan === soMayMan){
        ketQua = "chúc mừng bạn đã đoán trúng";
        document.getElementById("soDoan").disabled = true
    } else if(soDoan < soMayMan){
        ketQua = "số bạn đoán nhỏ hơn số cần tìm";
    } else if(soDoan > soMayMan){
        ketQua = "số bạn đoán lớn hơn số cần tìm";
    }
    document.getElementById("ketQua").innerHTML = ketQua;
}


