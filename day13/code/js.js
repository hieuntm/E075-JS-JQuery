
// Cũ
// for(let i = 0; i < arr.length; i++){

// }

// Vẫn dùng
// for(let item of arr){

// }

// > ReactJS


// function callback
// Là hàm sẽ được thực hiện khi hàm khác thực hiện xong
// Tường minh: 
// trong JS tất cả mọi thứ đều là objects
// Chúng ta có truyền objects vào làm tham số
// Function cũng là sẽ objects là chúng ta được quyền truyền
// function vào làm tham số
// => Những function là tham số thì người ta function callback

// item các giá trị trong mảng
// index là trị số
// array tham chiếu trực tiếp đến nó
// arr.forEach(function(item, index, array){
//     console.log(item, index, array);
// })

// arr.forEach(function(item, index){ => Annonyous function
//     console.log(item, index);
// })

// function callback2(item, index, array){ => Named function
//     console.log(item);
// }

// arr.forEach(callback2)

// FOR EACH
// arrow function
// const x = arr.forEach((item) => { 
//     console.log(item);
// })
// console.log(x);

// MAP
// Tạo ra 1 mảng mới -> Cùng số phần tử với mảng cũ
// const y = arr.map(function(item, index, array){
    
// })

// FILTER
// Duyệt các phần tử, trả về các phần tử thỏa mãn điều kiện
// Tạo ra mảng mới chứa các phần tử đó
// const z = arr.filter(function(item, index, array){
//     return item !== 2;
// })

// console.log(z);

// const arr = [2, 3, 4, 5, 6, 10, 7, 8];
// Sum = 45

// FIND
// const w = arr.find(function(item, index, array){
//     return item !== 2;
// })

// console.log(w);

// REDUCE
// Ông này: Nhận arr -> Sinh ra 1 giá trị duy nhất
// Trả về giá trị đơn

//GTTV = Giá trị trả về
function reduceCallBack(GTTV, currentValue, index, array){
    // console.log("GTTV: " + GTTV +", currentValue: " + currentValue)
    return GTTV + currentValue;
}
const arr = [2, 3, 4, 5, 6, 10, 7, 8];

// 0 là giá trị ban đầu
const sum = arr.reduce(reduceCallBack, 0);
// console.log(sum);

// Từ C
// let max = arr[0];
// for(let i = 1; i < arr.length; i++){
//     if(arr[i] > max){
//         max = arr[i];
//     }
// }
// console.log(max);

// Dùng reduce


function maxCallback(GTTV, currentValue){
    // Mới code
    // if(GTTV < currentValue){
    //     return currentValue;
    // } else {
    //     return GTTV;
    // }
    // Toán tử 3 ngôi
    return GTTV < currentValue ? currentValue : GTTV;

}

// const max2 = arr.reduce(maxCallback, arr[0]);
// console.log(max2);

const max2 = arr.reduce((GTTV, currentValue) => {
    return GTTV < currentValue ? currentValue : GTTV;
}, arr[0]);
// console.log(max2);
// Tìm max
// Tìm min
// Tính tổng => Bank

const arr2 = [2, 3, 4, 5, 6, 10, 7, 8];
arr2.filter(function(item, index, array){
    // item, index, array => tham số, đặt tên như nào nào cũng được
})
// Chain method > Chuỗi, liên tiếp
// Functional programming
// Lập trình hàm

// Ví dụ
// Tính tổng các số lẻ trong mảng
// Tìm sổ lẻ
// Tính tổng
// const sumOdd = arr2.filter((item) => item % 2 !== 0)
//     .reduce((acc, curentValue) => {
//         return acc + curentValue;
//     },0);

//     console.log(sumOdd);

// Nếu cần mảng x3 các giá trị
// Tính tổng các số lẻ trong mảng
// Tìm sổ lẻ
// Tính tổng

// C1: x3 toàn giá trị rồi => lọc số lẻ
const sumOdd3 = arr2
    // .map(item => {return item * 3}) // Đúng nhá
    .map(item => item * 3)
    .filter((item) => item % 2 !== 0)
    .reduce((acc, curentValue) => {
        return acc + curentValue;
    },0);

    // console.log(sumOdd3);

