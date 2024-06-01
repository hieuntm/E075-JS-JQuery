
function layThoiGianHienTai(){
    const time = new Date();
    console.log(time);
    // DOM

    document.getElementById("myTime").innerHTML = time;
}

setInterval(layThoiGianHienTai, 1000);

