// Arrray
const arr = [10, 20, 30, 40];
// const a = arr[0];
// const b = arr[1];
// const c = [arr[2], arr[3]];

const [a, , , d] = arr;

console.log(a, d);

// Object
const book = {
    name: "Harry Poster",
    publisher: "JK",
    age: 50
}

const {age, name, publisher} = book;

console.log(name, age, publisher);

// Phân tách item, trong mảng, object ra thành các biến đơn