
// trong một promise nó sẽ có 3 trạng thái (state)
// Fulfilled => Chạy xong
// Pending => Chưa chạy kịp
// Reject => Từ chối


// async function display2(){

// }
 const display = async () => {
    // 1
    new Promise(function(resolve, reject) {
        const x = Math.random(); // => Trả về giá trị ngẫu nhiên từ 0 -> 1
        setTimeout(() => {
            if(x < 0.6){
                resolve("Hello World")
            } else {
                reject("Hello GA")
            }
        }, 2000)
    }).then(data => {
        console.log("Trước khi promise", data);
    }).catch(error => {
        console.log("Sau khi promise", error);
    })
    // //2
    // console.log(await x)
    // //3
    // console.log("Sau khi promise");
}

// display();

// 200 - OK => Dữ liệu đúng
// 201 - Created => Add data
// 300 - MVC
// 302
// 304 - Redirect => Điều hướng
// 400 - Bad request
// 401 - Authorise
// 404 - Not found
// 500 - Server lỗi đỏ => Critical

// Fetch la 1 promise
async function getData(){
    // const x = await fetch("https://swapi.dev/api/people/fasdfasdfs")
    //     .then(response => response.json()) // HTTP Response => Promise => Parse no thành json
    //     .then(data => data)
    //     .catch(error => console.log(error));

    const x = await fetch("http://192.168.9.195:8001/books")
        .then(response => response.json()) // HTTP Response => Promise => Parse no thành json
        .then(data => data)
        .catch(error => console.log(error));

    console.log(x); // => Hiển thị lên màn hình
}

getData();

// http://192.168.9.195:8001/swagger-ui/index.html