// C2: Lọc toàn số lẻ => x3 lên
const sumOdd4 = arr2
    // .map(item => {return item * 3}) // Đúng nhá
    .filter((item) => item % 2 !== 0) // Lọc 
    .map(item => item * 3) // x3
    .reduce((acc, curentValue) => { // Tính tổng
        return acc + curentValue;
    },0);

    // console.log(sumOdd4);

// accounts là mảng, chứa objects
const accounts = [{
    name: 'account1',
    age: 20,
    transactions: [-200, 100, -53, 400, -20] // Liên quan việc: rút, nạp tiền
}]

// Giá trị âm: là tiền rút
// Giá trị dương là tiền nạp
// Tính tổng số tiền đã rút
const sumTienRut = accounts[0].transactions
    .filter(transaction => transaction < 0)
    .reduce((acc, curValue) => acc + curValue, 0)

// console.log(-sumTienRut)

// cart là array
const cart = [{
    name: "Book",
    price: 20,
    quantity: 2
},
{
    name: "Pen",
    price: 5,
    quantity: 15
}]
// Total price: 20 * 2 + 5 * 15 = 115
// for(let item of cart){
//     sum += item.price * item.quantity;
// }

// Tính được tổng giá tiền price * quantity

// function sumPriceCallback(acc, currentValue){
//     return acc += currentValue.quantity * currentValue.price;
// }

// const toal = cart.reduce(sumPriceCallback, 0)

// const toal = cart.reduce((acc, currentValue) => 
//     acc += currentValue.quantity * currentValue.price
//     , 0)
// console.log(toal);
// Can thiệp => react
// UseReducer
// cart.map(item => {
//     console.log(item);
// })
// map: trả về mảng mới cùng size với mảng cũ
// filter: trả về mảng mới thỏa mãn điều kiện
// reduce: trả về 1 giá trị đơn dựa vào mảng

// const arr3 = new Array(10);
// arr3.fill([2, 3]);
// Tham số 1: là giá trị
// tham số 2: là vị trí bắt đầu
// tham số 3: là vị trí cuối cùng
// arr3.fill(1,2,3);
// [empty × 2, 1, empty × 7]
// arr3.fill(1,2,7);
// [empty × 2, 1,..1, empty × 3]

// [0, 1, 2, 3, 4, ...]
//
// console.log(arr3);

// const arr4 = [2, 4, 4, 5, 6, 10, 7, 8];
// const arr5 = [3, 3, 3, 3,3];


// const result = arr4.some(item => item === 3);
// console.log(result);

// const result2 = arr5.every(item => item === 3);
// console.log(result2);

// flat, flatMap
// Duỗi cái mảng, chứa các mảng con -> thành mảng duy nhất
const arr6 = [2, 3, 4, [7 ,8, [7, 8, [9, 10, 12, 13]]]];
console.log(arr6);

const newArray = arr6.flat(9999);
// hạn chế
// truyền 99
// Dùng đệ quy
console.log(newArray);

//
const cart2 = [{
    name: "Book",
    price: 20,
    quantity: 2
},
{
    name: "Pen",
    price: 5,
    quantity: 15
},
{
    name: "Paper",
    price: 2,
    quantity: 15
}]
const newArray2 = cart2.flatMap(item => item.price);
console.log(newArray2);

