// DOM
document.getElementsByTagName("div"); // Tra ve mang

// div.addEventListener('ACTION', FUNCTION DE NO THUC HIEN)
// div.addEventListener('mouseleave', function(){ // => Anonymous function

// })

// const div = document.getElementById("myButton"); // tra ve duy nhat
// div.addEventListener('click', () => {
//     alert("Hello GA");
// })
// event: Netflix, divineshop
// => thoong tin acount
// click vao password => copy password vao clipboard
// ctrl + V
// div.addEventListener('dblclick', () => {
//     alert("Hello GA double click");
// })

// document.getElementById("myDiv").addEventListener();

// $(document).ready(function(){
//     // Code jQuery
//     $("#myDiv").click(function(){
//         alert("Hello Z");
//     })
//     $("#myButton").click(function(){
//         alert("Hello Y");
//     })
// })

// click cu~ r
// $("#myButton").on('action', function())

// $("#myButton").on(
//     {
//     click: function(){

//     },
//     hover: function(){

//     }
// })

// JQuery
// selector => CSS
// tagName

// id* => tra ve duy nhat
// class* => Tra ve mang, cung class CSS

// document.getElementById();
// document.getElementsByClassName();

// $("#myDiv") // => Lay toan bo element co thuoc tinh href
// // a

// $(".myDivClass")

// JS + DOM
// const btn = document.getElementById("myButton");// hide
// const btn2 = document.getElementById("myButton2");// show

// const p = document.getElementById("myP");

// btn.addEventListener('click', function(){
//     // an di
//     p.style.display = 'none'
// })

// btn2.addEventListener('click', function(){
//     // show di
//     p.style.display = 'inline'
// })

// jQuery
// Tim selector
// Co function
// De no thuc hanh vi cho event
// Event: click, doubleclick, hover, 
$("#myButton").on('click', function(){
    // Tim P => An no di
    $("#myP").hide();
})

$(function(){
    $("#myButton2").on('click', function(){
        // Tim P => show no ra
        $("#myP").show();
    })
})

$("#myButton2").on('hover', function(){
    // Tim P => show no ra
    $(this).css('background-color', 'red');
})

// $("#myP").on('mouseenter', function(){
//     // Tim P => show no ra
//     $(this).css('background-color', 'red');
// })

// $("#myP").on('mouseleave', function(){
//     // Tim P => show no ra
//     $(this).css('background-color', 'blue');
// })

$("#myP").on({
    mouseenter: function(){

    },
    mouseleave: function(){

    }
})

// level root
$("#myButton3").on('click', function(){
    // Tim P => show no ra
    // leaf
    $(this).hide();
})

// form/input => focus
// blur

$("#myInput").on('focus', function(){
    // Tim P => show no ra
    // leaf
    // $(this).css('Key', 'value');
    $(this).css('background-color', 'pink');
})

$("#myInput").on('blur', function(){
    // Tim P => show no ra
    // leaf
    // $(this).css('Key', 'value');
    $(this).css('background-color', 'gray');
})

