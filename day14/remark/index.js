// A và B đang nghiên cứu về loài chó. Vì vậy, mỗi người trong số họ đã hỏi 5 người nuôi chó về tuổi con chó của họ và 
// lưu trữ dữ liệu vào một mảng (mỗi mảng một mảng). Hiện tại, họ chỉ quan tâm đến việc biết một con chó là chó trưởng 
// thành hay chó con. Một con chó được coi là trưởng thành nếu nó ít nhất 3 tuổi và là chó con nếu nó dưới 3 tuổi.

// Tạo hàm 'checkDogs', chấp nhận 2 mảng độ tuổi của chó ('dogsA' và 'dogsB') và thực hiện những việc sau:

// 1. A phát hiện ra rằng chủ nhân của con chó ĐẦU TIÊN và HAI Con Chó CUỐI CÙNG thực ra nuôi mèo chứ không 
// phải chó! Vì vậy, hãy tạo một bản sao trong mảng của A và xóa phần tử đầu và cuối ra khỏi mảng được sao chép đó
// 2. Tạo một mảng có cả dữ liệu của A (đã sửa) và của B
// 3. Đối với mỗi chú chó còn lại, console.log ra màn hình dù đó là chó trưởng thành 
// ("Chó số <index> đã trưởng thành và 5 tuổi") hay chó con ("Chó số 2 vẫn là chó con 🐶")
// 4. Chạy hàm cho cả hai tập dữ liệu thử nghiệm

// GỢI Ý: Sử dụng các công cụ từ tất cả các bài giảng trong phần này cho đến nay 😉

// DỮ LIỆU KIỂM TRA 1: Dữ liệu của A [3, 5, 2, 12, 7], dữ liệu của B [4, 1, 15, 8, 3]
// DỮ LIỆU KIỂM TRA 2: Dữ liệu của A [9, 16, 6, 8, 3], dữ liệu của B [10, 5, 6, 1, 4]

// => 1. Xóa dữ liệu ở A[0] A[size-1] A[size-2]
//             0  1  2  3   4


// const dogsA = [3, 5, 2, 12, 7];
// const dogsB = [4, 1, 15, 8, 3];
// dogsA.splice(0, 1);//=> Xóa ảnh hưởng mảng gốc => [5, 2, 12, 7];

// const x2 = array.slice(1, 3); // => cách 1
// console.log("slice: ", x2, array);
// const x = array.splice(1, 2);
// console.log("splice: ", x, array);

// const x2 = dogsB.slice(1, 3); // => cách 1
// console.log("slice: ", x2, dogsA);

// const x = dogsA.splice(1, 2);
// console.log("splice: ", x, dogsA);

// DATA1
const dogsA = [3, 5, 2, 12, 7];
const dogsB = [4, 1, 15, 8, 3];

// DATA2
// const dogsA = [9, 16, 6, 8, 3]
// const dogsB = [10, 5, 6, 1, 4]
// function cutArray(array){
//     const x2 = array.slice(1, 3); // => cách 1
//     console.log("slice: ", x2, array);
//     const x = array.splice(1, 2);
//     console.log("splice: ", x, array);
// }

// const cutArray = (array) => {
//     const x2 = array.slice(1, 3); // => cách 1
//     console.log("slice: ", x2, array);
//     const x = array.splice(1, 2);
//     console.log("splice: ", x, array);
// }

// cutArray(dogsA);

const cutArrayAndCombile = (array1, array2) => {
    // const x2 = array1.slice(1, 3);
    // return [...x2, ...array2];

    return [...array1.slice(1, 3), ...array2];
}

const dogs = cutArrayAndCombile(dogsA, dogsB);
console.log(dogs);

dogs.map((dog, index) => {
    if(dog > 3){
        console.log("Chó "+index+" trưởng thành");
    } else {
        console.log("Chó "+index+" chưa trưởng thành")
    }
})


// Chúng ta hãy quay trở lại nghiên cứu của A và B về loài chó. Lần này, họ muốn chuyển đổi tuổi của chó sang tuổi của con người và tính 
// tuổi trung bình của những con chó trong nghiên cứu của họ.

// Tạo hàm 'calcAverageHumanAge', chấp nhận một mảng độ tuổi của chó ('ages') và thực hiện những việc sau theo thứ tự:

// 1. Tính tuổi chó theo năm của con người bằng công thức sau: nếu chó <= 2 tuổi thì humanAge = 2 * dogAge. Nếu chó > 2 tuổi, 
// humanAge = 16 + dogAge * 4.
// 2. Loại trừ tất cả những con chó dưới 18 tuổi
// 3. Tính tuổi trung bình của tất cả chó trưởng thành => Reduce 
// 4. Chạy hàm cho cả hai tập dữ liệu thử nghiệm

// DỮ LIỆU KIỂM TRA 1: [5, 2, 4, 1, 15, 8, 3]
// DỮ LIỆU KIỂM TRA 2: [16, 6, 10, 5, 6, 1, 4]

// const dogs1 =  [5, 2, 4, 1, 15, 8, 3];
const dogs1 =  [16, 6, 10, 5, 6, 1, 4];

const newDogs = dogs1.map(dog => dog >= 2 ? dog * 4 + 16 : dog *2);
console.log(newDogs)

const filterDogs = newDogs.filter(dog => dog > 18);
console.log(filterDogs)

const averageAge = filterDogs.reduce((acc, curr, index, array) => acc + curr/array.length, 0);
console.log(averageAge)

// Viết lại hàm 'calcAverageHumanAge' từ thử thách trước, nhưng lần này dưới dạng hàm mũi tên và sử dụng chain!

// DỮ LIỆU KIỂM TRA 1: [5, 2, 4, 1, 15, 8, 3]
// DỮ LIỆU KIỂM TRA 2: [16, 6, 10, 5, 6, 1, 4]

const averageAgeFastestWay = dogs1.map(dog => dog >= 2 ? dog * 4 + 16 : dog *2)
    .filter(dog => dog > 18)
    .reduce((acc, curr, index, array) => acc + curr/array.length, 0)
console.log("Bt3: ", averageAgeFastestWay)

// 
function template(array){ // array là tham số truyền vào
    return array.map(dog => dog >= 2 ? dog * 4 + 16 : dog *2)
    .filter(dog => dog > 18)
    .reduce((acc, curr, index, array) => acc + curr/array.length, 0); // Tuổi trung bình
}

const averageAgeFromFunction = template(dogs1);
console.log("Bt3.1: ", averageAgeFromFunction)

const dogs2 =  [16, 6, 10, 5, 6, 1, 4, 15, 20, 1, 5, 7, 6, 9, 32, 4, 6, 7, 8, 13, 10];
const averageAgeFromFunction2 = template(dogs2);
console.log("Bt3.2: ", averageAgeFromFunction2)



