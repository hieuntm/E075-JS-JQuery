
const root = document.getElementById("div1");

console.log(root);

const p = document.createElement("p");
const div = document.createElement("div");
div.appendChild(p);

root.appendChild(div);

