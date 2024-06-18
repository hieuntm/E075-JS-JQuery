// Arrray
const a = [10, 20];

const b = [25, 35];

const c = [...a, ...b];

console.log(c);

// object

const x = {
    name: "GA",
    age: 20
}

const y = {
    address: "HANOI",
    name : "XXXXX"
}

const {name} = x;

const z = {
    ...y,
    ...x
}

console.log(z);