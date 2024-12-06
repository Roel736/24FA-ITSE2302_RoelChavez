"use strict";

// innerHTML might be wrong
document.querySelector(".intro p").textContent = "you have no rizz; my but rizz is my sensation.The rizz is not in your level but you can get the level of my rizz there some day. Do no shake thy gory gyatt at me. My gyatt shall be better than thy. but with enough practice i will be out dammed by the sigma";

// replacesimage
const image = document.getElementById("firstImage");

image.src = "images/SIGmA STARE CAT.jpg";

const secondImage = document.getElementById("secondImage");

secondImage.src = "images/NEW OMD CAT TOUNGE.png";

const thirdImage = document.getElementById("thirdImage");

thirdImage.src = "images/CAT BEACH.jpg";

// This changes the header
const header = document.querySelectorAll("h3"); 
header[0].innerHTML = ("true gyatt <3");
header[1].innerHTML = (":P");
header[2].innerHTML = (":0");

// This changes the paragraph statements
const p = document.querySelector("#firstText").innerHTML = ("???????");

const p2 = document.querySelector("#secondText").innerHTML = ("sticking my tounge out for the rizzler. You're so skibidi. You're so Fanum tax. i just wanna be your sigma. Freaking come here. Give me your ohio.");

const p3 = document.querySelector("#thirdText").innerHTML = ("a beachy day for a car to be on the beach");

document.querySelector("#ColorChanging").addEventListener("click", turnHeadingGray);
document.querySelector("#ColorChanged").addEventListener("click", turnHeadingSilver);
document.querySelector("#ColorChange").addEventListener("click", turnHeadingDavesGray);

function turnHeadingGray() {
    document.querySelector(".headings").style.backgroundColor = "#7F7979";
}

function turnHeadingSilver() {
    document.querySelector("header").style.backgroundColor = "#C1BDB3";
}

function turnHeadingDavesGray() {
    document.querySelector("header").style.backgroundColor = "#5F5B6B";
}