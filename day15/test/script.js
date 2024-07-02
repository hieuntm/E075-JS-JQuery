
// CSS colum1
// CSS colum2
// CSS colum3
// CSS colum3

// lop => check 
// i % 4 === 0 -> CSS colum1
// i % 4 === 1 -> CSS colum2
// i % 4 === 2 -> CSS colum3
// i % 4 === 3 -> CSS colum4

const arr = [2,3,4,5];

const div = document.getElementById("items");

arr.forEach((item, index) => {
    const newDiv = document.createElement("div")
    if(index % 4 === 0){
        newDiv.classList.add("item1")
        //
        newDiv.style.color = 'red'
        newDiv.style.backgroundColor = 'blue'
    } else if(index % 4 === 1){
        newDiv.classList.add("item2")

    }

})
