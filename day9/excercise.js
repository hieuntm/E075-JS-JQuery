const starships = [
    {
      name: 'Naboo star skiff',
      model: 'J-type star skiff',
      manufacturer: 'Theed Palace Space Vessel Engineering Corps/Nubia Star Drives, Incorporated',
      cost_in_credits: 'unknown',
      length: '29.2',
      max_atmosphering_speed: '1050',
      crew: '3',
      passengers: '3',
      cargo_capacity: 'unknown',
      consumables: 'unknown',
      hyperdrive_rating: '0.5',
      MGLT: 'unknown',
      starship_class: 'yacht',
      pilots: [
        'https://swapi.dev/api/people/10/',
        'https://swapi.dev/api/people/35/'
      ],
      films: [
        'https://swapi.dev/api/films/6/'
      ],
      created: '2014-12-20T19:55:15.396000Z',
      edited: '2014-12-20T21:23:49.948000Z',
      url: 'https://swapi.dev/api/starships/64/'
    },
    {
      name: 'Jedi Interceptor',
      model: 'Eta-2 Actis-class light interceptor',
      manufacturer: 'Kuat Systems Engineering',
      cost_in_credits: '320000',
      length: '5.47',
      max_atmosphering_speed: '1500',
      crew: '1',
      passengers: '0',
      cargo_capacity: '60',
      consumables: '2 days',
      hyperdrive_rating: '1.0',
      MGLT: 'unknown',
      starship_class: 'starfighter',
      pilots: [
        'https://swapi.dev/api/people/10/',
        'https://swapi.dev/api/people/11/'
      ],
      films: [
        'https://swapi.dev/api/films/6/'
      ],
      created: '2014-12-20T19:56:57.468000Z',
      edited: '2014-12-20T21:23:49.951000Z',
      url: 'https://swapi.dev/api/starships/65/'
    },
    {
      name: 'arc-170',
      model: 'Aggressive Reconnaissance-170 starfighte',
      manufacturer: 'Incom Corporation, Subpro Corporation',
      cost_in_credits: '155000',
      length: '14.5',
      max_atmosphering_speed: '1000',
      crew: '3',
      passengers: '0',
      cargo_capacity: '110',
      consumables: '5 days',
      hyperdrive_rating: '1.0',
      MGLT: '100',
      starship_class: 'starfighter',
      pilots: [],
      films: [
        'https://swapi.dev/api/films/6/'
      ],
      created: '2014-12-20T20:03:48.603000Z',
      edited: '2014-12-20T21:23:49.953000Z',
      url: 'https://swapi.dev/api/starships/66/'
    },
    {
      name: 'Banking clan frigte',
      model: 'Munificent-class star frigate',
      manufacturer: 'Hoersch-Kessel Drive, Inc, Gwori Revolutionary Industries',
      cost_in_credits: '57000000',
      length: '825',
      max_atmosphering_speed: 'unknown',
      crew: '200',
      passengers: 'unknown',
      cargo_capacity: '40000000',
      consumables: '2 years',
      hyperdrive_rating: '1.0',
      MGLT: 'unknown',
      starship_class: 'cruiser',
      pilots: [],
      films: [
        'https://swapi.dev/api/films/6/'
      ],
      created: '2014-12-20T20:07:11.538000Z',
      edited: '2014-12-20T21:23:49.956000Z',
      url: 'https://swapi.dev/api/starships/68/'
    },
    {
      name: 'Belbullab-22 starfighter',
      model: 'Belbullab-22 starfighter',
      manufacturer: 'Feethan Ottraw Scalable Assemblies',
      cost_in_credits: '168000',
      length: '6.71',
      max_atmosphering_speed: '1100',
      crew: '1',
      passengers: '0',
      cargo_capacity: '140',
      consumables: '7 days',
      hyperdrive_rating: '6',
      MGLT: 'unknown',
      starship_class: 'starfighter',
      pilots: [
        'https://swapi.dev/api/people/10/',
        'https://swapi.dev/api/people/79/'
      ],
      films: [
        'https://swapi.dev/api/films/6/'
      ],
      created: '2014-12-20T20:38:05.031000Z',
      edited: '2014-12-20T21:23:49.959000Z',
      url: 'https://swapi.dev/api/starships/74/'
    },
    {
      name: 'V-wing',
      model: 'Alpha-3 Nimbus-class V-wing starfighter',
      manufacturer: 'Kuat Systems Engineering',
      cost_in_credits: '102500',
      length: '7.9',
      max_atmosphering_speed: '1050',
      crew: '1',
      passengers: '0',
      cargo_capacity: '60',
      consumables: '15 hours',
      hyperdrive_rating: '1.0',
      MGLT: 'unknown',
      starship_class: 'starfighter',
      pilots: [],
      films: [
        'https://swapi.dev/api/films/6/'
      ],
      created: '2014-12-20T20:43:04.349000Z',
      edited: '2014-12-20T21:23:49.961000Z',
      url: 'https://swapi.dev/api/starships/75/'
    }
  ]

  console.log(starships)

const names = [];

for(let starship of starships){
    names.push(starship.name);
}

console.log(names);

console.log(starships[5].name);

const [ss1, ss2, ss3, ss4, ss5, ss6] = starships; // Destructring 
const names2 = [ss1.name, ss2.name, ss3.name, ss4.name, ss5.name, ss6.name];
console.log(names2);

// Data txt
// 1. Dùng destructuring tách book1 và book2
// 2. Skip book1, book2, tạo book3 từ mảng
// 3. Dùng spread nối 2 mảng keywords ở book1 với book2
// 4. Dùng spread nối 2 mảng author ở book3, và book4
// 5. Dùng destructuring đánh vần tên book2

// starwar.txt
// 1. Dùng destructuring tách nhân vật 1, nhân vật 2, và phần còn lại
// 2. Dùng spread tạo 1 mảng mới từ mảng films của nhân vật 1 và nhân vật 3
// 3. Lấy species của nhân vật có tên "R5-D4"
// 4. Tạo một mảng chứa toàn bộ tên films, và starships của nhân vật có tên "Obi-Wan Kenobi"

// starwar2.txt
// 1. Tạo 1 mảng, có chứa tên của hành tinh số 1 và số 3
// 2. Tạo 1 đối tượng mới có chứa gravity, climate, diameter của hành tinh "Dagobah" và name, films của hành tinh "Bespin"
// 3. Tạo một mảng toàn bộ tên các hành tinh
// 4. Tạo một mảng chứa toàn bộ "residents" của hành tinh "Alderaan"
// 5. Tính tổng population của tất cả các hành tinh
// 6. Tạo 3 object chứa 3 hành tinh đầu, và 1 mảng chứa các hành tinh còn lại

// starwar3.txt
// 1. Tạo 1 mảng chứa toàn bộ tên của các starships
// 2. Tách mảng ra thành 2 mảng con, mảng 1 chứa 2 phần tử, mảng 2 chứa 6 phần tử
// 3. Tạo 1 mảng chứa manufacturer của starship3, và starship7
// 4. Lấy url của tất cả starship

