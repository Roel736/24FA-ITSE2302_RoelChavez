"use strict";

// innerHTML might be wrong
document.querySelector(".intro p").textContent = "Skibidi Toilet is a wild ride through absurdity, where humor and chaos collide in the most unexpected ways. It takes the mundane, like a simple toilet, and turns it into a symbol of freedom and carefree nonsense. With its rapid-fire pace and outlandish creativity, the series reminds us that sometimes, the most entertaining things are the ones that defy all logic. In a world where seriousness often reigns, Skibidi Toilet is a refreshing, hilarious break from reality";

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
