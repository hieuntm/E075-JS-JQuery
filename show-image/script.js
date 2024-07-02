const input = document.getElementById("imageInput");
const button = document.getElementById("clickButton");
const div = document.getElementById("image");

const getImageLink = () => {
    const link = input.value;

    const image = document.createElement("img");
    image.src = link;

    if(div.lastChild != null){
        div.lastChild.remove();
    }         
    
    div.appendChild(image);
}

button.addEventListener('click', getImageLink)
