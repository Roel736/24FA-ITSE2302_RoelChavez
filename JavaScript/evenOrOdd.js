//this asks for values!
let numIn = parseInt(prompt("Enter a value between 1-10: "));
// While loop
while (isNaN(numIn) || numIn < 1 || numIn > 10) {
  if (isNaN(numIn)) {
    alert("You have to input a real number in between 1-10!");
  }
  if (numIn < 1 || numIn > 10) {
    alert("Please input a number that is 1-10!");
  }
    //tells you to try again because u didint enter the right thing

  numIn = parseInt(prompt("Try again and put a number that is between 1-10"));
}

// This asks for the user input for gallons gasoline!
let gallons = parseInt(prompt("In between 1-50 how many gallons do you need?"));
while (isNaN(gallons) || gallons < 1 || gallons > 50) {
  if (isNaN(gallons)) {
    alert("You have to input how many gallons you need in between 1-50!");
  }
  if (gallons < 1 || gallons > 50) {
    alert("Please input a number that is 1-50!");
  }
  //tells you to try again because u didint enter the right thing
  gallons = parseInt(prompt("Try again and put a number of gallons you need that is between 1-50."));
}

// This calculates the gallons and number
let product = numIn * gallons;
console.log(
  "The product of " + numIn + " and " + gallons + " is " + product + "."
);

// This tells us if it's an odd or even number
if (product % 2 == 0) {
  console.log(product + " is an even number.");
} else {
  console.log(product + " is an odd number.");
}