const starwars = [
    {
      name: 'CR90 corvette',
      model: 'CR90 corvette',
      manufacturer: 'Corellian Engineering Corporation',
      cost_in_credits: '3500000',
      length: '150',
      max_atmosphering_speed: '950',
      crew: '30-165',
      passengers: '600',
      cargo_capacity: '3000000',
      consumables: '1 year',
      hyperdrive_rating: '2.0',
      MGLT: '60',
      starship_class: 'corvette',
      pilots: [],
      films: [
        'https://swapi.dev/api/films/1/',
        'https://swapi.dev/api/films/3/',
        'https://swapi.dev/api/films/6/'
      ],
      created: '2014-12-10T14:20:33.369000Z',
      edited: '2014-12-20T21:23:49.867000Z',
      url: 'https://swapi.dev/api/starships/2/'
    },
    {
      name: 'Star Destroyer',
      model: 'Imperial I-class Star Destroyer',
      manufacturer: 'Kuat Drive Yards',
      cost_in_credits: '150000000',
      length: '1,600',
      max_atmosphering_speed: '975',
      crew: '47,060',
      passengers: 'n/a',
      cargo_capacity: '36000000',
      consumables: '2 years',
      hyperdrive_rating: '2.0',
      MGLT: '60',
      starship_class: 'Star Destroyer',
      pilots: [],
      films: [
        'https://swapi.dev/api/films/1/',
        'https://swapi.dev/api/films/2/',
        'https://swapi.dev/api/films/3/'
      ],
      created: '2014-12-10T15:08:19.848000Z',
      edited: '2014-12-20T21:23:49.870000Z',
      url: 'https://swapi.dev/api/starships/3/'
    },
    {
      name: 'Sentinel-class landing craft',
      model: 'Sentinel-class landing craft',
      manufacturer: 'Sienar Fleet Systems, Cyngus Spaceworks',
      cost_in_credits: '240000',
      length: '38',
      max_atmosphering_speed: '1000',
      crew: '5',
      passengers: '75',
      cargo_capacity: '180000',
      consumables: '1 month',
      hyperdrive_rating: '1.0',
      MGLT: '70',
      starship_class: 'landing craft',
      pilots: [],
      films: [
        'https://swapi.dev/api/films/1/'
      ],
      created: '2014-12-10T15:48:00.586000Z',
      edited: '2014-12-20T21:23:49.873000Z',
      url: 'https://swapi.dev/api/starships/5/'
    },
    {
      name: 'Death Star',
      model: 'DS-1 Orbital Battle Station',
      manufacturer: 'Imperial Department of Military Research, Sienar Fleet Systems',
      cost_in_credits: '1000000000000',
      length: '120000',
      max_atmosphering_speed: 'n/a',
      crew: '342,953',
      passengers: '843,342',
      cargo_capacity: '1000000000000',
      consumables: '3 years',
      hyperdrive_rating: '4.0',
      MGLT: '10',
      starship_class: 'Deep Space Mobile Battlestation',
      pilots: [],
      films: [
        'https://swapi.dev/api/films/1/'
      ],
      created: '2014-12-10T16:36:50.509000Z',
      edited: '2014-12-20T21:26:24.783000Z',
      url: 'https://swapi.dev/api/starships/9/'
    },
    {
      name: 'Millennium Falcon',
      model: 'YT-1300 light freighter',
      manufacturer: 'Corellian Engineering Corporation',
      cost_in_credits: '100000',
      length: '34.37',
      max_atmosphering_speed: '1050',
      crew: '4',
      passengers: '6',
      cargo_capacity: '100000',
      consumables: '2 months',
      hyperdrive_rating: '0.5',
      MGLT: '75',
      starship_class: 'Light freighter',
      pilots: [
        'https://swapi.dev/api/people/13/',
        'https://swapi.dev/api/people/14/',
        'https://swapi.dev/api/people/25/',
        'https://swapi.dev/api/people/31/'
      ],
      films: [
        'https://swapi.dev/api/films/1/',
        'https://swapi.dev/api/films/2/',
        'https://swapi.dev/api/films/3/'
      ],
      created: '2014-12-10T16:59:45.094000Z',
      edited: '2014-12-20T21:23:49.880000Z',
      url: 'https://swapi.dev/api/starships/10/'
    },
    {
      name: 'Y-wing',
      model: 'BTL Y-wing',
      manufacturer: 'Koensayr Manufacturing',
      cost_in_credits: '134999',
      length: '14',
      max_atmosphering_speed: '1000km',
      crew: '2',
      passengers: '0',
      cargo_capacity: '110',
      consumables: '1 week',
      hyperdrive_rating: '1.0',
      MGLT: '80',
      starship_class: 'assault starfighter',
      pilots: [],
      films: [
        'https://swapi.dev/api/films/1/',
        'https://swapi.dev/api/films/2/',
        'https://swapi.dev/api/films/3/'
      ],
      created: '2014-12-12T11:00:39.817000Z',
      edited: '2014-12-20T21:23:49.883000Z',
      url: 'https://swapi.dev/api/starships/11/'
    },
    {
      name: 'X-wing',
      model: 'T-65 X-wing',
      manufacturer: 'Incom Corporation',
      cost_in_credits: '149999',
      length: '12.5',
      max_atmosphering_speed: '1050',
      crew: '1',
      passengers: '0',
      cargo_capacity: '110',
      consumables: '1 week',
      hyperdrive_rating: '1.0',
      MGLT: '100',
      starship_class: 'Starfighter',
      pilots: [
        'https://swapi.dev/api/people/1/',
        'https://swapi.dev/api/people/9/',
        'https://swapi.dev/api/people/18/',
        'https://swapi.dev/api/people/19/'
      ],
      films: [
        'https://swapi.dev/api/films/1/',
        'https://swapi.dev/api/films/2/',
        'https://swapi.dev/api/films/3/'
      ],
      created: '2014-12-12T11:19:05.340000Z',
      edited: '2014-12-20T21:23:49.886000Z',
      url: 'https://swapi.dev/api/starships/12/'
    },
    {
      name: 'TIE Advanced x1',
      model: 'Twin Ion Engine Advanced x1',
      manufacturer: 'Sienar Fleet Systems',
      cost_in_credits: 'unknown',
      length: '9.2',
      max_atmosphering_speed: '1200',
      crew: '1',
      passengers: '0',
      cargo_capacity: '150',
      consumables: '5 days',
      hyperdrive_rating: '1.0',
      MGLT: '105',
      starship_class: 'Starfighter',
      pilots: [
        'https://swapi.dev/api/people/4/'
      ],
      films: [
        'https://swapi.dev/api/films/1/'
      ],
      created: '2014-12-12T11:21:32.991000Z',
      edited: '2014-12-20T21:23:49.889000Z',
      url: 'https://swapi.dev/api/starships/13/'
    },
    {
      name: 'Executor',
      model: 'Executor-class star dreadnought',
      manufacturer: 'Kuat Drive Yards, Fondor Shipyards',
      cost_in_credits: '1143350000',
      length: '19000',
      max_atmosphering_speed: 'n/a',
      crew: '279,144',
      passengers: '38000',
      cargo_capacity: '250000000',
      consumables: '6 years',
      hyperdrive_rating: '2.0',
      MGLT: '40',
      starship_class: 'Star dreadnought',
      pilots: [],
      films: [
        'https://swapi.dev/api/films/2/',
        'https://swapi.dev/api/films/3/'
      ],
      created: '2014-12-15T12:31:42.547000Z',
      edited: '2014-12-20T21:23:49.893000Z',
      url: 'https://swapi.dev/api/starships/15/'
    },
    {
      name: 'Rebel transport',
      model: 'GR-75 medium transport',
      manufacturer: 'Gallofree Yards, Inc.',
      cost_in_credits: 'unknown',
      length: '90',
      max_atmosphering_speed: '650',
      crew: '6',
      passengers: '90',
      cargo_capacity: '19000000',
      consumables: '6 months',
      hyperdrive_rating: '4.0',
      MGLT: '20',
      starship_class: 'Medium transport',
      pilots: [],
      films: [
        'https://swapi.dev/api/films/2/',
        'https://swapi.dev/api/films/3/'
      ],
      created: '2014-12-15T12:34:52.264000Z',
      edited: '2014-12-20T21:23:49.895000Z',
      url: 'https://swapi.dev/api/starships/17/'
    }
  ]

const newArrayFilm = starwars.flatMap(item => [...item.films]); // Sinh ra 1 mảng, chứa mảng films
console.log(newArrayFilm);
const newOnlyArrayFilm = newArrayFilm.flat();
console.log(newOnlyArrayFilm);
