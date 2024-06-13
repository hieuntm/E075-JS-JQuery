function generateTable() {
    let rows = 3
    let columns = 3
    let table = "<table border='1'>";
   
    for (let i = 0; i < rows; i++) {
        table += "<tr>";
        for (let j = 0; j < columns; j++) {
            table += "<td>" + (i * columns + j + 1) + "</td>"; //Thay vì là số, nó phải là button
        }
        table += "</tr>";
    }
   
    table += "</table>";
   
    document.getElementById("play").innerHTML = table;
}

const move = () =>{
    const button = document.getElementById("button2");

    const i = Math.trunc(Math.random() * 2) + 1

    if(i == 1){
        button.textContent = "X"
    } else {
        button.textContent = "O"
    }
}