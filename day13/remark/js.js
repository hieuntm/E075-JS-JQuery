
// btn
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");

// div
const div = document.getElementById("function-div");
// 

const openDiv = () => {
    // Change css
    div.style.display = 'block';
    // div.classList.add
}

const closeDiv = () => {
    // Change css
    div.style.display = 'none';
}

// openBtn.addEventListener(<Kiểu event>, fcuntion thực thi)
openBtn.addEventListener('click', openDiv)
closeBtn.addEventListener('click', closeDiv)