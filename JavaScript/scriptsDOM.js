"use strict";

// innerHTML might be wrong
document.querySelector(".intro p").textContent = "Believe in the power of your dreams. Embrace the challenges that come your way, for they are stepping stones to greatness. Never let setbacks define you; instead, use them as fuel to push forward. With unwavering determination, you can achieve anything you set your mind to.";

// replacesimage
const image = document.getElementById("firstImage");

image.src = "images/SIGmA STARE CAT.jpg";

const secondImage = document.getElementById("secondImage");

secondImage.src = "images/NEW OMD CAT TOUNGE.png";

const thirdImage = document.getElementById("thirdImage");

thirdImage.src = "images/CAT BEACH.jpg";

// This changes the header
const header = document.querySelectorAll("h3"); 
header[0].innerHTML = ("The cat is looking at you.");
header[1].innerHTML = ("The cat is sticking his tounge out.");
header[2].innerHTML = ("The cat is relaxing");

// This changes the paragraph statements
const p = document.querySelector("#firstText").innerHTML = ("The cat is staring at you with a really confused look as if u did something wrong.");

const p2 = document.querySelector("#secondText").innerHTML = ("The cat is sticking out his tongue for you.");

const p3 = document.querySelector("#thirdText").innerHTML = ("The cat is relaxing on a hammak on the beach chilling.");
//this "listens" for a click whenever u click he box
document.querySelector("#ColorChanging").addEventListener("click", turnHeadingGray);
document.querySelector("#ColorChanged").addEventListener("click", turnHeadingSilver);
document.querySelector("#ColorChange").addEventListener("click", turnHeadingDavesGray);


// THIS CHANGES THE COLOR to gray
function turnHeadingGray() {
    document.querySelector(".headings").style.backgroundColor = "#7F7979";
}
// THIS CHANGES THE COLOR to silver

function turnHeadingSilver() {
    document.querySelector("header").style.backgroundColor = "#C1BDB3";
}
// THIS CHANGES THE COLOR to davey's gray

function turnHeadingDavesGray() {
    document.querySelector("header").style.backgroundColor = "#5F5B6B";
}
