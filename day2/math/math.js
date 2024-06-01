
function add(a, b){
    return a+b;
}

function sub(a, b){
    return a-b;
}

function mul(a, b){
    return a*b;
}

function div(a, b){
    return a/b;
}

function doMath(phepTinh){
    const a = Number(document.getElementById("a").value);
    const b = Number(document.getElementById("b").value);
    let result = 0;
    switch(phepTinh){
        case "+":
            result = add(a, b);
            break;
        case "-":
            result = sub(a, b);
            break;
        case "*":
            result = mul(a, b);
            break;
        case "/":
            result = div(a, b);
            break;
    }

    document.getElementById("result").innerHTML = "Result: " + result;

}

function minusValue(){
    // Lấy gia trị hiện tại
    let currentStage = document.getElementById("file").value;
    // ép sang kiểu số
    currentStage = Number(currentStage);
    // Trừ đi 5
    currentStage -= 5;
    // Hiển thị ra HTML
    document.getElementById("file").value = currentStage;
}

function addValue(){
    // Lấy gia trị hiện tại
    let currentStage = document.getElementById("file").value;
    // ép sang kiểu số
    currentStage = Number(currentStage);
    // Cộng đi 5
    currentStage += 5;
    // Hiển thị ra HTML
    document.getElementById("file").value = currentStage;
}

function display(){
    document.getElementById("buttonDown").style = "background-color: red";
}

function outDisplay(){
    document.getElementById("buttonDown").style = "background-color: blue";
}