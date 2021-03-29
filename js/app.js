const imgArr = ["img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg"];

let divImage = document.getElementById("images");
let myImage = document.getElementById("myImg");
let main = document.getElementById("mainPage");

let index = 0
let mIndex = imgArr.length - 1

function displayImageOnClick(src_) {
    myImage.src = src_
}

function moveForward() {
    let index = imgArr.findIndex(img => myImage.src.includes(img));
    index++;
    if (index < imgArr.length) {
        myImage.src =  imgArr[index];
    } else if (index == imgArr.length) {
        index = 0
        myImage.src =  imgArr[index];
    }
}  

function moveBack() {
    let index = imgArr.findIndex(img => myImage.src.includes(img));
    index--
    if (index >= 0) {
        myImage.src =  imgArr[index];
    }
    if (index < 0) {
        index = imgArr.length - 1
        myImage.src =  imgArr[index];
    }
}

function display(index) {
    main.innerHTML = "<img src='" + imgArr[index] + "'>"
}

function one() {
    display(0)
}

function two() {
    display(1)
}

function three() {
    display(2)
}

function four() {
    display(3)
}



function forward() {
    if (display(index) == 0) {
        index = 0
    } else if (display(index) == 1) {
        index = 1
    } else if (display(index) == 2) {
        index = 2
    } else if (display(index) == 3) {
        index = 3
    }
    index++
    if (index < imgArr.length) {
        main.innerHTML = "<img src='" + imgArr[index] + "'height = 200px width=200px>"
    } else if (index == imgArr.length) {
        index = 0
        main.innerHTML = "<img src='" + imgArr[index] + "'height = 200px width=200px>"
    }

}

function back() {
    if (display(index) == 0) {
        index = 0
    } else if (display(index) == 1) {
        index = 1
    } else if (display(index) == 2) {
        index = 2
    } else if (display(index) == 3) {
        index = 3
    }
    index--
    if (index >= 0) {
        main.innerHTML = "<img src='" + imgArr[index] + "'height = 200px width=200px>"
    }
    if (index < 0) {
        index = imgArr.length - 1
        main.innerHTML = "<img src='" + imgArr[index] + "'height = 200px width=200px>"
    }
}

